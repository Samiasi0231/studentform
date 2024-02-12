

 document.querySelector(".regform").addEventListener("submit", function(event) {
    console.log("This is it")
    event.preventDefault();
    const email= document.getElementById("email").value
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value
    const firstname = document.getElementById("firstname").value
    const lastname = document.getElementById("lastname").value
    const gender = document.getElementById("gender").value
    const department = document.getElementById("department").value
    const data ={username,password,firstname,lastname,gender,department}

    
    fetch(`${BASE_URL}/signup`, {
        method: "POST",
        body: JSON.stringify(data),
        headers:{
            "Content-Type":"application/json"
        }
      
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.location.href="http://127.0.0.1:5501/Login.html"
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
