//Define markers
var markersCat1 = [
['Chalon-sur-Saône','1 edition(s)',46.78333,4.85, '1'],
['Bruges','1 edition(s)',51.20892,3.22424, '1'],
['Dijon','2 edition(s)',47.31667,5.01667, '2'],
['Beijing','1 edition(s)',39.9075,116.39723, '1'],
['Amsterdam','200 edition(s)',52.37403,4.88969, '5'],
['Annecy','2 edition(s)',45.9,6.11667, '2'],
['Augsburg','1 edition(s)',48.36667,10.88333, '1'],
['Avignon','25 edition(s)',43.94834,4.80892, '3'],
['Barcelona','3 edition(s)',41.38879,2.15899, '2'],
['Basel','25 edition(s)',47.5584,7.57327, '3'],
['Berlin','24 edition(s)',52.52437,13.41053, '3'],
['Bern','2 edition(s)',46.94809,7.44744, '2'],
['Besançon','3 edition(s)',47.24878,6.01815, '2'],
['Bonn','1 edition(s)',50.73438,7.09548, '1'],
['Bordeaux','8 edition(s)',44.84044,-0.5805, '2'],
['Bouillon','3 edition(s)',49.79324,5.06704, '2'],
['Brescia','1 edition(s)',45.52478,10.22727, '1'],
['Brussels','8 edition(s)',50.85045,4.34878, '2'],
['Caen','1 edition(s)',49.18585,-0.35912, '1'],
['Castres','1 edition(s)',43.6,2.25, '1'],
['Clermont-Ferrand','1 edition(s)',45.77966,3.08628, '1'],
['Colmar','2 edition(s)',48.08333,7.36667, '2'],
['Copenhagen','8 edition(s)',55.67594,12.56553, '2'],
['Dordrecht','3 edition(s)',51.81,4.67361, '2'],
['Dresden','19 edition(s)',51.05089,13.73832, '3'],
['Dublin','4 edition(s)',53.33306,-6.24889, '2'],
['Edinburgh','3 edition(s)',55.95206,-3.19648, '2'],
['Europe','2 edition(s)',48.69096,9.14062, '2'],
['Ferney-Voltaire','7 edition(s)',46.25858,6.11063, '2'],
['Ferrara','1 edition(s)',44.82678,11.62071, '1'],
['Florence','7 edition(s)',43.76667,11.25, '2'],
['Frankfurt am Main','14 edition(s)',50.11552,8.68417, '3'],
['Geneva','377 edition(s)',46.20222,6.14569, '7'],
['Genova','2 edition(s)',44.40632,8.93386, '2'],
['Glasgow','2 edition(s)',55.86515,-4.25763, '2'],
['Gotha','1 edition(s)',50.94823,10.70193, '1'],
['Istanbul','5 edition(s)',41.01384,28.94966, '2'],
['Kehl','17 edition(s)',48.57297,7.81523, '3'],
['Köln','1 edition(s)',50.93333,6.95, '1'],
['Kraków','2 edition(s)',50.06143,19.93658, '2'],
['Lausanne','30 edition(s)',46.516,6.63282, '3'],
['Leiden','14 edition(s)',52.15833,4.49306, '3'],
['Leipzig','21 edition(s)',51.33962,12.37129, '3'],
['Levallois-Perret','1 edition(s)',48.89389,2.28864, '1'],
['Liège','9 edition(s)',50.63373,5.56749, '2'],
['Lille','4 edition(s)',50.63297,3.05858, '2'],
['Lisbon','9 edition(s)',38.71667,-9.13333, '2'],
['London','139 edition(s)',51.50853,-0.12574, '4'],
['Lyon','17 edition(s)',45.74846,4.84671, '3'],
['Maastricht','2 edition(s)',50.84833,5.68889, '2'],
['Madrid','1 edition(s)',40.4165,-3.70256, '1'],
['Mannheim','3 edition(s)',49.49671,8.47955, '2'],
['Metz','3 edition(s)',49.11911,6.17269, '2'],
['Milan','1 edition(s)',45.46427,9.18951, '1'],
['Montauban','1 edition(s)',44.01667,1.35, '1'],
['München','2 edition(s)',48.13743,11.57549, '2'],
['Naples','2 edition(s)',40.83333,14.25, '2'],
['Neuchâtel','8 edition(s)',46.99179,6.931, '2'],
['Noyon','1 edition(s)',49.58333,3, '1'],
['Nürnberg','1 edition(s)',49.45421,11.07752, '1'],
['Padua','4 edition(s)',45.41519,11.88181, '2'],
['Palermo','1 edition(s)',38.11582,13.35976, '1'],
['Paris','469 edition(s)',48.85341,2.3488, '7'],
['Parma','6 edition(s)',44.80266,10.32898, '2'],
['Pisa','1 edition(s)',43.71553,10.39659, '1'],
['Potsdam','1 edition(s)',52.39886,13.06566, '1'],
['Provins','1 edition(s)',48.55,3.3, '1'],
['Rome','4 edition(s)',41.89474,12.4839, '2'],
['Rostock','1 edition(s)',54.0887,12.14049, '1'],
['Rotterdam','2 edition(s)',51.9225,4.47917, '2'],
['Rouen','44 edition(s)',49.44313,1.09932, '3'],
['Stockholm','4 edition(s)',59.33258,18.0649, '2'],
['Strasbourg','2 edition(s)',48.58342,7.74296, '2'],
['Syberie','1 edition(s)',60,100, '1'],
['The Hague','39 edition(s)',52.07667,4.29861, '3'],
['The Netherlands','1 edition(s)',52.5,5.75, '1'],
['Toulouse','6 edition(s)',43.60426,1.44367, '2'],
['Tournay','1 edition(s)',43.18438,0.24454, '1'],
['Utrecht','2 edition(s)',52.09083,5.12222, '2'],
['Valognes','1 edition(s)',49.50881,-1.47047, '1'],
['Venice','16 edition(s)',45.43861,12.32667, '3'],
['Warsaw','1 edition(s)',52.22977,21.01178, '1'],
['Wien','7 edition(s)',48.20849,16.37208, '2'],
['Wrocław','1 edition(s)',51.1,17.03333, '1'],
['Zweibrücken','1 edition(s)',49.24686,7.36977, '1'],
['Marseille','1 edition(s)',43.29695,5.38107, '1'],
['Reims','1 edition(s)',49.25,4.03333, '1'],
['Toulon','4 edition(s)',43.11667,5.93333, '2'],
['Switzerland','1 edition(s)',8.01427,47.00016, '1'],
['Halle','1 edition(s)',51.5,12, '1'],
];

