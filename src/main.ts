import { initEventManager } from './modules/eventManager';
import injectIframe from './modules/main/injectIframe';
import fixBackground from './modules/fixBackground';
import createUI from './modules/main/createUI';

export default function runInMain() {
    // Initialize the event manager
    initEventManager();

    // Inject the iframe into the website
    // (also hides the website's content)
    injectIframe();  

    // Fix the background
    fixBackground("main");

    // Create the UI
    createUI();
}