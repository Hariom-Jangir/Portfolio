import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
const Particles = () => {
  const meshRef = useRef(null);
  const count = 200;
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
      // Blue to purple gradient
      const t = Math.random();
      col[i * 3] = 0.3 + t * 0.3;
      col[i * 3 + 1] = 0.4 + t * 0.1;
      col[i * 3 + 2] = 0.9 - t * 0.2;
    }
    return [pos, col];
  }, []);
  useFrame(state => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.03;
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.02) * 0.1;
    // Mouse parallax
    const {
      x,
      y
    } = state.mouse;
    meshRef.current.position.x = x * 0.5;
    meshRef.current.position.y = y * 0.3;
  });
  return <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} count={count} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} count={count} />
      </bufferGeometry>
      <pointsMaterial size={0.06} vertexColors transparent opacity={0.6} sizeAttenuation />
    </points>;
};
const FloatingShapes = () => {
  const group = useRef(null);
  useFrame(state => {
    if (!group.current) return;
    group.current.rotation.y = state.clock.elapsedTime * 0.05;
    group.current.children.forEach((child, i) => {
      child.position.y = Math.sin(state.clock.elapsedTime * 0.5 + i) * 0.5;
      child.rotation.x = state.clock.elapsedTime * 0.1 * (i % 2 === 0 ? 1 : -1);
    });
  });
  return <group ref={group}>
      {[...Array(6)].map((_, i) => <mesh key={i} position={[Math.cos(i / 6 * Math.PI * 2) * 5, Math.sin(i / 6 * Math.PI * 2) * 2, Math.sin(i / 6 * Math.PI * 2) * 5]}>
          {i % 3 === 0 ? <octahedronGeometry args={[0.3]} /> : i % 3 === 1 ? <icosahedronGeometry args={[0.25]} /> : <torusGeometry args={[0.2, 0.08, 8, 16]} />}
          <meshStandardMaterial color={i % 2 === 0 ? "#4f7df5" : "#8b5cf6"} transparent opacity={0.15} wireframe />
        </mesh>)}
    </group>;
};
const Background3D = () => {
  return <div className="fixed inset-0 -z-10">
      <Canvas camera={{
      position: [0, 0, 8],
      fov: 60
    }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={0.3} />
        <Particles />
        <FloatingShapes />
      </Canvas>
    </div>;
};
export default Background3D;
