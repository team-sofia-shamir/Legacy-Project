// if (userMessage.trim() === "") {
//     alert("Please enter a text message");
//       return;
//      }

// const trimMessage = userMessage.trim();
// if(trimMessage!== ""){
//   alert("Please enter a message");
//    //clear the input field after error
// }
document.getElementById('message').value="";
// get value of input field by id
let userInput = document.getElementById("userInput").value;
let trimMessage = userInput.trim();

if (trimMessage ==="") {
  alert("Please enter a message");
  document.getElementById('message').value = "";
  event.preventDefault();
  return;


}
