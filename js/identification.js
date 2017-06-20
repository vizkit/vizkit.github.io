


var pdf;

  $(window).ready(function(){
  
       pdf = new jsPDF('p', 'pt', 'a4', false);
 

  //   alert(localStorage.duree);

    var logo = new Image();

    var numPErs =  (parseInt(localStorage.numGroupe));
    alert(numPErs)


          if(localStorage.duree == "longue_adult"){
            if(localStorage.dataset == "un"){
              var cont = 1;
              for (groupe = 1; groupe < 5; groupe++) {          
                 var logo = new Image();
                 logo.src = "https://vizkit.github.io/pdf_images/long/Long_adults/long_adults_dataset1_"+groupe+".PNG";
                 pdf.addImage(logo, 'PNG', 2, 2, 590,850);
                 if(groupe < numPErs){
                   pdf.addPage();
                 }
              }
            }else{
              for (groupe = 1; groupe < 5; groupe++) {
                 var logo = new Image();
                 logo.src = "https://vizkit.github.io/pdf_images/long/Long_adults/long_adults_dataset2_"+groupe+".PNG";
                 pdf.addImage(logo, 'PNG', 2, 2, 590,850);
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
                 pdf.addImage(logo, 'PNG', 2, 2, 590,850);
                 if(groupe < numPErs){
                   pdf.addPage();
                 }
              }
            }else{
              for (groupe = 1; groupe < 5; groupe++) {
                 var logo = new Image();
                 logo.src = "https://vizkit.github.io/pdf_images/long/Long_enfants/long_enfants_dataset2_"+groupe+".PNG";
                 pdf.addImage(logo, 'PNG', 2, 2, 590,850);
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
                 pdf.addImage(logo, 'PNG', 2, 2, 590,850);
                 if(groupe < numPErs){
                   pdf.addPage();
                 }
              }
            }else{
              for (groupe = 1; groupe < 5; groupe++) {
                var logo = new Image();
                logo.src = "https://vizkit.github.io/pdf_images/court/Court_enfants/court_enfants_dataset2_"+groupe+".PNG";
                pdf.addImage(logo, 'PNG', 2, 2, 590,850);
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
                pdf.addImage(logo, 'PNG', 2, 2, 590,850);
                if(groupe < numPErs){
                   pdf.addPage();
                 }
                
             }
            }else{
             for (groupe = 1; groupe < 5; groupe++) { 
                var logo = new Image();
                logo.src = "https://vizkit.github.io/pdf_images/court/Court_adults/court_adults_dataset2_"+groupe+".PNG";
                pdf.addImage(logo, 'PNG', 2, 2, 590,850);
                if(groupe < numPErs){
                   pdf.addPage();
                 }
             }
            }
          // var uno= 1;
          }


  });


function demoFromHTML() {
 
        pdf.output("dataurlnewwindow");

}
