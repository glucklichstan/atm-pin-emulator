//var countingAttempts = document.getElementById('attepmptsId');

document.getElementById('buttonId').onclick = myClick;

function myClick() {
    let recivePin = document.getElementById('pinId').value;
    console.log(recivePin);
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
