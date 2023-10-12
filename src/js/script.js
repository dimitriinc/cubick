import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

THREE.ColorManagement.enabled = false

/**
 * Base
 */


// Canvas
const canvas = document.getElementById('cubick_canvas')

// Scene
const scene = new THREE.Scene()

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader()

const floorColorTexture = textureLoader.load('/textures/vintage-tile1_albedo.png')
const floorAmbientOcclusionTexture = textureLoader.load('/textures/vintage-tile1_ao.png')
const floorHeightTexture = textureLoader.load('/textures/vintage-tile1_height.png')
const floorMetallicTexture = textureLoader.load('/textures/vintage-tile1_metallic.png')
const floorNormalTexture = textureLoader.load('/textures/vintage-tile1_normal-ogl.png')
const floorRoughnessTexture = textureLoader.load('/textures/vintage-tile1_roughness.png')

/**
 * Objects
 */

const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(4, 4, 50, 50),
    new THREE.MeshStandardMaterial({
        map: floorColorTexture,
        aoMap: floorAmbientOcclusionTexture,
        displacementMap: floorHeightTexture,
        displacementScale: 0.04,
        metalnessMap: floorMetallicTexture,
        normalMap: floorNormalTexture,
        roughnessMap: floorRoughnessTexture
    })
)

floor.geometry.setAttribute(
    'uv2',
    new THREE.Float32BufferAttribute(floor.geometry.attributes.uv.array, 2)
)

floor.rotation.x = - Math.PI * 0.25
floor.rotation.z = Math.PI * 0.25

scene.add(floor)


/**
 * Lights
 */

const ambientLight = new THREE.AmbientLight('#ffffff', 1)
scene.add(ambientLight)

const directionalLight = new THREE.DirectionalLight('#faee86', 2)
scene.add(directionalLight)

const pointLight = new THREE.PointLight('#beecd9', 2, 6)
scene.add(pointLight)
pointLight.position.y = 3

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 4
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.outputColorSpace = THREE.LinearSRGBColorSpace
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()