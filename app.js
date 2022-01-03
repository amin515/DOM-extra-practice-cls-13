const password = document.querySelector('#password');
const password_re = document.querySelector('#password_re');
const eye1 = document.querySelector('#eye1');
const eye2 = document.querySelector('#eye2');
const form = document.querySelector('#form');
const name = document.querySelector('#name');
const pb = document.querySelector('#pb');
const ms = document.querySelector('#ms');
const button = document.querySelector('#button');
const pt = document.querySelector('#pt');
const h5 = document.querySelector('#h5');


eye1.onclick = () => {
    if (password.type == 'password') {
        password.setAttribute('type', 'text')
        eye1.innerHTML = `<i class="far fa-eye"></i>`
    } else if (password.type == 'text') {
        password.setAttribute('type', 'password')
        eye1.innerHTML = `<i class="far fa-eye-slash "></i>`
    }
}
eye2.onclick = () => {
    if (password_re.type == 'password') {
        password_re.setAttribute('type', 'text')
        eye2.innerHTML = `<i class="far fa-eye"></i>`
    } else if (password_re.type == 'text') {
        password_re.setAttribute('type', 'password')
        eye2.innerHTML = `<i class="far fa-eye-slash "></i>`
    }
}


form.addEventListener('submit', () => {
    // e.preventDefault();


})

name.addEventListener('keyup', () => {
    let name1 = name.value;
    let npattern = /^[a-zA-Z\s]*$/;
    if (npattern.test(name1) == false) {
        pt.innerHTML = `<p class="text-success">*plz type valid name*</p>`
    } else {
        pt.innerHTML = ``;
    }

});

button.addEventListener('click' , () =>{
    if(name.value == ''){
        pt.innerHTML = `<p class = "text-danger">*Name fields required*</p>`;
        name.style.border = "red 1px solid";
    }else if(password.value == ''){
        ms.innerHTML = `<p class = "text-danger">*Password fields required*</p>`;
        password.style.border = "red 1px solid";
    }else if (password_re.value == ''){
        mss.innerHTML = `<p class = "text-danger">*Re password fields required*</p>`;
        password_re.style.border = "red 1px solid";
    }else if(password.value == password_re.value){
        name.style.border = "green 1px solid";
        password.style.border = "green 1px solid";
        password_re.style.border = "green 1px solid";
        pb.innerHTML = `<p class="alert alert-success">*congratulation data submitted*</p>`;
        h5.innerHTML = `<p class="alert alert-success text-center">*Data Record*</p>`;
        button.setAttribute('href', 'https://www.prothomalo.com/');
    }else{
       
    }
});

name.addEventListener('keyup', () => {
    let valid = name.value;
    let vpattern = /^[\.@#%&!]$/;
    if (vpattern.test(valid) == true) {
        pb.innerHTML = '[\.@#%&!] those are not alowed'
    }
});

password.addEventListener('keyup', () => {
    let pword = password.value;
    let ppattern = /^[a-zA_Z0-9\!\._\$\#\&%@\*]*$/;
    if (ppattern.test(pword) == false) {
        ms.innerHTML = `<p class="text-danger">*invalid type*</p>`
    } else if (pword.length >= 1 && pword.length < 8) {
        ms.innerHTML = `<p class="text-dark">*To short*</p>`
    } else if (pword.length >= 8 && pword.length < 12) {
        ms.innerHTML = `<p class="text-warning">*Good but need something more*</p>`;
    } else if (pword.length >= 12 && pword.length < 20) {
        ms.innerHTML = `<p class="text-success">*Password strong*</p>`
    } else {
        ms.innerHTML = `<p class="text-danger">*Not more than 20 character*</p>`
    }
});
password_re.addEventListener('keyup', () => {
    if (password.value == password_re.value){
        mss.innerHTML = `<p class="text-success">*Password match*</p>`
    } else {
        mss.innerHTML = `<p class="text-danger">*Password not match*</p>`
    }
});