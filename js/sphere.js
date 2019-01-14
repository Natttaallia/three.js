(function (window) {
	'use strict';


var ball={
	rotationY:0
};

var gui =  new dat.GUI();
    gui.add(ball, 'rotationY',-0.2, 0.2, 0.001);﻿ 



var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set(100,0,1000);

//create renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor(0x000000);

//add to document renderer
document.body.appendChild( renderer.domElement );


var light= new THREE.AmbientLight(0xffffff);
scene.add(light);



//plane
var geometry=new THREE.SphereGeometry(200,12,12);
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00, vertexColors: THREE.FaceColors } );

for (var i = 0; i < geometry.faces.length; i++) {
	geometry.faces[i].color.setRGB(Math.random(),Math.random(),Math.random());
}

var mesh=new THREE.Mesh( geometry, material );
scene.add( mesh );

// camera.position.z = 5;


animate();



function animate() {
	requestAnimationFrame( animate );
	// mesh.rotation.x += 0.01;
	mesh.rotation.y += ball.rotationY;
	renderer.render( scene, camera );
}

})(window);