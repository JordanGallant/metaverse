import { useThree } from "@react-three/fiber";
import React, { useEffect } from "react"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
const CameraOrbitController = () => {
    const {camera, gl} = useThree();
  
    useEffect(() => {
      const controls = new OrbitControls(camera, gl.domElement);
      return () => {
        controls.dispose();
      }
    },[camera,gl]);
    return null;
  }
export default CameraOrbitController;