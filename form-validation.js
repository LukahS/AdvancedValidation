function validate(){
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var userLen = userEntered.length;
  var passEntered = document.getElementById("pass").value;
  var passLen = passEntered.length;

  //Show message that there is an error with the username...
  if(userLen < 6){
  document.getElementById("usernameError").innerHTML="Bad username.";
  document.getElementById("usernameError").classList.remove("hidden-message");
  document.getElementById("usernameError").classList.add("shown-message");
  //Turn the username items red
  document.getElementById("usernameGroup").classList.add("has-error");
  }
  if(userLen >= 6){
	  document.getElementById("usernameGroup").classList.add("has-success");
  }

  //Show message that there is an error with the password...
  if(passEntered.toLowerCase() == "password"){
  document.getElementById("passwordError").innerHTML="Bad password.";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
  //Turn the password items red
  document.getElementById("passwordGroup").classList.add("has-error");
  }
  if(passEntered == userEntered){
  document.getElementById("passwordError").innerHTML="Password cannot be same as username.";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
  document.getElementById("passwordGroup").classList.add("has-error");
  }
  if(userEntered.includes(" ")){
  document.getElementById("usernameError").innerHTML="Username cannot contain a space.";
  document.getElementById("usernameError").classList.remove("hidden-message");
  document.getElementById("usernameError").classList.add("shown-message");
  document.getElementById("usernameGroup").classList.add("has-error");
  }

  if(passLen > 20){
  document.getElementById("passwordError").innerHTML="Password must be less than 20 characters.";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
  document.getElementById("passwordGroup").classList.add("has-error");
  }

  if(passLen < 6){
  document.getElementById("passwordError").innerHTML="Password must be at least 6 characters.";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
  document.getElementById("passwordGroup").classList.add("has-error");
  }
  if(passEntered.toLowerCase() != "password" && passLen >= 6 && passLen <= 20 && passEntered != userEntered){
	  document.getElementById("passwordGroup").classList.add("has-success");
  }
}
