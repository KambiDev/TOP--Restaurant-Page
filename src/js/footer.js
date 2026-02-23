export function createFooter(){
    
    const footer = document.createElement("footer");
    footer.classList.add("footer");

    const span = document.createElement("span");
    span.textContent = "© 2026 kambiDev - All rights reserved";

    footer.appendChild(span);

    return footer;
}