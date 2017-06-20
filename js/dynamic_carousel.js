


 var duration_longue = true;
  var  duration_courte = false;
  var  enfant = false;
   var adult = true;
   var duree = "longue";


  $(document).ready(function(){
  //on initialise les variables avec les valeurs par défaut

    var pub = "adu";
    var nbDePersonnes = 16;
    var sce = 1;
  
  //localStorage.numGroupe = nbDePersonnes;

  //  localStorage.duree = 'longue_adult';


  //on appuie les boutons en conséquence
    $("#dur_lon").addClass("active");
    $("#pub_adu").addClass("active");
    $("#sce_1").addClass("active");
    //$("#car").load('carousel_long.html');

   
    //On remplit le champ du bouton +/- avec la valeur par défaut
    $("#inputnb").val(nbDePersonnes);

   
   //localStorage.duree = 'longue_adult';
    //var carousel_c = $.get("carousel_court.html");
    //var carousel_l = $.get("carousel_long.html");
  //On change la valeur des variables en fonction des actions utilisateurs
   $("#inputnb").change(function(e){
     var numpers = $("#inputnb").val();
     localStorage.numGroupe = numpers;
   });
   
   
  //Pour la durée :
    $("#dur_cou").click(function(e){

  //    localStorage.duree = 'courte';

      duree = "courte";
      duration_courte = true;
      duration_longue = false;
      $("#dur_lon").removeClass("active");
      $("#dur_cou").addClass("active");
      //var code = load("carousel_court.html");
      //$("#myCarousel").replaceWith("<div id=" + "car" + "> <strong>This text is strong</strong> </br>  <i>This text is italic</i> </div>");
      //alert(carousel_c);
      //$("#car").empty();
      $("#car").load('carousel_court.html');
      $("#p1").show();
//       alert("Chargement terminé \n Guide pour atelier court !");
      $("#rest").hide();
      $("#plusbtn, #minubtn").click(function(){$("#rest").show();});

      if (duree == "longue" && enfant) localStorage.duree = "longue_enfant";
      else if (duree == "courte" && adult) localStorage.duree = "courte_adult";
      else if (duree == "courte" && enfant) localStorage.duree = "courte_enfant";
      else  localStorage.duree = "longue_adult";

    });
    $("#dur_lon").click(function(e){

    //  localStorage.duree = 'longue';

      duree = "longue";
      duration_longue = true;
      duration_courte = false;
      $("#dur_cou").removeClass("active");
      $("#dur_lon").addClass("active");
      //$("#myCarousel").replaceWith(carousel_l);
      //$("#car").empty();
      $("#car").load('carousel_long.html');
      $("#p1").show();
//       alert("Chargement terminé \n Guide pour atelier long !");
      $("#rest").hide();
      $("#plusbtn, #minubtn").click(function(){$("#rest").show();})

      if (duree == "longue" && enfant) localStorage.duree = "longue_enfant";
      else if (duree == "courte" && adult) localStorage.duree = "courte_adult";
      else if (duree == "courte" && enfant) localStorage.duree = "courte_enfant";
      else  localStorage.duree = "longue_adult";
    });
  //Pour le public :
    $("#pub_enf").click(function(e){

      localStorage.type = 'enfant';

      pub = "enf";
      adult = false;
      enfant = true;
      $("#pub_adu").removeClass("active");
      $("#pub_enf").addClass("active");

      if (duree == "longue" && enfant) localStorage.duree = "longue_enfant";
      else if (duree == "courte" && adult) localStorage.duree = "courte_adult";
      else if (duree == "courte" && enfant) localStorage.duree = "courte_enfant";
      else  localStorage.duree = "longue_adult";
    });
    $("#pub_adu").click(function(e){

      localStorage.type = 'adult';

      pub = "adu";
      adult = true;
      enfant = false;
      $("#pub_enf").removeClass("active");
      $("#pub_adu").addClass("active");

      if (duree == "longue" && enfant) localStorage.duree = "longue_enfant";
      else if (duree == "courte" && adult) localStorage.duree = "courte_adult";
      else if (duree == "courte" && enfant) localStorage.duree = "courte_enfant";
      else  localStorage.duree = "longue_adult";
    });
  //Pour le scénario :
    $("#sce_2").click(function(e){
      sce = 2;
     localStorage.dataset = "deux";
      $("#sce_1").removeClass("active");
      $("#sce_2").addClass("active");
    });
    $("#sce_1").click(function(e){
      sce = 1;
      localStorage.dataset = "un";
      $("#sce_2").removeClass("active");
      $("#sce_1").addClass("active");
    });

    $("#pointLien").click(function(e){
      if(pub == "enf"){
        $("#pointLien").attr('href','graphiques_enfants.html');
      }else{
        $("#pointLien").attr('href','graphiques_adultes.html');
      }
    });
   

   



  });



