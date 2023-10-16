import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import gsap from 'gsap'

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

const alphaTexture = textureLoader.load('/textures/alpha.png')

// const floorColorTexture = textureLoader.load('/textures/vintage-tile1_albedo.png')
// const floorAmbientOcclusionTexture = textureLoader.load('/textures/vintage-tile1_ao.png')
// const floorHeightTexture = textureLoader.load('/textures/vintage-tile1_height.png')
// const floorMetallicTexture = textureLoader.load('/textures/vintage-tile1_metallic.png')
// const floorNormalTexture = textureLoader.load('/textures/vintage-tile1_normal-ogl.png')
// const floorRoughnessTexture = textureLoader.load('/textures/vintage-tile1_roughness.png')

/**
 * CUBIES
 */

const transparentCubieMaterial = new THREE.MeshBasicMaterial({
    transparent: true,
    alphaMap: alphaTexture
})

const transparentCube = new THREE.Mesh(
    new THREE.BoxGeometry(2.8, 2.8, 2.8),
    transparentCubieMaterial
)
scene.add(transparentCube)

const cubieGeometry = new THREE.BoxGeometry(1, 1, 1)

const cubeBase = new THREE.Mesh(
    cubieGeometry,
    new THREE.MeshStandardMaterial()
)
scene.add(cubeBase)


const cube1 = new THREE.Mesh(
    cubieGeometry,
    new THREE.MeshStandardMaterial({
        color: '#ffffff'
    })
)
cube1.position.set(0, 1, 0)
scene.add(cube1)

const cube2 = new THREE.Mesh(
    cubieGeometry,
    new THREE.MeshStandardMaterial({
        color: '#755ba4'
    })
)
cube2.position.set(0, 1, -1)
scene.add(cube2)

const cube3 = new THREE.Mesh(
    cubieGeometry,
    new THREE.MeshStandardMaterial({
        color: '#60d1d5'
    })
)
cube3.position.set(1, 1, -1)
scene.add(cube3)

const cube4 = new THREE.Mesh(
    cubieGeometry,
    new THREE.MeshStandardMaterial({
        color: '#d83d27'
    })
)
cube4.position.set(1, 1, 0)
scene.add(cube4)


const cube5 = new THREE.Mesh(
    cubieGeometry,
    new THREE.MeshStandardMaterial({
        color: '#c59cda'
    })
)
cube5.position.set(1, 1, 1)
scene.add(cube5)


const cube6 = new THREE.Mesh(
    cubieGeometry,
    new THREE.MeshStandardMaterial({
        color: '#d51745'
    })
)
cube6.position.set(0, 1, 1)
scene.add(cube6)


const cube7 = new THREE.Mesh(
    cubieGeometry,
    new THREE.MeshStandardMaterial({
        color: '#f084ff'
    })
)
cube7.position.set(-1, 1, 1)
scene.add(cube7)


const cube8 = new THREE.Mesh(
    cubieGeometry,
    new THREE.MeshStandardMaterial({
        color: '#dfe43d'
    })
)
cube8.position.set(-1, 1, 0)
scene.add(cube8)


const cube9 = new THREE.Mesh(
    cubieGeometry,
    new THREE.MeshStandardMaterial({
        color: '#327127'
    })
)
cube9.position.set(-1, 1, -1)
scene.add(cube9)


const cube11 = new THREE.Mesh(
    cubieGeometry,
    new THREE.MeshStandardMaterial({
        color: '#1f6cad'
    })
)
cube11.position.set(0, 0, -1)
scene.add(cube11)


const cube12 = new THREE.Mesh(
    cubieGeometry,
    new THREE.MeshStandardMaterial({
        color: '#812e18'
    })
)
cube12.position.set(1, 0, -1)
scene.add(cube12)


const cube13 = new THREE.Mesh(
    cubieGeometry,
    new THREE.MeshStandardMaterial({
        color: '#006a6a'
    })
)
cube13.position.set(1, 0, 0)
scene.add(cube13)


