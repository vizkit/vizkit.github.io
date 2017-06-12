
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
    $("#car").load('carousel_long.html');

    //On remplit le champ du bouton +/- avec la valeur par défaut
    $("#inputnb").val(nbDePersonnes);

    var carousel_c = $.get("carousel_court.html");
    var carousel_l = $.get("carousel_long.html");
  //On change la valeur des variables en fonction des actions utilisateurs
  //Pour la durée :
    $("#dur_cou").click(function(e){
      duree = "courte";
      $("#dur_lon").removeClass("active");
      $("#dur_cou").addClass("active");
      //var code = load("carousel_court.html");
      //$("#myCarousel").replaceWith("<div id=" + "car" + "> <strong>This text is strong</strong> </br>  <i>This text is italic</i> </div>");
      //alert(carousel_c);
      //$("#car").empty();
      $("#car").load('carousel_court.html');

    });
    $("#dur_lon").click(function(e){
      duree = "longue";
      $("#dur_cou").removeClass("active");
      $("#dur_lon").addClass("active");
      //$("#myCarousel").replaceWith(carousel_l);
      //$("#car").empty();
      $("#car").load('carousel_long.html');
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
        alert("ok");
        $("#pointLien").attr('href','graphiques_adultes.html');
      }
    });

  });
