import removeAd from "./modules/iframe/removeAd";
import fixBackground from "./modules/fixBackground";

export default function runInIframe() {
    // Remove the ad from the website
    removeAd();

    // Fix the background
    fixBackground("iframe");
}