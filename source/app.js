$(function() {


    ///////// Actual content that should be in app.js
    renderUserForm({id: '#userForm'});
    renderUsersList({id: '#usersList'}); // This is in Users.List.js
    renderOfficeForm({id: '#officeForm'});
    renderOfficesList({id: '#officesList'});

    initMap();
    function initMap() {
        var input = document.getElementById('map-input');
        var autocomplete = new google.maps.places.Autocomplete(input);
        autocomplete.addListener('place_changed', function() {
          // infowindow.close();
          // marker.setVisible(false);
          var place = autocomplete.getPlace();
          if (!place.geometry) {
            // User entered the name of a Place that was not suggested and
            // pressed the Enter key, or the Place Details request failed.
            window.alert("No details available for input: '" + place.name + "'");
            return;
          }

          // console.log(place);
          // console.log(place.formatted_address);
          // console.log(place.geometry.location.lat());
          // console.log(place.geometry.location.lng());

          var obj = {
            name: place.formatted_address,
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng()
          };

          $.ajax({
            url: '/offices',
            method: 'post',
            data: obj
          }).then(result => {
            console.log(result);
            renderOfficesList({id: '#officesList'});
            renderUsersList({id: '#usersList'});
            $('#map-input').val('');
          }).catch(err => { throw err; });
        });
      }
})
