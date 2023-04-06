import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";
import state from "../store";
import { CustomButton } from "../components";

const Home = () => {
  // snapshot: one current snapshot of that state
  const snap = useSnapshot(state);
  const isMobile = window.innerWidth <= 600;

  return (
    <AnimatePresence>
      {/* if we are currently on the intro(homepage)? */}
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <img
              src="./threejs.png"
              alt="logo"
              className="w-8 h-8 object-contain"
            />
          </motion.header>

          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div className="" {...headTextAnimation}>
              <h1 className="head-text">
                LET'S <br className="xl:block hidden" /> DO IT
              </h1>
            </motion.div>
            {/* Head content */}
            <motion.div
              className="flex flex-col gap-5"
              {...headContentAnimation}
            >
              {isMobile ? (
                <p className="text-base text-gray-600 font-normal max-w-md md:hidden">
                  <strong>Unleash your imagination</strong> and define your own
                  style
                </p>
              ) : (
                <p className="text-base text-gray-600 font-normal max-w-md hidden md:block">
                  Create your unique and exclusive design shirt with our
                  brand-new 3D customization tool.{" "}
                  <strong>Unleash your imagination</strong> and define your own
                  style
                </p>
              )}

              <CustomButton
                type="filled"
                title="Customize It"
                handleClick={() => (state.intro = false)}
                customStyles="w-fit px-4 py-2.5 text-sm font-bold"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
