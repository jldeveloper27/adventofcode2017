import * as fs from "fs";
import * as lbl from "line-by-line";

let lr = new lbl('./2/puzzleinput.txt');
let checksum: number = 0;
lr.on('line',(line) => {
   let nums = line.split(" ").map((v) => {return Number(v)});
   checksum += Math.max(...nums) - Math.min(...nums);
});

lr.on('end',() => {
    console.log(checksum);
})
