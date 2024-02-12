let profilePic =document.getElementById("profile-pic")
let inputFile =document.getElementById("input-file")
console.log("this is the coll one")

 //inputFile.onchange = function(){
 //    profilePic.src = URL.createObjectURL(inputFile.files[0])
 //}




document.querySelector(".studentlogin").addEventListener("click", function(event) {
    console.log("This is it");
    event.preventDefault();
   
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;
   
    console.log({password, email});



    fetch(`${BASE_URL}/login`, {
        method: "POST",
        body: JSON.stringify(data),
        headers:{
            "Content-Type":"application/json"
        }
      
    })
});
