window.onload = function() {
    disableExpDateField();
    panFontSize();
    checkErrors();

    let panInput = document.querySelector("#pan");
    let panInputWrapper = document.querySelector(".pan-block .wrapper-input")
    let expDateBlock = document.querySelector(".expDate-block");
    let expMonth = document.querySelector("#expMonth");
    let expYear = document.querySelector("#expYear");
    let cvvInput = document.querySelector("#cvv2");
    let cvvInputWrapper = document.querySelector(".cvv2-block .wrapper-input");

    panInput.addEventListener("input", () => {
        panInputWrapper.style.boxShadow = "0 0 0 1px #C9C9C9";  
        panInputWrapper.style.border = "1px solid #C9C9C9";
        if (window.screen.availWidth < 600) {
            panInputWrapper.style.boxShadow = "none";
        }
    })

    panInput.addEventListener("focus", () => {
        panInputWrapper.style.boxShadow = "0 0 0 1px #C9C9C9";
        panInputWrapper.style.border = "1px solid #C9C9C9";
        if (window.screen.availWidth < 600) {
            panInputWrapper.style.boxShadow = "none";
        }
    })

    panInput.addEventListener("blur", () => {
        panInputWrapper.style.boxShadow = "none";
        panInputWrapper.style.border = "1px solid #C9C9C9";
    })


    expMonth.addEventListener("input", () => {
        expDateBlock.style.boxShadow = "0 0 0 1px #C9C9C9";  
        expDateBlock.style.border = "1px solid #C9C9C9";
        if (window.screen.availWidth < 600) {
            expDateBlock.style.boxShadow = "none";
        }
    })

    expMonth.addEventListener("focus", () => {
        expDateBlock.style.boxShadow = "0 0 0 1px #C9C9C9";  
        expDateBlock.style.border = "1px solid #C9C9C9";
        if (window.screen.availWidth < 600) {
            expDateBlock.style.boxShadow = "none";
        }
    })

    expMonth.addEventListener("blur", () => {
        expDateBlock.style.boxShadow = "none";
        expDateBlock.style.border = "1px solid #C9C9C9";
    })

    expYear.addEventListener("input", () => {
        expDateBlock.style.boxShadow = "0 0 0 1px #C9C9C9";  
        expDateBlock.style.border = "1px solid #C9C9C9";
        if (window.screen.availWidth < 600) {
            expDateBlock.style.boxShadow = "none";
        }
    })

    expYear.addEventListener("focus", () => {
        expDateBlock.style.boxShadow = "0 0 0 1px #C9C9C9";  
        expDateBlock.style.border = "1px solid #C9C9C9";
        if (window.screen.availWidth < 600) {
            expDateBlock.style.boxShadow = "none";
        }
    })

    expYear.addEventListener("blur", () => {
        expDateBlock.style.boxShadow = "none";
        expDateBlock.style.border = "1px solid #C9C9C9";
    })


    cvvInput.addEventListener("input", () => {
        cvvInputWrapper.style.boxShadow = "0 0 0 1px #C9C9C9";  
        cvvInputWrapper.style.border = "1px solid #C9C9C9";
        if (window.screen.availWidth < 600) {
            cvvInputWrapper.style.boxShadow = "none";
        }
    })

    cvvInput.addEventListener("focus", () => {
        cvvInputWrapper.style.boxShadow = "0 0 0 1px #C9C9C9";  
        cvvInputWrapper.style.border = "1px solid #C9C9C9";
        if (window.screen.availWidth < 600) {
            cvvInputWrapper.style.boxShadow = "none";
        }
    })

    cvvInput.addEventListener("blur", () => {
        cvvInputWrapper.style.boxShadow = "none";
        cvvInputWrapper.style.border = "1px solid #C9C9C9";
    })
};

function checkMaxLength(elem, event){

    let ml = elem.getAttribute('maxlength');
    let inputs = document.querySelectorAll('input');
    
    for (let i = 0; i < inputs.length - 1; i++ ) {
        if (elem == inputs[i]) {
            if(ml && elem.value.length >= ml && event.keyCode != '37' && event.keyCode != '39') {
                elem = inputs[i + 1];
            }
            elem.focus();
        }
    }
}

