import * as lbl from "line-by-line";
const filename = `${__dirname}/input1.txt`;
let list: string[][] = [];
let x = 0;

let handleLine = (line: string) => {
  console.log(line);
  let action: string = line.charAt(0);
  let num = Number(line.slice(1));
  if (action == "+") {
    x += num;
  } else {
    x -= num;
  }
};

let lr = new lbl("./2018/1/input1.txt");
lr.on("line", handleLine);
lr.on("end", () => {
  console.log("end");
  console.log(x);
});
