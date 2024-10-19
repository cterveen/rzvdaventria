/**
 * @file
 * Alt-text for the weather icons
 */
(() => {
  (function ($, Drupal, once) {
    Drupal.behaviors.rzvdaventriaWeatherGraphsBehavior = {
      attach: function (context, settings) {
        once('graph-watertemperatuur', '#rzvdaventria-graph-watertemperatuur').forEach(function (element) {
          $.getJSON("http://192.168.2.6/~internetcie/webcam/data/watertemperatuur_drielboven.json", function(data) {
            let yrange = rzvdaventriaMinMax(data.gemeten.waarde);
            let now = new Date();
            let now_label = " " + now.getHours() + ":" + (now.getMinutes() < 10 ? 0 : "") + now.getMinutes();
            let xmin = new Date(now.getTime() - 7*24*60*60*1000);
            let xmax = new Date(now.getTime() + 2*24*60*60*1000);
            let xrange = Array(xmin, xmax);
            let now_x = Array(now, now);
            let lastValue = data.gemeten.waarde[data.gemeten.waarde.length-1]
            let lastTimestamp = new Date(data.gemeten.tijdstip[data.gemeten.tijdstip.length-1]);
            let element = document.getElementById('rzvdaventria-graph-watertemperatuur');
            let plotdata = Array();
            let layout = {};

            yrange[0] -= 1;
            yrange[1] += 1;

            $( "#caption-watertemperatuur" ).html(rzvdaventriaWaterdataCaption(lastValue, data.unit, lastTimestamp));

            plotdata = [
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
            ];
            
            layout.yrange = yrange;
            layout.xrange = xrange;
            layout.ylabel = "Temperatuur (&deg;C)";

            rzvdaventriaPlot(element, plotdata, layout);
          });
        });

        once('graph-ijsselpeil', '#rzvdaventria-graph-ijsselpeil').forEach(function (element) {
          $.getJSON("http://192.168.2.6/~internetcie/webcam/data/ijsselpeil_deventer.json", function(data) {
            let yrange = rzvdaventriaMinMax(data.gemeten.waarde);
            let now = new Date();
            let now_label = " " + now.getHours() + ":" + (now.getMinutes() < 10 ? 0 : "") + now.getMinutes();
            let xmin = new Date(now.getTime() - 7*24*60*60*1000);
            let xmax = new Date(now.getTime() + 2*24*60*60*1000);
            let xrange = Array(xmin, xmax);
            let now_x = Array(now, now);
            let lastValue = data.gemeten.waarde[data.gemeten.waarde.length-1]
            let lastTimestamp = new Date(data.gemeten.tijdstip[data.gemeten.tijdstip.length-1]);
            let element = document.getElementById('rzvdaventria-graph-ijsselpeil');
            let plotdata = Array();
            let layout = {};

            yrange[0] -= 1;
            yrange[1] += 1;

            $( "#caption-ijsselpeil" ).html(rzvdaventriaWaterdataCaption(lastValue, data.unit, lastTimestamp));

            plotdata = [
              {
                x: data.gemeten.tijdstip,
                y: data.gemeten.waarde
              },
              {
                x: data.voorspeld.tijdstip,
                y: data.voorspeld.waarde
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
            ];

            layout.yrange = yrange;
            layout.xrange = xrange;
            layout.ylabel = "Waterhoogte (m)"

            rzvdaventriaPlot(element, plotdata, layout);
          });
        });

        once('graph-ijsselpeil', '#rzvdaventria-graph-rijnpeil').forEach(function (element) {
          $.getJSON("http://192.168.2.6/~internetcie/webcam/data/rijnpeil_lobith.json", function(data) {
            let yrange = rzvdaventriaMinMax(data.gemeten.waarde);
            let now = new Date();
            let now_label = " " + now.getHours() + ":" + (now.getMinutes() < 10 ? 0 : "") + now.getMinutes();
            let xmin = new Date(now.getTime() - 7*24*60*60*1000);
            let xmax = new Date(now.getTime() + 2*24*60*60*1000);
            let xrange = Array(xmin, xmax);
            let now_x = Array(now, now);
            let lastValue = data.gemeten.waarde[data.gemeten.waarde.length-1]
            let lastTimestamp = new Date(data.gemeten.tijdstip[data.gemeten.tijdstip.length-1]);
            let element = document.getElementById('rzvdaventria-graph-rijnpeil');
            let plotdata = Array();
            let layout = {};

            yrange[0] -= 1;
            yrange[1] += 1;

            $( "#caption-rijnpeil" ).html(rzvdaventriaWaterdataCaption(lastValue, data.unit, lastTimestamp));

            plotdata = [
              {
                x: data.gemeten.tijdstip,
                y: data.gemeten.waarde
              },
              {
                x: data.voorspeld.tijdstip,
                y: data.voorspeld.waarde
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
            ];

            layout.yrange = yrange;
            layout.xrange = xrange;
            layout.ylabel = "Waterhoogte (m)"

            rzvdaventriaPlot(element, plotdata, layout);
          });
        });

        function rzvdaventriaPlot(element, data, layout) {
          Plotly.newPlot(element, data = data,
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
                type: "date",
                range: layout.xrange
              },
              yaxis: {
                autorange: false,
                title: {
                  text: layout.ylabel
                },
                range: layout.yrange
              },
              showlegend: false
            }
          );
        }

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

        function rzvdaventriaWaterdataCaption(value, unit, date) {
          let months = Array("jan", "feb", "mar", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec");
          let timestamp = date.getDate() + " " + months[date.getMonth()] + " " + date.getHours() + ":" + (date.getMinutes() < 10 ? 0 : "") + date.getMinutes();

          value = value.toString().replace(/\./, ",");

          return "Laatste meting: <strong>" + value + unit + "</strong> (" + timestamp + ")";
        }
      }
    };
  })(jQuery, Drupal, once);
})();