var markersCat2 = [
['Amsterdam','11 edition(s)',52.37403,4.88969, '3'],
['Avignon','1 edition(s)',43.94834,4.80892, '1'],
['Bouillon','1 edition(s)',49.79324,5.06704, '1'],
['Brescia','1 edition(s)',45.52478,10.22727, '1'],
['Colmar','1 edition(s)',48.08333,7.36667, '1'],
['Geneva','187 edition(s)',46.20222,6.14569, '5'],
['Kehl','15 edition(s)',48.57297,7.81523, '3'],
['Lausanne','2 edition(s)',46.516,6.63282, '2'],
['Leiden','1 edition(s)',52.15833,4.49306, '1'],
['Leipzig','1 edition(s)',51.33962,12.37129, '1'],
['Levallois-Perret','1 edition(s)',48.89389,2.28864, '1'],
['Liège','2 edition(s)',50.63373,5.56749, '2'],
['London','3 edition(s)',51.50853,-0.12574, '2'],
['Lyon','7 edition(s)',45.74846,4.84671, '2'],
['Padua','1 edition(s)',45.41519,11.88181, '1'],
['Paris','80 edition(s)',48.85341,2.3488, '4'],
['Rouen','4 edition(s)',49.44313,1.09932, '2'],
['The Hague','3 edition(s)',52.07667,4.29861, '2'],
];

