let scene, camera, renderer, axes, gui = {}, ground
window.onload = () => {
  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  renderer = new THREE.WebGLRenderer()
  axes = new THREE.AxisHelper(20)
  renderer.setClearColor('white')
  scene.add(axes)
  camera.position.x = -10
  camera.position.y = 20
  camera.position.z = 20
  camera.lookAt(scene.position)
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)
  render()
  setupGUI()
  keyboardNavigation()
  ground = new THREE.Mesh(
    new THREE.PlaneGeometry(50, 200, 10),
    new THREE.MeshBasicMaterial({
      color: new THREE.Color('green')
    })
  )
  scene.add(ground)
}
function addBox () {
  'use strict';
  let geometry, material, box, size
  size = ((10 * Math.random()) % 4).toFixed(0)
  geometry = new THREE.BoxGeometry(size, size, size)
  material = [
    new THREE.MeshBasicMaterial({
      color: new THREE.Color('rgb(128,43,210)')
    }),
    new THREE.MeshBasicMaterial({
      color: new THREE.Color('black'),
      wireframe: true
    })
  ]
  box = new THREE.SceneUtils.createMultiMaterialObject(geometry, material)
  box.position.x = (Math.random() * 10).toFixed(2)
  box.position.y = (Math.random() * 10).toFixed(2)
  box.rotation.x = Math.random()
  box.rotation.y = Math.random()
  box.rotation.z = Math.random()
  scene.add(box)
}
function setupGUI () {
  'use strict';
  gui.add = addBox
  let datGui = new dat.GUI()
  datGui.add(gui, 'add')
}

function keyboardNavigation () {
  'use strict';
  window.addEventListener('keydown', (event) => {
    console.log('EVENT', event)
    switch (event.code) {
      case 'KeyD':
        camera.position.x += 1
        break
      case 'KeyA':
        camera.position.x -= 1
        break
      case 'KeyQ':
        camera.position.y += 1
        break
      case 'KeyZ':
        camera.position.y -= 1
        break
      case 'KeyS':
        camera.position.z -= 1
        break
      case 'KeyW':
        camera.position.z += 1
        break

    }
  })
  window.addEventListener('mousemove', (xyz) => {
    camera.rotation.y += xyz.movementX * (1 / 100)
    camera.rotation.x += xyz.movementY * (1 / 100)
  })
}

function render () {
  'use strict'
  camera.updateProjectionMatrix()
  requestAnimationFrame(render)
  renderer.render(scene, camera)
}