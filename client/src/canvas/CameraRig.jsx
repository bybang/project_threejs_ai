import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import state from "../store";

// this is where the image(shirt) get bigger
const CameraRig = ({ children }) => {
  const group = useRef();
  const snap = useSnapshot(state);

  // allow to execute code on every rendered frame
  useFrame((state, delta) => {
    const isBreakpoint = window.innerWidth <= 1260;
    const isMobile = window.innerWidth <= 600;

    // set the initial position of the model
    let targetPosition = [-0.4, 0, 2];

    // if we are in homepage, we will going to re-position it
    if (snap.intro) {
      if (isBreakpoint) targetPosition = [0, 0, 2];
      if (isMobile) targetPosition = [0, 0.2, 2.5];
    } else {
      // if we are in custimizer page,
      if (isMobile) targetPosition = [0, 0.2, 2.5];
      else targetPosition = [0, 0, 2];
    }

    // set model camera position
    easing.damp3(state.camera.position, targetPosition, 0.25, delta);

    // set the model rotation smoothly
    easing.dampE(
      group.current.rotation,
      [state.pointer.y / 10, -state.pointer.x / 5, 0],
      0.25,
      delta // Delta is a difference from the last frame that happened
    );
  });

  return <group ref={group}>{children}</group>;
};

export default CameraRig;