var markersCat3 = [
['Beijing','1 edition(s)',39.9075,116.39723, '1'],
['Amsterdam','193 edition(s)',52.37403,4.88969, '5'],
['Annecy','2 edition(s)',45.9,6.11667, '2'],
['Antwerp','1 edition(s)',51.21989,4.40346, '1'],
['Athens','1 edition(s)',37.97945,23.71622, '1'],
['Augsburg','1 edition(s)',48.36667,10.88333, '1'],
['Avignon','20 edition(s)',43.94834,4.80892, '3'],
['Barcelona','3 edition(s)',41.38879,2.15899, '2'],
['Basel','36 edition(s)',47.5584,7.57327, '3'],
['Berlin','34 edition(s)',52.52437,13.41053, '3'],
['Bern','2 edition(s)',46.94809,7.44744, '2'],
['Besançon','4 edition(s)',47.24878,6.01815, '2'],
['Bonn','1 edition(s)',50.73438,7.09548, '1'],
['Bordeaux','8 edition(s)',44.84044,-0.5805, '2'],
['Bouillon','1 edition(s)',49.79324,5.06704, '1'],
['Brussels','5 edition(s)',50.85045,4.34878, '2'],
['Caen','1 edition(s)',49.18585,-0.35912, '1'],
['Castres','1 edition(s)',43.6,2.25, '1'],
['Clermont-Ferrand','1 edition(s)',45.77966,3.08628, '1'],
['Colmar','1 edition(s)',48.08333,7.36667, '1'],
['Copenhagen','8 edition(s)',55.67594,12.56553, '2'],
['Dordrecht','3 edition(s)',51.81,4.67361, '2'],
['Dresden','20 edition(s)',51.05089,13.73832, '3'],
['Dublin','4 edition(s)',53.33306,-6.24889, '2'],
['Edinburgh','3 edition(s)',55.95206,-3.19648, '2'],
['Europe','2 edition(s)',48.69096,9.14062, '2'],
['Ferney-Voltaire','7 edition(s)',46.25858,6.11063, '2'],
['Ferrara','1 edition(s)',44.82678,11.62071, '1'],
['Florence','7 edition(s)',43.76667,11.25, '2'],
['Frankfurt am Main','13 edition(s)',50.11552,8.68417, '3'],
['Geneva','190 edition(s)',46.20222,6.14569, '5'],
['Genova','2 edition(s)',44.40632,8.93386, '2'],
['Glasgow','2 edition(s)',55.86515,-4.25763, '2'],
['Gotha','1 edition(s)',50.94823,10.70193, '1'],
['Hamburg','2 edition(s)',53.57532,10.01534, '2'],
['Istanbul','5 edition(s)',41.01384,28.94966, '2'],
['Kehl','2 edition(s)',48.57297,7.81523, '2'],
['Köln','1 edition(s)',50.93333,6.95, '1'],
['Kraków','2 edition(s)',50.06143,19.93658, '2'],
['Lausanne','32 edition(s)',46.516,6.63282, '3'],
['Leiden','10 edition(s)',52.15833,4.49306, '2'],
['Leipzig','22 edition(s)',51.33962,12.37129, '3'],
['Liège','6 edition(s)',50.63373,5.56749, '2'],
['Lille','4 edition(s)',50.63297,3.05858, '2'],
['Lisbon','9 edition(s)',38.71667,-9.13333, '2'],
['London','165 edition(s)',51.50853,-0.12574, '5'],
['Lyon','7 edition(s)',45.74846,4.84671, '2'],
['Maastricht','2 edition(s)',50.84833,5.68889, '2'],
['Madrid','1 edition(s)',40.4165,-3.70256, '1'],
['Mannheim','3 edition(s)',49.49671,8.47955, '2'],
['Metz','3 edition(s)',49.11911,6.17269, '2'],
['Milan','1 edition(s)',45.46427,9.18951, '1'],
['Montauban','1 edition(s)',44.01667,1.35, '1'],
['München','2 edition(s)',48.13743,11.57549, '2'],
['Naples','2 edition(s)',40.83333,14.25, '2'],
['Neuchâtel','19 edition(s)',46.99179,6.931, '3'],
['Noyon','1 edition(s)',49.58333,3, '1'],
['Nürnberg','1 edition(s)',49.45421,11.07752, '1'],
['Padua','3 edition(s)',45.41519,11.88181, '2'],
['Palermo','1 edition(s)',38.11582,13.35976, '1'],
['Paris','342 edition(s)',48.85341,2.3488, '6'],
['Parma','6 edition(s)',44.80266,10.32898, '2'],
['Pisa','1 edition(s)',43.71553,10.39659, '1'],
['Potsdam','1 edition(s)',52.39886,13.06566, '1'],
['Provins','1 edition(s)',48.55,3.3, '1'],
['Rome','8 edition(s)',41.89474,12.4839, '2'],
['Rostock','1 edition(s)',54.0887,12.14049, '1'],
['Rotterdam','3 edition(s)',51.9225,4.47917, '2'],
['Rouen','11 edition(s)',49.44313,1.09932, '3'],
['Stockholm','4 edition(s)',59.33258,18.0649, '2'],
['Strasbourg','2 edition(s)',48.58342,7.74296, '2'],
['Syberie','1 edition(s)',60,100, '1'],
['The Hague','40 edition(s)',52.07667,4.29861, '3'],
['The Netherlands','1 edition(s)',52.5,5.75, '1'],
['Toulouse','6 edition(s)',43.60426,1.44367, '2'],
['Tournay','1 edition(s)',43.18438,0.24454, '1'],
['Utrecht','2 edition(s)',52.09083,5.12222, '2'],
['Valognes','1 edition(s)',49.50881,-1.47047, '1'],
['Venice','16 edition(s)',45.43861,12.32667, '3'],
['Warsaw','1 edition(s)',52.22977,21.01178, '1'],
['Wien','7 edition(s)',48.20849,16.37208, '2'],
['Wrocław','1 edition(s)',51.1,17.03333, '1'],
['Zweibrücken','1 edition(s)',49.24686,7.36977, '1'],
['Dijon','2 edition(s)',47.31667,5.01667, '2'],
['Reims','1 edition(s)',49.25,4.03333, '1'],
['Switzerland','1 edition(s)',8.01427,47.00016, '1'],
['Bruges','1 edition(s)',51.20892,3.22424, '1'],
['Chalon-sur-Saône','1 edition(s)',46.78333,4.85, '1'],
['Marseille','1 edition(s)',43.29695,5.38107, '1'],
['Toulon','4 edition(s)',43.11667,5.93333, '2'],
['Halle','1 edition(s)',51.5,12, '1'],
];

