import * as lbl from "line-by-line";
let list: string[][] = [];
let x = 0;

let handleLine = (line: string) => {
    let lineAr: Array<string> = line.split("");
    list[x] = new Array<string>();
    for (let index = 0; index < lineAr.length; index++) {
        const element = lineAr[index];
        list[x][index] = element;
    }
    x++;
};
let lr = new lbl("./19/input1.txt");
lr.on("line", handleLine);
lr.on("end", () => {
    console.log("end");
});