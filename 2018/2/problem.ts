import * as lbl from "line-by-line";
const filename = `${__dirname}/input.txt`;
let list: string[][] = [];
let x = 0;
let dict = new Array<Number>();
let found: Number = 0;

let handleLine = (line: string) => {
  if (found > 0) return;

  let action: string = line.charAt(0);
  let num = Number(line.slice(1));
  if (action == "+") {
    x += num;
  } else {
    x -= num;
  }
  if (dict.includes(x)) {
    found = x;
  }
  dict.push(x);
};
let endLine = () => {
  if (!found) {
    let innerLr = new lbl("./2018/2/input.txt");
    innerLr.on("line", handleLine);
    innerLr.on("end", endLine);
  } else {
    console.log("end");
    console.log(found);
    console.log(dict);
  }
};

let lr = new lbl("./2018/2/input.txt");
lr.on("line", handleLine);
lr.on("end", endLine);
