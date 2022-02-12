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

document.getElementById('buttonId').onclick = function myPin() {
    let pin = '1234';
    let pinEnter = document.getElementById('pinId').value;
    console.log(pinEnter);
    if (pinEnter == pin) {
        document.getElementById('stringId').textContent = 'Success';
        document.getElementById('stringId').style.color = 'green';
        setTimeout(function() {
            // Do something after 5 seconds
            location.reload();//reload page
      }, 500);
    } else {
        document.getElementById('stringId').textContent = 'Wrong PIN. Page will reload now.';
        document.getElementById('stringId').style.color = 'red';
        document.getElementById('main-form').style.display = 'none';
        setTimeout(function() {
            // Do something after 5 seconds
            location.reload();//reload page
      }, 2000);

        
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
