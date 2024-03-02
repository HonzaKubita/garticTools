import injectIframe from './modules/main/injectIframe';
import fixBackground from './modules/fixBackground';

export default function runInMain() {
    // Inject the iframe into the website
    // (also hides the website's content)
    injectIframe();  

    // Fix the background
    fixBackground("main");
}