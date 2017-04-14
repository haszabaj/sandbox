var result = "";
size = 8;

for (var l = 0; l < size; l++) {
    for (var c = 0; c < size; c++) {
        if ((l + c) % 2 == 0) {
            result += " ";
        } 
        else {
            result += "#";
        }
    }
    result += "\n";
}

console.log(result);