var markersCat4 = [
['Chalon-sur-Saône','1 edition(s)',46.78333,4.85, '1'],
['Dijon','2 edition(s)',47.31667,5.01667, '2'],
['Bruges','1 edition(s)',51.20892,3.22424, '1'],
['Beijing','1 edition(s)',39.9075,116.39723, '1'],
['Amsterdam','169 edition(s)',52.37403,4.88969, '5'],
['Annecy','2 edition(s)',45.9,6.11667, '2'],
['Augsburg','1 edition(s)',48.36667,10.88333, '1'],
['Avignon','20 edition(s)',43.94834,4.80892, '3'],
['Barcelona','3 edition(s)',41.38879,2.15899, '2'],
['Basel','25 edition(s)',47.5584,7.57327, '3'],
['Berlin','24 edition(s)',52.52437,13.41053, '3'],
['Bern','2 edition(s)',46.94809,7.44744, '2'],
['Besançon','3 edition(s)',47.24878,6.01815, '2'],
['Bonn','1 edition(s)',50.73438,7.09548, '1'],
['Bordeaux','8 edition(s)',44.84044,-0.5805, '2'],
['Bouillon','1 edition(s)',49.79324,5.06704, '1'],
['Brussels','8 edition(s)',50.85045,4.34878, '2'],
['Caen','1 edition(s)',49.18585,-0.35912, '1'],
['Castres','1 edition(s)',43.6,2.25, '1'],
['Clermont-Ferrand','1 edition(s)',45.77966,3.08628, '1'],
['Colmar','1 edition(s)',48.08333,7.36667, '1'],
['Copenhagen','8 edition(s)',55.67594,12.56553, '2'],
['Dordrecht','3 edition(s)',51.81,4.67361, '2'],
['Dresden','19 edition(s)',51.05089,13.73832, '3'],
['Dublin','4 edition(s)',53.33306,-6.24889, '2'],
['Edinburgh','3 edition(s)',55.95206,-3.19648, '2'],
['Europe','2 edition(s)',48.69096,9.14062, '2'],
['Ferney-Voltaire','7 edition(s)',46.25858,6.11063, '2'],
['Ferrara','1 edition(s)',44.82678,11.62071, '1'],
['Florence','7 edition(s)',43.76667,11.25, '2'],
['Frankfurt am Main','13 edition(s)',50.11552,8.68417, '3'],
['Geneva','157 edition(s)',46.20222,6.14569, '5'],
['Genova','2 edition(s)',44.40632,8.93386, '2'],
['Glasgow','2 edition(s)',55.86515,-4.25763, '2'],
['Gotha','1 edition(s)',50.94823,10.70193, '1'],
['Istanbul','5 edition(s)',41.01384,28.94966, '2'],
['Kehl','2 edition(s)',48.57297,7.81523, '2'],
['Köln','1 edition(s)',50.93333,6.95, '1'],
['Kraków','2 edition(s)',50.06143,19.93658, '2'],
['Lausanne','25 edition(s)',46.516,6.63282, '3'],
['Leiden','10 edition(s)',52.15833,4.49306, '2'],
['Leipzig','20 edition(s)',51.33962,12.37129, '3'],
['Liège','6 edition(s)',50.63373,5.56749, '2'],
['Lille','4 edition(s)',50.63297,3.05858, '2'],
['Lisbon','9 edition(s)',38.71667,-9.13333, '2'],
['London','130 edition(s)',51.50853,-0.12574, '4'],
['Lyon','7 edition(s)',45.74846,4.84671, '2'],
['Maastricht','2 edition(s)',50.84833,5.68889, '2'],
['Madrid','1 edition(s)',40.4165,-3.70256, '1'],
['Mannheim','3 edition(s)',49.49671,8.47955, '2'],
['Metz','3 edition(s)',49.11911,6.17269, '2'],
['Milan','1 edition(s)',45.46427,9.18951, '1'],
['Montauban','1 edition(s)',44.01667,1.35, '1'],
['München','2 edition(s)',48.13743,11.57549, '2'],
['Naples','2 edition(s)',40.83333,14.25, '2'],
['Neuchâtel','7 edition(s)',46.99179,6.931, '2'],
['Noyon','1 edition(s)',49.58333,3, '1'],
['Nürnberg','1 edition(s)',49.45421,11.07752, '1'],
['Padua','3 edition(s)',45.41519,11.88181, '2'],
['Palermo','1 edition(s)',38.11582,13.35976, '1'],
['Paris','333 edition(s)',48.85341,2.3488, '6'],
['Parma','6 edition(s)',44.80266,10.32898, '2'],
['Pisa','1 edition(s)',43.71553,10.39659, '1'],
['Potsdam','1 edition(s)',52.39886,13.06566, '1'],
['Provins','1 edition(s)',48.55,3.3, '1'],
['Rome','4 edition(s)',41.89474,12.4839, '2'],
['Rostock','1 edition(s)',54.0887,12.14049, '1'],
['Rotterdam','2 edition(s)',51.9225,4.47917, '2'],
['Rouen','10 edition(s)',49.44313,1.09932, '2'],
['Stockholm','4 edition(s)',59.33258,18.0649, '2'],
['Strasbourg','2 edition(s)',48.58342,7.74296, '2'],
['Syberie','1 edition(s)',60,100, '1'],
['The Hague','36 edition(s)',52.07667,4.29861, '3'],
['The Netherlands','1 edition(s)',52.5,5.75, '1'],
['Toulouse','6 edition(s)',43.60426,1.44367, '2'],
['Tournay','1 edition(s)',43.18438,0.24454, '1'],
['Utrecht','2 edition(s)',52.09083,5.12222, '2'],
['Valognes','1 edition(s)',49.50881,-1.47047, '1'],
['Venice','16 edition(s)',45.43861,12.32667, '3'],
['Warsaw','1 edition(s)',52.22977,21.01178, '1'],
['Wien','7 edition(s)',48.20849,16.37208, '2'],
['Wrocław','1 edition(s)',51.1,17.03333, '1'],
['Zweibrücken','1 edition(s)',49.24686,7.36977, '1'],
['Halle','1 edition(s)',51.5,12, '1'],
['Marseille','1 edition(s)',43.29695,5.38107, '1'],
['Reims','1 edition(s)',49.25,4.03333, '1'],
['Switzerland','1 edition(s)',8.01427,47.00016, '1'],
['Toulon','4 edition(s)',43.11667,5.93333, '2'],
];

