window.addEventListener("DOMContentLoaded", () => {
    renderRootContent();
});

function renderRootContent() {
    const root = document.getElementById("root");
    let content = `
        <div>
            <h2>Master Mobile App Development</h2>
        </div>
    `;
    root.innerHTML = content;
}