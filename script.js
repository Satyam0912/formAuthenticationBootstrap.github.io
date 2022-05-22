let userData = [];

let state = {
    currentNavLinkSelected: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    city: '',
    state: '',
    zip: '',
    agreeToTnC: false
}

let homeNavLink = document.getElementById('home-nav-link');
let signupNavLink = document.getElementById('signup-nav-link');
let loginNavLink = document.getElementById('login-nav-link');
let aboutNavLink = document.getElementById('about-nav-link');
let contactNavLink = document.getElementById('contacts-nav-link');


let homePage = document.getElementById('home-page');
let signupPage = document.getElementById('signup-page');
let loginPage = document.getElementById('login-page');


function changeActiveNavLink(navLinkClicked) {
    homeNavLink.classList.remove('active');
    signupNavLink.classList.remove('active');
    loginNavLink.classList.remove('active');
    aboutNavLink.classList.remove('active');
    contactNavLink.classList.remove('active');

    homePage.style.display = 'none';
    signupPage.style.display = 'none';
    loginPage.style.display = 'none';

    switch (navLinkClicked) {
        case 'HOME':
            homeNavLink.classList.add('active');
            homePage.style.display = 'block'
            break;
        case 'SIGNUP':
            signupNavLink.classList.add('active');
            signupPage.style.display = 'block'
            break;
        case 'LOGIN':
            loginNavLink.classList.add('active');
            loginPage.style.display = 'block'
            break;
        case 'ABOUT':
            aboutNavLink.classList.add('active');
            break;
        case 'CONTACTS':
            contactNavLink.classList.add('active');
            break;
    }
}

/*--------------------------------------------------------------------------*/

// VALIDATION

let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let signupEmail = document.getElementById('signupEmail');
let signupPassword = document.getElementById('signupPassword');
let cityName = document.getElementById('cityName');
let stateName = document.getElementById('stateName');
let zipCode = document.getElementById('zipCode');
let loginEmail = document.getElementById('loginEmail');
let loginPassword = document.getElementById('loginPassword');
let signUpCheckBox = document.getElementById('signUpCheckBox');
let successfulSignUp = document.getElementById('successfulSignUp');

let fnameValid = document.getElementById('fnameValid');
let fnameInValid = document.getElementById('fnameInValid');
let lastNameValid = document.getElementById('lastNameValid');
let lastNameInValid = document.getElementById('lastNameInValid');
let SignUpEmailValid = document.getElementById('SignUpEmailValid');
let SignUpEmailInValid = document.getElementById('SignUpEmailInValid');
let SignUpPasswordValid = document.getElementById('SignUpPasswordValid');
let SignUpPasswordInValid = document.getElementById('SignUpPasswordInValid');
let SignUpEmailAlreadyExist = document.getElementById('SignUpEmailAlreadyExist');
let cityValid = document.getElementById('cityValid');
let cityInValid = document.getElementById('cityInValid');
let stateValid = document.getElementById('stateValid');
let stateInvalid = document.getElementById('stateInvalid');
let zipValid = document.getElementById('zipValid');
let zipInvalid = document.getElementById('zipInvalid');
let loginEmailPasswordValid = document.getElementById('loginEmailPasswordValid');
let loginEmailPasswordInValid = document.getElementById('loginEmailPasswordInValid');
let signUpTnCInvalid = document.getElementById('signUpTnCInvalid');

function validateFirstName() {
    if (firstName.value.length < 3) {
        successfulSignUp.style.display = 'none';
        fnameValid.style.display = 'none';
        fnameInValid.style.display = 'block';
        return false;
    }
    else {
        successfulSignUp.style.display = 'none';
        fnameValid.style.display = 'block';
        fnameInValid.style.display = 'none';
        return true;
    }
}

function validateLastName() {
    if (lastName.value.length < 3) {
        successfulSignUp.style.display = 'none';
        lastNameValid.style.display = 'none';
        lastNameInValid.style.display = 'block';
        return false;
    }
    else {
        successfulSignUp.style.display = 'none';
        lastNameValid.style.display = 'block';
        lastNameInValid.style.display = 'none';
        return true;
    }
}

