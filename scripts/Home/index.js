import { technologies } from "./content.js";
window.addEventListener("DOMContentLoaded", () => {
    renderMainContent();
});

function renderMainContent() {
    const mainContainer = document.querySelector("#root");
    let rootContent = `
        <div class="row py-5 d-flex justify-content-center">
            <div class="col-md-10">
                <h1 class="text-main py-5 text-white">NetsCape Academy</h1>
                <p class="text-desc text-white">Transform your passion for technology into professional expertise at Netscape Academy, your premier destination for comprehensive software engineering education. We specialize in equipping aspiring developers and engineers with cutting-edge skills across web development, mobile applications, and software engineering.</p>
            </div>
        </div>
        <div class="row d-flex justify-content-center">
            <div class="col-md-10">
                <h2 class="py-3 text-topic text-white ">Why Choose Netscape Academy?</h2>
                <p class="text-center text-desc text-white">Our curriculum is meticulously crafted to bridge the gap between theory and real-world application. We focus on three core technological pillars:</p>
            </div>
        </div>
        <div class="d-flex justify-content-center gap-4  align-items-strech">
    `;
    technologies.forEach((technology) => {
        rootContent += `
            <div class=" p-5 group col-lg-4 col-md-6  rounded-xl border border-lg border-success">
                <h2 class="text-center text-desc py-4 text-white">${technology.title}</h2>
                <p class="text-center text-white pb-3">${technology.desc}</p>
                <div class="d-flex justify-content-center hidden">
                    <a href="${technology.dir}" class="p-3 bg-main rounded-lg text-decoration-none text-white">Find Out</a>
                </div>
            </div>
        `
    });
    rootContent += `</div>`;
    rootContent += `
        <div class="row d-flex py-4 justify-content-center">
            <div class="col-md-10">
                <p class="text-white text-desc py-3">Whether you're starting your journey in tech or advancing your existing skills, Netscape Academy provides the knowledge, tools, and support you need to succeed in today's dynamic technology landscape.</p>
                <p class="text-white text-desc py-2">Join us and become part of the next generation of tech innovators.</p>
            </div>
        </div>
    `;

    mainContainer.innerHTML = rootContent;
}