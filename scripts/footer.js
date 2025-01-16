import { footerContent } from './contents/footerContent.js';
window.addEventListener("DOMContentLoaded", () => {
    renderFooter(footerContent);
});

function renderFooter(contents) {
    const footerContainer = document.querySelector(".footer");
    let footerContent = `
        <div class="row">
            <div class="col-sm-3 d-flex flex-col text-center">
                <p><a href="#" class=" ">${contents[0].title}</a></p>
                <p><a href="#" class="">${contents[0].link1}</a></p>
                <p><a href="#" class="">${contents[0].link2}</a></p>
                <p><a href="#" class="">${contents[0].link3}</a></p>
            </div>
            <div class="col-sm-3 text-center">
                <p><a href="#" class="">${contents[1].title}</a></p>
                <p><a href="#" class="">${contents[1].link1}</a></p>
                <p><a href="#" class="">${contents[1].link2}</a></p>
                <p><a href="#" class="">${contents[1].link3}</a></p>
            </div>
            <div class="col-sm-3 text-center">
                <p><a href="#" class="">${contents[2].title}</a></p>
                <p><a href="#" class="">${contents[2].link1}</a></p>
                <p><a href="#" class="">${contents[2].link2}</a></p>
                <p><a href="#" class="">${contents[2].link3}</a></p>
            </div>
            <div class="col-sm-3 text-center">
                <p><a href="#" class="">${contents[3].title}</a></p>
                <p><a href="#" class="">${contents[3].link1}</a></p>
                <p><a href="#" class="">${contents[3].link2}</a></p>
                <p><a href="#" class="">${contents[3].link3}</a></p>
            </div>
        </div>
    `;

    footerContainer.innerHTML = footerContent;
}