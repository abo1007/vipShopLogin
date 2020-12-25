const login1 = document.querySelector('#login1');
const login2 = document.querySelector('#login2');

const w1 = document.querySelector('#w1');
const w2 = document.querySelector('#w2');


login1.onclick = () => {
    w1.style.display = 'none';
    w2.style.display = 'block';
    login1.className = "login-active";
    login2.className = '';
}

login2.onclick = () => {
    w2.style.display = 'none';
    w1.style.display = 'block';
    login2.className = "login-active";
    login1.className = '';
}


const phonenum = document.querySelector('#phonenumber');
const password = document.querySelector('#password');

const numMsg = document.querySelector('#num-msg');
const pasMsg = document.querySelector('#pas-msg');

const btn1 = document.querySelector('#btn1');

const PhoneReg = /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
const PassReg = /^[a-zA-Z0-9]{6,20}$/;

phonenum.onblur = () => phoneTest();
password.onblur = () => passTest();

function phoneTest() {
    let Isphone = PhoneReg.test(phonenum.value);
    if(!Isphone){
        numMsg.innerHTML = "请检查您的手机号码！";
        phonenum.className = "warning";
    }else{
        numMsg.innerHTML = "";
        phonenum.className = "";
    }
    return Isphone;
}
function passTest() {
    let Ispass = PassReg.test(password.value);
    if(!Ispass){
        pasMsg.innerHTML = "请检查您的密码格式！";
        password.className = "warning";
    }else{
        pasMsg.innerHTML = "";
        password.className = "";
    }
    return Ispass;
}

btn1.onclick = () => {
    if(phoneTest() && passTest()){
        alert('登陆成功!');
        window.location.href = './index.html'
    }
}