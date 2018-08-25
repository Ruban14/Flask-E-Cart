function validate() {
    var pass = document.getElementById("password").value;
    var cpass = document.getElementById("cpassword").value;
    if (pass == cpass) {
        return true;
    } else {
        alert("Passwords do not match");
        return false;
    }
    if (pass.length<8){
        alert("must be in 8 char")
    }else{
        
    }
}


