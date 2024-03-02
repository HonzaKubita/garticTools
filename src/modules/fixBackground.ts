function fixIframeBackground() {
    // Create css that removes the background from the iframe
    const css = 
    `
        body {
            background: none !important; 
        }

        #__next {
            background: none !important;
        }
    `;
    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);
}

function fixMainBackground() {
    // Add back the background to the main document
    
    // Add back the background color
    const color = "linear-gradient(200deg,rgba(92,30,166,1) 0%,rgba(200,67,94,1) 100%)";
    document.body.style.background = color;

    // Add back the background texture (by creating new div)
    const background = "url('/images/textura.png')";
    const backgroundDiv = document.createElement("div");

    backgroundDiv.style.backgroundImage = background;
    backgroundDiv.style.width = "100vw";
    backgroundDiv.style.height = "100vh";
    backgroundDiv.style.position = "fixed";
    backgroundDiv.style.top = "0";
    backgroundDiv.style.left = "0";
    backgroundDiv.style.backgroundSize = "cover";
    backgroundDiv.style.backgroundPosition = "center";
    backgroundDiv.style.backgroundRepeat = "no-repeat";

    document.body.appendChild(backgroundDiv);

}

export default function fixBackground(location: "main" | "iframe") {
    if (location == "iframe") {
        fixIframeBackground();
    } else {
        fixMainBackground();
    }
}