const cube14 = new THREE.Mesh(
    cubieGeometry,
    new THREE.MeshStandardMaterial({
        color: '#4d1d98'
    })
)
cube14.position.set(1, 0, 1)
scene.add(cube14)



const cube15 = new THREE.Mesh(
    cubieGeometry,
    new THREE.MeshStandardMaterial({
        color: '#def127'
    })
)
cube15.position.set(0, 0, 1)
scene.add(cube15)



const cube16 = new THREE.Mesh(
    cubieGeometry,
    new THREE.MeshStandardMaterial({
        color: '#550b51'
    })
)
cube16.position.set(-1, 0, 1)
scene.add(cube16)



const cube17 = new THREE.Mesh(
    cubieGeometry,
    new THREE.MeshStandardMaterial({
        color: '#53a54b'
    })
)
cube17.position.set(-1, 0, 0)
scene.add(cube17)



const cube18 = new THREE.Mesh(
    cubieGeometry,
    new THREE.MeshStandardMaterial({
        color: '#831f2e'
    })
)
cube18.position.set(-1, 0, -1)
scene.add(cube18)


const cube19 = new THREE.Mesh(
    cubieGeometry,
    new THREE.MeshStandardMaterial({
        color: '#c8bd19'
    })
)
cube19.position.set(0, -1, 0)
scene.add(cube19)



const cube20 = new THREE.Mesh(
    cubieGeometry,
    new THREE.MeshStandardMaterial({
        color: '#00976e'
    })
)
cube20.position.set(0, -1, -1)
scene.add(cube20)



const cube21 = new THREE.Mesh(
    cubieGeometry,
    new THREE.MeshStandardMaterial({
        color: '#f69751'
    })
)
cube21.position.set(1, -1, -1)
scene.add(cube21)


const cube22 = new THREE.Mesh(
    cubieGeometry,
    new THREE.MeshStandardMaterial({
        color: '#4a16b0'
    })
)
cube22.position.set(1, -1, 0)
scene.add(cube22)


const cube23 = new THREE.Mesh(
    cubieGeometry,
    new THREE.MeshStandardMaterial({
        color: '#0f7d48'
    })
)
cube23.position.set(1, -1, 1)
scene.add(cube23)


const cube24 = new THREE.Mesh(
    cubieGeometry,
    new THREE.MeshStandardMaterial({
        color: '#296b95'
    })
)
cube24.position.set(0, -1, 1)
scene.add(cube24)



const cube25 = new THREE.Mesh(
    cubieGeometry,
    new THREE.MeshStandardMaterial({
        color: '#3d6d04'
    })
)
cube25.position.set(-1, -1, 1)
scene.add(cube25)


const cube26 = new THREE.Mesh(
    cubieGeometry,
    new THREE.MeshStandardMaterial({
        color: '#6b2693'
    })
)
cube26.position.set(-1, -1, 0)
scene.add(cube26)


const cube27 = new THREE.Mesh(
    cubieGeometry,
    new THREE.MeshStandardMaterial({
        color: '#f0ff00'
    })
)
cube27.position.set(-1, -1, -1)
scene.add(cube27)

const cubies = [cube1, cube2, cube3, cube4, cube5, cube6, cube7, cube8, cube9, cube11, cube12, cube13, cube14, cube15, cube16, cube17, cube18, cube19, cube20, cube21, cube22, cube23, cube24, cube25, cube26, cube27]


/**
 * Lights
 */
const ambientLight = new THREE.AmbientLight('#ffffff', 3)
scene.add(ambientLight)


/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}


/**
 * Event Listeners
 */
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

let isAnimating = false

const findCubie = (x, y, z) => {
    for (const cubie of cubies) {
        if (cubie.position.x === x && cubie.position.y === y && cubie.position.z === z) return cubie
    }
}

