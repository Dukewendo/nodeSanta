const fs = require("fs");

function one() {
fs.readFile("./data.txt", (err, data) => {
    console.time("Santa-time-one");
    const directions = data.toString();
    const directionsArray = directions.split("");
    const answer = directionsArray.reduce((acc, currentValue) => {

    
    if (currentValue === "(") {
    return acc +=1;
    } else if (currentValue === ")") {
    return acc -=1;
    }
    }, 0)
    console.log("floor:", answer)
    console.timeEnd("Santa-time-one");
    })

}
one()


function two() {
    fs.readFile("./data.txt", (err, data) => {
        console.time("Santa-time-two");
    const directions = data.toString();
    const directionsArray = directions.split("");
    let accumulator = 0;
    let floorCounter = 0;
    const answer = directionsArray.some((currentItem) => {

    
        if (currentItem === "(") {
        accumulator +=1;
        } else if (currentItem === ")") {
        accumulator -=1;
        }
        floorCounter ++;
        return accumulator < 0;
        })
    console.timeEnd("Santa-time-two")
    console.log("Basement entered at:", floorCounter);
    })
}

two()