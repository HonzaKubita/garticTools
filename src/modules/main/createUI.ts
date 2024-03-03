import { addEventCallback } from "../eventManager";

const html = 
`
<div class="gartic-tools-ui" id="garticToolsMenu">
    <p>Gartic Tools</p>

    <div class="gartic-tools-canvas-rotation">
        <p>Canvas rotation</p>
        <input type="range" min="0" max="360" value="180" id="garticToolsCanvasRotation">
        <button id="garticToolsFlipCanvas">Flip canvas</button>
        <button id="garticToolsResetRotation">Reset rotation</button>
    </div>
</div>
`;

const css = 
`
.gartic-tools-ui {
    padding: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;

    position: fixed;
    top: 5px;
    left: 5px;

    border-radius: 5px;
    background-color: white;

    z-index: 100;
}

.gartic-tools-ui p {
    font-family: Arial;
}

.gartic-tools-menu > p {
    margin-bottom: 5px;
    
    font-family: Arial;
    text-align: center;
    text-decoration: underline;
}

.gartic-tools-canvas-rotation {
    display: flex;
    flex-direction: column;
}

.gartic-tools-canvas-rotation button {
    margin-top: 5px;
    padding: 5px;
    border: none;
    border-radius: 5px;
    background-color: #f2f2f2;
    cursor: pointer;
}
`;

// State variables
let isCanvasFlipped = false;
let rotation3d = 0;
let rotation2d = 0;

// Function to update the rotation of the canvas
function updateRotation() {
    const iframe = document.getElementById("garticToolsIframe") as HTMLIFrameElement;
    iframe.style.transform = `rotate3d(0, 1, 0, ${rotation3d}deg) rotate(${rotation2d}deg)`;
}

function flipCanvas() {
    isCanvasFlipped = !isCanvasFlipped;
    rotation3d = isCanvasFlipped ? 180 : 0;
    updateRotation();
}

export default function createUI() {
    // Inject html
    const div = document.createElement("div");
    div.innerHTML = html;
    document.body.appendChild(div);

    // Inject styles
    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);

    // Get elements
    const controlMenuRotationSlider = document.getElementById("garticToolsCanvasRotation") as HTMLInputElement;
    const controlMenuFlipCanvas = document.getElementById("garticToolsFlipCanvas") as HTMLButtonElement;
    const controlMenuResetRotation = document.getElementById("garticToolsResetRotation") as HTMLButtonElement;
    const iframe = document.getElementById("garticToolsIframe") as HTMLIFrameElement;

    // Register callbacks
    // Add event listeners
    // Rotation slider
    controlMenuRotationSlider.addEventListener("input", (event) => {
        const eventTarget = event.target as HTMLInputElement;
        rotation2d = eventTarget.valueAsNumber - 180;
        updateRotation();
    });

    // Flip canvas button
    controlMenuFlipCanvas.addEventListener("click", () => {
        flipCanvas();
    });

    // Reset rotation button
    controlMenuResetRotation.addEventListener("click", () => {
        rotation2d = 0;
        rotation3d = 0;
        controlMenuRotationSlider.value = "180";
        updateRotation();
    });

    // Return focus to the iframe when the menu is clicked
    // (So shortcuts work again after clicking the menu)
    document.getElementById("garticToolsMenu")?.addEventListener("click", () => {
        iframe.focus();
    });

    // Add event callback for flipCanvas
    addEventCallback("flipCanvas", flipCanvas);
}