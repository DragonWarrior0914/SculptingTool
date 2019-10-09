import React, { Component } from 'react';
import * as THREE from 'three';

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

class RenderModel extends Component {
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
        this.camera.position.z = 10
        this.camera.position.x = -10
        this.camera.position.y = 25
        //ADD RENDERER
        this.renderer = new THREE.WebGLRenderer()
        this.renderer.setClearColor('#f2f1f2')
        this.renderer.setSize(width, height)
        this.mount.appendChild(this.renderer.domElement)

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
        this.scene.add(this.fillLight);
        this.scene.add(this.backLight);
        //MTL Loader
        this.THREE = THREE;
        this.loader = new OBJLoader();

        // load a resource
        this.loader.load(
            'models/man/Man.obj',
            // called when resource is loaded
            object => {
                this.traverseMaterials(object, material => {
                    material.wireframe = true;
                    material.needsUpdate = true;
                });
                object.name = "human";

                this.scene.add(object);
            }
            // called when loading is in progresses
            
        );

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
        //this.cube.rotation.x += 0.01
        //this.cube.rotation.y += 0.01
        this.renderScene()
        this.frameId = window.requestAnimationFrame(this.animate)
    }
    renderScene = () => {
        this.renderer.render(this.scene, this.camera)
    }
    render() {
        return (
            <div
                style={{ width: '500px', height: '500px', paddingLeft: 100 }}
                ref={(mount) => { this.mount = mount }}
            />
        )
    }

}
export default RenderModel