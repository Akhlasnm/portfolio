function sendmail(){
    var params={
        name: document.getElementById("name").value,
        email: document.getElementById("contmail").value,
       message: document.getElementById("mesg").value,
    };
const serviceid ="service_0yf9h5h";
const templateid ="template_m4c002h";


emailjs.send(serviceid,templateid,params)
.then(
    res =>{
        document.getElementById("name").value ="";
        document.getElementById("contmail").value ="";
        document.getElementById("mesg").value ="";
        console.log(res);
        alert("Your Message sent successfully");
    }
)
.catch((err) => console.log(err));
}