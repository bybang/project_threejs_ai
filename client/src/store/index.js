import { proxy } from "valtio";

// whatever define in proxy({}), we can utilize within this application
const state = proxy({
  // determine if we are on homepage or not
  intro: true,
  color: "#EFBD48",
  // are we currently displaying the logo on our shirt?
  isLogoTexture: true,
  isFullTexture: false,
  // initial logo
  logoDecal: "./threejs.png",
  fullDecal: "./threejs.png",
});

export default state;
