var type;

window.onload = function() {

    var dataPoints = [];

    function getName(csv, ligne, offset) {
        csvLines = csv.split(/[\r?\n|\r|\n]+/);
        points = csvLines[ligne + offset].split(";");
        return points[0];
    }

    function getGroupe(csv, offset) {
        csvLines = csv.split(/[\r?\n|\r|\n]+/);
        points = csvLines[offset].split(";");
        return points[0];
    }

    // funciona apenas para dataset com tres linhas
    function teste(data, t, name) {
        var chart = new CanvasJS.Chart(name, {

            title: {
                text: getGroupe(data, t),
            },

            axisX: {
                reversed : true,
                titleFontSize: 16,
                labelFontSize: 12,
                labelAutoFit: true,
                //  title: "Profession"
              },
            axisX2:{
                title: "Diplôme"
            },
            axisY: {
                // reversed : true,
                titleFontSize: 16,
                title: "Quantité (%)"
            },
            legend:{
              maxWidth: 300,
             },
            data: [{
                    type: type,
                    showInLegend: true,
                    dataPoints: getDataPointsFromCSV(data, 1, t),
                    legendText: getName(data, 1, t)
                },
                {
                    type: type,
                    showInLegend: true,
                    dataPoints: getDataPointsFromCSV(data, 2, t),
                    legendText: getName(data, 2, t)


                },
                {
                    type: type,
                    showInLegend: true,
                    dataPoints: getDataPointsFromCSV(data, 3, t),
                    legendText: getName(data, 3, t)
                }
                ,
                {
                    type: type,
                    showInLegend: true,
                    dataPoints: getDataPointsFromCSV(data, 4, t),
                    legendText: getName(data, 4, t)


                },
                {
                    type: type,
                    showInLegend: true,
                    dataPoints: getDataPointsFromCSV(data, 5, t),
                    legendText: getName(data, 5, t)
                }
                ,
                {
                    type: type,
                    showInLegend: true,
                    dataPoints: getDataPointsFromCSV(data, 6, t),
                    legendText: getName(data, 6, t)


                }
            ]
        });

        chart.render();
    }

    function teste2(data, t, name) {
        var chart = new CanvasJS.Chart(name, {

            title: {
                text: getGroupe(data, t),
            },

            axisX: {
                //reversed : true,
                titleFontSize: 16,
          //      labelMaxWidth: 40,
                labelFontSize: 12,
                labelAutoFit: true,  // change to false
                title: "Profession"
            },

            axisY: {
                // reversed : true,
                titleFontSize: 16,
                labelAutoFit: true,  // change to false
                title: "Temps (minutes)"
            },

            legend:{
              maxWidth: 300,
             },
            data: [{
                    type: type,
                    showInLegend: true,
                    dataPoints: getDataPointsFromCSV(data, 1, t),
                    legendText: getName(data, 1, t)
                },
                {
                    type: type,
                    showInLegend: true,
                    dataPoints: getDataPointsFromCSV(data, 2, t),
                    legendText: getName(data, 2, t)

                },
                {
                    type: type,
                    showInLegend: true,
                    dataPoints: getDataPointsFromCSV(data, 3, t),
                    legendText: getName(data, 3, t)
                }
            ]
        });

        chart.render();
    }


    function getDataPointsFromCSV(csv, ligne, offset) {
        var dataPoints = csvLines = points = [];

        csvLines = csv.split(/[\r?\n|\r|\n]+/);
        var firstLine = csvLines[offset];
        firstLinepoints = firstLine.split(";");


        for (var j = 1; j < firstLinepoints.length; j++) {
            if (csvLines[ligne + offset].length > 0) {

                points = csvLines[ligne + offset].split(";");

                dataPoints.push({
                //    x: parseInt(firstLinepoints[j]),
                    y: parseFloat(points[j]),
                    label: firstLinepoints[j]

                });
            }
        }
        return dataPoints;
    }


    $.get("data/diplome2.csv", function(data) {


        type = "bar"
        for (var t = 0; t < 8; t++) {
            var nome = "column" + "_chartContainer" + t;
            teste(data, t * 7, nome);
        }

        type = "line";
        for (var t = 0; t < 8; t++) {
            var nome = type + "_chartContainer" + t;
            teste(data, t * 7, nome);
        }

        // type = "stackedBar";
        // for(var t=0; t<7;t++){
        //   var nome = type+"_chartContainer" + t;
        // teste(data,t*4,nome);
        // }

        type = "stackedColumn";
        for (var t = 0; t < 8; t++) {
            var nome = type + "_chartContainer" + t;
            teste(data, t * 7, nome);
        }


    });


    $.get("data/preoccupations.csv", function(data) {


        type = "column"
        for (var t = 0; t < 7; t++) {
            var nome = type + "_chart2Container" + t;
            teste2(data, t * 4, nome);
        }

        type = "line";
        for (var t = 0; t < 7; t++) {
            var nome = type + "_chart2Container" + t;
            teste2(data, t * 4, nome);
        }

        // type = "stackedBar";
        // for(var t=0; t<7;t++){
        //   var nome = type+"_chartContainer" + t;
        // teste(data,t*4,nome);
        // }

        type = "stackedColumn";
        for (var t = 0; t < 7; t++) {
            var nome = type + "_chart2Container" + t;
            teste2(data, t * 4, nome);
        }


    });



    $(document).ready(function() {
        $('.slider2').bxSlider({
            slideWidth: 1200,
            minSlides: 3,
            maxSlides: 3,
            moveSlides: 3,
            infiniteLoop: false,
            hideControlOnEnd: true
        });

    });

    $(document).ready(function() {
        $('.slider3').bxSlider({
            slideWidth: 1200,
            minSlides: 3,
            maxSlides: 3,
            moveSlides: 3,
            infiniteLoop: false,
            hideControlOnEnd: true
        });

    });

}
