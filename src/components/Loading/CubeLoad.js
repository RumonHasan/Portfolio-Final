import React,{useEffect,useRef} from 'react';
import * as THREE from 'three';
import logo from '../../assets/logoBg.jpg';
import { colors } from '../../services/theme/colors';

const CubeLoad = ()=>{
    
    const canvasRef = useRef(null);
    // cube dimensions
    const cubeSize = {
      width: 1.5,
      height: 1.5,
      depth: 1.5,
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
      const material = new THREE.MeshBasicMaterial({map:loader.load(logo)})
      const cube = new THREE.Mesh(geometry, material);
      newScene.add(cube);
      camera.lookAt(cube.position); // centralizing the camera view point

  
      // renderer
      const graphicsRenderer = new THREE.WebGLRenderer({alpha:true});
      graphicsRenderer.setClearColor(0x000000, 0);
      graphicsRenderer.setSize(canvasRef.current.clientWidth , canvasRef.current.clientHeight);
      canvasRef.current.appendChild(graphicsRenderer.domElement);
  
      const animate = ()=>{
  
        cube.rotation.y += 0.08;
        cube.rotation.x += 0.08;
        camera.updateProjectionMatrix();

        // setting pixel ratio to min 2
        graphicsRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // setting pixel ratio
  
        graphicsRenderer.render(newScene, camera);
        requestAnimationFrame(animate);
      }
      animate(); // running the function for request animation frame
  
    },[]);
    return (
      <>
        <div ref={canvasRef} 
        style={{cursor:'none',width: '300px', height:'300px', display:'flex', justifyContent:'center'}}/>
      </>
    )
}

export default CubeLoad;
