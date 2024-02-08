
    require([
      "esri/WebScene",
      "esri/views/SceneView",
      "esri/Camera",
      "esri/widgets/Home",
      "esri/layers/FeatureLayer",
      "esri/widgets/Legend",
      "dojo/domReady!"
    ], function(WebScene, SceneView, Camera, FeatureLayer, Legend, Home) {

    
      /*var map = new Map({
        basemap: "streets",
        ground: "world-elevation"
      });*/
      var scene = new WebScene({
        portalItem:{
         id:"a7a868efc9f640009fc2d5352bad6879" 
        }
      });
      
      var camera0 = new Camera({
        position: [
          -90.2336, // lon
         38.6348, // lat
         50000// elevation in meters
        ],
          tilt: 0,
            heading: 0
       
      })
      
      var camera = new Camera({
        position: [
          -90.4545, // lon
          38.7416, // lat
          250// elevation in meters
        ],
          tilt: 71,
            heading: 90
      })
      
      var camera2 = new Camera({
        position: [
          -90.2112, // lon
          38.6417, // lat
          250// elevation in meters
        ],
          tilt: 71,
            heading: 100
      });

      var view = new SceneView({
        container: "viewDiv",
        map: scene,
        //viewingMode:"global",
        camera: camera0,
        environment: {
            lighting: {
        //      date: new Date(),
              directShadowsEnabled: true,
              // don't update the view time when user pans.
              // The clock widget drives the time
              cameraTrackingEnabled: false
            }
        },
    });
    
    var homeBtn = new Home({
        view: view
      });

      // Add the home button to the top left corner of the view
    view.ui.add(homeBtn, "top-left");
    
    [stl, bei].forEach(function(button) {
      button.style.display = 'flex';
      view.ui.add(button, 'top-right');
    });
    
    bei.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        target:camera2
      });
    });
    
    stl.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        target:camera
      });
    });
      

      
const pointsRenderer = {
          type: "unique-value", // autocasts as new UniqueValueRenderer()
          field: "Type",
          uniqueValueInfos: [
            {
              value: "Museum",
              symbol: getUniqueValueSymbol("https://developers.arcgis.com/javascript/latest//sample-code/visualization-point-styles/live/Museum.png", "#D13470")
            },
            {
              value: "Restaurant",
              symbol: getUniqueValueSymbol("https://developers.arcgis.com/javascript/latest//sample-code/visualization-point-styles/live/Restaurant.png", "#F97C5A")
            },
            {
              value: "Church",
              symbol: getUniqueValueSymbol("https://developers.arcgis.com/javascript/latest//sample-code/visualization-point-styles/live/Church.png", "#884614")
            },
            {
              value: "Hotel",
              symbol: getUniqueValueSymbol("https://developers.arcgis.com/javascript/latest//sample-code/visualization-point-styles/live/Hotel.png", "#56B2D6")
            },
            {
              value: "Park",
              symbol: getUniqueValueSymbol("https://developers.arcgis.com/javascript/latest//sample-code/visualization-point-styles/live/Park.png", "#40C2B4")
            }
          ]
        };

        // Create the layer with the points of interest
        // Initially points are aligned to the buildings with relative-to-scene,
        // feature reduction is set to "selection" to avoid overlapping icons.
        // A perspective view is enabled on the layers by default.      
      
var pointsLayer = new FeatureLayer({
          url: "https://services2.arcgis.com/kNS2ppBA4rwAQQZy/ArcGIS/rest/services/MO_Public_Schools/FeatureServer/0",
          title: "Public Schools",
          elevationInfo: {
            // elevation mode that will place points on top of the buildings or other SceneLayer 3D objects
            mode: "relative-to-scene"
          },
          renderer: pointsRenderer,
          outFields: ["*"],
          // feature reduction is set to selection because our scene contains too many points and they overlap
          featureReduction: {
            type: "selection"
          },
          labelingInfo: [
            {
              labelExpressionInfo: {
                value: "{Facility}"
              },
              symbol: {
                type: "label-3d", // autocasts as new LabelSymbol3D()
                symbolLayers: [
                  {
                    type: "text", // autocasts as new TextSymbol3DLayer()
                    material: {
                      color: "white"
                    },
                    // we set a halo on the font to make the labels more visible with any kind of background
                    halo: {
                      size: 1,
                      color: [50, 50, 50]
                    },
                    size: 10
                  }
                ]
              }
            }
          ]
        });

webscene.add(pointsLayer);      

var pointsLayer_1 = new FeatureLayer({ url: "https://services2.arcgis.com/ZV8Mb62EedSw2aTU/ArcGIS/rest/services/CurrentSystem_REGISTERED_1/FeatureServer/4"
});
  
  webscene.add(pointsLayer_1);
      
  var featureLayer_2 = new FeatureLayer({
  url: 
"https://maps.stlouisco.com/arcgis/rest/services/OpenData/OpenData/FeatureServer/4"
});
webscene.add(featureLayer_2);

  
var featureLayer_3 = new FeatureLayer({
  url: 
"https://services2.arcgis.com/kNS2ppBA4rwAQQZy/ArcGIS/rest/services/MO_Public_Schools/FeatureServer/0"
});
webscene.add(featureLayer_3);


var featureLayer_4 = new FeatureLayer({
  url: 
"https://maps.stlouisco.com/arcgis/rest/services/OpenData/OpenData/FeatureServer/15"
});

webscene.add(featureLayer_4);


 });
