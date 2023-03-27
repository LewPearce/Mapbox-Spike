exports.getRoute = (route) => {


    return fetch(`https://api.geoapify.com/v1/routing?waypoints=50.96209827745463%2C4.414458883409225%7C50.429137079078345%2C5.00088081232559&mode=drive&apiKey=2b4c255d8fb544c5b1184d2d539607f4`)
}