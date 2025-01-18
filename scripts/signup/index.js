window.addEventListener("DOMContentLoaded", () => {
    renderSignUpForm();
});

function renderSignUpForm() {
    const root = document.querySelector('#root');
    let signupForm = `
        <div class="row justify-content-center my-4 p-1">
            <div class="d-grid col-md-6 gap-2 p-4 signupForm">
                <h2 class="py-3 text-[3em] text-center text-white">Sign Up</h2>
                <form id="signup-form " autocomplete="off">
                    <div class="form-group py-3">
                        <div class="row row-cols-2">
                            <div>
                                <label for="firstName" class="form-label text-white">first Name :</label>
                                <input type="text" name="firstName" id="firstName" class="bg-transparent form-control text-white" placeholder="Eranga" required/>
                            </div>
                            <div>
                                <label for="lastName" class="form-label text-white">last Name :</label>
                                <input type="text" name="lastName" id="lastName" class=" bg-transparent form-control text-white" placeholder="Madhushan" required/>
                            </div>
                        </div>
                    </div>
                    <div class="form-group py-3">
                        <label for="email" class="form-label text-white">Email :</label>
                        <input type="email" name="email" id="email" class="bg-transparent  form-control text-white" placeholder="michealjakson123@gmail.com" required/>
                    </div>
                    <div class="form-group py-3">
                        <label for="password" class="form-label text-white">Password :</label>
                        <input type="password" name="password" id="password" class="bg-transparent form-control text-white" placeholder="" required/>
                    </div>
                    <div class="form-group py-3">
                        <label for="re-password" class="form-label text-white">Confirm Pasword :</label>
                        <input type="password" name="re-password" id="re-password" class="bg-transparent form-control text-white" placeholder="" required/>
                    </div>
                    <div class="form-group py-3">
                        <label for="re-password" class="form-label text-white">I am :</label>
                        <select class="form-control bg-transparent text-center" placeholder="select your category">
                            <option value="Student" selected>Student</option>
                            <option value="Teacher">Teacher</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div class="form-group py-3">
                        <input type="submit" value="Sign Up" class="form-submit p-3 px-5 bg-main"/>
                    </div>
                </form>
            </div>
        </div>
    `;
    root.innerHTML = signupForm;
}