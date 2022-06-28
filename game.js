const main = document.querySelector("#main");

const dragon = document.querySelector(".dragon");
const crossbow = document.querySelector(".crossbow");
const shield = document.querySelector(".shield");

const rules = ["dragon", "crossbow", "shield"];

function computerPlay() {
    const rnd = Math.floor(Math.random() * rules.length);
    return rules[rnd];
}

dragon.addEventListener("click", () => {
    dragon.classList.add("shake");
})

crossbow.addEventListener("click", () => {
    crossbow.classList.add("shake");
})

shield.addEventListener("click", () => {
    shield.classList.add("shake");
})

function game(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "tie";
    }

    else if (playerSelection == "dragon") {
        if (computerSelection == "crossbow") {
            return "lose";
        }
        return "win";
    }

    else if (playerSelection == "crossbow") {
        if (computerSelection == "shield") {
            return "lose";
        }
        return "win";
    }

    else if (playerSelection == "shield") {
        if (computerSelection == "dragon") {
            return "lose";
        }
        return "win";
    }
}

const result = document.createElement("div");
const pc = document.createElement("div");
result.classList.add("result");
pc.classList.add("pc");

const playAgain = document.createElement("button");
playAgain.innerHTML = "Play Again";
playAgain.addEventListener("click", () => location.reload());

const dragonSrc = "media/dragon.png";
const crossbowSrc = "media/crossbow.png";
const shieldSrc = "media/shield.png";

const pcDragon = document.createElement("img");
pcDragon.src = dragonSrc;
pcDragon.classList.add("pc");

const pcCrossbow = document.createElement("img");
pcCrossbow.src = crossbowSrc;
pcCrossbow.classList.add("pc");

const pcShield = document.createElement("img");
pcShield.src = shieldSrc;
pcShield.classList.add("pc");

const win = "WIN";
const lose = "LOSE";
const tie = "TIE";

dragon.addEventListener("transitionend", () => {
    crossbow.classList.add("invisible");
    shield.classList.add("invisible");
    main.appendChild(result);
    main.appendChild(pc);

    pcChoice = computerPlay();
    if(pcChoice == "dragon") {
        pc.appendChild(pcDragon);
        pcDragon.classList.add("shake");
        setTimeout(() => {
            result.innerHTML = tie;
            result.appendChild(playAgain);
        }, 800);
    }
    else if(pcChoice == "crossbow") {
        pc.appendChild(pcCrossbow);
        pcCrossbow.classList.add("shake");
        setTimeout(() => {
            result.innerHTML = lose;
            result.appendChild(playAgain);
        }, 800);
    }
    else if(pcChoice == "shield") {
        pc.appendChild(pcShield);
        pcShield.classList.add("shake");
        setTimeout(() => {
            result.innerHTML = win;
            result.appendChild(playAgain);
        }, 800);
    }
})