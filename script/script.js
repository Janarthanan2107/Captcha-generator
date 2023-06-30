// Using javascript file as strict file change the silent errors into throwable errors
'use strict';

//selecting every elements from the html file

//inputs
const generateEl = document.getElementById('generate');
const inputEl = document.getElementById('input');
const checkEl = document.getElementById('check');

//outputs
const captchaEl = document.getElementById('captcha');
const msgContainer = document.getElementById('message-container');
const msg = document.getElementById('message');

//global variable
let captcha = "";

//functions
const generateCaptcha = () => {
    let captcha1stChar = getRandomAlphabets()
    let captcha2stChar = getRandomAlphabets() + getRandomNumber()
    let captcha3ndChar = getRandomAlphabets() + getRandomNumber() + getRandomAlphabets()
    captcha = captcha1stChar.toLowerCase() + captcha2stChar.toUpperCase() + captcha3ndChar.toLowerCase()
    console.log(captcha)

    captchaEl.innerText = captcha;
}

//getting random captchas
const getRandomNumber = () => {
    // Math.random() * 100 => now the range will become 0 to 99.9999999999.....
    // Math.random() * 100 + 1 => now the range will become 1 to 100.9999999.....
    // Math.trunc(Math.random() * 100) => trunc method is for hiding the decimal points.

    // result range is 1 to 100 
    return Math.trunc(Math.random() * 9 + 1)
}

const getRandomAlphabets = () => {
    // method for generating random alphabets referred from google
    return String.fromCharCode(Math.trunc(Math.random() * 26 + 65))
}

// initial function
const init = () => {
    console.log("Captcha has generated!!")
    generateCaptcha()
}

//events
generateEl.addEventListener("click", function () {
    console.log("Captcha has re-generated")
    generateCaptcha()
})

checkEl.addEventListener("click", function () {
    console.log("its getting validation")

    const userInput = inputEl.value;
    console.log(userInput)
    if (userInput === "") {
        console.log(null)
        msg.innerText = "Enter your captcha then validate!!"
        msg.classList.add("warn")
        msg.classList.remove("error")
        msg.classList.remove("success")
    } else if (userInput === captcha) {
        console.log(true)
        msg.classList.remove("warn")
        msg.classList.remove("error")
        msg.classList.add("success")
        msg.innerText = "Nice! You don't appear to be a robot."
    } else {
        console.log(false)
        msg.classList.remove("warn")
        msg.classList.add("error")
        msg.classList.remove("success")
        msg.innerText = "Captcha not matched. Please try again!"
    }
})

//initial settings
init();
