exports.getRoute = (route) => {


    return fetch(`https://api.mapbox.com/directions/v5/mapbox/cycling/53.474995334330096,-2.266442069262596;53.4781305084898,-2.2684590904519575?access_token=pk.eyJ1IjoibGV3cGVhcmNlIiwiYSI6ImNsZmw3Z3MzazAyZnQzeGthdHFpZWZtd2cifQ.tKYSfPl98gg0jYXpPvYPNg`)
}