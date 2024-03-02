export default function removeAd() {
    const adDiv = document.querySelector<HTMLDivElement>(".side");
    if (adDiv) {
        adDiv.style.display = "none";
    }
}