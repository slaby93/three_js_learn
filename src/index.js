let scene, camera, renderer, axes, spotlight, cube
window.onload = () => {
  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  renderer = new THREE.WebGLRenderer()
  axes = new THREE.AxisHelper(20)
  spotlight = new THREE.SpotLight('red')
  cube = new THREE.Mesh(new THREE.BoxGeometry(4, 4, 4), new THREE.MeshLambertMaterial())
  renderer.setClearColor('white')
  scene.add(axes)
  spotlight.position.set(-40, 60, -10)
  scene.add(spotlight)
  scene.add(cube) // mesh

  camera.position.x = -30
  camera.position.y = 40
  camera.position.z = 30
  camera.lookAt(scene.position)

  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)
  render()
}

function render () {
  'use strict';
  cube.rotation.y += 0.02;
  cube.rotation.x += 0.02;
  cube.rotation.z += 0.02;

  requestAnimationFrame(render)
  renderer.render(scene, camera)
}