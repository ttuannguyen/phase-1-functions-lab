// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    return Math.abs(42 - someValue);
}

function distanceFromHqInFeet(someValue) {
    let result = distanceFromHqInBlocks(someValue);
    return result * 264;
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264;
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    if (distance < 400) {
        return 0;
    } else if (distance >= 400 && distance <= 2000) {
        return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance < 2500) {
        return 25;
    } else if (distance > 2500) {
        return 'cannot travel that far';
    }

}