const planets = {
    earth: 1,
    mercury: 0.2408467,
    venus: 0.61519726,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132,
}
const year = 31557600;
function dogYears(planet, age) {
    age /= year
    let orbital = planets[planet]
    let result = age / orbital * 7
    return Math.round(result * 100) / 100;
}
// console.log(dogYears('earth', 5000000000))
// console.log(dogYears('venus', 5000000000))