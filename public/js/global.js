// (function($) {

// var directionsService = new google.maps.DirectionsService();
// var directionsRoute = directionsService.route({
//     destination: new google.maps.LatLng(51.263643177268,-2.18254217416474),
//     origin: new google.maps.LatLng(51.2298909260793,-2.31939537961816),
//     travelMode: google.maps.TravelMode.DRIVING
// }, function (DirectionsResult, DirectionsStatus) {
//     var routeSequence = StreetviewSequence('#route', {
//         route: DirectionsResult,
//         duration: 5000,
//         loop: true,
//         width: 642, // 585
//         height: 356 // 325
//     });

//     var $routeProgressBar = $('#progress-bar');
//     routeSequence.progress(function (p) {
//         $routeProgressBar.css({width: (p * 100) + '%'});
//     });
//     routeSequence.done(function(player) {
//         $routeProgressBar.css({opacity: 0});
//         $('.still-life').css({opacity: 0.5});
//         player.play();
//     });
// });

// })(jQuery);