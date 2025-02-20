import React, { useEffect } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js'
import sodaCane from '../assets/soda_cane.glb'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

const ThreeScene = () => {
  useEffect(() => {
    // Create the scene, camera, and renderer
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.set(0, 1, 2)

    // Get the canvas from the DOM
    const canvas = document.getElementById('canvas')
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1
    renderer.outputEncoding = THREE.sRGBEncoding

    // Add canvas to the body
    document.body.appendChild(renderer.domElement)

    // Load the model
    const loader = new GLTFLoader()
    loader.load(sodaCane, (gltf) => {
      scene.add(gltf.scene)
    })

    // Setup OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.25
    controls.enableZoom = true

    // Create a cube
    const geometry = new THREE.BoxGeometry()
    const material = new THREE.MeshStandardMaterial({ color: 0x0077ff })
    const cube = new THREE.Mesh(geometry, material)
    scene.add(cube)

    // Handle window resize
    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    })

    // Animation loop
    function animate() {
      requestAnimationFrame(animate)
      controls.update()
      renderer.render(scene, camera)
    }
    animate()

    // Clean up on component unmount
    return () => {
      window.removeEventListener('resize', () => {})
    }
  }, [])

  return (
    <div>
      <canvas id="canvas" />
    </div>
  )
}

export default ThreeScene
