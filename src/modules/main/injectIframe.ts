export default function injectIframe() {
    // Hide everything on the website
    const nextDiv = document.getElementById("__next");

    if (!nextDiv) return;

    nextDiv.style.display = "none";
    
    // Create a new iframe with the same content that we can control
    const iframe = document.createElement("iframe");
    iframe.src = window.location.href;
    iframe.id = "garticToolsIframe";
    iframe.style.width = "100vw";
    iframe.style.height = "100vh";
    iframe.style.position = "fixed";
    iframe.style.top = "0";
    iframe.style.left = "0";
    iframe.style.border = "none";
    iframe.style.zIndex = "10";

    document.body.appendChild(iframe);
}
