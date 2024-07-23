(function () {
  emailjs.init("Fayknh55QOt3v0T7p");
})();

function sendEmail() {
    var emailtemplate="template_td6s668"
  var email = document.getElementById("email").value;
  console.log(email);
  var serviceid="service_xnorl6j"; 
  var emailparameters = {
    to_email: email,
    subject: "see more information about how to save earth",
    message:
      "Here are some environmental charities and organizations worth supporting:" +
      " 1.Sierra Club Foundation: A grassroots environmental organization. \n" +
      "2.Greenpeace: One of the best-known environmental NGOs. \n" +
      "3.National Resources Defense Council: Provides legal support for environmental causes. \n" +
      "4.Earthjustice: Advocates for environmental protection through legal means. \n" +
      "5.National Geographic Society: Funds conservation, research, and journalism. \n",

    image_art: "https://th.bing.com/th/id/OIP.SyaC9TKQeN7o7gdNd0CGYAHaDZ?w=299&h=160&c=7&r=0&o=5&dpr=2&pid=1.7",
  };
  emailjs.send(serviceid,emailtemplate,emailparameters).then(function(response){
    console.log("emailsent");
  });
  alert("email sent!you will hear from us soon");
}
