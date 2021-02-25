const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click',()=> {
    navbarLinks.classList.toggle('active')
})

/* function to validate the form on contact page  */
function check(){

    /*  setting variables */
  var UserEmail = document.getElementById('Umail').value;
  var UserName = document.getElementById('Uname').value;
  var TextField = document.getElementById('text-message').value;
  var number = document.getElementById('Utel').value;
  var country = document.getElementById('country').value;
  var mailvalid = /^\S+@\S+\.\S+$/;
  var numbvalid = /^[0-9]\d{9}$/;

    /*  error or success messages when submitting */
  var errormessage = "";
  var successmessage ="Submitted: \n " ;


    /* user Name validation by checking if field is empty  */
  if(UserName == ""){
    errormessage += "Enter your name \n";
    document.getElementById('Uname').style.backgroundColor = "red";
    document.getElementById('Uname').style.color = "white";
    
  }
      else{
        document.getElementById('Uname').style.backgroundColor = "lightgreen";
        successmessage += "Name:     " + UserName + "\n";
      }

      /* user Email validation   */

  if(UserEmail == ""){
    errormessage += "Enter your email \n";
    document.getElementById('Umail').style.backgroundColor = "red";
    document.getElementById('Umail').style.color = "white";
    
  }
        else{
          successmessage += " Email:      "+ UserEmail +"\n";
          document.getElementById('Umail').style.backgroundColor = "lightgreen";
        }

     /* email validation using expression*/
     
     if(!mailvalid.test(UserEmail)){
       errormessage += "Enter correct email format \n"; 
       document.getElementById('Umail').style.backgroundColor = "red";
        document.getElementById('Umail').style.color = "white";
     }
     


        /*  User number validation */

  if(number == ""){
    errormessage += "Enter your number \n";
    document.getElementById('Utel').style.backgroundColor = "red";
    document.getElementById('Utel').style.color = "white";
    
  }
       else{
        successmessage += " Tel:      \t  "+ number +"\n";
        document.getElementById('Utel').style.backgroundColor = "lightgreen";
      }

  /* check number if it starts with 0 */
  if( number[0] != 0 ){
    errormessage += "The number must start with 0  \n"
    document.getElementById('Utel').style.backgroundColor = "red";

  }
  /* check number to see if it meets 10 digit requirement and numeric values*/

  if(!numbvalid.test(number)){
    errormessage += "Number incorrect length(10 digits) or is not numerical values\n"
    document.getElementById('Utel').style.backgroundColor = "red";
  }

        /*User country validation   */

  if(country == ""){
      errormessage += "Select a country \n";
      document.getElementById('country').style.backgroundColor = "red";
      document.getElementById('country').style.color = "white";
      
    }
        else{
          successmessage += " Country:  "+ country+"\n";
          document.getElementById('country').style.backgroundColor = "lightgreen";
        }


        /* Check if text field is empty  */

  if(TextField == ""){
    errormessage += "Type a message \n";
    document.getElementById('text-message').style.backgroundColor = "red";
    document.getElementById('text-message').style.color = "white";
    
  }
        else{
          successmessage +=  "Message:  "+ TextField +"\n";
          document.getElementById('text-message').style.backgroundColor = "lightgreen";
        }
  

        /*  check to see if error message is blank if so display error if not display success */

  if(errormessage != ""){
    alert("error: \n".concat(errormessage));
    return false;
    
  }
  else{
    alert(successmessage);
    return true;
  }

}




