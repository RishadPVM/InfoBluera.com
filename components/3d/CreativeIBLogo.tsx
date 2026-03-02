"use client";

import { Float, MeshDistortMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { Group, Mesh } from "three";

export default function CreativeIBLogo() {
    const groupRef = useRef<Group>(null);
    const iRef = useRef<Mesh>(null);
    const bRef = useRef<Group>(null);

    // Deterministic particles for background depth
    const logoParticles = useMemo(() => [...Array(40)].map((_, i) => ({
        pos: [((i * 7.7) % 12) - 6, ((i * 13.3) % 12) - 6, ((i * 19.1) % 8) - 4] as [number, number, number],
        size: 0.02 + ((i * 0.01) % 0.03)
    })), []);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        const mouse = state.mouse;

        if (groupRef.current) {
            groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, mouse.x * 0.4, 0.1);
            groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -mouse.y * 0.4, 0.1);
        }

        if (iRef.current) {
            iRef.current.position.y = Math.sin(time * 2) * 0.1;
        }

        if (bRef.current) {
            bRef.current.position.y = Math.cos(time * 2) * 0.1;
        }
    });

    return (
        <group ref={groupRef}>
            <ambientLight intensity={0.4} />
            <pointLight position={[10, 10, 10]} intensity={1.5} color="#60A5FA" />
            <pointLight position={[-10, -10, -10]} intensity={1} color="#3B82F6" />

            {/* Stylized Logo Group */}
            <group position={[-0.5, 0, 0]}>
                {/* "I" - Modern Vertical Bar */}
                <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
                    <mesh ref={iRef} position={[-1.2, 0, 0]}>
                        <boxGeometry args={[0.4, 3, 0.4]} />
                        <MeshDistortMaterial
                            color="#3B82F6"
                            speed={2}
                            distort={0.2}
                            radius={1}
                            emissive="#1D4ED8"
                            emissiveIntensity={0.5}
                        />
                    </mesh>
                </Float>

                {/* "B" - Stylized double loops */}
                <group ref={bRef} position={[0.8, 0, 0]}>
                    <Float speed={3} rotationIntensity={0.5} floatIntensity={0.5}>
                        {/* Vertical part of B */}
                        <mesh position={[-0.4, 0, 0]}>
                            <boxGeometry args={[0.4, 3, 0.4]} />
                            <meshStandardMaterial color="#60A5FA" metalness={0.9} roughness={0.1} />
                        </mesh>

                        {/* Upper loop */}
                        <mesh position={[0.4, 0.75, 0]} rotation={[0, 0, Math.PI / 2]}>
                            <torusGeometry args={[0.75, 0.15, 16, 32, Math.PI]} />
                            <meshStandardMaterial color="#60A5FA" metalness={0.9} roughness={0.1} />
                        </mesh>

                        {/* Lower loop */}
                        <mesh position={[0.4, -0.75, 0]} rotation={[0, 0, Math.PI / 2]}>
                            <torusGeometry args={[0.75, 0.15, 16, 32, Math.PI]} />
                            <meshStandardMaterial color="#60A5FA" metalness={0.9} roughness={0.1} />
                        </mesh>

                        {/* Glow Core for B */}
                        <mesh position={[0.2, 0, 0]}>
                            <sphereGeometry args={[0.3, 16, 16]} />
                            <meshStandardMaterial color="#F59E0B" emissive="#F59E0B" emissiveIntensity={2} />
                        </mesh>
                    </Float>
                </group>
            </group>

            {/* Technical grid backdrop (Subtle) */}
            <group position={[0, 0, -2]}>
                {[...Array(5)].map((_, i) => (
                    <mesh key={i} position={[0, -2 + i, 0]}>
                        <boxGeometry args={[10, 0.01, 0.01]} />
                        <meshStandardMaterial color="#1e293b" transparent opacity={0.2} />
                    </mesh>
                ))}
            </group>

            {/* Background Particles */}
            {logoParticles.map((p, i) => (
                <mesh key={i} position={p.pos}>
                    <sphereGeometry args={[p.size, 8, 8]} />
                    <meshStandardMaterial color="#60A5FA" emissive="#60A5FA" emissiveIntensity={1} />
                </mesh>
            ))}
        </group>
    );
}
