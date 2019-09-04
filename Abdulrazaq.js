function formsub(){

 let name = document.querySelector('#name');
 nameValue = name.value;

 let email = document.querySelector('#email');
emailValue =email.value;

 const namePattern = /^[a-zA-Z]{4,}[ \-a-zA-Z]{4,}$/i;
 
 if(!namePattern.test(nameValue)){
   alert("I expect a name with more than 4 characters and space between the first name and Last Name, darling!");
   
 }
 else {
  
}

}

function openForm() {

  document.getElementById("myForm").style.display = "block";
}

function closeForm(){

  document.getElementById("myForm").style.display = "none";
}
let form = document.querySelector(".form-container");


