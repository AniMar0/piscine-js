function dogYears(nameOfPlanet,dogsec){

    if (nameOfPlanet == "earth"){

        return call(1.0,dogsec)

    }else if (nameOfPlanet == "mercury"){

        return call(0.2408467,dogsec)

    }else if (nameOfPlanet == "venus"){

        return call(0.61519726,dogsec)

    }else if (nameOfPlanet == "mars"){

        return call(1.8808158,dogsec)

    }else if (nameOfPlanet == "jupiter"){

        return call(11.862615,dogsec)

    }else if (nameOfPlanet == "saturn"){

        return  call(29.447498,dogsec)
        
    }else if (nameOfPlanet == "uranus"){

        return call(84.016846,dogsec)

    }else if (nameOfPlanet == "neptune"){

        return call(164.79132,dogsec)

    }
}

function call(timesec,dogsec){
    return parseFloat(((dogsec/(timesec*31557600))*7).toFixed(2))
}

console.log(dogYears("earth",1000000000))