'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';

function Avatar() {
  const avatarRef = useRef();
  const eyeLRef = useRef();
  const eyeRRef = useRef();
  const { camera, viewport } = useThree();

  const [mousePos, setMousePos] = useState(new THREE.Vector2(0, 0));
  const [isInside, setIsInside] = useState(true);
  const targetPos = useRef(new THREE.Vector3());

  useEffect(() => {
    const section = document.getElementById('avatar-section');

    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setMousePos(new THREE.Vector2(x, y));
    };

    const handleEnter = () => setIsInside(true);
    const handleLeave = () => setIsInside(false);

    window.addEventListener('mousemove', handleMouseMove);
    section?.addEventListener('mouseenter', handleEnter);
    section?.addEventListener('mouseleave', handleLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      section?.removeEventListener('mouseenter', handleEnter);
      section?.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  useFrame(() => {
    if (!avatarRef.current) return;

    // Convert 2D mouse to 3D world position
    const vector = new THREE.Vector3(mousePos.x, mousePos.y, 0.5).unproject(camera);
    const avatar = avatarRef.current;

    if (isInside) {
      avatar.lookAt(vector);

      // Eyes track cursor
      eyeLRef.current?.lookAt(vector);
      eyeRRef.current?.lookAt(vector);
    } else {
      // Move avatar towards last known vector in 3D
      targetPos.current.lerp(vector, 0.05);
      avatar.position.lerp(targetPos.current, 0.05);
    }
  });

  return (
    <group ref={avatarRef} position={[0, 0, 0]}>
      {/* Head */}
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="orange" />
      </mesh>

      {/* Eyes */}
      <mesh ref={eyeLRef} position={[-0.4, 0.3, 0.9]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="white" />
      </mesh>
      <mesh ref={eyeRRef} position={[0.4, 0.3, 0.9]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="white" />
      </mesh>
    </group>
  );
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
    </>
  );
}

export default function AvatarSection() {
  return (
    <section id="avatar-section" className="h-screen w-full bg-black">
      {/* <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Lights />
        <Avatar />
      </Canvas> */}
    </section>
  );
}
