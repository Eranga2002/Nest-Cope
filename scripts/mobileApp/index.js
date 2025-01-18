window.addEventListener("DOMContentLoaded", () => {
    renderRootContent();
});

function renderRootContent() {
    const root = document.getElementById("root");
    let content = `
        <div>
            <h2 class="text-center text-white">Master Mobile App Development</h2>
        </div>
    `;
    root.innerHTML = content;
}