let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let item = "";


let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.first_name} ${tg.initDataUnsafe.user.last_name}`;


let titleInput = document.getElementById("title");
let textInput = document.getElementById("text");
let daysInput = document.getElementById("days");
let timeInput = document.getElementById("time");
let saveButton = document.getElementById("saveButton");

function checkForm() {
    if (titleInput.value && textInput.value && daysInput.value && timeInput.value) {
        saveButton.style.display = "block";
        tg.MainButton.setText("Отправить данные");
        item = JSON.stringify({
            title: titleInput.value,
            text: textInput.value,
            days: daysInput.value,
            time: timeInput.value
        });
        tg.MainButton.show();
    } else {
        saveButton.style.display = "none";
        tg.MainButton.hide();
    }
}

titleInput.addEventListener("input", checkForm);
textInput.addEventListener("input", checkForm);
daysInput.addEventListener("input", checkForm);
timeInput.addEventListener("input", checkForm);

saveButton.addEventListener("click", function() {
    tg.sendData(item);
});

Telegram.WebApp.onEvent("mainButtonClicked", function(){
    tg.sendData(item);
});
