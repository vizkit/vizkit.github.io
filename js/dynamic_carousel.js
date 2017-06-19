var duree = "longue";
var duration_longue = true;
var duration_courte = false;


  $(document).ready(function(){
  //on initialise les variables avec les valeurs par défaut
    var duree = "longue";
    var pub = "adu";
    var nbDePersonnes = 16;
    var sce = 1;
  //on appuie les boutons en conséquence
    $("#dur_lon").addClass("active");
    $("#pub_adu").addClass("active");
    $("#sce_1").addClass("active");
    //$("#car").load('carousel_long.html');

    //On remplit le champ du bouton +/- avec la valeur par défaut
    $("#inputnb").val(nbDePersonnes);

    //var carousel_c = $.get("carousel_court.html");
    //var carousel_l = $.get("carousel_long.html");
  //On change la valeur des variables en fonction des actions utilisateurs
  //Pour la durée :
    $("#dur_cou").click(function(e){
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
      alert("Chargement terminé \n Guide pour atelier court !");
      $("#rest").hide();
      $("#plusbtn, #minubtn").click(function(){$("#rest").show();});
    });
    $("#dur_lon").click(function(e){
      duree = "longue";
      duration_longue = true;
      duration_courte =false;
      $("#dur_cou").removeClass("active");
      $("#dur_lon").addClass("active");
      //$("#myCarousel").replaceWith(carousel_l);
      //$("#car").empty();
      $("#car").load('carousel_long.html');
      $("#p1").show();
      alert("Chargement terminé \n Guide pour atelier long !");
      $("#rest").hide();
      $("#plusbtn, #minubtn").click(function(){$("#rest").show();})
    });
  //Pour le public :
    $("#pub_enf").click(function(e){
      pub = "enf";
      $("#pub_adu").removeClass("active");
      $("#pub_enf").addClass("active");
    });
    $("#pub_adu").click(function(e){
      pub = "adu";
      $("#pub_enf").removeClass("active");
      $("#pub_adu").addClass("active");
    });
  //Pour le scénario :
    $("#sce_2").click(function(e){
      sce = 2;
      $("#sce_1").removeClass("active");
      $("#sce_2").addClass("active");
    });
    $("#sce_1").click(function(e){
      sce = 1;
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




function demoFromHTML() {
        


  
          pdf = new jsPDF('p', 'pt', 'a4', false);      
          
          logo.src = "1.png";
            pdf.addImage(logo, 'JPEG', 2, 2, 590,850);
  
 /*
          if(duration_longue){
            var logo = new Image();
            logo.src = "../donnees/1.png";
            pdf.addImage(logo, 'JPEG', 2, 2, 590,850);
            pdf.addPage();
            var logo = new Image();
            logo.src = "2.png";
            pdf.addImage(logo, 'JPEG', 2, 2, 590,850);
           
          
          }else if(duration_courte) {
            logo.src = "../donnees/2.png";
            pdf.addImage(logo, 'JPEG', 2, 2, 590,850);
            pdf.addPage();
            logo.src = "3.png";
            pdf.addImage(logo, 'JPEG', 2, 2, 590,850);

          }

           var uno= 1;




          var paso;
        for (paso = 4; paso < 6; paso++) {
            pdf.addPage();
            var logo = new Image();
            logo.src = paso+".png";
            pdf.addImage(logo, 'JPEG', 2, 2, 590,850);
          // Se ejecuta 5 veces, con valores desde paso desde 0 hasta 4.
        
          };*/


  
                 
      pdf.output("dataurlnewwindow");

        }
