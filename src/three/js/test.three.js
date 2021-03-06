
import * as THREE from 'three'

// 场景
const scene = new THREE.Scene();
// 照相机
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
// 渲染器
const renderer = new THREE.WebGLRenderer();
// 设置 canvas 大小
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// 创建一个正方体
const geometry = new THREE.BoxGeometry();
// 颜色
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// 网格
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

// z 轴
camera.position.z = 6;

function animate() {
  requestAnimationFrame( animate );

  // 正方体运动
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render( scene, camera );
};

animate();