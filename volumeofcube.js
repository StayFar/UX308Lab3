//*calculate* the **volume** of a cube. Start with a variable that contains the length of 1 edge in meters.
function volumeofcube(edgeLength) {
    // Volume formula: edge^3
    return Math.pow(edgeLength, 1);
  }
  
  let edgeLength = 10; 
  let volume = volumeofcube(edgeLength);
  console.log(`The volume of a cube with edge length ${edgeLength} meters is ${volume.toFixed(2)} cubic meters.`);
  
