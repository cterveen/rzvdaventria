/**
 * @file
 * Alt-text for the weather icons
 */
(() => {
  (function ($, Drupal, once) {
    Drupal.behaviors.rzvdaventriaWeatherGraphsBehavior = {
      attach: function (context, settings) {
        once('weather-graphs', '#rzvdaventria-graph-watertemperatuur').forEach(function (element) {
          $.getJSON("http://192.168.2.6/~internetcie/webcam/data/watertemperatuur_drielboven.json", function(data) {
            let yrange = rzvdaventriaMinMax(data.gemeten.waarde);
            let now = new Date();
            let now_label = " " + now.getHours() + ":" + (now.getMinutes() < 10 ? 0 : "") + now.getMinutes();
            let xmin = new Date(now.getTime() - 7*24*60*60*1000);
            let xmax = new Date(now.getTime() + 2*24*60*60*1000);
            let xrange = Array(xmin, xmax);
            let now_x = Array(now, now);
            let lastObservation = new Date(data.gemeten.tijdstip[data.gemeten.tijdstip.length-1]);
            let months = Array("jan", "feb", "mar", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec");

            yrange[0] -= 1;
            yrange[1] += 1;

            $( "#caption-watertemperatuur" ).html( "Laatste meting: " + data.gemeten.waarde[data.gemeten.waarde.length-1] + data.unit + " (" + lastObservation.getDate() + " " + months[lastObservation.getMonth()] + " " + lastObservation.getHours() + ":" + (lastObservation.getMinutes() < 10 ? 0 : "") + lastObservation.getMinutes() + ")");

            WATERTEMPERATUUR = document.getElementById('rzvdaventria-graph-watertemperatuur');
            Plotly.newPlot(WATERTEMPERATUUR,
              data = [
                {
                  x: data.gemeten.tijdstip,
                  y: data.gemeten.waarde
                },
                {
                  x: [now, now],
                  y: yrange,
                  mode: "lines"
                },
                {
                  x: [now],
                  y: [yrange[0]],
                  mode: "text",
                  text: [now_label],
                  textposition: "top right"
                },
              ],
              layout = {
                margin: {
                  t: 0,
                  r: 0,
                  b: 80,
                  l: 80,
                  pad: 10
                },
                xaxis: {
                  autorange: false,
                  title: {
                    text: "Dag",
                  },
                  type: "date",
                  range: xrange
                },
                yaxis: {
                  autorange: false,
                  title: {
                    text: "Temperatuur (&deg;C)",
                  },
                  range: yrange
                },
                showlegend: false
              }
            );
          });

          function rzvdaventriaMinMax(array) {
            let min = array[0];
            let max = array[0];
            array.forEach(function(item, index) {
              if (item < min) {
                min = item;
              }
              if (item > max) {
                max = item;
              }
            });
            return Array(min, max);
          }
        });
      }
    };
  })(jQuery, Drupal, once);
})();
