import React, { useEffect } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import sodaCane from '../assets/soda_cane.glb'

const ThreeScene = () => {
    useEffect(() => {
        // Create the scene, camera, and renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 5000);
        camera.position.set(0, 1, 2);
        camera.lookAt(0, 0, 0);
      
        // Get the canvas from the DOM
        const canvas = document.getElementById('canvas');
        const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1;
        renderer.outputEncoding = THREE.sRGBEncoding;
        renderer.setClearColor(0xeeeeee, 1);
      
        // Disable shadows on the renderer (optional, but recommended)
        renderer.shadowMap.enabled = false;
      
        const ambientLight = new THREE.AmbientLight(0xeeeeee, 1);
        scene.add(ambientLight);
      
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(5, 5, 5);
        directionalLight.castShadow = false; // Disable shadow casting
        scene.add(directionalLight);
      
        const pointLight = new THREE.PointLight(0xffffff, 1, 100);
        pointLight.position.set(5, 5, 5);
        pointLight.castShadow = false; // Disable shadow casting
        scene.add(pointLight);
      
        // Load the model
        const loader = new GLTFLoader();
        loader.load(sodaCane, (gltf) => {
          console.log('Model loaded:', gltf);
          const model = gltf.scene;
      
          model.traverse((child) => {
            if (child.isMesh) {
              child.castShadow = false; // Disable shadow casting
              child.receiveShadow = false; // Disable shadow receiving
              child.material.side = THREE.DoubleSide; // Make both sides visible
              
            }
          });
      
          // Adjust scale and position
          model.scale.set(8, 8, 8); // Scale down the model if it's too large
          model.position.set(0, 0, 0); // Center the model
          
          scene.add(model);
        }, undefined, (error) => {
          console.error('Error loading model:', error);
        });
      
        // Setup OrbitControls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.25;
        controls.enableZoom = true;
      
        // Handle window resize
        window.addEventListener('resize', () => {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
        });
      
        // Animation loop
        function animate() {
          requestAnimationFrame(animate);
          controls.update();
          renderer.render(scene, camera);
        }
        animate();
      
        // Clean up on component unmount
        return () => {
          window.removeEventListener('resize', () => {});
        };
      }, []);
      
      return (
        <canvas id="canvas" className='!object-cover !h-auto' />
      );
}

export default ThreeScene
