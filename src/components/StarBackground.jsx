import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StarBackground = () => {
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const starsRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 20;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const starsGeometry = new THREE.BufferGeometry();
    const starsMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.05,
      transparent: true,
      opacity: 0.8,
    });

    const starsCount = 10000;
    const posArray = new Float32Array(starsCount * 3);

    for (let i = 0; i < starsCount; i++) {
      // Spherical distribution for more natural star field
      const phi = Math.random() * Math.PI * 2;
      const cosTheta = Math.random() * 2 - 1;
      const theta = Math.acos(cosTheta);
      const r = Math.cbrt(Math.random()) * 15; // Cubic root for better distribution

      posArray[i * 3] = r * Math.sin(theta) * Math.cos(phi);
      posArray[i * 3 + 1] = r * Math.sin(theta) * Math.sin(phi);
      posArray[i * 3 + 2] = r * Math.cos(theta);
    }

    starsGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    const animate = () => {
      requestAnimationFrame(animate);
      stars.rotation.y += 0.0005;
      renderer.render(scene, camera);
    };
    animate();

    // Scroll interaction
    gsap.to(stars.rotation, {
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
      y: "+= 0.5",
      duration: 2,
    });

    return () => {
      scene.remove(stars);
      starsGeometry.dispose();
      starsMaterial.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-[-1] bg-black" />;
};

export default StarBackground;
