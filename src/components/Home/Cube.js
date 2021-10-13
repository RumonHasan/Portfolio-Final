import React, {useRef,useEffect} from 'react';
import * as THREE from "three";
import { Clock } from "three";
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

// images 
import react from '../../assets/images/react.png';
import js from '../../assets/images/js.jpeg';
import firebase from '../../assets/images/firebase.png';
import html from '../../assets/images/html.png';
import css from '../../assets/images/css.jpeg';
import materialUi from '../../assets/images/material.png';

// context
import { useGlobalContext } from '../../context/context';

const Cube = () => {
    const canvasRef = useRef(null);
    const {smallScreen} = useGlobalContext();
    // cube dimensions
    const cubeSize = {
      width: 2.4,
      height: 2.4,
      depth: 2.4
    }
    // scene declared
    const newScene = new THREE.Scene();

    useEffect(()=>{
  
      // camera
      const camera = new THREE.PerspectiveCamera(75, canvasRef.current.clientWidth / canvasRef.current.clientHeight, 0.1, 1000);
      camera.position.z = 4;
  
      // image loader
      const loader = new THREE.TextureLoader();// image texture loader
     
      // geometry 
      const geometry = new THREE.BoxGeometry(cubeSize.width,cubeSize.height,cubeSize.depth);
      const material = [
        new THREE.MeshBasicMaterial({map: loader.load(react)}),
        new THREE.MeshBasicMaterial({map: loader.load(js)}),
        new THREE.MeshBasicMaterial({map: loader.load(css)}),
        new THREE.MeshBasicMaterial({map: loader.load(materialUi)}),
        new THREE.MeshBasicMaterial({map: loader.load(html)}),
        new THREE.MeshBasicMaterial({map: loader.load(firebase)}),
      ]
      const cube = new THREE.Mesh(geometry, material);
      newScene.add(cube);
      camera.lookAt(cube.position); // centralizing the camera view point
  
      // orbit controls
      const cubeOrbitControls = new OrbitControls(camera, canvasRef.current);
      cubeOrbitControls.enableDamping = true;
      cubeOrbitControls.enableZoom = false;
  
      // renderer
      const graphicsRenderer = new THREE.WebGLRenderer({alpha:true});
      graphicsRenderer.setClearColor(0x000000, 0);
      graphicsRenderer.setSize(canvasRef.current.clientWidth , canvasRef.current.clientHeight);
      canvasRef.current.appendChild(graphicsRenderer.domElement);
  
      const clock = new Clock();
      const animate = ()=>{
        const elapsed = clock.getElapsedTime(); // elapsed time per second
  
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        camera.updateProjectionMatrix();

        // setting pixel ratio to min 2
        graphicsRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // setting pixel ratio

        //update controls
        cubeOrbitControls.update();
  
        graphicsRenderer.render(newScene, camera);
        requestAnimationFrame(animate);
      }
      animate(); // running the function for request animation frame
  
    },[]);
    return (
      <>
        <div ref={canvasRef}
        style={{width: '100%', height:'500px', display:'flex', justifyContent:'center', cursor:'pointer'}}/>
      </>
    )
}

export default Cube;
