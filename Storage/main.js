UI = prompt("Welcome To Data Base, Enter UserName To Continew")
const wrapper = document.getElementById("wrapper")
        wrapper.innerHTML = ("ENTER CORRECT PASSWOID TO SEE THIS SECTION...... ")
if (UI == "khushal is good boy and very best coder with some techincal skills."){
    alert("User Found....... Enter Passcode.")
    passcode_FOR_user = prompt("Enter Password Below.")
    if (passcode_FOR_user == "2227C") {
        alert("password Is Correct.")
        const wrapper = document.getElementById("wrapper")
        
        wrapper.innerHTML = ("Check Consle.")
    }

    else{
        alert("password is incorrect.")
        const wrapper = document.getElementById("wrapper")
        wrapper.innerHTML = ("ENTER CORRECT PASSWOID TO SEE THIS SECTION...... ")
    }

}else {
    alert("Nice Try But Wrong.")
    const wrapper = document.getElementById("wrapper")
        wrapper.innerHTML = ("ENTER CORRECT PASSWOID TO SEE THIS SECTION...... ")
    
}