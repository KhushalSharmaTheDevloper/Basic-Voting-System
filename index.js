function StoreItems(){
    CN = document.querySelector("#C-id");
    localStorage.setItem("Chosen Canditate Name:" , CN.value)
    Voted_For = localStorage.getItem(CN.value);
    var CONFORM = confirm("Are You Sure About Your Response?")
    if (CONFORM){
        alert("Vote Recorded")
        document.write("Your Vote Was Given To","  " , CN.value)
        //window.close()
    }else {
        alert("Canceled Vote.")
        CN = document.querySelector("#C-id");
        localStorage.removeItem(CN)
        return
        
    }
    alert("Thank You For Your Responce. Your Name Was recorded.")

}

function VCHECK() {
    let voterid = [1,2,3];
    let VID = document.querySelector("#v-id").value;
    
    if (voterid.includes(VID)){
        alert("Voter Id Found. You Can Vote Now")
        console.log(VID)

    }else {
        alert ("Voter Id Wrong....... Contact Khushal If This Repeats.")
        console.log(VID)
       

    }
}