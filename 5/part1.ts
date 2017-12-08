import * as fs from "fs";
import * as lbl from "line-by-line";
let list  = new Array<number>();

let handleLine = (line:string) => {
    list.push(Number(line));
}
let lr = new lbl("./5/puzzleinput.txt");
lr.on("line", handleLine);
lr.on("end",()=> {
    let inList:boolean = true;
    let index:number = 0;
    let steps:number = 0;
    while(inList){
        let currentIndex = index;
        let instruction =list[index];
         steps++;
         index += instruction;
         list[currentIndex]++;
         if(index >= list.length)
         inList = false;
    }
    console.log(steps);
})
