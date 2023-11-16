const myForm = document.getElementById('myForm');

const nameForm = document.getElementById('name');
const adressForm = document.getElementById('adress');
const phoneForm = document.getElementById('phone');

nameForm.addEventListener('input', (event) => {
    if (event.data === '.') {
        const pattern = /[.]/;
        nameForm.value = nameForm.value.replace(pattern, '');
    }
    if (nameForm.value.trim() === '') {
        nameForm.classList.add('red-border');
        nameForm.classList.remove('green-border');
    } else {
        nameForm.classList.remove('red-border');
        nameForm.classList.add('green-border');
    }
})
adressForm.addEventListener('input', () => {
    if (adressForm.value.trim() === '') {
        adressForm.classList.add('red-border');
        adressForm.classList.remove('green-border');
    } else {
        adressForm.classList.remove('red-border');
        adressForm.classList.add('green-border');
    }
})
phoneForm.addEventListener('input', () => {
    const arr = phoneForm.value.split('');
    if (phoneForm.value.trim() === ''
        || !validNumber(arr)
    ) {
        phoneForm.classList.add('red-border');
        phoneForm.classList.remove('green-border');
    } else {
        phoneForm.classList.remove('red-border');
        phoneForm.classList.add('green-border');
    }
})
function validNumber(arr) {
    let valid = true;
    arr.forEach(el => {
        if (typeof (+el) === 'number' && isNaN(+el)) {
            valid = false;
        }
    });
    return valid;
}
myForm.addEventListener('submit', function (event) {
    event.preventDefault();
    let message = '';
    if (
        myForm[0].value === ''
        || myForm[1].value === ''
        || myForm[2].value === ''
    ) {
        message = "Заказ не удался, все поля должны быть заполнены";
    }

    if (!validNumber(myForm[2].value.split(''))) {
        message.length ? message += ". Укажите корректный номер" : message = "Заказ не удался, укажите корректный номер";
    }
    setTimeout(() => {
        message.length ? errorSubmit(message) : submitForm();
    }, 1000);
});
function submitForm() {
    const data = {
        name: myForm[0].value,
        adress: myForm[1].value,
        phone: myForm[2].value
    }
    console.log({ data })
    formReset();
    alert('Спасибо за заказ');
}

function errorSubmit(message) {
    alert(message);
}

function formReset() {
    nameForm.value = '';
    nameForm.classList.remove('green-border');

    adressForm.value = '';
    adressForm.classList.remove('green-border');

    phoneForm.value = '';
    phoneForm.classList.remove('green-border');
}