const changeCubieX = (cubie, x, y, z) => {
    cubie.position.set(x, y, z)
    cubie.rotation.x += Math.PI * 0.5
}
const changeCubieY = (cubie, x, y, z) => {
    cubie.position.set(x, y, z)
    cubie.rotation.y += Math.PI * 0.5
}

document.addEventListener('keydown', event => {
    if (isAnimating) return

    if (event.key === 'f') {
        isAnimating = true

        // Construct platform
        const cubie3 = findCubie(1, 1, -1)
        const cubie4 = findCubie(1, 1, 0)
        const cubie5 = findCubie(1, 1, 1)
        const cubie12 = findCubie(1, 0, -1)
        const cubie13 = findCubie(1, 0, 0)
        const cubie14 = findCubie(1, 0, 1)
        const cubie21 = findCubie(1, -1, -1)
        const cubie22 = findCubie(1, -1, 0)
        const cubie23 = findCubie(1, -1, 1)
        const platform = new THREE.Group()
        platform.add(cubie3, cubie4, cubie5, cubie12, cubie13, cubie14, cubie21, cubie22, cubie23)
        scene.add(platform)

        

        // Animate platform
        gsap.to(
            platform.rotation,
            {
                duration: 0.5,
                ease: 'power2.inOut',
                x: `+=${Math.PI * 0.5}`,
                onComplete: () => {
                    isAnimating = false
                },
                onStart: () => {
                    changeCubieX(cubie3, 1, 1, 1)
                    changeCubieX(cubie4, 1, 0, 1)
                    changeCubieX(cubie5, 1, -1, 1)
                    changeCubieX(cubie12, 1, 1, 0)
                    changeCubieX(cubie13, 1, 0, 0)
                    changeCubieX(cubie14, 1, -1, 0)
                    changeCubieX(cubie21, 1, 1, -1)
                    changeCubieX(cubie22, 1, 0, -1)
                    changeCubieX(cubie23, 1, -1, -1)
                }
            }
        )
    }

    if (event.key === 'e') {
        isAnimating = true

        // Construct platform
        const cubie1 = findCubie(0, 1, 0)
        const cubie2 = findCubie(0, 1, -1)
        const cubie3 = findCubie(1, 1, -1)
        const cubie4 = findCubie(1, 1, 0)
        const cubie5 = findCubie(1, 1, 1)
        const cubie6 = findCubie(0, 1, 1)
        const cubie7 = findCubie(-1, 1, 1)
        const cubie8 = findCubie(-1, 1, 0)
        const cubie9 = findCubie(-1, 1, -1)
        const platform = new THREE.Group()
        platform.add(cubie1, cubie2, cubie3, cubie4, cubie5, cubie6, cubie7, cubie8, cubie9)
        scene.add(platform)

        gsap.to(
            platform.rotation,
            {
                duration: 0.5,
                ease: 'power2.inOut',
                y: `+=${Math.PI * 0.5}`,
                onComplete: () => {
                    isAnimating = false
                },
                onStart: () => {
                    changeCubieY(cubie1, 0, 1, 0)
                    changeCubieY(cubie2, -1, 1, 0)
                    changeCubieY(cubie3, -1, 1, -1)
                    changeCubieY(cubie4, 0, 1, -1)
                    changeCubieY(cubie5, 1, 1, -1)
                    changeCubieY(cubie6, 1, 1, 0)
                    changeCubieY(cubie7, 1, 1, 1)
                    changeCubieY(cubie8, 0, 0, 1)
                    changeCubieY(cubie9, -1, 1, 1)
                }
            }
        )
    }
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.set(3, 3, 5.5)
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
renderer.shadowMap.enabled = true

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // platformY1.rotation.y = - elapsedTime * 0.4
    // platformY2.rotation.y = elapsedTime * 0.8
    // platformY3.rotation.y = - elapsedTime * 1

    // platformX1.rotation.x = Math.cos(elapsedTime)


    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()