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


/**
 * UI interactions
 */
const movesContainer = document.getElementById('movements')
movesContainer.addEventListener('click', event => {
    if (isAnimating) return
    const moveSymbol = event.target.dataset.movement
    if (moveSymbol) {
        isAnimating = true
        eval(`move${moveSymbol}()`)
    }
})


/**
 * CUBIES
 */

const transparentCubieMaterial = new THREE.MeshBasicMaterial({
    transparent: true,
    alphaMap: alphaTexture
})

const cubieGeometry = new THREE.BoxGeometry(1, 1, 1)


/**
 * VISIBLE CUBIES
 */

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
cube3.name = "CUBE_3"
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


const cube10 = new THREE.Mesh(
    cubieGeometry,
    new THREE.MeshStandardMaterial()
)
cube10.position.set(0, 0, 0)
scene.add(cube10)


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

const cubies = [cube1, cube2, cube3, cube4, cube5, cube6, cube7, cube8, cube9, cube10, cube11, cube12, cube13, cube14, cube15, cube16, cube17, cube18, cube19, cube20, cube21, cube22, cube23, cube24, cube25, cube26, cube27]


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

/**
 * Functions
 */
const findCubie = (x, y, z) => {
    for (const cubie of cubies) {
        if (cubie.position.x === x && cubie.position.y === y && cubie.position.z === z) return cubie
    }
    console.error(`Cubie not found: (${x}, ${y}, ${z})`)
}

const rotateXonR = (cubie, x, y, z) => {
    cubie.position.set(x, y, z)
    cubie.rotation.x -= Math.PI * 0.5
}
const rotateXonL = (cubie, x, y, z) => {
    cubie.position.set(x, y, z)
    cubie.rotation.x += Math.PI * 0.5
}
const rotateYonU = (cubie, x, y, z) => {
    cubie.position.set(x, y, z)
    cubie.rotation.y -= Math.PI * 0.5
}
const rotateYonD = (cubie, x, y, z) => {
    cubie.position.set(x, y, z)
    cubie.rotation.y += Math.PI * 0.5
}
const rotateZonF = (cubie, x, y, z) => {
    cubie.position.set(x, y, z)
    cubie.rotation.z -= Math.PI * 0.5
}
const rotateZonB = (cubie, x, y, z) => {
    cubie.position.set(x, y, z)
    cubie.rotation.z += Math.PI * 0.5
}

/**
 * Movements functions
 */
