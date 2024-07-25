const passwordbox  =document.getElementById("Password")
const length = 12;
const uppercase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercase = "abcdefghijklmnopqrstuvwxyz"
const number = "0123456789"
const symbol = "@#$%^&*()+~{}[]<>?-="
const chars =  uppercase + lowercase + number + symbol

function createpass(){
    let password = "";
    password += uppercase[Math.floor(Math.random()*uppercase.length)];
    password += lowercase[Math.floor(Math.random()* lowercase.length)];
    password += number[Math.floor(Math.random()* number.length)];
    password += symbol[Math.floor(Math.random()* symbol.length)];


    while(length > password.length){
        password += chars [Math.floor(Math.random()* chars .length)];

    }
    passwordbox.value = password;


}
function copypass(){
    passwordbox.select();
    document.execCommand("copy")

}