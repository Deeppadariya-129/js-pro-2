let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let specialchar = "~!@#$^&*_"

//selctors
const PasswordBox = document.getElementById("pass-area")
const total_num_length = document.getElementById("num");
const upperInput = document.getElementById("upp-case");
const lowerInput = document.getElementById("low-case");
const numInput = document.getElementById("number");
const specialCharInput = document.getElementById("symbol")


const getRandomdata = (dataset) => {
    return dataset[Math.floor(Math.random()*dataset.length)];
}

const generatePassword = (password="") => {
    if(upperInput.checked){
        password += getRandomdata(uppercase);
    }
    if(lowerInput.checked){
        password += getRandomdata(lowercase);
    }
    if(numInput.checked){
        password += getRandomdata(numbers);
    }
    if(specialCharInput.checked){
        password += getRandomdata(specialchar);
    }
    if(password.length < total_num_length.value){
        return generatePassword(password);
    }
    PasswordBox.value=trimlength(password,total_num_length.value);
     
    
}

//truncate String  function 
function trimlength(str,num){
    if(str.length > num){
        let substr = str.substring(0,num);
        return substr
    }
    else{
        return str;
    }
}


document.getElementById("btns").addEventListener('click',()=> {
    generatePassword()
})

