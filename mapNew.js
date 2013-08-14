$(document).ready(function() {
	createMap();
	$('.tooltip').tooltipster({theme: '.tooltipster-myStyle'});	
	// Div details
 });
 
 // on window load, show the tooltip
$(window).load(function() {
   $('#example').tooltipster('show');
      
   // once you click, hide the tooltip
   $(window).mousemove(function() {
      $('#example').tooltipster('hide');
   });
},
function showOverlay() {
var o = document.getElementById('overlay');
var l = document.getElementById('legend');
o.style.visibility = 'visible';
l.style.visibility = 'hidden';
}
);

// Create the map
function createMap() {

// Set basic paramaters
var map = L.map('map').setView([47, 12], 5);

// Add tile layers
var defaultLayer = L.tileLayer.provider('Esri.WorldGrayCanvas').addTo(map);

var baseLayers = {
			"Esri World Gray Canvas": defaultLayer,
		//	"OpenStreetMap German Style": L.tileLayer.provider('OpenStreetMap.DE'),
		//	"OpenStreetMap Black and White": L.tileLayer.provider('OpenStreetMap.BlackAndWhite'),
		//	"Thunderforest OpenCycleMap": L.tileLayer.provider('Thunderforest.OpenCycleMap'),
		//	"Thunderforest Transport": L.tileLayer.provider('Thunderforest.Transport'),
		//	"Thunderforest Landscape": L.tileLayer.provider('Thunderforest.Landscape'),
		//	"MapQuest OSM": L.tileLayer.provider('MapQuestOpen.OSM'),
		//	"MapQuest Aerial": L.tileLayer.provider('MapQuestOpen.Aerial'),
		//	"MapBox Example": L.tileLayer.provider('MapBox.examples.map-zr0njcqy'),
			"Esri WorldTerrain": L.tileLayer.provider('Esri.WorldTerrain'),
			"Esri NatGeoWorldMap": L.tileLayer.provider('Esri.NatGeoWorldMap'),
			"Stamen Watercolor": L.tileLayer.provider('Stamen.Watercolor'),
			"Stamen Toner": L.tileLayer.provider('Stamen.Toner'),
		//	"Stamen Terrain": L.tileLayer.provider('Stamen.Terrain'),
		//	"Esri WorldStreetMap": L.tileLayer.provider('Esri.WorldStreetMap'),
		//	"Esri DeLorme": L.tileLayer.provider('Esri.DeLorme'),
		//	"Esri WorldTopoMap": L.tileLayer.provider('Esri.WorldTopoMap'),
		//	"Esri WorldImagery": L.tileLayer.provider('Esri.WorldImagery'),
		//	"Esri WorldTerrain": L.tileLayer.provider('Esri.WorldTerrain'),
			"Esri WorldShadedRelief": L.tileLayer.provider('Esri.WorldShadedRelief'),
			//uncoment these linkes if your screen is really large	
			"Esri WorldPhysical": L.tileLayer.provider('Esri.WorldPhysical'),
		//	"Esri OceanBasemap": L.tileLayer.provider('Esri.OceanBasemap'),
		//	"Nokia Normal Day": L.tileLayer.provider('Nokia.normalDay'),
		//	"Nokia Normal Day Grey": L.tileLayer.provider('Nokia.normalGreyDay'),
		//	"Nokia Satellite": L.tileLayer.provider('Nokia.satelliteNoLabelsDay'),
		//	"Nokia Satellite (Labeled)": L.tileLayer.provider('Nokia.satelliteYesLabelsDay'),
		//	"Nokia Terrain": L.tileLayer.provider('Nokia.terrainDay'),
			"Acetate": L.tileLayer.provider('Acetate')
		};

// Display info in the popup for markers
function popUpInfoEditions(feature, layer) {
   	layer.bindPopup("<span class='popupPlace'>" + feature.properties.place + "</span><br /><span class='popupCount'>" + feature.properties.count + " edition(s)</span>");
};


function popUpInfoLetters(feature, layer) {
   	layer.bindPopup("<span class='popupPlace'>" + feature.properties.place + "</span><br /><span class='popupCount'>" + feature.properties.count + " letter(s)</span>");
};




// Load geoJson files
var edCat1 = new L.GeoJSON.AJAX("https://dl.dropboxusercontent.com/u/2572762/edCat1.json",{
		onEachFeature:popUpInfoEditions,
		pointToLayer: function (feature, latlng) {
    		return L.circleMarker(latlng, {
    			fillColor: "#ff0000",
    			color: "white",
    			weight: 2,
    			opacity: 1,
			    fillOpacity: 0.5,
				radius: (feature.properties.category * 5)
    			}
    		);
		}	
	}
	);

var edCat2 = new L.GeoJSON.AJAX("https://dl.dropboxusercontent.com/u/2572762/edCat2.json",{
		onEachFeature:popUpInfoEditions,
		pointToLayer: function (feature, latlng) {
    		return L.circleMarker(latlng, {
    			fillColor: "#ffff00",
    			color: "white",
    			weight: 2,
    			opacity: 1,
			    fillOpacity: 0.5,
				radius: (feature.properties.category * 5)
    			}
    		);
		}	
	}
	);
	
var edCat3 = new L.GeoJSON.AJAX("https://dl.dropboxusercontent.com/u/2572762/edCat3.json",{
		onEachFeature:popUpInfoEditions,
		pointToLayer: function (feature, latlng) {
    		return L.circleMarker(latlng, {
    			fillColor: "#9966ff",
    			color: "white",
    			weight: 2,
    			opacity: 1,
			    fillOpacity: 0.7,
				radius: (feature.properties.category * 5)
    			}
    		);
		}	
	}
	);
	
var edCat4 = new L.GeoJSON.AJAX("https://dl.dropboxusercontent.com/u/2572762/edCat4.json",{
		onEachFeature:popUpInfoEditions,
		pointToLayer: function (feature, latlng) {
    		return L.circleMarker(latlng, {
    			fillColor: "#ff00ff",
    			color: "white",
    			weight: 2,
    			opacity: 1,
			    fillOpacity: 0.5,
				radius: (feature.properties.category * 5)
    			}
    		);
		}	
	}
	);

var edCat5 = new L.GeoJSON.AJAX("https://dl.dropboxusercontent.com/u/2572762/edCat5.json",{
		onEachFeature:popUpInfoEditions,
		pointToLayer: function (feature, latlng) {
    		return L.circleMarker(latlng, {
    			fillColor: "#ccccff",
    			color: "white",
    			weight: 2,
    			opacity: 1,
			    fillOpacity: 0.7,
				radius: (feature.properties.category * 5)
    			}
    		);
		}	
	}
	);	

var lettCat1 = new L.GeoJSON.AJAX("https://dl.dropboxusercontent.com/u/2572762/lettCat1.json",{
		onEachFeature:popUpInfoLetters,
		pointToLayer: function (feature, latlng) {
    		return L.circleMarker(latlng, {
    			fillColor: "#006600",
    			color: "white",
    			weight: 2,
    			opacity: 1,
			    fillOpacity: 0.5,
				radius: (feature.properties.category * 5)
    			}
    		);
		}	
	}
	);
	
var lettCat2 = new L.GeoJSON.AJAX("https://dl.dropboxusercontent.com/u/2572762/lettCat2.json",{
		onEachFeature:popUpInfoLetters,
		pointToLayer: function (feature, latlng) {
    		return L.circleMarker(latlng, {
    			fillColor: "#66ff00",
    			color: "white",
    			weight: 2,
    			opacity: 1,
			    fillOpacity: 0.5,
				radius: (feature.properties.category * 5)
    			}
    		);
		}	
	}
	);	
	
var lettCat3 = new L.GeoJSON.AJAX("https://dl.dropboxusercontent.com/u/2572762/lettCat3.json",{
		onEachFeature:popUpInfoLetters,
		pointToLayer: function (feature, latlng) {
    		return L.circleMarker(latlng, {
    			fillColor: "#0000ff",
    			color: "white",
    			weight: 2,
    			opacity: 1,
			    fillOpacity: 0.5,
				radius: (feature.properties.category * 5)
    			}
    		);
		}	
	}
	);		
	
var lettCat4 = new L.GeoJSON.AJAX("https://dl.dropboxusercontent.com/u/2572762/lettCat4.json",{
		onEachFeature:popUpInfoLetters,
		pointToLayer: function (feature, latlng) {
    		return L.circleMarker(latlng, {
    			fillColor: "#00ffff",
    			color: "white",
    			weight: 2,
    			opacity: 1,
			    fillOpacity: 0.5,
				radius: (feature.properties.category * 5)
    			}
    		);
		}	
	}
	);		


// Add layers control
var overlayEditions={
"Actual places of edition": edCat1,
"Actual places of edition, not stated": edCat2,
"Stated places of edition": edCat3,
"True stated places of edition": edCat4,
"False stated places of edition": edCat5,
"Sources of letters from Voltaire": lettCat1,
"Destination of letters from Voltaire": lettCat2,
"Source of letters to Voltaire": lettCat3,
"Destination of letters to Voltaire": lettCat4
}

var lc = L.control.layers(baseLayers, overlayEditions);
lc.addTo(map);

};