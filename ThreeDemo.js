import * as THREE from 'https://cdn.skypack.dev/three@0.129.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
camera.position.set( 0, 0, 100 );
camera.lookAt( 0, 0, 0 );

const scene = new THREE.Scene(); 

//create a blue LineBasicMaterial
const material = new THREE.LineBasicMaterial( { color: 0x0000ff } );

const points = [];
points.push( new THREE.Vector3( - 10, 0, 0 ) );
points.push( new THREE.Vector3( 0, 10, 0 ) );
points.push( new THREE.Vector3( 10, 0, 0 ) );

const geometry = new THREE.BufferGeometry().setFromPoints( points );

const line = new THREE.Line( geometry, material );

const loader = new GLTFLoader();

loader.load( 'assets/models/wraith.glb', function ( glb ) {

	const root = glb.scene;
	root.scale.set(0.5, 0.5, 0.5);

	scene.add( root );
	console.log(glb.scene)


}, undefined, function ( error ) {

	console.error( error );

} );

const light = new THREE.DirectionalLight(0xFFFFF, 1);
light.position.set(2,2,5);
scene.add(light);
	scene.add( line );

function animate(){
	requestAnimationFrame(animate);
	renderer.render( scene, camera );
}

animate()