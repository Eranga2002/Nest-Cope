import { navbarContent} from './contents/navbarContent.js';
window.addEventListener("DOMContentLoaded", () => {
    renderNavbar(navbarContent);
})

function renderNavbar(contents) {
    const navbar = document.querySelector(".navbar");
    navbar.innerHTML = `
        <div class="row"
            <div class="col-md-3">
                <h3 class="text-white">${contents[0].title}</h3>
            </div>
            <div class="col-md-6">
                <ul class="nav-links d-flex flex-row justify-content-center gap-5 list-unstyled text-center">
                    <li><a href="#">${contents[1].title}</a></li>
                    <li><a href="#">${contents[1].link1}</a></li>
                    <li><a href="#">${contents[1].link2}</a></li>
                    <li class="dropdown"><a href="#" class="dropdown-toggle" data-bs-toggle="dropdown" role="button">${contents[1].link3}</a>
                        <ul class="dropdown-menu">
                            <li class="dropdown-item"><a href="#">Web Development</a></li>
                            <li class="dropdown-item"><a href="#">Mobile Development</a></li>
                            <li class="dropdown-item"><a href="#">Digital Marketing</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="sign col-md-2 d-flex  gap-3">
                <a href="#" class="navbarBtn">${contents[2].signIn}</a>
                <a href="#" class="navbarBtn">${contents[2].signUp}</a>
            </div>
        </div>
    `
};