function validateEmail() {
    let svalue = signupEmail.value;
    for (let i = 0; i < userData.length; i++) {
        if (userData[i].email === svalue) {
            successfulSignUp.style.display = 'none';
            SignUpEmailValid.style.display = 'none';
            SignUpEmailInValid.style.display = 'none';
            SignUpEmailAlreadyExist.style.display = 'block';
            return;
        }
    }
    if (svalue === '' || !svalue.includes('@') || !svalue.includes('.') || svalue[0] == '@' || svalue.slice(svalue.lastIndexOf('.')).length < 3) {
        successfulSignUp.style.display = 'none';
        SignUpEmailValid.style.display = 'none';
        SignUpEmailInValid.style.display = 'block';
        return false;
    }
    else {
        successfulSignUp.style.display = 'none';
        SignUpEmailValid.style.display = 'block';
        SignUpEmailInValid.style.display = 'none';
        return true;
    }
}

/* ---------------------------------------------------------------- */
// PASSWORD
let isSmallChar = (spw) => {
    for (let i = 0; i < spw.length; i++) {
        if (spw.charCodeAt(i) >= 65 && spw.charCodeAt(i) <= 90) {
            return true;
        }
    }
    return false;
}

let isCapitalChar = (spw) => {
    for (let i = 0; i < spw.length; i++) {
        if (spw.charCodeAt(i) >= 97 && spw.charCodeAt(i) <= 122) {
            return true;
        }
    }
    return false;
}

let isDigit = (spw) => {
    for (let i = 0; i < spw.length; i++) {
        if (spw.charCodeAt(i) >= 48 && spw.charCodeAt(i) <= 57) {
            return true;
        }
    }
    return false;
}

let isSpecial = (spw) => {
    for (let i = 0; i < spw.length; i++) {
        if (!isSmallChar(spw[i]) && !isCapitalChar(spw[i]) && !isDigit(spw[i])) {
            return true;
        }
    }
    return false;
}

function validateSignUpPassword() {
    let spw = signupPassword.value;
    if (spw.length >= 6 && isDigit(spw) && isCapitalChar(spw) && isSmallChar(spw) && isSpecial(spw)) {
        successfulSignUp.style.display = 'none';
        SignUpPasswordValid.style.display = 'block';
        SignUpPasswordInValid.style.display = 'none';
        return true;
    }
    else {
        successfulSignUp.style.display = 'none';
        SignUpPasswordValid.style.display = 'none';
        SignUpPasswordInValid.style.display = 'block';
        return false;
    }
}
/* ---------------------------------------------------------------- */

function validateCity() {
    if (cityName.value.length < 3) {
        successfulSignUp.style.display = 'none';
        cityValid.style.display = 'none';
        cityInValid.style.display = 'block';
        return false;
    }
    else {
        successfulSignUp.style.display = 'none';
        cityValid.style.display = 'block';
        cityInValid.style.display = 'none';
        return true;
    }
}

function validateState() {
    if (stateName.value === '') {
        successfulSignUp.style.display = 'none';
        stateValid.style.display = 'none';
        stateInvalid.style.display = 'block';
        return false;
    }
    else {
        successfulSignUp.style.display = 'none';
        stateValid.style.display = 'block';
        stateInvalid.style.display = 'none';
        return true;
    }
}

function validateZipCode() {
    if (zipCode.value === '' || zipCode.value.length != 6) {
        successfulSignUp.style.display = 'none';
        zipValid.style.display = 'none';
        zipInvalid.style.display = 'block';
        return false;
    }
    else {
        successfulSignUp.style.display = 'none';
        zipValid.style.display = 'block';
        zipInvalid.style.display = 'none';
        return true;
    }
}

/*---------------------------------------------------------------------------------*/

