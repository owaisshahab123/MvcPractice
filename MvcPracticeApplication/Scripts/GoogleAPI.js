var geocoder;
var map;
var directionsService = new google.maps.DirectionsService();

function BindPlacesAutocomplete(btnID,latID,lngID) {
    

    var options = {
        componentRestrictions: { country: ["pk", "au"] }
    };

    var places = new google.maps.places.Autocomplete(document.getElementById(btnID), options);//"Location"

    google.maps.event.addListener(places, 'place_changed', function () {
        
        var place = places.getPlace();
        var address = place.formatted_address;
        var latitude = place.geometry.location.lat();
        var longitude = place.geometry.location.lng();
        //$("[id $= hdnLAT]").val(latitude);
        //$("[id $= hdnLON]").val(longitude);
        var mesg = "Address: " + address;
        mesg += "\nLatitude: " + latitude;
        mesg += "\nLongitude: " + longitude;
        // console.log(mesg);


        $('#' + latID).val(longitude);//#Longitude
        $('#' + lngID).val(latitude);//#Latitude
    });
}


function BindPlacesAutocompleteBooking(dvMapID, innerDivMapID, WhereTo,PickupLoc,
    supervisorLatID, supervisorLngID, supervisorLocationID, supervisorMarkerID,
    Where_LatID, Where_LngID, Where_LocationID,DestinationMarkerID,
    currentLatID, currentLngID, currentLocationID, currentMarkerID
    ) {
    
   
    var options = {
        componentRestrictions: { country: ["pk", "au"] } // this wil filter country of (Pakistan,Australia)
    };
    //PickupLoc
    var Where_places = new google.maps.places.Autocomplete(document.getElementById(WhereTo), options);
    var PickupLoc_places = new google.maps.places.Autocomplete($('#PickupLoc')[0], options);

    //Below Mthod will call when select destination
    google.maps.event.addListener(Where_places, 'place_changed', function () {
        
        var place = Where_places.getPlace();
        var address = place.formatted_address;
        var latitude = place.geometry.location.lat();
        var longitude = place.geometry.location.lng();

        $('#' + Where_LatID).val(latitude);//Where_Lat
        $('#' + Where_LngID).val(longitude);//Where_Lng
        $('#' + Where_LocationID).val(address);//Where_Location

        //alert($('#Where_Lat').val() + " " + $('#Where_Lng').val())
        

    //    SearchRoutes(dvMapID, innerDivMapID, WhereTo,
    //supervisorLatID, supervisorLngID, supervisorLocationID, supervisorMarkerID,
    //Where_LatID, Where_LngID, Where_LocationID, DestinationMarkerID,
    //currentLatID, currentLngID, currentLocationID, currentMarkerID);


    });

    //Below Mthod will call when select pickup
    google.maps.event.addListener(PickupLoc_places, 'place_changed', function () {
        debugger;
        var place = PickupLoc_places.getPlace();
        var address = place.formatted_address;
        var latitude = place.geometry.location.lat();
        var longitude = place.geometry.location.lng();

        $('#' + currentLatID).val(latitude);//currentLat
        $('#' + currentLngID).val(longitude);//currentLng
        $('#' + currentLocationID).val(address);//currentLocation

        


   //     SearchRoutes(dvMapID, innerDivMapID, WhereTo,
   //supervisorLatID, supervisorLngID, supervisorLocationID, supervisorMarkerID,
   //Where_LatID, Where_LngID, Where_LocationID, DestinationMarkerID,
   //currentLatID, currentLngID, currentLocationID, currentMarkerID);

    });



}


