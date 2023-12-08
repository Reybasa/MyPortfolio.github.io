function sendMail() {
    var params = {

        name: document.getElementById("name").value ,
        email:document.getElementById("email").value ,
        messages:document.getElementById("message").value ,
    };

    const serviceID = "service_r9gmf22";
    const templateID = "template_mi5k33t";
    
    emailjs
        .send(serviceID,templateID,params)
        .then{ res =>{
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
    
            console.log(res);
            alert("Your messages sent succesfully")
        }}
        .catch((err) => console.log(err));
}