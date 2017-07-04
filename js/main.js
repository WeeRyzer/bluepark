//variables

var map;
var markContent;
var userLocation;
var yourLat;
var yourLng;
var zoom = 15;

//google analytics

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-102029620-1', 'auto');
ga('send', 'pageview');

//close info panel

$(document).ready(function() {
  $('#close').click(function() {
    $('.info').hide();
  });
});

//load google map 

function initMap() {

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 57.1497, lng: -2.0943},
    zoom: zoom
  });

  var infowindow = new google.maps.InfoWindow({
      content: '<p id="hook">aye aye min</p>'
  });

  function newLocation(newLat, newLng) {
      map.setCenter({
        lat: newLat,
        lng: newLng
      });
    };

  //obj array of each markers details

  var features = [
    {
      position: new google.maps.LatLng(57.145760, -2.108849),
      lat: 57.145760, //separate lat for geolocation
      lng: -2.108849, //separate lng for geolocation
      type: 'parking', //type of marker
      spaces: '2', //how many spaces at location
      location: 'Summer Street Car Park', //location name
      postcode: 'AB10 1SD', //postcode of location
      contentString: markContent //string for infowindow
    }, {
      position: new google.maps.LatLng(57.144578, -2.098299),
      lat: 57.144578,
      lng: -2.098299,
      type: 'parking',
      spaces: '1',
      location: 'Guild Street Rail Station',
      postcode: 'AB11 6GN',
      contentString: markContent
    }, {
      position: new google.maps.LatLng(57.145401, -2.099510),
      lat: 57.145401,
      lng: -2.099510,
      type: 'parking',
      spaces: '7',
      location: 'Trinity Centre Car Park',
      postcode: 'AB11 6BE',
      contentString: markContent
    }, {
      position: new google.maps.LatLng(57.148706, -2.106719),
      lat: 57.148706,
      lng: -2.106719,
      type: 'parking',
      spaces: '6',
      location: 'Denburn Car Park',
      postcode: 'AB25 1PU',
      contentString: markContent
    }, {
      position: new google.maps.LatLng(57.146920, -2.100630),
      lat: 57.146920,
      lng: -2.100630,
      type: 'parking',
      spaces: '3',
      location: 'Little Belmont Street',
      postcode: 'AB10 1JG',
      contentString: markContent
    }, {
      position: new google.maps.LatLng(57.148186, -2.100674),
      lat: 57.148186,
      lng: -2.100674,
      type: 'parking',
      spaces: '12',
      location: 'Harriet Street Car Park',
      postcode: 'AB10 1FR',
      contentString: markContent
    }, {
      position: new google.maps.LatLng(57.150185, -2.099954),
      lat: 57.150185,
      lng: -2.099954,
      type: 'parking',
      spaces: '34',
      location: 'Loch Street Car Park',
      postcode: 'AB25 1DE',
      contentString: markContent
    }, {
      position: new google.maps.LatLng(57.150764, -2.098270),
      lat: 57.150764,
      lng: -2.098270,
      type: 'parking',
      spaces: '5',
      location: 'Gallowgate Car Park',
      postcode: 'AB25 1DW',
      contentString: markContent
    }, {
      position: new google.maps.LatLng(57.146869, -2.094501),
      lat: 57.146869,
      lng: -2.094501,
      type: 'parking',
      spaces: '10',
      location: 'Shiprow Car Park',
      postcode: 'AB11 5BW',
      contentString: markContent
    }, {
      position: new google.maps.LatLng(57.150260, -2.092278),
      lat: 57.150260,
      lng: -2.092278,
      type: 'parking',
      spaces: '15',
      location: 'Frederick Street Car Park',
      postcode: 'AB24 5HY',
      contentString: markContent
    }, {
      position: new google.maps.LatLng(57.148529, -2.105862),
      lat: 57.148529,
      lng: -2.105862,
      type: 'parking',
      spaces: '3',
      location: 'Spa Street',
      postcode: 'AB25 1PU',
      contentString: markContent
    }, {
      position: new google.maps.LatLng(57.148556, -2.096004),
      lat: 57.148556,
      lng: -2.096004,
      type: 'parking',
      spaces: '1',
      location: 'Queen Street',
      postcode: 'AB10 1AP',
      contentString: markContent
    }, {
      position: new google.maps.LatLng(57.149500, -2.095120),
      lat: 57.149500,
      lng: -2.095120,
      type: 'parking',
      spaces: '3',
      location: 'Shoe Lane',
      postcode: 'AB10 1AL',
      contentString: markContent
    }, {
      position: new google.maps.LatLng(57.147186, -2.105076),
      lat: 57.147186,
      lng: -2.105076,
      type: 'parking',
      spaces: '5',
      location: 'Union Terrace',
      postcode: 'AB10 1NN',
      contentString: markContent
    }, {
      position: new google.maps.LatLng(57.142420, -2.099360),
      lat: 57.142420,
      lng: -2.099360,
      type: 'parking',
      spaces: '3',
      location: 'College Street Car Park',
      postcode: 'AB11 6FD',
      contentString: markContent
    }, {
      position: new google.maps.LatLng(57.151225, -2.077665),
      lat: 57.151225,
      lng: -2.077665,
      type: 'parking',
      spaces: '5',
      location: 'Esplanade',
      postcode: 'AB24 5NS',
      contentString: markContent
    }, {
      position: new google.maps.LatLng(57.145808, -2.104917),
      lat: 57.145808,
      lng: -2.104917,
      type: 'parking',
      spaces: '2',
      location: 'Golden Square Car Park',
      postcode: 'AB10 1RE',
      contentString: markContent
    }, {
      position: new google.maps.LatLng(57.155855, -2.080091),
      lat: 57.155855,
      lng: -2.080091,
      type: 'parking',
      spaces: '3',
      location: 'Beach Leisure Centre',
      postcode: 'AB24 5NR',
      contentString: markContent
    }, {
      position: new google.maps.LatLng(57.150875, -2.100606),
      lat: 57.150875,
      lng: -2.100606,
      type: 'parking',
      spaces: '2',
      location: 'Loch Street',
      postcode: 'AB25 1DH',
      contentString: markContent
    }, {
      position: new google.maps.LatLng(57.150356, -2.101509),
      lat: 57.150356,
      lng: -2.101509,
      type: 'parking',
      spaces: '2',
      location: 'St Andrew Street',
      postcode: 'AB25 1BQ',
      contentString: markContent
    }, {
      position: new google.maps.LatLng(57.147976, -2.101994),
      lat: 57.147976,
      lng: -2.101994,
      type: 'parking',
      spaces: '5',
      location: 'Schoolhill',
      postcode: 'AB10 1JQ',
      contentString: markContent
    }, {
      position: new google.maps.LatLng(57.151377, -2.102082),
      lat: 57.151377,
      lng: -2.102082,
      type: 'parking',
      spaces: '1',
      location: 'John Street',
      postcode: 'AB25 1BT',
      contentString: markContent
    }, {
      position: new google.maps.LatLng(57.143452, -2.110808),
      lat: 57.143452,
      lng: -2.110808,
      type: 'parking',
      spaces: '1',
      location: 'Rose Street',
      postcode: 'AB10 1TX',
      contentString: markContent
    }, {
      position: new google.maps.LatLng(57.144128, -2.110503),
      lat: 57.144128,
      lng: -2.110503,
      type: 'parking',
      spaces: '1',
      location: 'Thistle Street',
      postcode: 'AB10 1XZ',
      contentString: markContent
    }, {
      position: new google.maps.LatLng(57.143466, -2.106928),
      lat: 57.143466,
      lng: -2.106928,
      type: 'parking',
      spaces: '1',
      location: 'Langstane Place',
      postcode: 'AB11 6EN',
      contentString: markContent
    }, {
      position: new google.maps.LatLng(57.144226, -2.103006),
      lat: 57.144226,
      lng: -2.103006,
      type: 'parking',
      spaces: '1',
      location: 'Crown Street',
      postcode: 'AB11 6AY',
      contentString: markContent
    }, {
      position: new google.maps.LatLng(57.147734, -2.100383),
      lat: 57.147734,
      lng: -2.100383,
      type: 'parking',
      spaces: '5',
      location: 'Back Wynd',
      postcode: 'AB10 1JP',
      contentString: markContent
    }, {
      position: new google.maps.LatLng(57.151908, -2.103907),
      lat: 57.151908,
      lng: -2.103907,
      type: 'parking',
      spaces: '2',
      location: 'Craigie Street',
      postcode: 'AB25 1ED',
      contentString: markContent
    }, {
      position: new google.maps.LatLng(57.152582, -2.102814),
      lat: 57.152582,
      lng: -2.102814,
      type: 'parking',
      spaces: '1',
      location: 'Spring Garden',
      postcode: 'AB25 1DG',
      contentString: markContent
    }, {
      position: new google.maps.LatLng(57.148637, -2.091861),
      lat: 57.148637,
      lng: -2.091861,
      type: 'parking',
      spaces: '1',
      location: 'Justice Street',
      postcode: 'AB11 5HR',
      contentString: markContent
    }, {
      position: new google.maps.LatLng(57.147551, -2.095726),
      lat: 57.147551,
      lng: -2.095726,
      type: 'parking',
      spaces: '2',
      location: 'St Catherine\'s Wynd',
      postcode: 'AB10 1AU',
      contentString: markContent
    }, {
      position: new google.maps.LatLng(57.145612, -2.099561),
      lat: 57.145612,
      lng: -2.099561,
      type: 'parking',
      spaces: '1',
      location: 'Rennie\'s Wynd',
      postcode: 'AB11 6NZ',
      contentString: markContent
    }, {
      position: new google.maps.LatLng(57.145246, -2.104404),
      lat: 57.145246,
      lng: -2.104404,
      type: 'parking',
      spaces: '2',
      location: 'South Silver Street',
      postcode: 'AB10 1PR',
      contentString: markContent
    }, {
      position: new google.maps.LatLng(57.145135, -2.106394),
      lat: 57.145135,
      lng: -2.106394,
      type: 'parking',
      spaces: '2',
      location: 'Huntly Street',
      postcode: 'AB10 1TJ',
      contentString: markContent
    }, {
      position: new google.maps.LatLng(57.146887, -2.099084),
      lat: 57.146887,
      lng: -2.099084,
      type: 'parking',
      spaces: '1',
      location: 'Correction Wynd',
      postcode: ' AB10 1HP',
      contentString: markContent
    }
  ];

  //create svg marker and size

  var icon = {
    url: "img/marker.svg",
    scaledSize: new google.maps.Size(38.25,53.625)
  }

  //create markers

  features.forEach(function(feature) {
    var marker = new google.maps.Marker({
      position: feature.position,
      icon: icon,
      map: map,
      animation: google.maps.Animation.DROP
    });

    //marker infowindow content

    var markContent =
      '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
          '<h2 id="firstHeading" class="firstHeading">' + feature.location + '</h2>'+
          '<h3 class="secondHeading">' + feature.postcode + '</h3>' +
          '<hr>' +
          '<div id="bodyContent">'+
          '<p>There are a total of '+ feature.spaces +' disabled spaces at ' + feature.location + '.' +
          '<p><i class="fa fa-car" aria-hidden="true"></i> Free to park</p>' +
          '<p><i class="fa fa-clock-o" aria-hidden="true"></i> No time restriction</p>' +
        '</div>'+
      '</div>'

    //closes previous infowindow if another is opened

    marker.addListener('click', function() {
      infowindow.close();
      infowindow.setContent(markContent);
      infowindow.open(map, marker);
    });

    //closes infowindow if map is clicked

    google.maps.event.addListener( map, 'click', function() {
        infowindow.close(); 
        infowindow.open( null, null ); 
    } );
  });

  //geolocation

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
      infowindow.setContent('<h4>You are here!</h4>');
      infowindow.open(map);
      map.setCenter(pos);
      map.setZoom(zoom);

      var closest = new Array();

      document.getElementById('distances').innerHTML = '<h1>The nearest spaces to you are:</h1>'; 

      for (i=0; i<features.length; i++) {
      var _pCord = features[i].position;

      var myLatLng = new google.maps.LatLng({lat: yourLat, lng: yourLng}); 

    var dist = (google.maps.geometry.spherical.computeDistanceBetween(_pCord, myLatLng));

    var obj = new Object();

    obj.dist = dist;
    obj.location = features[i].location;
    obj.spaces = features[i].spaces;
    obj.lat = features[i].lat;
    obj.lng = features[i].lng;

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
      var spacesAmount = closest[i].spaces;

      document.getElementById('distances').innerHTML += '<div class="col-lg-4"><li><h2>' + objLoc + '</h2>' + roundUp +' miles<hr><h3>there are a total of ' + spacesAmount + ' spaces in this location.</h3><button class="showOnMap" data-lat="'+ closest[i].lat +'" data-lng="'+ closest[i].lng +'">VIEW ON MAP</button></li></div>';
    }

    $(".showOnMap").click(function(){
        var buttLat = $(this).attr('data-lat');
        var buttLng = $(this).attr('data-lng');

        var thisLat = parseFloat(buttLat);
        var thisLng = parseFloat(buttLng);

        newLocation(thisLat, thisLng);

        console.log(thisLat, thisLng);
        map.setZoom(17);
    });

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
                                '<h4>Error: The Geolocation service failed.</h4>' :
                                '<h4>Error: Your browser doesn\'t support geolocation.</h4>');
          infowindow.open(map);
        }
  });

  //allows user to hit enter instead of clicking find button

  document.getElementById('user-location').onkeydown = function(e) {
    e = event || window.event; //IE fix
    if (e.keyCode == '13') {
      getLocation();
    }
  }

  //postcode location

  $("#get-loc").click(function() {
    getLocation();                  
  });

  function getLocation() {
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
              obj.spaces = features[i].spaces;
              obj.lat = features[i].lat;
              obj.lng = features[i].lng;

              console.log(features[i].location, dist, features[i].lat, features[i].lng);

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
                var spacesAmount = closest[i].spaces;

                document.getElementById('distances').innerHTML += '<div class="col-lg-4"><li><h2>' + objLoc + '</h2>' + roundUp +' miles<hr><h3>There are a total of ' + spacesAmount + ' spaces in this location.</h3><button class="showOnMap" data-lat="'+ closest[i].lat +'" data-lng="'+ closest[i].lng +'">VIEW ON MAP</button></li></div>';
              }


              $(".showOnMap").click(function(){
                  var buttLat = $(this).attr('data-lat');
                  var buttLng = $(this).attr('data-lng');

                  var thisLat = parseFloat(buttLat);
                  var thisLng = parseFloat(buttLng);

                  newLocation(thisLat, thisLng);

                  console.log(thisLat, thisLng);
                  map.setZoom(17);
              });
            },
            error: function(desc, err) {
                document.getElementById('response').innerHTML += "Details: " + desc.responseText;
            }
        });
  }

}