//Take a variable with distance in **meters** as input and output the same distance *convert*ed to **yards**.
function convertMetersToYards(meters){
    let yards = meters/1.094;
    return yards;
}

let meters = 150;
let yards = convertMetersToYards(meters);
console.log(`${meters} meters is ${yards} yards`);