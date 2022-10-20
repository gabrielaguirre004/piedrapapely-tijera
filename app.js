const ROCA ="roca";
const PAPEL ="papeL";
const TIJERAS ="tijeras";

const EMPATE = 0;
const GANASTE = 1;
const PERDISTE = 2;

let isPlaying = false;

const rocaBtn = document.getElementById("roca");
const papelBtn = document.getElementById("papel");
const tijerasBtn = document.getElementById("tijeras");
const resultText = document.getElementById("start-text");
const userImg = document.getElementById("user-img");
const machineImg = document.getElementById("machine-img");

rocaBtn.addEventListener("click", () => {
    play(ROCA);
});
papelBtn.addEventListener("click", () => {
    play(PAPEL);
});
tijerasBtn.addEventListener("click", () => {
    play(TIJERAS);
});

function play(userOption) {
    if(isPlaying) return;

    isPlaying = true;

    userImg.src = "img/" + userOption + ".svg";

    resultText.innerHTML = "PENSANDO!";

    const interval = setInterval(function(){
        const machineOption = calcMachineOption();
        machineImg.src = "img/" + machineOption + ".svg";
    }, 200);

    setTimeout(function () {

        clearInterval(interval);

        const machineOption = calcMachineOption();
        const result = calcResult(userOption, machineOption);

        machineImg.src = "img/" + machineOption + ".svg";

        switch (result) {
            case EMPATE:
                resultText.innerHTML = "EMPATE!";
                break;
            case GANASTE:
                resultText.innerHTML = "GANASTE!";
                break;
            case PERDISTE:
                resultText.innerHTML = "PERDISTE!";
                break;
        }
        isPlaying = false;
    }, 2000);
}

function calcMachineOption() {
    const number = Math.floor(Math.random() * 3);
    switch (number) {
        case 0:
            return ROCA;
        case 1:
            return PAPEL;
        case 2:
            return TIJERAS;
    }
}

function calcResult(userOption, machineOption) {
    if (userOption === machineOption) {
        return EMPATE;

    } else if (userOption === ROCA) {

        if (machineOption === PAPEL) return PERDISTE;
        if (machineOption === TIJERAS) return GANASTE;

    } else if (userOption === PAPEL) {

        if (machineOption === TIJERAS) return PERDISTE;
        if (machineOption === ROCK) return GANASTE;

    } else if (userOption === TIJERAS) {

        if (machineOption === ROCA) return PERDISTE;
        if (machineOption === PAPEL) return GANASTE;

    }
}