var markersCat5 = [
['Amsterdam','24 edition(s)',52.37403,4.88969, '3'],
['Antwerp','1 edition(s)',51.21989,4.40346, '1'],
['Athens','1 edition(s)',37.97945,23.71622, '1'],
['Basel','11 edition(s)',47.5584,7.57327, '3'],
['Berlin','10 edition(s)',52.52437,13.41053, '2'],
['Besançon','1 edition(s)',47.24878,6.01815, '1'],
['Dresden','1 edition(s)',51.05089,13.73832, '1'],
['Geneva','33 edition(s)',46.20222,6.14569, '3'],
['Hamburg','2 edition(s)',53.57532,10.01534, '2'],
['Lausanne','7 edition(s)',46.516,6.63282, '2'],
['Leipzig','2 edition(s)',51.33962,12.37129, '2'],
['London','35 edition(s)',51.50853,-0.12574, '3'],
['Neuchâtel','12 edition(s)',46.99179,6.931, '3'],
['Paris','9 edition(s)',48.85341,2.3488, '2'],
['Rome','4 edition(s)',41.89474,12.4839, '2'],
['Rotterdam','1 edition(s)',51.9225,4.47917, '1'],
['Rouen','1 edition(s)',49.44313,1.09932, '1'],
['The Hague','4 edition(s)',52.07667,4.29861, '2'],
];

