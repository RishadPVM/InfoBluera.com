"use client";

import { Icosahedron, Octahedron, Torus } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { Mesh } from "three";

export default function FloatingShapes() {
    const icoRef = useRef<Mesh>(null);
    const octaRef = useRef<Mesh>(null);
    const torusRef = useRef<Mesh>(null);
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();

        // Slow continuous rotation
        if (groupRef.current) {
            groupRef.current.rotation.y = time * 0.1;
            groupRef.current.rotation.z = Math.sin(time * 0.2) * 0.1;
        }

        // Individual shape floating and rotation
        if (icoRef.current) {
            icoRef.current.position.y = Math.sin(time) * 0.5 + 1;
            icoRef.current.rotation.x = time * 0.3;
            icoRef.current.rotation.y = time * 0.4;
        }

        if (octaRef.current) {
            octaRef.current.position.y = Math.cos(time * 1.2) * 0.5 - 1;
            octaRef.current.rotation.x = time * 0.2;
            octaRef.current.rotation.z = time * 0.3;
        }

        if (torusRef.current) {
            torusRef.current.position.x = Math.sin(time * 0.8) * 0.5 - 1.5;
            torusRef.current.position.y = Math.cos(time * 0.8) * 0.5;
            torusRef.current.rotation.x = time * 0.4;
            torusRef.current.rotation.y = time * 0.5;
        }
    });

    return (
        <group ref={groupRef}>
            {/* Lights */}
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} color="#60A5FA" />
            <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#2563EB" />
            <pointLight position={[0, 0, 0]} intensity={2} color="#F59E0B" distance={10} />

            {/* Main Icosahedron (Blue glass) */}
            <Icosahedron ref={icoRef} args={[1.5, 0]} position={[1, 1, 0]}>
                <meshPhysicalMaterial
                    color="#1E40AF"
                    roughness={0.1}
                    transmission={0.9}
                    thickness={0.5}
                    ior={1.5}
                />
            </Icosahedron>

            {/* Secondary Octahedron (Orange glass) */}
            <Octahedron ref={octaRef} args={[1, 0]} position={[-1, -1, 1]}>
                <meshPhysicalMaterial
                    color="#F59E0B"
                    roughness={0.2}
                    transmission={0.8}
                    thickness={0.5}
                />
            </Octahedron>

            {/* Tertiary Torus (Light blue wireframe/glass) */}
            <Torus ref={torusRef} args={[0.8, 0.2, 16, 32]} position={[-1.5, 0, -1]}>
                <meshPhysicalMaterial
                    color="#60A5FA"
                    roughness={0.1}
                    metalness={0.8}
                    clearcoat={1}
                />
            </Torus>
        </group>
    );
}
