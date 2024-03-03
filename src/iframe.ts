import removeAd from "./modules/iframe/removeAd";
import fixBackground from "./modules/fixBackground";
import registerFlipCanvasShortcut from "./modules/iframe/flipCanvasShortcut";

export default function runInIframe() {
    // Remove the ad from the website
    removeAd();

    // Fix the background
    fixBackground("iframe");

    // Register the flip canvas shortcut
    registerFlipCanvasShortcut();
}