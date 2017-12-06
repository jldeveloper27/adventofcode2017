import * as ulam from "number-spiraler";
var largestNumber = 25;
var gridsize = Math.round(Math.sqrt(largestNumber));
var spiralGrid = ulam.generateGrid(gridsize);

console.log(spiralGrid);

spiralGrid.filterGrid((result) => {
    console.log(result);
},25);