import React, { Component } from 'react';
import * as THREE from 'three';

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { Vector3 } from 'three';

class FaceModel extends Component {
    constructor(props){
        super(props)
        this.mouse= new Vector3;
        
    }
    
    componentDidMount() {
        
        const width = this.mount.clientWidth
        const height = this.mount.clientHeight
        
        //ADD SCENE
        this.scene = new THREE.Scene()
        //ADD CAMERA
        this.camera = new THREE.PerspectiveCamera(
            75,
            width / height,
            0.1,
            1000
        )
        this.camera.position.z = 100
        //ADD RENDERER
        this.renderer = new THREE.WebGLRenderer()
        this.renderer.setClearColor('#f2f1f2')
        this.renderer.setSize(width, height)
        this.mount.appendChild(this.renderer.domElement)
        //ADD RAYCASTER
        this.raycaster = new THREE.Raycaster();
        
        //ADD CONTROLS
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.25;
        this.controls.enableZoom = true;
        //ADD LIGHT
        this.keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 75%)'), 1.0);
        this.keyLight.position.set(-100, 0, 100);

        this.fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), 0.75);
        this.fillLight.position.set(100, 0, 100);

        this.backLight = new THREE.DirectionalLight(0xffffff, 1.0);
        this.backLight.position.set(100, 0, -100).normalize();

        this.scene.add(this.keyLight);
        
        this.THREE = THREE;
        const mtlLoader = new MTLLoader();
        mtlLoader.baseUrl = '/models/walt/';
        mtlLoader.setPath('/models/walt/'); // One of these might not be needed
        mtlLoader.crossOrigin = '*'; // Use as needed

        mtlLoader.load('WaltHead.mtl', materials => {
            materials.preload();
            // OBJ Loader
            const objLoader = new OBJLoader();
            objLoader.setMaterials(materials);
            objLoader.setPath('/models/walt/');
            objLoader.load('WaltHead.obj', object => {
                for (let child of object.children) {
                    child.material.side = THREE.DoubleSide
                }
                this.traverseMaterials(object, material => {
                    material.wireframe = true;
                    material.needsUpdate = true;
                });
                object.name = "human";

                this.scene.add(object);

                //this.scene.add(object);
                object.position.y -= 30;
                object.position.x -= 10;
            });

        });

        this.start()
    }


    traverseMaterials(object, callback) {
        object.traverse(node => {
            if (!node.isMesh) return;

            node.geometry.computeFaceNormals();

            const materials = Array.isArray(node.material)
                ? node.material
                : [node.material];
            materials.forEach(callback);
        });
    }
    componentWillUnmount() {
        this.stop()
        this.mount.removeChild(this.renderer.domElement)
    }
    start = () => {
        if (!this.frameId) {
            this.frameId = requestAnimationFrame(this.animate)
        }
    }
    stop = () => {
        cancelAnimationFrame(this.frameId)
    }
    animate = () => {
        
        this.renderScene()
        this.frameId = window.requestAnimationFrame(this.animate)
    }
    onMouseMove = (e) => {
        
        this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        this.mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    }
    renderScene = () => {
        this.renderer.render(this.scene, this.camera)
    }
    render() {
        return (
            <div
                style={{ width: '500px', height: '500px', paddingLeft: 100 }}
                ref={(mount) => { this.mount = mount }}
                onMouseUp={this.onMouseMove}
                
            />
        )
    }

}
export default FaceModel