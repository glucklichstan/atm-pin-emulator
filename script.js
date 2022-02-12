// let attemptCount = document.getElementById('attepmptsId');
// let button = document.getElementById('buttonId');
// let pinInputs = document.getElementById('pinId').value;
// let wholeString = document.getElementById('stringId');

// document.getElementById('buttonId').addEventListener('click', ()=>{
//     let pinInputs = document.getElementById('pinId').value;
//     let attemp = 0;
//     let pin = "1111";
//     var count = 3;
// })

function formInfo(el) {
    var pinInputs = el.pinId.value;
    document.getElementById('attepmptsId').innerHTML = pinInputs;

    let pin = "1111";

        if (pinInputs === pin) {
            document.getElementById('stringId').textContent = 'SUCCESS!';
        } else {
            console.log("Card is locked! Try to get more information later.");
        }
}


















// let attemp = 0;
// let pin = "1111";
// var count = 3;

// do {

//     let pinEnter = 0;
//     if (pinEnter === pin) {
//         countingAttempts.style.color = "red";
//         break;
//     } else {
//         //("Try again");
//         attemp++;
//         count--;

//         countingAttempts.textContent = count;

//         if (attemp == 3) {
//             //("Card is locked! Try to get more information later.");
//         }
//     }
// } while (attemp < 3);
