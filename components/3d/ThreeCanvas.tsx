"use client";

import { Canvas } from "@react-three/fiber";
import FloatingShapes from "./FloatingShapes";

export default function ThreeCanvas() {
    return (
        <Canvas
            camera={{ position: [0, 0, 5], fov: 45 }}
            className="w-full h-full"
            gl={{ antialias: true, alpha: true }}
        >
            <FloatingShapes />
        </Canvas>
    );
}