const moveR = () => {

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

    gsap.to(
        platform.rotation,
        {
            duration: 0.5,
            ease: 'power2.inOut',
            x: `-=${Math.PI * 0.5}`,
            onComplete: () => {
                
                rotateXonR(cubie3, 1, -1, -1)
                rotateXonR(cubie4, 1, 0, -1)
                rotateXonR(cubie5, 1, 1, -1)
                rotateXonR(cubie12, 1, -1, 0)
                rotateXonR(cubie13, 1, 0, 0)
                rotateXonR(cubie14, 1, 1, 0)
                rotateXonR(cubie21, 1, -1, 1)
                rotateXonR(cubie22, 1, 0, 1)
                rotateXonR(cubie23, 1, 1, 1)

                platform.remove(cubie3, cubie4, cubie5, cubie12, cubie13, cubie14, cubie21, cubie22, cubie23)
                scene.add(cubie3, cubie4, cubie5, cubie12, cubie13, cubie14, cubie21, cubie22, cubie23)

                isAnimating = false
                scene.remove(platform)
            }
        }
    ) 
}
const moveR$ = () => {

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

    gsap.to(
        platform.rotation,
        {
            duration: 0.5,
            ease: 'power2.inOut',
            x: `+=${Math.PI * 0.5}`,
            onComplete: () => {
                
                rotateXonL(cubie3, 1, 1, 1)
                rotateXonL(cubie4, 1, 0, 1)
                rotateXonL(cubie5, 1, -1, 1)
                rotateXonL(cubie12, 1, 1, 0)
                rotateXonL(cubie13, 1, 0, 0)
                rotateXonL(cubie14, 1, -1, 0)
                rotateXonL(cubie21, 1, 1, -1)
                rotateXonL(cubie22, 1, 0, -1)
                rotateXonL(cubie23, 1, -1, -1)

                platform.remove(cubie3, cubie4, cubie5, cubie12, cubie13, cubie14, cubie21, cubie22, cubie23)
                scene.add(cubie3, cubie4, cubie5, cubie12, cubie13, cubie14, cubie21, cubie22, cubie23)

                isAnimating = false
                scene.remove(platform)
            }
        }
    )
}
const moveM = () => {

    const cubie1 = findCubie(0, 1, 0)
    const cubie2 = findCubie(0, 1, -1)
    const cubie6 = findCubie(0, 1, 1)
    const cubie10 = findCubie(0, 0, 0)
    const cubie11 = findCubie(0, 0, -1)
    const cubie15 = findCubie(0, 0, 1)
    const cubie19 = findCubie(0, -1, 0)
    const cubie20 = findCubie(0, -1, -1)
    const cubie24 = findCubie(0, -1, 1)
    const platform = new THREE.Group()
    platform.add(cubie1, cubie2, cubie6, cubie10, cubie11, cubie15, cubie19, cubie20, cubie24)
    scene.add(platform)

    gsap.to(
        platform.rotation,
        {
            duration: 0.5,
            ease: 'power2.inOut',
            x: `+=${Math.PI * 0.5}`,
            onComplete: () => {
                
                rotateXonL(cubie1, 0, 0, 1)
                rotateXonL(cubie2, 0, 1, 1)
                rotateXonL(cubie6, 0, -1, 1)
                rotateXonL(cubie10, 0, 0, 0)
                rotateXonL(cubie11, 0, 1, 0)
                rotateXonL(cubie15, 0, -1, 0)
                rotateXonL(cubie19, 0, 0, -1)
                rotateXonL(cubie20, 0, 1, -1)
                rotateXonL(cubie24, 0, -1, -1)

                platform.remove(cubie1, cubie2, cubie6, cubie10, cubie11, cubie15, cubie19, cubie20, cubie24)
                scene.add(cubie1, cubie2, cubie6, cubie10, cubie11, cubie15, cubie19, cubie20, cubie24)

                isAnimating = false
                scene.remove(platform)
            }
        }
    )
}
const moveM$ = () => {

    const cubie1 = findCubie(0, 1, 0)
    const cubie2 = findCubie(0, 1, -1)
    const cubie6 = findCubie(0, 1, 1)
    const cubie10 = findCubie(0, 0, 0)
    const cubie11 = findCubie(0, 0, -1)
    const cubie15 = findCubie(0, 0, 1)
    const cubie19 = findCubie(0, -1, 0)
    const cubie20 = findCubie(0, -1, -1)
    const cubie24 = findCubie(0, -1, 1)
    const platform = new THREE.Group()
    platform.add(cubie1, cubie2, cubie6, cubie10, cubie11, cubie15, cubie19, cubie20, cubie24)
    scene.add(platform)

    gsap.to(
        platform.rotation,
        {
            duration: 0.5,
            ease: 'power2.inOut',
            x: `-=${Math.PI * 0.5}`,
            onComplete: () => {
                
                rotateXonR(cubie1, 0, 0, -1)
                rotateXonR(cubie2, 0, -1, -1)
                rotateXonR(cubie6, 0, 1, -1)
                rotateXonR(cubie10, 0, 0, 0)
                rotateXonR(cubie11, 0, -1, 0)
                rotateXonR(cubie15, 0, 1, 0)
                rotateXonR(cubie19, 0, 0, 1)
                rotateXonR(cubie20, 0, -1, 1)
                rotateXonR(cubie24, 0, 1, 1)

                platform.remove(cubie1, cubie2, cubie6, cubie10, cubie11, cubie15, cubie19, cubie20, cubie24)
                scene.add(cubie1, cubie2, cubie6, cubie10, cubie11, cubie15, cubie19, cubie20, cubie24)

                isAnimating = false
                scene.remove(platform)
            }
        }
    )
}
const moveL = () => {

    const cubie7 = findCubie(-1, 1, 1)
    const cubie8 = findCubie(-1, 1, 0)
    const cubie9 = findCubie(-1, 1, -1)
    const cubie16 = findCubie(-1, 0, 1)
    const cubie17 = findCubie(-1, 0, 0)
    const cubie18 = findCubie(-1, 0, -1)
    const cubie25 = findCubie(-1, -1, 1)
    const cubie26 = findCubie(-1, -1, 0)
    const cubie27 = findCubie(-1, -1, -1)
    const platform = new THREE.Group()
    platform.add(cubie7, cubie8, cubie9, cubie16, cubie17, cubie18, cubie25, cubie26, cubie27)
    scene.add(platform)

    gsap.to(
        platform.rotation,
        {
            duration: 0.5,
            ease: 'power2.inOut',
            x: `+=${Math.PI * 0.5}`,
            onComplete: () => {
                
                rotateXonL(cubie7, -1, -1, 1)
                rotateXonL(cubie8, -1, 0, 1)
                rotateXonL(cubie9, -1, 1, 1)
                rotateXonL(cubie16, -1, -1, 0)
                rotateXonL(cubie17, -1, 0, 0)
                rotateXonL(cubie18, -1, 1, 0)
                rotateXonL(cubie25, -1, -1, -1)
                rotateXonL(cubie26, -1, 0, -1)
                rotateXonL(cubie27, -1, 1, -1)

                platform.remove(cubie7, cubie8, cubie9, cubie16, cubie17, cubie18, cubie25, cubie26, cubie27)
                scene.add(cubie7, cubie8, cubie9, cubie16, cubie17, cubie18, cubie25, cubie26, cubie27)

                isAnimating = false
                scene.remove(platform)
            }
        }
    )
}
const moveL$ = () => {

    const cubie7 = findCubie(-1, 1, 1)
    const cubie8 = findCubie(-1, 1, 0)
    const cubie9 = findCubie(-1, 1, -1)
    const cubie16 = findCubie(-1, 0, 1)
    const cubie17 = findCubie(-1, 0, 0)
    const cubie18 = findCubie(-1, 0, -1)
    const cubie25 = findCubie(-1, -1, 1)
    const cubie26 = findCubie(-1, -1, 0)
    const cubie27 = findCubie(-1, -1, -1)
    const platform = new THREE.Group()
    platform.add(cubie7, cubie8, cubie9, cubie16, cubie17, cubie18, cubie25, cubie26, cubie27)
    scene.add(platform)

    gsap.to(
        platform.rotation,
        {
            duration: 0.5,
            ease: 'power2.inOut',
            x: `-=${Math.PI * 0.5}`,
            onComplete: () => {
                
                rotateXonR(cubie7, -1, 1, -1)
                rotateXonR(cubie8, -1, 0, -1)
                rotateXonR(cubie9, -1, -1, -1)
                rotateXonR(cubie16, -1, 1, 0)
                rotateXonR(cubie17, -1, 0, 0)
                rotateXonR(cubie18, -1, -1, 0)
                rotateXonR(cubie25, -1, 1, 1)
                rotateXonR(cubie26, -1, 0, 1)
                rotateXonR(cubie27, -1, -1, 1)

                platform.remove(cubie7, cubie8, cubie9, cubie16, cubie17, cubie18, cubie25, cubie26, cubie27)
                scene.add(cubie7, cubie8, cubie9, cubie16, cubie17, cubie18, cubie25, cubie26, cubie27)

                isAnimating = false
                scene.remove(platform)
            }
        }
    )
}
const moveU = () => {

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
            y: `-=${Math.PI * 0.5}`,
            onComplete: () => {
                rotateYonU(cubie1, 0, 1, 0)
                rotateYonU(cubie2, 1, 1, 0)
                rotateYonU(cubie3, 1, 1, 1)
                rotateYonU(cubie4, 0, 1, 1)
                rotateYonU(cubie5, -1, 1, 1)
                rotateYonU(cubie6, -1, 1, 0)
                rotateYonU(cubie7, -1, 1, -1)
                rotateYonU(cubie8, 0, 1, -1)
                rotateYonU(cubie9, 1, 1, -1)

                platform.remove(cubie1, cubie2, cubie3, cubie4, cubie5, cubie6, cubie7, cubie8, cubie9)
                scene.add(cubie1, cubie2, cubie3, cubie4, cubie5, cubie6, cubie7, cubie8, cubie9)

                isAnimating = false

                scene.remove(platform)
            }
        }
    )
}
const moveU$ = () => {

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
                rotateYonD(cubie1, 0, 1, 0)
                rotateYonD(cubie2, -1, 1, 0)
                rotateYonD(cubie3, -1, 1, -1)
                rotateYonD(cubie4, 0, 1, -1)
                rotateYonD(cubie5, 1, 1, -1)
                rotateYonD(cubie6, 1, 1, 0)
                rotateYonD(cubie7, 1, 1, 1)
                rotateYonD(cubie8, 0, 1, 1)
                rotateYonD(cubie9, -1, 1, 1)

                platform.remove(cubie1, cubie2, cubie3, cubie4, cubie5, cubie6, cubie7, cubie8, cubie9)
                scene.add(cubie1, cubie2, cubie3, cubie4, cubie5, cubie6, cubie7, cubie8, cubie9)

                isAnimating = false

                scene.remove(platform)
            }
        }
    )
}
const moveE = () => {

    const cubie10 = findCubie(0, 0, 0)
    const cubie11 = findCubie(0, 0, -1)
    const cubie12 = findCubie(1, 0, -1)
    const cubie13 = findCubie(1, 0, 0)
    const cubie14 = findCubie(1, 0, 1)
    const cubie15 = findCubie(0, 0, 1)
    const cubie16 = findCubie(-1, 0, 1)
    const cubie17 = findCubie(-1, 0, 0)
    const cubie18 = findCubie(-1, 0, -1)
    const platform = new THREE.Group()
    platform.add(cubie10, cubie11, cubie12, cubie13, cubie14, cubie15, cubie16, cubie17, cubie18)
    scene.add(platform)


    gsap.to(
        platform.rotation,
        {
            duration: 0.5,
            ease: 'power2.inOut',
            y: `+=${Math.PI * 0.5}`,
            onComplete: () => {
                rotateYonD(cubie10, 0, 0, 0)
                rotateYonD(cubie11, -1, 0, 0)
                rotateYonD(cubie12, -1, 0, -1)
                rotateYonD(cubie13, 0, 0, -1)
                rotateYonD(cubie14, 1, 0, -1)
                rotateYonD(cubie15, 1, 0, 0)
                rotateYonD(cubie16, 1, 0, 1)
                rotateYonD(cubie17, 0, 0, 1)
                rotateYonD(cubie18, -1, 0, 1)
                
                platform.remove(cubie10, cubie11, cubie12, cubie13, cubie14, cubie15, cubie16, cubie17, cubie18)
                scene.add(cubie10, cubie11, cubie12, cubie13, cubie14, cubie15, cubie16, cubie17, cubie18)

                isAnimating = false

                scene.remove(platform)
            }
        }
    )
}
const moveE$ = () => {
    
    const cubie10 = findCubie(0, 0, 0)
    const cubie11 = findCubie(0, 0, -1)
    const cubie12 = findCubie(1, 0, -1)
    const cubie13 = findCubie(1, 0, 0)
    const cubie14 = findCubie(1, 0, 1)
    const cubie15 = findCubie(0, 0, 1)
    const cubie16 = findCubie(-1, 0, 1)
    const cubie17 = findCubie(-1, 0, 0)
    const cubie18 = findCubie(-1, 0, -1)
    const platform = new THREE.Group()
    platform.add(cubie10, cubie11, cubie12, cubie13, cubie14, cubie15, cubie16, cubie17, cubie18)
    scene.add(platform)


    gsap.to(
        platform.rotation,
        {
            duration: 0.5,
            ease: 'power2.inOut',
            y: `-=${Math.PI * 0.5}`,
            onComplete: () => {
                rotateYonU(cubie10, 0, 0, 0)
                rotateYonU(cubie11, 1, 0, 0)
                rotateYonU(cubie12, 1, 0, 1)
                rotateYonU(cubie13, 0, 0, 1)
                rotateYonU(cubie14, -1, 0, 1)
                rotateYonU(cubie15, -1, 0, 0)
                rotateYonU(cubie16, -1, 0, -1)
                rotateYonU(cubie17, 0, 0, -1)
                rotateYonU(cubie18, 1, 0, -1)
                
                platform.remove(cubie10, cubie11, cubie12, cubie13, cubie14, cubie15, cubie16, cubie17, cubie18)
                scene.add(cubie10, cubie11, cubie12, cubie13, cubie14, cubie15, cubie16, cubie17, cubie18)

                isAnimating = false

                scene.remove(platform)
            }
        }
    )
}
const moveD = () => {

    const cubie19 = findCubie(0, -1, 0)
    const cubie20 = findCubie(0, -1, -1)
    const cubie21 = findCubie(1, -1, -1)
    const cubie22 = findCubie(1, -1, 0)
    const cubie23 = findCubie(1, -1, 1)
    const cubie24 = findCubie(0, -1, 1)
    const cubie25 = findCubie(-1, -1, 1)
    const cubie26 = findCubie(-1, -1, 0)
    const cubie27 = findCubie(-1, -1, -1)
    const platform = new THREE.Group()
    platform.add(cubie19, cubie20, cubie21, cubie22, cubie23, cubie24, cubie25, cubie26, cubie27)
    scene.add(platform)


    gsap.to(
        platform.rotation,
        {
            duration: 0.5,
            ease: 'power2.inOut',
            y: `+=${Math.PI * 0.5}`,
            onComplete: () => {
                rotateYonD(cubie19, 0, -1, 0)
                rotateYonD(cubie20, -1, -1, 0)
                rotateYonD(cubie21, -1, -1, -1)
                rotateYonD(cubie22, 0, -1, -1)
                rotateYonD(cubie23, 1, -1, -1)
                rotateYonD(cubie24, 1, -1, 0)
                rotateYonD(cubie25, 1, -1, 1)
                rotateYonD(cubie26, 0, -1, 1)
                rotateYonD(cubie27, -1, -1, 1)
                
                platform.remove(cubie19, cubie20, cubie21, cubie22, cubie23, cubie24, cubie25, cubie26, cubie27)
                scene.add(cubie19, cubie20, cubie21, cubie22, cubie23, cubie24, cubie25, cubie26, cubie27)

                isAnimating = false

                scene.remove(platform)
            }
        }
    )
}
const moveD$ = () => {
    
    const cubie19 = findCubie(0, -1, 0)
    const cubie20 = findCubie(0, -1, -1)
    const cubie21 = findCubie(1, -1, -1)
    const cubie22 = findCubie(1, -1, 0)
    const cubie23 = findCubie(1, -1, 1)
    const cubie24 = findCubie(0, -1, 1)
    const cubie25 = findCubie(-1, -1, 1)
    const cubie26 = findCubie(-1, -1, 0)
    const cubie27 = findCubie(-1, -1, -1)
    const platform = new THREE.Group()
    platform.add(cubie19, cubie20, cubie21, cubie22, cubie23, cubie24, cubie25, cubie26, cubie27)
    scene.add(platform)


    gsap.to(
        platform.rotation,
        {
            duration: 0.5,
            ease: 'power2.inOut',
            y: `-=${Math.PI * 0.5}`,
            onComplete: () => {
                rotateYonU(cubie19, 0, -1, 0)
                rotateYonU(cubie20, 1, -1, 0)
                rotateYonU(cubie21, 1, -1, 1)
                rotateYonU(cubie22, 0, -1, 1)
                rotateYonU(cubie23, -1, -1, 1)
                rotateYonU(cubie24, -1, -1, 0)
                rotateYonU(cubie25, -1, -1, -1)
                rotateYonU(cubie26, 0, -1, -1)
                rotateYonU(cubie27, 1, -1, -1)
                
                platform.remove(cubie19, cubie20, cubie21, cubie22, cubie23, cubie24, cubie25, cubie26, cubie27)
                scene.add(cubie19, cubie20, cubie21, cubie22, cubie23, cubie24, cubie25, cubie26, cubie27)

                isAnimating = false

                scene.remove(platform)
            }
        }
    )
}
const moveF = () => {

    const cubie5 = findCubie(1, 1, 1)
    const cubie6 = findCubie(0, 1, 1)
    const cubie7 = findCubie(-1, 1, 1)
    const cubie14 = findCubie(1, 0, 1)
    const cubie15 = findCubie(0, 0, 1)
    const cubie16 = findCubie(-1, 0, 1)
    const cubie23 = findCubie(1, -1, 1)
    const cubie24 = findCubie(0, -1, 1)
    const cubie25 = findCubie(-1, -1, 1)
    const platform = new THREE.Group()
    platform.add(cubie5, cubie6, cubie7, cubie14, cubie15, cubie16, cubie23, cubie24, cubie25)
    scene.add(platform)


    gsap.to(
        platform.rotation,
        {
            duration: 0.5,
            ease: 'power2.inOut',
            z: `-=${Math.PI * 0.5}`,
            onComplete: () => {
                rotateZonF(cubie5, 1, -1, 1)
                rotateZonF(cubie6, 1, 0, 1)
                rotateZonF(cubie7, 1, 1, 1)
                rotateZonF(cubie14, 0, -1, 1)
                rotateZonF(cubie15, 0, 0, 1)
                rotateZonF(cubie16, 0, 1, 1)
                rotateZonF(cubie23, -1, -1, 1)
                rotateZonF(cubie24, -1, 0, 1)
                rotateZonF(cubie25, -1, 1, 1)
                
                platform.remove(cubie5, cubie6, cubie7, cubie14, cubie15, cubie16, cubie23, cubie24, cubie25)
                scene.add(cubie5, cubie6, cubie7, cubie14, cubie15, cubie16, cubie23, cubie24, cubie25)

                isAnimating = false

                scene.remove(platform)
            }
        }
    )
}
const moveF$ = () => {
    
    const cubie5 = findCubie(1, 1, 1)
    const cubie6 = findCubie(0, 1, 1)
    const cubie7 = findCubie(-1, 1, 1)
    const cubie14 = findCubie(1, 0, 1)
    const cubie15 = findCubie(0, 0, 1)
    const cubie16 = findCubie(-1, 0, 1)
    const cubie23 = findCubie(1, -1, 1)
    const cubie24 = findCubie(0, -1, 1)
    const cubie25 = findCubie(-1, -1, 1)
    const platform = new THREE.Group()
    platform.add(cubie5, cubie6, cubie7, cubie14, cubie15, cubie16, cubie23, cubie24, cubie25)
    scene.add(platform)


    gsap.to(
        platform.rotation,
        {
            duration: 0.5,
            ease: 'power2.inOut',
            z: `+=${Math.PI * 0.5}`,
            onComplete: () => {
                rotateZonB(cubie5, -1, 1, 1)
                rotateZonB(cubie6, -1, 0, 1)
                rotateZonB(cubie7, -1, -1, 1)
                rotateZonB(cubie14, 0, 1, 1)
                rotateZonB(cubie15, 0, 0, 1)
                rotateZonB(cubie16, 0, -1, 1)
                rotateZonB(cubie23, 1, 1, 1)
                rotateZonB(cubie24, 1, 0, 1)
                rotateZonB(cubie25, 1, -1, 1)
                
                platform.remove(cubie5, cubie6, cubie7, cubie14, cubie15, cubie16, cubie23, cubie24, cubie25)
                scene.add(cubie5, cubie6, cubie7, cubie14, cubie15, cubie16, cubie23, cubie24, cubie25)

                isAnimating = false

                scene.remove(platform)
            }
        }
    )
}
const moveS = () => {
    
    const cubie1 = findCubie(0, 1, 0)
    const cubie4 = findCubie(1, 1, 0)
    const cubie8 = findCubie(-1, 1, 0)
    const cubie10 = findCubie(0, 0, 0)
    const cubie13 = findCubie(1, 0, 0)
    const cubie17 = findCubie(-1, 0, 0)
    const cubie19 = findCubie(0, -1, 0)
    const cubie22 = findCubie(1, -1, 0)
    const cubie26 = findCubie(-1, -1, 0)
    const platform = new THREE.Group()
    platform.add(cubie1, cubie4, cubie8, cubie10, cubie13, cubie17, cubie19, cubie22, cubie26)
    scene.add(platform)


    gsap.to(
        platform.rotation,
        {
            duration: 0.5,
            ease: 'power2.inOut',
            z: `-=${Math.PI * 0.5}`,
            onComplete: () => {
                rotateZonF(cubie1, 1, 0, 0)
                rotateZonF(cubie4, 1, -1, 0)
                rotateZonF(cubie8, 1, 1, 0)
                rotateZonF(cubie10, 0, 0, 0)
                rotateZonF(cubie13, 0, -1, 0)
                rotateZonF(cubie17, 0, 1, 0)
                rotateZonF(cubie19, -1, 0, 0)
                rotateZonF(cubie22, -1, -1, 0)
                rotateZonF(cubie26, -1, 1, 0)
                
                platform.remove(cubie1, cubie4, cubie8, cubie10, cubie13, cubie17, cubie19, cubie22, cubie26)
                scene.add(cubie1, cubie4, cubie8, cubie10, cubie13, cubie17, cubie19, cubie22, cubie26)

                isAnimating = false

                scene.remove(platform)
            }
        }
    )
}
const moveS$ = () => {

    const cubie1 = findCubie(0, 1, 0)
    const cubie4 = findCubie(1, 1, 0)
    const cubie8 = findCubie(-1, 1, 0)
    const cubie10 = findCubie(0, 0, 0)
    const cubie13 = findCubie(1, 0, 0)
    const cubie17 = findCubie(-1, 0, 0)
    const cubie19 = findCubie(0, -1, 0)
    const cubie22 = findCubie(1, -1, 0)
    const cubie26 = findCubie(-1, -1, 0)
    const platform = new THREE.Group()
    platform.add(cubie1, cubie4, cubie8, cubie10, cubie13, cubie17, cubie19, cubie22, cubie26)
    scene.add(platform)


    gsap.to(
        platform.rotation,
        {
            duration: 0.5,
            ease: 'power2.inOut',
            z: `+=${Math.PI * 0.5}`,
            onComplete: () => {
                rotateZonB(cubie1, -1, 0, 0)
                rotateZonB(cubie4, -1, 1, 0)
                rotateZonB(cubie8, -1, -1, 0)
                rotateZonB(cubie10, 0, 0, 0)
                rotateZonB(cubie13, 0, 1, 0)
                rotateZonB(cubie17, 0, -1, 0)
                rotateZonB(cubie19, 1, 0, 0)
                rotateZonB(cubie22, 1, 1, 0)
                rotateZonB(cubie26, 1, -1, 0)
                
                platform.remove(cubie1, cubie4, cubie8, cubie10, cubie13, cubie17, cubie19, cubie22, cubie26)
                scene.add(cubie1, cubie4, cubie8, cubie10, cubie13, cubie17, cubie19, cubie22, cubie26)

                isAnimating = false

                scene.remove(platform)
            }
        }
    )
}
const moveB = () => {
    
    const cubie2 = findCubie(0, 1, -1)
    const cubie3 = findCubie(1, 1, -1)
    const cubie9 = findCubie(-1, 1, -1)
    const cubie11 = findCubie(0, 0, -1)
    const cubie12 = findCubie(1, 0, -1)
    const cubie18 = findCubie(-1, 0, -1)
    const cubie20 = findCubie(0, -1, -1)
    const cubie21 = findCubie(1, -1, -1)
    const cubie27 = findCubie(-1, -1, -1)
    const platform = new THREE.Group()
    platform.add(cubie2, cubie3, cubie9, cubie11, cubie12, cubie18, cubie20, cubie21, cubie27)
    scene.add(platform)


    gsap.to(
        platform.rotation,
        {
            duration: 0.5,
            ease: 'power2.inOut',
            z: `+=${Math.PI * 0.5}`,
            onComplete: () => {
                rotateZonB(cubie2, -1, 0, -1)
                rotateZonB(cubie3, -1, 1, -1)
                rotateZonB(cubie9, -1, -1, -1)
                rotateZonB(cubie11, 0, 0, -1)
                rotateZonB(cubie12, 0, 1, -1)
                rotateZonB(cubie18, 0, -1, -1)
                rotateZonB(cubie20, 1, 0, -1)
                rotateZonB(cubie21, 1, 1, -1)
                rotateZonB(cubie27, 1, -1, -1)
                
                platform.remove(cubie2, cubie3, cubie9, cubie11, cubie12, cubie18, cubie20, cubie21, cubie27)
                scene.add(cubie2, cubie3, cubie9, cubie11, cubie12, cubie18, cubie20, cubie21, cubie27)

                isAnimating = false

                scene.remove(platform)
            }
        }
    )
}
const moveB$ = () => {
    
    const cubie2 = findCubie(0, 1, -1)
    const cubie3 = findCubie(1, 1, -1)
    const cubie9 = findCubie(-1, 1, -1)
    const cubie11 = findCubie(0, 0, -1)
    const cubie12 = findCubie(1, 0, -1)
    const cubie18 = findCubie(-1, 0, -1)
    const cubie20 = findCubie(0, -1, -1)
    const cubie21 = findCubie(1, -1, -1)
    const cubie27 = findCubie(-1, -1, -1)
    const platform = new THREE.Group()
    platform.add(cubie2, cubie3, cubie9, cubie11, cubie12, cubie18, cubie20, cubie21, cubie27)
    scene.add(platform)


    gsap.to(
        platform.rotation,
        {
            duration: 0.5,
            ease: 'power2.inOut',
            z: `-=${Math.PI * 0.5}`,
            onComplete: () => {
                rotateZonF(cubie2, 1, 0, -1)
                rotateZonF(cubie3, 1, -1, -1)
                rotateZonF(cubie9, 1, 1, -1)
                rotateZonF(cubie11, 0, 0, -1)
                rotateZonF(cubie12, 0, -1, -1)
                rotateZonF(cubie18, 0, 1, -1)
                rotateZonF(cubie20, -1, 0, -1)
                rotateZonF(cubie21, -1, -1, -1)
                rotateZonF(cubie27, -1, 1, -1)
                
                platform.remove(cubie2, cubie3, cubie9, cubie11, cubie12, cubie18, cubie20, cubie21, cubie27)
                scene.add(cubie2, cubie3, cubie9, cubie11, cubie12, cubie18, cubie20, cubie21, cubie27)

                isAnimating = false

                scene.remove(platform)
            }
        }
    )
}
const moveX = () => {

    const cubie1 = findCubie(0, 1, 0)
    const cubie2 = findCubie(0, 1, -1)
    const cubie3 = findCubie(1, 1, -1)
    const cubie4 = findCubie(1, 1, 0)
    const cubie5 = findCubie(1, 1, 1)
    const cubie6 = findCubie(0, 1, 1)
    const cubie7 = findCubie(-1, 1, 1)
    const cubie8 = findCubie(-1, 1, 0)
    const cubie9 = findCubie(-1, 1, -1)
    const cubie10 = findCubie(0, 0, 0)
    const cubie11 = findCubie(0, 0, -1)
    const cubie12 = findCubie(1, 0, -1)
    const cubie13 = findCubie(1, 0, 0)
    const cubie14 = findCubie(1, 0, 1)
    const cubie15 = findCubie(0, 0, 1)
    const cubie16 = findCubie(-1, 0, 1)
    const cubie17 = findCubie(-1, 0, 0)
    const cubie18 = findCubie(-1, 0, -1)
    const cubie19 = findCubie(0, -1, 0)
    const cubie20 = findCubie(0, -1, -1)
    const cubie21 = findCubie(1, -1, -1)
    const cubie22 = findCubie(1, -1, 0)
    const cubie23 = findCubie(1, -1, 1)
    const cubie24 = findCubie(0, -1, 1)
    const cubie25 = findCubie(-1, -1, 1)
    const cubie26 = findCubie(-1, -1, 0)
    const cubie27 = findCubie(-1, -1, -1)

    const cube = new THREE.Group()
    cube.add(cubie1, cubie2, cubie3, cubie4, cubie5, cubie6, cubie7, cubie8, cubie9, cubie10, cubie11, cubie12, cubie13, cubie14, 
        cubie15, cubie16, cubie17, cubie18, cubie19, cubie20, cubie21, cubie22, cubie23, cubie24, cubie25, cubie26, cubie27)
    scene.add(cube)

    gsap.to(
        cube.rotation,
        {
            duration: 0.5,
            ease: 'power2.inOut',
            x: `-=${Math.PI * 0.5}`,
            onComplete: () => {
                
                rotateXonR(cubie1, 0, 0, -1)
                rotateXonR(cubie2, 0, -1, -1)
                rotateXonR(cubie3, 1, -1, -1)
                rotateXonR(cubie4, 1, 0, -1)
                rotateXonR(cubie5, 1, 1, -1)
                rotateXonR(cubie6, 0, 1, -1)
                rotateXonR(cubie7, -1, 1, -1)
                rotateXonR(cubie8, -1, 0, -1)
                rotateXonR(cubie9, -1, -1, -1)
                rotateXonR(cubie10, 0, 0, 0)
                rotateXonR(cubie11, 0, -1, 0)
                rotateXonR(cubie12, 1, -1, 0)
                rotateXonR(cubie13, 1, 0, 0)
                rotateXonR(cubie14, 1, 1, 0)
                rotateXonR(cubie15, 0, 1, 0)
                rotateXonR(cubie16, -1, 1, 0)
                rotateXonR(cubie17, -1, 0, 0)
                rotateXonR(cubie18, -1, -1, 0)
                rotateXonR(cubie19, 0, 0, 1)
                rotateXonR(cubie20, 0, -1, 1)
                rotateXonR(cubie21, 1, -1, 1)
                rotateXonR(cubie22, 1, 0, 1)
                rotateXonR(cubie23, 1, 1, 1)
                rotateXonR(cubie24, 0, 1, 1)
                rotateXonR(cubie25, -1, 1, 1)
                rotateXonR(cubie26, -1, 0, 1)
                rotateXonR(cubie27, -1, -1, 1)

                cube.remove(cubie1, cubie2, cubie3, cubie4, cubie5, cubie6, cubie7, cubie8, cubie9, cubie10, cubie11, cubie12, cubie13, cubie14, 
                    cubie15, cubie16, cubie17, cubie18, cubie19, cubie20, cubie21, cubie22, cubie23, cubie24, cubie25, cubie26, cubie27)
                scene.add(cubie1, cubie2, cubie3, cubie4, cubie5, cubie6, cubie7, cubie8, cubie9, cubie10, cubie11, cubie12, cubie13, cubie14, 
                    cubie15, cubie16, cubie17, cubie18, cubie19, cubie20, cubie21, cubie22, cubie23, cubie24, cubie25, cubie26, cubie27)

                isAnimating = false

                scene.remove(cube)
            }
        }
    )
}
const moveX$ = () => {

    const cubie1 = findCubie(0, 1, 0)
    const cubie2 = findCubie(0, 1, -1)
    const cubie3 = findCubie(1, 1, -1)
    const cubie4 = findCubie(1, 1, 0)
    const cubie5 = findCubie(1, 1, 1)
    const cubie6 = findCubie(0, 1, 1)
    const cubie7 = findCubie(-1, 1, 1)
    const cubie8 = findCubie(-1, 1, 0)
    const cubie9 = findCubie(-1, 1, -1)
    const cubie10 = findCubie(0, 0, 0)
    const cubie11 = findCubie(0, 0, -1)
    const cubie12 = findCubie(1, 0, -1)
    const cubie13 = findCubie(1, 0, 0)
    const cubie14 = findCubie(1, 0, 1)
    const cubie15 = findCubie(0, 0, 1)
    const cubie16 = findCubie(-1, 0, 1)
    const cubie17 = findCubie(-1, 0, 0)
    const cubie18 = findCubie(-1, 0, -1)
    const cubie19 = findCubie(0, -1, 0)
    const cubie20 = findCubie(0, -1, -1)
    const cubie21 = findCubie(1, -1, -1)
    const cubie22 = findCubie(1, -1, 0)
    const cubie23 = findCubie(1, -1, 1)
    const cubie24 = findCubie(0, -1, 1)
    const cubie25 = findCubie(-1, -1, 1)
    const cubie26 = findCubie(-1, -1, 0)
    const cubie27 = findCubie(-1, -1, -1)

    const cube = new THREE.Group()
    cube.add(cubie1, cubie2, cubie3, cubie4, cubie5, cubie6, cubie7, cubie8, cubie9, cubie10, cubie11, cubie12, cubie13, cubie14, 
        cubie15, cubie16, cubie17, cubie18, cubie19, cubie20, cubie21, cubie22, cubie23, cubie24, cubie25, cubie26, cubie27)
    scene.add(cube)

    gsap.to(
        cube.rotation,
        {
            duration: 0.5,
            ease: 'power2.inOut',
            x: `+=${Math.PI * 0.5}`,
            onComplete: () => {
                
                rotateXonL(cubie1, 0, 0, 1)
                rotateXonL(cubie2, 0, 1, 1)
                rotateXonL(cubie3, 1, 1, 1)
                rotateXonL(cubie4, 1, 0, 1)
                rotateXonL(cubie5, 1, -1, 1)
                rotateXonL(cubie6, 0, -1, 1)
                rotateXonL(cubie7, -1, -1, 1)
                rotateXonL(cubie8, -1, 0, 1)
                rotateXonL(cubie9, -1, 1, 1)
                rotateXonL(cubie10, 0, 0, 0)
                rotateXonL(cubie11, 0, 1, 0)
                rotateXonL(cubie12, 1, 1, 0)
                rotateXonL(cubie13, 1, 0, 0)
                rotateXonL(cubie14, 1, -1, 0)
                rotateXonL(cubie15, 0, -1, 0)
                rotateXonL(cubie16, -1, -1, 0)
                rotateXonL(cubie17, -1, 0, 0)
                rotateXonL(cubie18, -1, 1, 0)
                rotateXonL(cubie19, 0, 0, -1)
                rotateXonL(cubie20, 0, 1, -1)
                rotateXonL(cubie21, 1, 1, -1)
                rotateXonL(cubie22, 1, 0, -1)
                rotateXonL(cubie23, 1, -1, -1)
                rotateXonL(cubie24, 0, -1, -1)
                rotateXonL(cubie25, -1, -1, -1)
                rotateXonL(cubie26, -1, 0, -1)
                rotateXonL(cubie27, -1, 1, -1)

                cube.remove(cubie1, cubie2, cubie3, cubie4, cubie5, cubie6, cubie7, cubie8, cubie9, cubie10, cubie11, cubie12, cubie13, cubie14, 
                    cubie15, cubie16, cubie17, cubie18, cubie19, cubie20, cubie21, cubie22, cubie23, cubie24, cubie25, cubie26, cubie27)
                scene.add(cubie1, cubie2, cubie3, cubie4, cubie5, cubie6, cubie7, cubie8, cubie9, cubie10, cubie11, cubie12, cubie13, cubie14, 
                    cubie15, cubie16, cubie17, cubie18, cubie19, cubie20, cubie21, cubie22, cubie23, cubie24, cubie25, cubie26, cubie27)

                isAnimating = false

                scene.remove(cube)
            }
        }
    )
}

/**
 * Movement events
 */
document.addEventListener('keydown', event => {
    if (isAnimating) return
    isAnimating = true
    switch (event.key) {
        case 'f': 
            moveR()
            break
        case 'F':
            moveR$()
            break
        case 'd':
            moveM()
            break
        case 'D':
            moveM$()
            break
        case 's':
            moveL()
            break
        case 'S':
            moveL$()
            break
        case 'w':
            moveU()
            break
        case 'W':
            moveU$()
            break
        case 'e':
            moveE()
            break
        case 'E':
            moveE$()
            break
        case 'r':
            moveD()
            break
        case 'R':
            moveD$()
            break
        case 'x':
            moveF()
            break
        case 'X':
            moveF$()
            break
        case 'c':
            moveS()
            break
        case 'C':
            moveS$()
            break
        case 'v':
            moveB()
            break
        case 'V':
            moveB$()
            break
        case 'q':
            moveX()
            break
        case 'Q':
            moveX$()
            break
        default: 
            isAnimating = false
            break
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
renderer.setClearColor('#dfdce5')

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