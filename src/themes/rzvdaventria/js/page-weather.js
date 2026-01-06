/**
 * @file
 * Alt text/title and graphs on the weather page
 *
 * One alt text/title is made
 * - Webcam Stobbenweerd
 *
 * (The alt text/title for the webcam haven is made by webcam.js as it is a
 * copy of the webcam on each page.)
 *
 * Three graphs are made:
 * 1) Water temperature at Driel Boven
 * 2) Water height at Deventer
 * 3) Water height at Lobith
 *
 * Uses JQuery to get the webcam Last Modified header
 * Uses JQuery to read the data in json format
 * Uses Plottly to make the graph
 */
(() => {
  (function ($, Drupal, once) {
    Drupal.behaviors.rzvdaventriaWeatherGraphsBehavior = {
      attach: function (context, settings) {
        let locale={
          moduleType:"locale",
          name:"nl",
          dictionary:{},
          format:{
            days: ["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"],
            shortDays:["zo","ma","di","wo","do","vr","za"],
            months:["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"],
            shortMonths:["jan","feb","maa","apr","mei","jun","jul","aug","sep","okt","nov","dec"],
            date:"%d-%m-%Y",
            decimal: ",",
            thousands: "."}
        };
        "undefined"==typeof Plotly ? (window.PlotlyLocales=window.PlotlyLocales || [],window.PlotlyLocales.push(locale)):Plotly.register(locale);
        Plotly.setPlotConfig({locale: 'nl'});

        let now = new Date();
        let nowLabel = " " + now.getHours() + ":" + (now.getMinutes() < 10 ? 0 : "") + now.getMinutes();
        let xmin = new Date(now.getTime() - 7*24*60*60*1000);
        let xmax = new Date(now.getTime() + 2*24*60*60*1000);
        let xrange = Array(xmin, xmax);

        once('graph-watertemperatuur', '#rzvdaventria-graph-watertemperatuur').forEach(function (element) {
          $.get(window.location.origin + "/webcam/data/webcam_stobbenweerd.jpg", function( data, status, xhr) {
            let id = "#webcam_stobbenweerd";
            let lastModified = new Date(Date.parse(xhr.getResponseHeader('Last-Modified')));
            let expires = new Date(lastModified.getTime() + (60 * 60 * 1000));
            let label = "Webcam Stobbenweerd (--.--u)";

            if (now.getTime() < expires.getTime()) {
              label = "Webcam Stobbenweerd (" + String(lastModified.getHours()).padStart(2, "0") + ":" + String(lastModified.getMinutes()).padStart(2, "0") + "u)";
            }

            $( id ).attr( "alt", label );
            $( id ).attr( "title", label );
          });

          $.getJSON(window.location.origin + "/webcam/data/tempDrielBoven.json", function(data) {
            let yrange = rzvdaventriaMinMax(data.historie.waarde);
            let lastValue = data.historie.waarde[data.historie.waarde.length-1].toFixed(1);
            let lastTimestamp = new Date(data.historie.tijdstip[data.historie.tijdstip.length-1]);
            let element = document.getElementById('rzvdaventria-graph-watertemperatuur');
            let plotdata = Array();
            let layout = {};

            yrange[0] -= 1;
            yrange[1] += 1;

            plotdata = [
              {
                x: data.historie.tijdstip,
                y: data.historie.waarde,
                name: "",
                hovertemplate: "<b>Watertemperatuur Driel Boven:</b><br>Gemeten: <b>%{y}</b><br>%{x|%a %-d %b %-H:%M}"
              },
              {
                x: [now, now],
                y: yrange,
                hoverinfo: "none",
                mode: "lines",
                line: {
                  color: "rgb(205,205,205)"
                }
              },
              {
                x: [now],
                y: [yrange[0]],
                hoverinfo: "none",
                mode: "text",
                text: [nowLabel],
                textposition: "top right",
                textfont: {
                  color: "rgb(68,68,68)"
                }
              },
            ];

            /* skiff-/tweezonderverbod */
            if (yrange[0] < 10 & yrange[1] > 10) {
              plotdata.push(
                {
                  x: [xmin, xmax],
                  y: [10,10],
                  mode: "lines",
                  hoverinfo: "none",
                  line: {
                    color: "rgb(255,20,0)"
                  }
                },
                {
                  x: [xmin],
                  y: [10 - (yrange[1] - yrange[0]) / 50],
                  mode: "text",
                  text: "Skiff-/tweezonderverbod",
                  textposition: "bottom right",
                  hoverinfo: "none",
                  textfont: {
                    color: "rgb(255,20,0)"
                  }
                },
              );
            }

            layout.yrange = yrange;
            layout.xrange = xrange;
            layout.unit =  data.unit;
            layout.yaxistickformat = ".1f";

            rzvdaventriaPlot(element, plotdata, layout);
            $( "#caption-watertemperatuur" ).html(rzvdaventriaWaterdataCaption(lastValue, data.unit, lastTimestamp));
          });
        });

        once('graph-ijsselpeil', '#rzvdaventria-graph-ijsselpeil').forEach(function (element) {
          $.getJSON(window.location.origin + "/webcam/data/waterstandenDev.json", function(data) {
            let yrange = rzvdaventriaMinMax(data.historie.waarde.concat(data.verwacht.waarde));
            let lastValue = data.historie.waarde[data.historie.waarde.length-1].toFixed(2);
            let lastTimestamp = new Date(data.historie.tijdstip[data.historie.tijdstip.length-1]);
            let element = document.getElementById('rzvdaventria-graph-ijsselpeil');
            let plotdata = Array();
            let layout = {};

            yrange[0] -= 0.2;
            yrange[1] += 0.2;

            plotdata = [
              {
                x: data.historie.tijdstip,
                y: data.historie.waarde,
                name: "",
                hovertemplate: "<b>IJsselpeil Deventer:</b><br>Gemeten: <b>%{y}</b><br>%{x|%a %-d %b %-H:%M}"
              },
              {
                x: data.verwacht.tijdstip,
                y: data.verwacht.waarde,
                name: "",
                hovertemplate: "<b>IJsselpeil Deventer:</b><br>Verwacht: <b>%{y}</b><br>%{x|%a %-d %b %-H:%M}"
              },
              {
                x: [now, now],
                y: yrange,
                mode: "lines",
                hoverinfo: "none",
                line: {
                  color: "rgb(205,205,205)"
                }
              },
              {
                x: [now],
                y: [yrange[0]],
                mode: "text",
                text: [nowLabel],
                textposition: "top right",
                hoverinfo: "none",
                textfont: {
                  color: "rgb(68,68,68)"
                }
              },
            ];

            /* hoogwater */
            if (yrange[0] < 4.85 & yrange[1] > 4.85) {
              plotdata.push(
                {
                  x: [xmin, xmax],
                  y: [4.85,4.85],
                  mode: "lines",
                  hoverinfo: "none",
                  line: {
                    color: "rgb(255,20,0)"
                  }
                },
                {
                  x: [xmin],
                  y: [4.85],
                  mode: "text",
                  text: "Hoogwater",
                  textposition: "top right",
                  hoverinfo: "none",
                  textfont: {
                    color: "rgb(255,20,0)"
                  }
                },
              );
            }

            layout.yrange = yrange;
            layout.xrange = xrange;
            layout.unit = "m";
            layout.yaxistickformat = ".2f";

            rzvdaventriaPlot(element, plotdata, layout);
            $( "#caption-ijsselpeil" ).html(rzvdaventriaWaterdataCaption(lastValue, data.unit, lastTimestamp));
          });
        });

        once('graph-rijnpeil', '#rzvdaventria-graph-rijnpeil').forEach(function (element) {
          $.getJSON(window.location.origin + "/webcam/data/waterstandenLob.json", function(data) {
            let yrange = rzvdaventriaMinMax(data.historie.waarde.concat(data.verwacht.waarde));
            let lastValue = data.historie.waarde[data.historie.waarde.length-1].toFixed(2);
            let lastTimestamp = new Date(data.historie.tijdstip[data.historie.tijdstip.length-1]);
            let element = document.getElementById('rzvdaventria-graph-rijnpeil');
            let plotdata = Array();
            let layout = {};

            yrange[0] -= 0.2;
            yrange[1] += 0.2;

            plotdata = [
              {
                x: data.historie.tijdstip,
                y: data.historie.waarde,
                name: "",
                hovertemplate: "<b>Rijnpeil Lobith:</b><br>Gemeten: <b>%{y}</b><br>%{x|%a %-d %b %-H:%M}"
              },
              {
                x: data.verwacht.tijdstip,
                y: data.verwacht.waarde,
                name: "",
                hovertemplate: "<b>Rijnpeil Lobith:</b><br>Verwacht: <b>%{y}</b><br>%{x|%a %-d %b %-H:%M}"
              },
              {
                x: [now, now],
                y: yrange,
                mode: "lines",
                hoverinfo: "none",
                line: {
                  color: "rgb(205,205,205)"
                }
              },
              {
                x: [now],
                y: [yrange[0]],
                mode: "text",
                text: [nowLabel],
                textposition: "top right",
                hoverinfo: "none",
                textfont: {
                  color: "rgb(68,68,68)"
                }
              },
            ];

            layout.yrange = yrange;
            layout.xrange = xrange;
            layout.unit = "m";
            layout.yaxistickformat = ".2f";

            rzvdaventriaPlot(element, plotdata, layout);
            $( "#caption-rijnpeil" ).html(rzvdaventriaWaterdataCaption(lastValue, data.unit, lastTimestamp));
          });
        });

        /**
         * @function rzvdaventriaPlot
         * Makes a plot for water data on the weather page.
         *
         * @param {reference} element
         *   The element in which the graph is plotted.
         *
         * @param {array} data
         *   A plottly data array with the data to be plotted.
         *
         * @param {object} layout
         *   An object with specific data used in the layout of the graph. This
         *   includes:
         *   - layout.ytitle: the title of the y-axis
         *   - layout.yrange: the range for the y-axis
         *   - layout.xrange: the range for the x-axis
         *
         * @return {boolean} true
         */
        function rzvdaventriaPlot(element, data, layout) {
          layout.unit = " " + layout.unit;
          Plotly.newPlot(
            element,
            data = data,
            layout = {
              font: {
                family: "LatoLatinWeb, Open Sans, verdana, arial, sans-serif"
              },
              hoverlabel: {
                align: "left"
              },
              margin: {
                t: 0,
                r: 0,
                b: 80,
                l: 80,
                pad: 10
              },
              showlegend: false,
              xaxis: {
                autorange: false,
                fixedrange: true,
                tickformat: "%a %-d %b",
                type: "date",
                range: layout.xrange
              },
              yaxis: {
                autorange: false,
                fixedrange: true,
                tickformat: layout.yaxistickformat,
                ticksuffix: layout.unit,
                range: layout.yrange
              }
            },
            config = {
              responsive: true,
              scrollZoom: false,
              displayModeBar: false
            }
          );

          return true;
        }

        /**
         * @function rzvdaventriaMinMax
         * Returns the minimum and maximum value in an array.
         *
         * @param {array} array
         *   The array from which the minimum and maximum are returned.
         *
         * @return {array} [min, max]
         *   An array with the minumum value as the first element and the
         *   maximum value as the second argument.
         */
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

        /**
         * @function rzvdaventriaWaterdataCaption
         * Takes the data of a meassurement and formats it into a string to be
         * used as caption for the waterdata graphs.
         *
         * @param {number} value
         *   The value of the meassurement.
         *
         * @param {string} unit
         *   The unit of the meassurement.
         *
         * @param {date} date
         *   The date of the meassurement.
         *
         * @return {string}
         *   A formated string showing the information.
         */
        function rzvdaventriaWaterdataCaption(value, unit, date) {
          let months = Array("jan", "feb", "mar", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec");
          let timestamp = date.getDate();
              timestamp += " ";
              timestamp += months[date.getMonth()];
              timestamp += " ";
              timestamp += date.getHours();
              timestamp += ":";
              timestamp += (date.getMinutes() < 10 ? 0 : "");
              timestamp += date.getMinutes();

          value = value.replace(/\./, ",");

          return "Laatste meting: <strong>" + value + " " + unit + "</strong> (" + timestamp + ")";
        }
      }
    };
  })(jQuery, Drupal, once);
})();
