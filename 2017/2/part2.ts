import * as fs from "fs";
import * as lbl from "line-by-line";

let lr = new lbl("./2/puzzleinput2.txt");
let checksum: number = 0;
lr.on("line", line => {
  let nums = line.split(" ").map(v => {
      return Number(v);
  }).map((value, index, arry) => {
      return checksumalgo(arry, value);
  });
  checksum += nums.reduce((total:number, value:number) => total + value);
});

lr.on("end", () => {
  console.log(checksum);
});

let checksumalgo = (array:Array<number>, value:number) => {
    for(let ar of array){
        if(ar != value && ar % value == 0) return ar/value;
    }
    return 0;
}
