      var map;
      var markContent;
      var userLocation;
      var yourLat;
      var yourLng;

      //var myLocation = 57.148862, -2.098110;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 57.1497, lng: -2.0943},
          zoom: 15
        });

      var infowindow = new google.maps.InfoWindow({
            content: '<p id="hook">fit like</p>'
      });

      var iconBase = 'img/';
        var icons = {
          parking: {
            icon: iconBase + 'disabled.png'
          }
        };

        var features = [
          {
            position: new google.maps.LatLng(57.145760, -2.108849),
            type: 'parking',
            spaces: '2',
            location: 'Summer Street Car Park',
            postcode: 'AB10 1SD',
            contentString: markContent
          }, {
            position: new google.maps.LatLng(57.144578, -2.098299),
            type: 'parking',
            spaces: '-',
            location: 'Guild Street Rail Station',
            postcode: 'AB11 6GN',
            contentString: markContent
          }, {
            position: new google.maps.LatLng(57.145401, -2.099510),
            type: 'parking',
            spaces: '7',
            location: 'Trinity Centre Car Park',
            postcode: 'AB11 6BE',
            contentString: markContent
          }, {
            position: new google.maps.LatLng(57.148706, -2.106719),
            type: 'parking',
            spaces: '6',
            location: 'Denburn Car Park',
            postcode: 'AB25 1PU',
            contentString: markContent
          }, {
            position: new google.maps.LatLng(57.146920, -2.100630),
            type: 'parking',
            spaces: '3',
            location: 'Little Belmont Street',
            postcode: 'AB10 1JG',
            contentString: markContent
          }, {
            position: new google.maps.LatLng(57.148186, -2.100674),
            type: 'parking',
            spaces: '12',
            location: 'Harriet Street Car Park',
            postcode: 'AB10 1FR',
            contentString: markContent
          }, {
            position: new google.maps.LatLng(57.150185, -2.099954),
            type: 'parking',
            spaces: '34',
            location: 'Loch Street Car Park',
            postcode: 'AB25 1DE',
            contentString: markContent
          }, {
            position: new google.maps.LatLng(57.150764, -2.098270),
            type: 'parking',
            spaces: '5',
            location: 'Gallowgate Car Park',
            postcode: 'AB25 1DW',
            contentString: markContent
          }, {
            position: new google.maps.LatLng(57.146869, -2.094501),
            type: 'parking',
            spaces: '-',
            location: 'Shiprow Car Park',
            postcode: 'AB11 5BW',
            contentString: markContent
          }, {
            position: new google.maps.LatLng(57.150260, -2.092278),
            type: 'parking',
            spaces: '-',
            location: 'Frederick Street Car Park',
            postcode: 'AB24 5HY',
            contentString: markContent
          }, {
            position: new google.maps.LatLng(57.148529, -2.105862),
            type: 'parking',
            spaces: '3',
            location: 'Spa Street',
            postcode: 'AB25 1PU',
            contentString: markContent
          }, {
            position: new google.maps.LatLng(57.148556, -2.096004),
            type: 'parking',
            spaces: '1',
            location: 'Queen Street',
            postcode: 'AB10 1AP',
            contentString: markContent
          }, {
            position: new google.maps.LatLng(57.149500, -2.095120),
            type: 'parking',
            spaces: '3',
            location: 'Shoe Lane',
            postcode: 'AB10 1AL',
            contentString: markContent
          }, {
            position: new google.maps.LatLng(57.147186, -2.105076),
            type: 'parking',
            spaces: '5',
            location: 'Union Terrace',
            postcode: 'AB10 1NN',
            contentString: markContent
          }, {
            position: new google.maps.LatLng(57.142420, -2.099360),
            type: 'parking',
            spaces: '3',
            location: 'College Street Car Park',
            postcode: 'AB11 6FD',
            contentString: markContent
          }, {
            position: new google.maps.LatLng(57.151225, -2.077665),
            type: 'parking',
            spaces: '5',
            location: 'Esplanade',
            postcode: 'AB24 5NS',
            contentString: markContent
          }, {
            position: new google.maps.LatLng(57.145808, -2.104917),
            type: 'parking',
            spaces: '2',
            location: 'Golden Square Car Park',
            postcode: 'AB10 1RE',
            contentString: markContent
          }, {
            position: new google.maps.LatLng(57.155855, -2.080091),
            type: 'parking',
            spaces: '3',
            location: 'Beach Leisure Centre',
            postcode: 'AB24 5NR',
            contentString: markContent
          }, {
            position: new google.maps.LatLng(57.150875, -2.100606),
            type: 'parking',
            spaces: '2',
            location: 'Loch Street',
            postcode: 'AB25 1DH',
            contentString: markContent
          }, {
            position: new google.maps.LatLng(57.150356, -2.101509),
            type: 'parking',
            spaces: '2',
            location: 'St Andrew Street',
            postcode: 'AB25 1BQ',
            contentString: markContent
          }, {
            position: new google.maps.LatLng(57.147976, -2.101994),
            type: 'parking',
            spaces: '5',
            location: 'Schoolhill',
            postcode: 'AB10 1JQ',
            contentString: markContent
          }, {
            position: new google.maps.LatLng(57.151377, -2.102082),
            type: 'parking',
            spaces: '1',
            location: 'John Street',
            postcode: 'AB25 1BT',
            contentString: markContent
          }, {
            position: new google.maps.LatLng(57.143452, -2.110808),
            type: 'parking',
            spaces: '1',
            location: 'Rose Street',
            postcode: 'AB10 1TX',
            contentString: markContent
          }, {
            position: new google.maps.LatLng(57.144128, -2.110503),
            type: 'parking',
            spaces: '1',
            location: 'Thistle Street',
            postcode: 'AB10 1XZ',
            contentString: markContent
          }, {
            position: new google.maps.LatLng(57.143466, -2.106928),
            type: 'parking',
            spaces: '-',
            location: 'Langstane Place',
            postcode: 'AB11 6EN',
            contentString: markContent
          }, {
            position: new google.maps.LatLng(57.144023, -2.102655),
            type: 'parking',
            spaces: '-',
            location: 'Crown Street',
            postcode: 'AB11 6AY',
            contentString: markContent
          }, {
            position: new google.maps.LatLng(57.147734, -2.100383),
            type: 'parking',
            spaces: '5',
            location: 'Back Wynd',
            postcode: 'AB10 1JP',
            contentString: markContent
          }, {
            position: new google.maps.LatLng(57.151908, -2.103907),
            type: 'parking',
            spaces: '2',
            location: 'Craigie Street',
            postcode: 'AB25 1ED',
            contentString: markContent
          }, {
            position: new google.maps.LatLng(57.152582, -2.102814),
            type: 'parking',
            spaces: '1',
            location: 'Spring Garden',
            postcode: 'AB11 6AY',
            contentString: markContent
          }, {
            position: new google.maps.LatLng(57.148637, -2.091861),
            type: 'parking',
            spaces: '1',
            location: 'Justice Street',
            postcode: 'AB11 5HR',
            contentString: markContent
          }, {
            position: new google.maps.LatLng(57.147551, -2.095726),
            type: 'parking',
            spaces: '2',
            location: 'St Catherine\'s Wynd',
            postcode: 'AB10 1AU',
            contentString: markContent
          }, {
            position: new google.maps.LatLng(57.145612, -2.099561),
            type: 'parking',
            spaces: '1',
            location: 'Rennie\'s Wynd',
            postcode: 'AB11 6NZ',
            contentString: markContent
          }, {
            position: new google.maps.LatLng(57.145246, -2.104404),
            type: 'parking',
            spaces: '2',
            location: 'South Silver Street',
            postcode: 'AB10 1PR',
            contentString: markContent
          }, {
            position: new google.maps.LatLng(57.145135, -2.106394),
            type: 'parking',
            spaces: '2',
            location: 'Huntly Street',
            postcode: 'AB10 1TJ',
            contentString: markContent
          }, {
            position: new google.maps.LatLng(57.146887, -2.099084),
            type: 'parking',
            spaces: '1',
            location: 'Correction Wynd',
            postcode: ' AB10 1HP',
            contentString: markContent
          }
        ];

        // Create markers.
        features.forEach(function(feature) {
          var marker = new google.maps.Marker({
            position: feature.position,
            icon: icons[feature.type].icon,
            map: map,
            animation: google.maps.Animation.DROP
          });

          var markContent =
            '<div id="content">'+
              '<div id="siteNotice">'+
              '</div>'+
                //'<img src="img/union-terrace.jpg">' +
                '<h2 id="firstHeading" class="firstHeading">' + feature.location + '</h2>'+
                '<h3 class="secondHeading">' + feature.postcode + '</h3>' +
                '<hr>' +
                '<div id="bodyContent">'+
                '<p>There are a total of '+ feature.spaces +' disabled spaces at ' + feature.location + '.' +
                '<p><i class="fa fa-car" aria-hidden="true"></i>Free to park</p>' +
                '<p>No time restriction</p>' +
              '</div>'+
            '</div>'

          //console.log(markContent);

          marker.addListener('click', function() {
            infowindow.close();
            infowindow.setContent(markContent);
            infowindow.open(map, marker);
          });

          google.maps.event.addListener( map, 'click', function() {
              infowindow.close(); 
              infowindow.open( null, null ); 
          } );
        });

        $("#your-loc").click(function() {
                  if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            yourLat = position.coords.latitude;
            yourLng = position.coords.longitude;

            console.log(yourLat, yourLng);

            infowindow.setPosition(pos);
            infowindow.setContent('Location found.');
            infowindow.open(map);
            map.setCenter(pos);

            var closest = new Array();

            document.getElementById('distances').innerHTML = '<h1>The nearest spaces to you are:</h1>'; 

            for (i=0; i<features.length; i++) {
            var _pCord = features[i].position;

            //closest.push(features[i].position);

            var myLatLng = new google.maps.LatLng({lat: yourLat, lng: yourLng}); 

          var dist = (google.maps.geometry.spherical.computeDistanceBetween(_pCord, myLatLng));

          var obj = new Object();

          obj.dist = dist;
          obj.location = features[i].location;

          console.log(features[i].location, dist);

          closest.push(obj);
          }

          console.log(closest);

          closest.sort(function(a, b) {
              return parseFloat(a.dist) - parseFloat(b.dist);
          });

          for (i=0; i<9; i++) {
            var closestEach = closest[i].dist;
            var inMiles = closestEach / 1609.34;
            var roundUp = inMiles.toFixed(2);
            var objLoc = closest[i].location;

            document.getElementById('distances').innerHTML += '<div class="col-lg-4"><li><h2>' + objLoc + '</h2>' + roundUp +' miles</li></div>';
          }
          }, function() {
            handleLocationError(true, infowindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infowindow, map.getCenter());
        }

        function handleLocationError(browserHasGeolocation, infowindow, pos) {
                infowindow.setPosition(pos);
                infowindow.setContent(browserHasGeolocation ?
                                      'Error: The Geolocation service failed.' :
                                      'Error: Your browser doesn\'t support geolocation.');
                infowindow.open(map);
              }
        });

        $("#get-loc").click(function() {

          $( "#distances" ).empty();

          userLocation = $('#user-location').val().toUpperCase();;

          document.getElementById('distances').innerHTML = '<h1>The nearest spaces to ' + userLocation + ' are:</h1>'; 

          var url  = "https://api.postcodes.io/postcodes/"+userLocation;

          var latitude;
          var longitude;
          var closest = new Array();

          //ajax call
          $.ajax({
                  url: url,
                  dataType: 'jsonp',
                  success: function(json) {
                  console.log(json.status);
                    longitude = json.result.longitude;
                    latitude = json.result.latitude;
                    console.log('long',longitude, 'lat', latitude);

            for (i=0; i<features.length; i++) {
            var _pCord = features[i].position;

            //closest.push(features[i].position);

            var myLatLng = new google.maps.LatLng({lat: latitude, lng: longitude}); 

          var dist = (google.maps.geometry.spherical.computeDistanceBetween(_pCord, myLatLng));

          var obj = new Object();

          obj.dist = dist;
          obj.location = features[i].location;

          console.log(features[i].location, dist);

          closest.push(obj);
          }

          console.log(closest);

          closest.sort(function(a, b) {
              return parseFloat(a.dist) - parseFloat(b.dist);
          });

          for (i=0; i<9; i++) {
            var closestEach = closest[i].dist;
            var inMiles = closestEach / 1609.34;
            var roundUp = inMiles.toFixed(2);
            var objLoc = closest[i].location;

            document.getElementById('distances').innerHTML += '<div class="col-lg-4"><li><h2>' + objLoc + '</h2>' + roundUp +' miles</li></div>';
          }
                  },
                  error: function(desc, err) {
                      $('#text').html("Details: " + desc.responseText);
                  }
              });

          /*//uppercase 
          String.prototype.strFirstUpper = function() {
              return this.charAt(0).toUpperCase() + this.slice(1);
          }*/
                  
        });

      }