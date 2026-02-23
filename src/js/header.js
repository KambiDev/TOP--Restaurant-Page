export function createHeader(){

    const header = document.createElement("header");
    header.classList.add("header");

    const logo = document.createElement("div");
    logo.classList.add("logo");
    const logoText = document.createElement("span");
    logoText.textContent = "KambiDev";
    logo.appendChild(logoText);

    const nav = document.createElement("nav");
    nav.classList.add("navbar");
    const ul = document.createElement("ul");

    const navItems = ["Home", "Menu", "Contact"];
    navItems.forEach(itemText => {
        const li = document.createElement("li");
        const a = document.createElement("a");

        a.textContent = itemText;
        a.href = `#${itemText.toLowerCase()}`;

        li.appendChild(a);
        ul.appendChild(li);
    });

    nav.appendChild(ul);
    header.append(logo, nav);

    return header;
}