function generer() {
 


     var pdf = new jsPDF('p', 'pt', 'a4', false);

  //   alert(localStorage.duree);
groupe = 1;
    var logo = new Image();

    var numPErs =  (parseInt(localStorage.numGroupe));

          if(localStorage.duree == "longue_adult"){
            if(localStorage.dataset == "un"){

            

          var logo = new Image();   
           // for (groupe = 1; groupe < 5; groupe++) {    
            
          logo.onload = function(){ // always fires the event
                    pdf.addImage(logo, 'PNG', 2, 2, 590,850);
           pdf.addPage();
          };
          logo.src = "https://vizkit.github.io/pdf_images/court/Court_adults/court_adults_dataset1_1.PNG";
             var logo2 = new Image();   
           // for (groupe = 1; groupe < 5; groupe++) {    
            
          logo2.onload = function(){ // always fires the event
                    pdf.addImage(logo2, 'PNG', 2, 2, 590,850);
          };
          logo2.src = "https://vizkit.github.io/pdf_images/court/Court_adults/court_adults_dataset1_2.PNG";
             
             /*
             for (groupe = 1; groupe < 5; groupe++) {
                 var logo = new Image();
                 logo.src = "/pdf_images/court/Court_adults/court_adults_dataset1_"+groupe+".JPEG";
               
                 
                 if(groupe < numPErs){
                   pdf.addPage();
                 }
              }*/
           // }

       
             /*var logo3 = new Image();   
                 logo3.src = "/pdf_images/long/Long_adults/long_adults_dataset1_3.PNG";
                 logo3.onload = function(){
                    pdf.addImage(logo3, 'PNG', 2, 2, 590,850);
                 };
                 groupe = groupe +1;
             pdf.addPage();
             var logo4 = new Image();   
                 logo4.src = "/pdf_images/long/Long_adults/long_adults_dataset1_4.PNG";
                 logo4.onload = function(){
                    pdf.addImage(logo4, 'PNG', 2, 2, 590,850);
                 };
                 if(groupe < numPErs){
                   pdf.addPage();
                 }*/
             //}
            }else{
              for (groupe = 1; groupe < 5; groupe++) {
                 var logo = new Image();
                 logo.src = "https://vizkit.github.io/pdf_images/long/Long_adults/long_adults_dataset2_"+groupe+".PNG";
                 logo.onload = function(){  
                    pdf.addImage(logo, 'PNG', 2, 2, 590,850);
                 };
                 if(groupe < numPErs){
                   pdf.addPage();
                 }
              }
            }
          }
          else if(localStorage.duree == "longue_enfant"){
            if(localStorage.dataset == "un"){
              for (groupe = 1; groupe < 5; groupe++) {
                 var logo = new Image();
                 logo.src = "https://vizkit.github.io/pdf_images/long/Long_enfants/long_enfants_dataset1_"+groupe+".PNG";
                 logo.onload = function(){  
                    pdf.addImage(logo, 'PNG', 2, 2, 590,850);
                 };
                 if(groupe < numPErs){
                   pdf.addPage();
                 }
              }
            }else{
              for (groupe = 1; groupe < 5; groupe++) {
                 var logo = new Image();
                 logo.src = "https://vizkit.github.io/pdf_images/long/Long_enfants/long_enfants_dataset2_"+groupe+".PNG";
                 logo.onload = function(){  
                    pdf.addImage(logo, 'PNG', 2, 2, 590,850);
                 }
                 if(groupe < numPErs){
                   pdf.addPage();
                 }
              }
            }

      }
      else if(localStorage.duree == "courte_enfant"){
            if(localStorage.dataset == "un"){
              for (groupe = 1; groupe < 5; groupe++) {
                 var logo = new Image();
                 logo.src = "https://vizkit.github.io/pdf_images/court/Court_enfants/court_enfants_dataset1_"+groupe+".PNG";
                 logo.onload = function(){
                    pdf.addImage(logo, 'PNG', 2, 2, 590,850);
                 }
                 if(groupe < numPErs){
                   pdf.addPage();
                 }
              }
            }else{
              for (groupe = 1; groupe < 5; groupe++) {
                var logo = new Image();
                logo.src = "https://vizkit.github.io/pdf_images/court/Court_enfants/court_enfants_dataset2_"+groupe+".PNG";
                logo.onload = function(){ 
                   pdf.addImage(logo, 'PNG', 2, 2, 590,850);
                }
                if(groupe < numPErs){
                   pdf.addPage();
                }
              }
            }

          }
          else {
            if(localStorage.dataset == "un"){
             for (groupe = 1; groupe < 5; groupe++) {
                var logo = new Image();
                logo.src = "https://vizkit.github.io/pdf_images/court/Court_adults/court_adults_dataset1_"+groupe+".PNG";
                logo.onload = function(){  
                  pdf.addImage(logo, 'PNG', 2, 2, 590,850);
                }
                if(groupe < numPErs){
                   pdf.addPage();
                 }
                
             }
            }else{
             for (groupe = 1; groupe < 5; groupe++) { 
                var logo = new Image();
                logo.src = "https://vizkit.github.io/pdf_images/court/Court_adults/court_adults_dataset2_"+groupe+".PNG";
                logo.onload = function(){  
                   pdf.addImage(logo, 'PNG', 2, 2, 590,850);
                }
                if(groupe < numPErs){
                   pdf.addPage();
                 }
             }
            }
          // var uno= 1;
          }
alert("adeu");
pdf.output("dataurlnewwindow");
}
function visualiser() {
       

}