// SIGNUP DATA VALIDATION AND SUBMISSION

const lookup = {
    'A': 'N', 'B': 'O', 'C': 'P', 'D': 'Q',
    'E': 'R', 'F': 'S', 'G': 'T', 'H': 'U',
    'I': 'V', 'J': 'W', 'K': 'X', 'L': 'Y',
    'M': 'Z', 'N': 'A', 'O': 'B', 'P': 'C',
    'Q': 'D', 'R': 'E', 'S': 'F', 'T': 'G',
    'U': 'H', 'V': 'I', 'W': 'J', 'X': 'K',
    'Y': 'L', 'Z': 'M',
    'a': 'n', 'b': 'o', 'c': 'p', 'd': 'q',
    'e': 'r', 'f': 's', 'g': 't', 'h': 'u',
    'i': 'v', 'j': 'w', 'k': 'x', 'l': 'y',
    'm': 'z', 'n': 'a', 'o': 'b', 'p': 'c',
    'q': 'd', 'r': 'e', 's': 'f', 't': 'g',
    'u': 'h', 'v': 'i', 'w': 'j', 'x': 'k',
    'y': 'l', 'z': 'm',
    '0': '5', '1': '6', '2': '7', '3': '8',
    '4': '9', '5': '0', '6': '1', '7': '2',
    '8': '3', '9': '4',
    '!': '#', '$': '%', '&': '+', '-': '@',
    '_': '~', '#': '!', '%': '$', '+': '&',
    '@': '-', '~': '_'
};

function validateAndSubmit() {
    if (signUpCheckBox.checked) {
        signUpTnCInvalid.style.display = 'none';
        if (validateFirstName() && validateLastName() && validateEmail() && validateSignUpPassword() && validateCity() && validateState() && validateZipCode()) {

            let userObjData = {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                city: '',
                state: '',
                zipCode: ''
            }

            // Password ENcription
            const encodePassword = (inputPass) => {
                const lookupkeys = Object.keys(lookup);
                const lookupValues = Object.values(lookup);
                const codeArr = inputPass.split("");
                let encodeArr = codeArr.map(codeArrayChar => {
                    let index = lookupValues.findIndex((element) => element === codeArrayChar);
                    return lookupkeys[index];
                });
                return encodeArr.join("");
            }

            userObjData.firstName = firstName.value;
            userObjData.lastName = lastName.value;
            userObjData.email = signupEmail.value;
            userObjData.password = encodePassword(signupPassword.value);
            userObjData.city = cityName.value;
            userObjData.state = stateName.value;
            userObjData.zipCode = zipCode.value;
            userData.push(userObjData);
            console.log(userData);
            successfulSignUp.style.display = 'block';
        }
        else {
            validateFirstName();
            validateLastName();
            validateEmail();
            validateSignUpPassword();
            validateCity();
            validateState();
            validateZipCode();
        }
    }
    else {
        signUpTnCInvalid.style.display = 'block';
    }
}

/* -------------------------------------------------------------------- */
// LOGIN 

function validateEmailPassword() {
    let loginEmailFlag = false;
    let index;
    for (let i = 0; i < userData.length; i++) {
        if (userData[i].email === loginEmail.value) {
            index = i;
            loginEmailFlag = true;
            break;
        }
    }
    if (loginEmailFlag === false) {
        loginEmailPasswordValid.style.display = 'none';
        loginEmailPasswordInValid.style.display = 'block';
        return;
    }

    let decodePassword = (encodedStr) => {
        const codeArr = encodedStr.split("");
        let decodedArr = codeArr.map(codeArrayChar => lookup[codeArrayChar]);
        return decodedArr.join("");
    }

    if (decodePassword(userData[index].password) === loginPassword.value) {
        loginEmailPasswordInValid.style.display = 'none';
        loginEmailPasswordValid.style.display = 'block';
    }
    else {
        loginEmailPasswordValid.style.display = 'none';
        loginEmailPasswordInValid.style.display = 'block';
    }
}
