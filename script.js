document.querySelector('#register-btn').addEventListener('click', function(event){
    //предотвращаем отправку формы
    event.preventDefault();

    //получаем значения из input-ов
    const username = document.querySelector('#username').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    alert(`Логін: ${username}\nЕлектронна пошта: ${email}\nПароль: ${password}`);
});