function panMask(event, elem) {

    elem.value = elem.value.replace(/[^0-9]/g, '').replace(/(\..*?)\..*/g, '$1');

    let cardNumber = event.target.value.replace(/\s/g, '');
    let formattedCardNumber = cardNumber.slice(0, 16).replace(/(\d{4})(?=\d)/g, '$1 ');
    formattedCardNumber += cardNumber.slice(16);
    event.target.value = formattedCardNumber;

    if (window.screen.availWidth > 600) {
        if (elem.value.length > 19) {
            elem.style.fontSize = "31.9px";
            elem.style.letterSpacing = "0.03ch"
        } else if (elem.value.length <= 19) {
            elem.style.fontSize = "36px";
            elem.style.letterSpacing = "0.065ch";
        }
    } else if (window.screen.availWidth > 360) {
        if (elem.value.length > 19) {
            elem.style.fontSize = "20px";
            elem.style.letterSpacing = "0.04ch";
        } else if (elem.value.length <= 19) {
            elem.style.fontSize = "22px";
            elem.style.letterSpacing = "0.103ch";
        }
    } else {
        if (elem.value.length > 19) {
            elem.style.fontSize = "17.6px";
            elem.style.letterSpacing = "0.04ch";
        } else if (elem.value.length <= 19) {
            elem.style.fontSize = "19.5px";
            elem.style.letterSpacing = "0.103ch";
        }
    }
}

function panFontSize() {
    let panInput = document.getElementById("pan");
    if (window.screen.availWidth > 600) {
        if (panInput.value.length > 19) {
            panInput.style.fontSize = "31.9px";
            panInput.style.letterSpacing = "0.03ch"
        } else if (panInput.value.length <= 19) {
            panInput.style.fontSize = "36px";
            panInput.style.letterSpacing = "0.065ch";
        }
    } else if (window.screen.availWidth > 360) {
        if (panInput.value.length > 19) {
            panInput.style.fontSize = "20px";
            panInput.style.letterSpacing = "0.04ch";
        } else if (panInput.value.length <= 19) {
            panInput.style.fontSize = "22px";
            panInput.style.letterSpacing = "0.103ch";
        }
    } else {
        if (panInput.value.length > 19) {
            panInput.style.fontSize = "17.6px";
            panInput.style.letterSpacing = "0.04ch";
        } else if (panInput.value.length <= 19) {
            panInput.style.fontSize = "19.5px";
            panInput.style.letterSpacing = "0.103ch";
        }
    }
}

window.addEventListener('resize', () => {
    panFontSize();
});

function pressEnter(event, elem) {
    let inputs = document.querySelectorAll('input');
    if(event.keyCode === 13) {
        for (let i = 0; i < inputs.length - 1; i++ ) {
            if (elem == inputs[i]) {
                event.preventDefault();
                elem = inputs[i + 1];
                elem.focus();
                break;
            }
        }
    }
}

function checkErrors() {
    let panInput = document.querySelector("#pan");
    let panInputWrapper = document.querySelector(".pan-block .wrapper-input")
    let expDateBlock = document.querySelector(".expDate-block");
    let cvvInput = document.querySelector("#cvv2");
    let cvvInputWrapper = document.querySelector(".cvv2-block .wrapper-input");
    let expMonth = document.querySelector("#expMonth");

    let inputs = [ panInputWrapper, expDateBlock, cvvInputWrapper ];

    let errors = document.querySelectorAll(".group-error");
    
    for (let i = 0; i < errors.length; i++) {
        if (errors[i].innerHTML != '') {
            inputs[i].style.border = "1px solid #E0001A";
            inputs[i].style.boxShadow = "0 0 0 1px #E0001A";
            if (window.screen.availWidth < 600) {
                inputs[i].style.boxShadow = "none";
            }
        }
    }
    
    if (!errors[0].innerHTML && !errors[1].innerHTML && !errors[2].innerHTML) {
        panInputWrapper.style.border = "1px solid #CCCCCC";
        panInputWrapper.style.boxShadow = "0 0 0 1px #CCCCCC";
        if (window.screen.availWidth < 600) {
            panInputWrapper.style.boxShadow = "none";
        }
    }

    for (let i = errors.length - 1; i >= 0; i--) {
        if (errors[i].innerHTML != '') { 
            if (i == 1) {
                expMonth.focus();
            } else if (i == 0) {
                panInput.focus();
            } else {
                cvvInput.focus();
            }
        }
    }
}

function disableExpDateField() {
    let inline = document.getElementById('inline');
    let expMonth = document.getElementById('expMonth');
    let expYear = document.getElementById('expYear');
    if (expMonth.disabled || expYear.disabled) {
        inline.style.backgroundColor = "#F0F0F0";
    }
}