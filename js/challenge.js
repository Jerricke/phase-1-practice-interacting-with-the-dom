// creating the submit form function 

const btn = document.querySelector("#comment-form")

btn.addEventListener("submit", leaveComment)

function leaveComment(e) {
    e.preventDefault();

    const commentInput = document.querySelector("#comment-input");

    const newComment = document.createElement("p")
    newComment.textContent = commentInput.value;

    const commentsList = document.querySelector("#list")
    commentsList.appendChild(newComment)

    btn.reset();

}

//creating the timer 

const timeCounter = document.getElementById("counter");
let num = 0;
let likeCounterArray = [];

let counterVar = setInterval(adder, 1000)

function adder() {
    likeCounterArray.push(0)
    num ++
    timeCounter.textContent = num
    return num
}

//creating + - buttons

const minusBtn = document.getElementById("minus")
const plusBtn = document.getElementById("plus")

minusBtn.addEventListener('click', theMinus)

function theMinus() {
    num = num - 1
    timeCounter.textContent = num
}

plusBtn.addEventListener('click', thePlus) 

function thePlus() {
    num = num + 1
    timeCounter.textContent = num
}

//creating liker

const likerBtn = document.getElementById("heart")

likerBtn.addEventListener('click', likerFunction)

function likerFunction() {
    const likeList = document.querySelector('.likes')
    const likeTag = document.createElement('li')

    let i = num - 1;

    if (!likeCounterArray[i]) {
        likeCounterArray[i] = 1
        likeTag.id = `num${i}`
        likeTag.textContent = `${num} has been liked ${likeCounterArray[i]} times`
        likeList.appendChild(likeTag)
    } else {
        likeCounterArray[i] = likeCounterArray[i] + 1
        const specificNum = document.getElementById(`num${i}`)
        specificNum.textContent = `${num} has been liked ${likeCounterArray[i]} times`
    }
}

// creating pause / resume 

const pauseBtn = document.querySelector("#pause")

pauseBtn.addEventListener("click", pauseResume);

function pauseResume() {
    switch(pauseBtn.textContent) {
        case " pause " :
            clearInterval(counterVar);
            pauseBtn.textContent = " resume ";

            document.querySelector('#submit').disabled = true;
            minusBtn.disabled = true;
            plusBtn.disabled = true;
            likerBtn.disabled = true;

            break;
        case " resume ":
            counterVar = setInterval(adder, 1000)
            pauseBtn.textContent = " pause ";

            document.querySelector('#submit').disabled = false;
            minusBtn.disabled = false;
            plusBtn.disabled = false;
            likerBtn.disabled = false;

            break;
        default:
            console.log('it is not working');

    }

}