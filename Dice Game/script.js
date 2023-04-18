let dice = document.getElementById("dice");
let btn = document.getElementById("button");

btn.addEventListener('click', runDice);

function runDice() {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    console.log(randomNumber);
    console.log(typeof(randomNumber));

    // let ele = document.querySelector(".fa-solid");
    // dice.removeChild(ele);

    switch (randomNumber) {
        case 1:
            dice.innerHTML = "<i class=\"fa-solid fa-dice-one\"></i>";
            console.log(dice);
            break;

        case 2:
            dice.innerHTML = "<i class=\"fa-solid fa-dice-two\"></i>";
            console.log(dice);
            break;

        case 3:
            dice.innerHTML = "<i class=\"fa-solid fa-dice-three\"></i>";
            console.log(dice);
            break;

        case 4:
            dice.innerHTML = "<i class=\"fa-solid fa-dice-four\"></i>";
            console.log(dice);
            break;

        case 5:
            dice.innerHTML = "<i class=\"fa-solid fa-dice-five\"></i>";
            console.log(dice);
            break;

        default:
            dice.innerHTML = "<i class=\"fa-solid fa-dice-six\"></i>";
            console.log(dice);
    }

}