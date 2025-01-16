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
    `;

    mainContainer.innerHTML = rootContent;
}