import * as fs from "fs";
import * as lbl from "line-by-line";
let totalValid = 0
let handleLogic = (line: string) => {
    let hash = {};
    const nums = line.split(" ");
    let result = nums.map(part => {
      hash[part] = hash[part] == undefined ? 1 : Number(hash[part]) + 1;
    });
    let lineValid = true;
    for (const key of Object.keys(hash)) {
        if (hash[key] != 1) lineValid = false;
    }
    if(lineValid) totalValid++;
}
let lr = new lbl("./4/puzzleinput.txt");
lr.on("line", handleLogic);
lr.on("end", () => {
   console.log("Final " + totalValid);
})

