"use client";

import { Canvas } from "@react-three/fiber";
import CreativeIBLogo from "./CreativeIBLogo";

export default function ThreeCanvas() {
    return (
        <Canvas
            camera={{ position: [0, 0, 6], fov: 45 }}
            className="w-full h-full"
            gl={{ antialias: true, alpha: true }}
        >
            <CreativeIBLogo />
        </Canvas>
    );
}
