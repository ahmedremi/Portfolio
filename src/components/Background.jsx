import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars } from '@react-three/drei';

const FloatingShape = ({ position, color, speed, rotationSpeed, size }) => {
    const meshRef = useRef();

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * rotationSpeed;
            meshRef.current.rotation.y += delta * rotationSpeed;
        }
    });

    return (
        <Float speed={speed} rotationIntensity={1} floatIntensity={2}>
            <mesh ref={meshRef} position={position}>
                <icosahedronGeometry args={[size, 0]} />
                <meshStandardMaterial color={color} wireframe linewidth={2} />
            </mesh>
        </Float>
    );
};

const Background = () => {
    const shapes = useMemo(() => {
        const items = [];
        const colors = ['#a855f7', '#3b82f6', '#06b6d4', '#d946ef']; // Purple, Blue, Cyan, Magenta
        for (let i = 0; i < 15; i++) {
            items.push({
                position: [
                    (Math.random() - 0.5) * 25,
                    (Math.random() - 0.5) * 25,
                    (Math.random() - 0.5) * 10
                ],
                color: colors[Math.floor(Math.random() * colors.length)],
                speed: Math.random() * 1.5 + 0.5,
                rotationSpeed: Math.random() * 0.5 + 0.1,
                size: Math.random() * 1.5 + 0.5
            });
        }
        return items;
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-full -z-10 bg-slate-950">
            <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                {shapes.map((shape, i) => (
                    <FloatingShape key={i} {...shape} />
                ))}
            </Canvas>
        </div>
    );
};

export default Background;
