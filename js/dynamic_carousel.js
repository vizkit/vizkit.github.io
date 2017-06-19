


/*function demoFromHTML() {
        



     var pdf = new jsPDF('p', 'pt', 'a4', false);
  
  alert(duration_longue);
 
          if(duration_longue){
            
            if(adult){
              alert("adult_long");
              var logo = new Image();
              logo.src = "https://vizkit.github.io/pdf_images/long/Long_adults/long_adults_dataset1_1.PNG";
              pdf.addImage(logo, 'PNG', 2, 2, 590,850);
              pdf.addPage();
            }else{
                 alert("enfant_LONGUE");
              logo.src = "https://vizkit.github.io/pdf_images/long/Long_enfants/long_enfants_dataset1_1.PNG";
              pdf.addImage(logo, 'PNG', 2, 2, 590,850);
              pdf.addPage();
            }

          }else{
            if(enfant){
                 alert("enfant_Court");
                logo.src = "https://vizkit.github.io/pdf_images/court/Court_enfants/court_enfants_dataset1_1.PNG";
                pdf.addImage(logo, 'PNG', 2, 2, 590,850);
                pdf.addPage();
          
          
            }else {
              alert("adult_court");
              logo.src = "https://vizkit.github.io/pdf_images/court/Court_enfants/court_enfants_dataset1_1.PNG";
              pdf.addImage(logo, 'PNG', 2, 2, 590,850);
              pdf.addPage();
          
            }

           var uno= 1;
          }



       /*   var paso;
        for (paso = 4; paso < 6; paso++) {
            pdf.addPage();
            var logo = new Image();
            logo.src = paso+".png";
            pdf.addImage(logo, 'PNG', 2, 2, 590,850);
          // Se ejecuta 5 veces, con valores desde paso desde 0 hasta 4.
        
          };


  
                 
     pdf.output("dataurlnewwindow");

        }*/



  $(document).ready(function(){
  //on initialise les variables avec les valeurs par défaut
    
    var duree = "longue";
    var pub = "adu";
    var nbDePersonnes = 16;
    var sce = 1;
    var duration_longue = 1;
    var duration_courte = 0;
    var enfant = 0;
    var adult = 1;
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
      duration_courte = 1;
      duration_longue = 0;
      $("#dur_lon").removeClass("active");
      $("#dur_cou").addClass("active");
      //var code = load("carousel_court.html");
      //$("#myCarousel").replaceWith("<div id=" + "car" + "> <strong>This text is strong</strong> </br>  <i>This text is italic</i> </div>");
      //alert(carousel_c);
      //$("#car").empty();
      $("#car").load('carousel_court.html');
      $("#p1").show();
            alert(duration_courte);
      alert("Chargement terminé \n Guide pour atelier court !");
      $("#rest").hide();
      $("#plusbtn, #minubtn").click(function(){$("#rest").show();});
    });
    $("#dur_lon").click(function(e){
      duree = "longue";
      duration_longue = 1;
      duration_courte =0;
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
      adult = 0;
      enfant = 1;
      $("#pub_adu").removeClass("active");
      $("#pub_enf").addClass("active");
    });
    $("#pub_adu").click(function(e){
      pub = "adu";
      adult = 1;
      enfant = 0;
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
          
      $("#buttonemail").click(function(e){
            
     var pdf = new jsPDF('p', 'pt', 'a4', false);
     //var pdf = new jsPDF();
  /*var logo = new Image();
         pdf.text("hello", 30,30);
       logo.src = "1.png";
       pdf.addImage(logo, 'PNG', 2, 2, 590,850);*/
               alert("holaaedfadggaaaa");
  alert(duration_longue);
 
          if(duration_longue == "1"){
            
            if(adult== "1"){
              alert("adult_long");
              var logo = new Image();
              logo.src = "https://vizkit.github.io/pdf_images/long/Long_adults/long_adults_dataset1_1.PNG";
              pdf.addImage(logo, 'PNG', 2, 2, 590,850);
              pdf.addPage();
            }else{
                 alert("enfant_LONGUE");
              logo.src = "https://vizkit.github.io/pdf_images/long/Long_enfants/long_enfants_dataset1_1.PNG";
              pdf.addImage(logo, 'PNG', 2, 2, 590,850);
              pdf.addPage();
            }

          }else{
            if(enfant== "1"){
                 alert("enfant_Court");
                logo.src = "https://vizkit.github.io/pdf_images/court/Court_enfants/court_enfants_dataset1_1.PNG";
                pdf.addImage(logo, 'PNG', 2, 2, 590,850);
                pdf.addPage();
          
          
            }else {
              alert("adult_court");
              logo.src = "https://vizkit.github.io/pdf_images/court/Court_enfants/court_enfants_dataset1_1.PNG";
              pdf.addImage(logo, 'PNG', 2, 2, 590,850);
              pdf.addPage();
          
            }

           var uno= 1;
          }



       /*   var paso;
        for (paso = 4; paso < 6; paso++) {
            pdf.addPage();
            var logo = new Image();
            logo.src = paso+".png";
            pdf.addImage(logo, 'PNG', 2, 2, 590,850);
          // Se ejecuta 5 veces, con valores desde paso desde 0 hasta 4.
        
          };*/


  
                 
     pdf.output("dataurlnewwindow");  
              
              
              
      });
          

  });


