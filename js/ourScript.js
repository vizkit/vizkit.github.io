//aide de https://openclassrooms.com/courses/tout-sur-le-javascript/td-verification-d-un-formulaire?q=&hPP=8&idx=prod_v2_COURSES_fr&p=0&fR%5Bcertificate%5D%5B0%5D=true&fR%5BisWeb%5D%5B0%5D=true&is_v=1
function emailchecker(){
  var regex = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/i;
  var element = document.getElementById("email");
  var emailaddress = element.value;
  if(regex.test(emailaddress)){
    var tele = document.getElementById("lienemail");
    tele.href ="donnees/ressources.zip";
  }
}
