//image constants for tree object
const tree = "images/tree.svg";
const treeSelected = "images/tree-fil.svg";

// add map from google API to the website
function initMap() {
    //how the map object looks 
    const options = {
        zoom:5,
        center: {lat:37.0902, lng:-95.7129},
        //lebanon KS

        //what control the user has of the map zoom etc.
        mapTypeControl: false,
        mapTypeControlOptions: {
          style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
          position: google.maps.ControlPosition.TOP_CENTER,
        },
        zoomControl: false,
        zoomControlOptions: {
          position: google.maps.ControlPosition.LEFT_CENTER,
        },
        scaleControl: false,
        streetViewControl: false,
        streetViewControlOptions: {
          position: google.maps.ControlPosition.LEFT_TOP,
        },
        fullscreenControl: false,
    }

    // map constant where it gets the map element from HTML and calls the set markers function
    //set markers adds the outline image to the map
    const map = new google.maps.Map(document.getElementById('map'), options)
    setMarkers(map);

    //const changeMarker = new google.maps.addEventListener(marker, 'click', function() {
    //    marker.setIcon(treeSelected);
    //})

}