var accounts = [
    {
        username: "ryan",
        password: "hulke1"
    },
    {
        username: "test",
        password: "test1"
    }
]

var creatingAcc = false;
var usernameTaken = false;
var signingIn = true;
var currentUser = "";

function signIn(){
    var checkUsername = document.getElementById("username").value;
    var checkPassword = document.getElementById("password").value;
    if (creatingAcc ==false){
        for (var i = 0; i<accounts.length; i++){
            if (checkUsername == accounts[i].username && checkPassword == accounts[i].password) {
                currentUser = checkUsername;
                window.location.assign("./BracketPage.html");
                document.querySelector('#username').innerHTML(currentUser);
                break;
            }   
        }
        if (currentUser != checkUsername){
            alert("The username or password is incorrect");
        }
    }else {
        var checkConfPass = document.getElementById("confirmPass").value;
        for (var e = 0; e<accounts.length; e++){
            if (checkUsername == accounts[e].username) {
                usernameTaken = true;
                break;
            }   
        } 
        if (checkConfPass == checkPassword && usernameTaken == false){
            accounts.push({username: checkUsername, password: checkPassword})
            currentUser = checkUsername;
            window.location.replace("./BracketPage.html");
        } else if (checkConfPass != checkPassword){
            alert("The passwords do not match");
        } else {
            usernameTaken = false;
            alert("Username is already in use");
        }
    }
}
function createAccount(){
    creatingAcc  = true;
    document.getElementById("loginEl").style.display = "none";
    document.getElementById("createAccEl").style.display = "block";
    document.getElementById("confirmPass").style.display = "block";
    document.getElementById("enter").style.top = "270px";
    document.getElementById('createAcc').remove();
}