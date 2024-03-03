import { sendEvent } from "../eventManager";

export default function registerFlipCanvasShortcut() {
    document.addEventListener("keydown", function(event) {
        if (event.key == "f" || event.key == "F") {
            sendEvent("flipCanvas", null);
        }
    });
}