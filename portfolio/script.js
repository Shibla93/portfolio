function sendmail(){
    let parms={
        name:document.getElementById("name").Value,
        email:document.getElementById("email").Value,
        mobilenumber:document.getElementById(" mobile number").Value,
        subject:document.getElementById("subject").Value,
        
    }
emailjs.send("service_ocia96w","template_trcn1nm",parms).then(alert("Email Sent!!!"))
}