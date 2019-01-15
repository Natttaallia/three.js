(function (window) {
	'use strict';


var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );

//create renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor(0x000000);

//add to document renderer
document.body.appendChild( renderer.domElement );


var light= new THREE.AmbientLight(0xffffff);
scene.add(light);


//add cube
var geometry = new THREE.BoxGeometry( 2, 2, 2 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe: true } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );


//plane
// var geometry2=new THREE.PlaneGeometry(300,300,12,12);
// var material2 = new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe: true } );
// var mesh=new THREE.Mesh( geometry2, material2 );
// scene.add( mesh );

camera.position.z = 5;
// camera.position.set(0,0,1000);


animate();



function animate() {
	requestAnimationFrame( animate );
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	renderer.render( scene, camera );
}

})(window);