function SearchRoutes(dvMapID,innerDivMapID,WhereToID,
    supervisorLatID, supervisorLngID, supervisorLocationID, supervisorMarkerID,
    WhereLatID, WhereLngID, WhereLocationID, DestinationMarkerID,
    currentLatID, currentLngID, currentLocationID, currentMarkerID
    )
{
    
    
    $('#'+dvMapID).css('display', 'block');//dvMap

    var supervisorLat = $("#" + supervisorLatID).val();
    var supervisorLng = $("#" + supervisorLngID).val();
    var supervisorLocation = $("#" + supervisorLocationID).val();
    var supervisorMarker = $("#" + supervisorMarkerID).val();

    var currentLat = $("#" + currentLatID).val();
    var currentLng = $("#" + currentLngID).val();
    var currentLocation = $("#" + currentLocationID).val();
    var currentMarker = $("#" + currentMarkerID).val();

    var WhereLat = $("#" + WhereLatID).val();
    var WhereLng = $("#" + WhereLngID).val();
    var WhereLocation = $("#" + WhereLocationID).val();
    var DestinationMarker = $("#" + DestinationMarkerID).val();


  

    //alert(WhereLocation + " " + WhereLat + " " + WhereLng);


    if (currentLat != "" && currentLng != "" && WhereLat != "" && WhereLng != "" && supervisorLat != "" && supervisorLng != "") {
       


        //console.log("supervisorLat =>", supervisorLat);
        //console.log("supervisorLng =>", supervisorLng);
        //console.log("supervisorLocation =>", supervisorLocation);
        //console.log("supervisorMarker =>", supervisorMarker);


        //console.log("currentLat =>", currentLat);
        //console.log("currentLng =>", currentLng);
        //console.log("currentLocation =>", currentLocation);
        //console.log("currentMarker =>", currentMarker);

        //console.log("WhereLat =>", WhereLat);
        //console.log("WhereLng =>", WhereLng);
        //console.log("WhereLocation =>", WhereLocation);
        //console.log("DestinationMarker =>", DestinationMarker);

        //Make an array of location for google api
        var locations = [
            [supervisorLocation, supervisorLat, supervisorLng, supervisorMarker],
          [currentLocation, currentLat, currentLng, currentMarker],
          [WhereLocation, WhereLat, WhereLng, DestinationMarker]
        ];

        //Initilize google map
        google.maps.event.addDomListener(window, "load", initialize(innerDivMapID, locations, currentLatID, currentLngID));

    }
    else {
        //Validate location
        
        if (currentLat == "" || currentLng == "") {
            AlertToast('warning', 'Please Enter Pick Up Location.');
        }

        if (supervisorLat == "" || supervisorLng == "") {
            AlertToast('warning', 'Please Select Any Trainer.');
            if (WhereToID != "") {
                $('#' + WhereToID).val('');//WhereTo
            }

        }


        $('#' + dvMapID).css("display", "none")

    }


}



function initialize(innerDivMapID, locations, currentLat, currentLng) {
    
    
    var currentLat = $("#" + currentLat).val();
    var currentLng = $("#" + currentLng).val();
    //var directionsDisplay;
    directionsDisplay = new google.maps.DirectionsRenderer({ map: map, suppressMarkers: true });
    // if remove this parameters => { map: map, suppressMarkers: true } than google will add default location markers

    //Create google map
     map = new google.maps.Map(document.getElementById(innerDivMapID), {
        zoom: 50,
        center: new google.maps.LatLng(currentLat, currentLng),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    directionsDisplay.setMap(map);
    var infowindow = new google.maps.InfoWindow();

    var marker, i;
    var request = {
        travelMode: google.maps.TravelMode.DRIVING
    };
    //Create provided markers and routes using location array.
    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map,
            icon: locations[i][3]
            //,
            //label: {
            //    text: "Text "+i+1,
            //    color: "#eb3a44",
            //    fontSize: "16px",
            //    fontWeight: "bold"
            //}

        });
        //Create popup of marker location address.
        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            
            return function () {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
            }
        })(marker, i));

        if (i == 0) request.origin = marker.getPosition();
        else if (i == locations.length - 1) request.destination = marker.getPosition();
        else {
            if (!request.waypoints) request.waypoints = [];
            request.waypoints.push({
                location: marker.getPosition(),
                stopover: false
            });
        }

    }

    directionsService.route(request, function (result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(result);
        }
    });
}