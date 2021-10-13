import React, {useRef, useEffect} from 'react';
import * as THREE from 'three';
import {colors} from '../../services/theme/colors';
import { Clock, SphereGeometry } from 'three';
import { useGlobalContext } from '../../context/context';
// logos
import python from '../../assets/logos/python.png';
import react from '../../assets/images/react.png';
import javascript from '../../assets/images/js.jpeg';
import ts from '../../assets/images/ts.png';
import html from '../../assets/images/html.png';

const Sphere = () => {
    const sphereGridRef = useRef(null);
    const {smallScreen} = useGlobalContext();
    useEffect(()=>{
    // new scene
    const scene = new THREE.Scene();
    // texture loader
    const loader = new THREE.TextureLoader();

    // camera
    const camera = new THREE.PerspectiveCamera(75, sphereGridRef.current.clientWidth / sphereGridRef.current.clientHeight, 0.1, 1000);
    camera.position.z = 4;
    scene.add(camera);

    const sizes ={
        width: 0.7,
        height: 0.7,
        depth: 0.7,
    }

    // group
    const group = new THREE.Group();
    
    const cube1 = new THREE.Mesh(
        new THREE.BoxGeometry(sizes.width, sizes.height, sizes.depth),
        new THREE.MeshBasicMaterial({map:loader.load(html)})
    )
    cube1.position.x = 1
    const cube2 = new THREE.Mesh(
        new THREE.BoxGeometry(sizes.width, sizes.height, sizes.depth),
        new THREE.MeshBasicMaterial({map:loader.load(ts)})
    )
    cube2.position.x = -1;
    const cube3 = new THREE.Mesh(
        new THREE.BoxGeometry(sizes.width, sizes.height, sizes.depth),
        new THREE.MeshBasicMaterial({map:loader.load(react)})
    )
    cube3.position.y = 1;
    const cube4 = new THREE.Mesh(
        new THREE.BoxGeometry(sizes.width, sizes.height, sizes.depth),
        new THREE.MeshBasicMaterial({map:loader.load(javascript)})
    )
    cube4.position.y = -1;

    group.add(cube1, cube2, cube3, cube4);
   

    // sphere 
    const sphereGeo = new THREE.SphereGeometry(1.7,16,16);
    const sphereMat = new THREE.MeshBasicMaterial({color: colors.mainBlue});
    sphereMat.wireframe= true;
    const sphereMesh = new THREE.Mesh(sphereGeo, sphereMat);
    sphereMesh.add(group);

    // adding to the scene
    scene.add(sphereMesh);

    // renderer
    const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
    });
    renderer.setSize(sphereGridRef.current.clientWidth, sphereGridRef.current.clientHeight);
    renderer.setClearColor(0x000000, 0);
    sphereGridRef.current.appendChild(renderer.domElement);

    const clock = new Clock();
    const animate = ()=>{
        // movement
        const elapsed = clock.getElapsedTime();

        // sphere
        sphereMesh.rotation.y = elapsed;
        // camera
        camera.updateProjectionMatrix();
        camera.aspect = sphereGridRef.current.clientWidth/ sphereGridRef.current.clientHeight;
        // pixel ratio
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        // render
        renderer.render(scene, camera);
        // animate
        requestAnimationFrame(animate);
        // group position 
        camera.lookAt(group.position);
    }
    animate();

    },[])

    return (
    <>
        <div ref={sphereGridRef} style={{display: 'flex', justifyContent: 'center', height: '550px', width: '570px', cursor:'pointer'}}/>
    </>
    )
}

export default Sphere;
