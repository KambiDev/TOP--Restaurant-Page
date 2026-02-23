export function createMain(){

    const main = document.createElement("main");
    main.classList.add("main");

    const img = document.createElement("img");
    img.src = "https://cdn.pixabay.com/photo/2024/10/04/12/47/ai-generated-9096294_1280.jpg";
    img.alt = "image food";

    const div = document.createElement("div");
    div.classList.add("container-text");
    const h1 = document.createElement("h1");
    h1.textContent = "EL SAZON";
    const p = document.createElement("p");
    p.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident soluta deleniti, deserunt libero, recusandae, numquam aperiam hic voluptatum rem corrupti aut nam perspiciatis! Veritatis sapiente adipisci, voluptates maxime dolorem architecto";

    div.append(h1, p);
    main.append(img, div);

    return main;
}