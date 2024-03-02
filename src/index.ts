import inIframe from "./modules/isIframe";
import runInMain from "./main";
import runInIframe from "./iframe";

if (inIframe()) {
    runInIframe();
} else {
    runInMain();
}
