document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        var scene = new THREE.Scene();

        var camera = new THREE.PerspectiveCamera(75, 1045 / 760, 0.1, 1000);
        camera.position.z = 200;
        
        var renderer = new THREE.WebGLRenderer();
        renderer.setSize(1046, 760);
        document.getElementById('before').appendChild(renderer.domElement);
        
        var controls = new THREE.OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.25;
        controls.enableZoom = true;
        
        var keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 75%)'), 1.0);
        keyLight.position.set(-100, 0, 100);
        
        var fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), 0.75);
        fillLight.position.set(100, 0, 100);
        
        var backLight = new THREE.DirectionalLight(0xffffff, 1.0);
        backLight.position.set(100, 0, -100).normalize();
        
        scene.add(keyLight);
        scene.add(fillLight);
        scene.add(backLight);
        
        var mtlLoader = new THREE.MTLLoader();
        
        mtlLoader.setTexturePath('./models/walt/');
        mtlLoader.setPath('./models/walt/');
        mtlLoader.load('WaltHead.mtl', function(materials) {
        
            materials.preload();
        
            var objLoader = new THREE.OBJLoader();
            objLoader.setMaterials(materials);
            objLoader.setPath('./models/walt/');
            objLoader.load('WaltHead.obj', function(object) {
        
                scene.add(object);
                
                object.position.y -= 60;
        
            });
        
        });
        
    var animate = function() {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
    };
        
        animate();
  }
}

