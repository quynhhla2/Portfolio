import React from "react";
import { useState, useEffect } from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const MainModel = () => {
  const [model, setModel] = useState(null);

  useEffect(() => {
    const loadModel = async () => {
      const gltf = await useGLTF("/path/to/your/model/scene.gltf");
      setModel(gltf.scene);
    };

    loadModel();
  }, []);

  return model ? <primitive object={model} /> : null;
};

const ModelCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={null}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <MainModel />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export { ModelCanvas };