// Create an array of styles.
	var styles = [
	  {
	    "stylers": [
	      { "visibility": "off" }
	    ]
	  },{
	    "featureType": "administrative.country",
	    "elementType": "geometry",
	    "stylers": [
	      { "visibility": "on" },
	    ]
	  },{
	    "featureType": "administrative.country",
	    "elementType": "fill",
	    "stylers": [
	      { "color": "#ffffff" },
	    ]
	  },{
	    "featureType": "water",
	    "elementType": "geometry",
	    "stylers": [
	      { "visibility": "on" }
	    ]
	  },{
	    "featureType": "administrative.country",
	    "elementType": "geometry.stroke",
	    "stylers": [
		  { "visibility": "off" },
	      { "color": "#cccccc" },
	      { "weight": 1 }
	    ]
	  },{
	    "featureType": "water",
	    "elementType": "geometry",
	    "stylers": [
	      { "visibility": "on" },
	      { "color": "#000000" },
		  { "lightness": 60 }	      
	    ]
	  }
	]

var map;

function getCircle(dimension,fill,border) {
	  var circle = {
    	path: google.maps.SymbolPath.CIRCLE,
	    scale: dimension*8,
    	fillColor: fill,
		fillOpacity: 0.4,
		strokeColor: border,
		strokeOpacity: 1,	  
		strokeWeight: 0.6
  };
  return circle;
  }

function initialize() {
    var mapOptions = {
          center: new google.maps.LatLng(48.69096, 9.14062),
          zoom: 4,
          mapTypeId: 'map_style',
          streetViewControl: false,
          mapTypeControl: false,
          panControl: false,
          scaleControl: false,
          zoomControl: true,
			zoomControlOptions: {
			style: google.maps.ZoomControlStyle.SMALL
  			}          
        };

	map = new google.maps.Map(document.getElementById("map-canvas"),mapOptions);
    
    // Create a new StyledMapType object, passing it the array of styles,
	// as well as the name to be displayed on the map type control.
	var styledMap = new google.maps.StyledMapType(styles,{name: "Styled Map"});

	//Associate the styled map with the MapTypeId and set it to display.
	map.mapTypes.set('map_style', styledMap);
	map.setMapTypeId('map_style');
}

//Add markers  
function showMarkers(category,color) {
	var markersCategory = 'markersCat' + category;
	var markersArray = window[markersCategory];
	var infoWindowKnown = new google.maps.InfoWindow(), marker, i;
    for (i = 0; i < markersArray.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(markersArray[i][2], markersArray[i][3]),
			icon: getCircle(markersArray[i][4],color,'white'),
            map: map
        });
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
            	var content = '<div id="infoWindow"><span class="place">' + markersArray[i][0] + '</span><br/>' + '<span class="number">' + markersArray[i][1] + '</span></div>';
                infoWindowKnown.setContent(content);
                infoWindowKnown.open(map, marker);
            }
        marker.setZIndex(markersArray[i][3]);
        })(marker, i));
    }
}
      
google.maps.event.addDomListener(window, 'load', initialize);


