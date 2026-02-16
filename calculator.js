let results = [];

// this is the table header
document.write("<table align='center' border='1' cellpadding='10'>");
document.write("<tr><th>Number 1</th><th>Operator</th><th>Number 2</th><th>Result</th></tr>");

while (true) {
    let x = prompt("Enter first number:");
    if (x === null) break;

    let op = prompt("Enter operator (+ - * / %):");
    if (op === null) break;

    let y = prompt("Enter second number:");
    if (y === null) break;

    let result;

    // this will check if numbers are valid
    if (isNaN(x) || isNaN(y)) {
        result = "Wrong input this is not a number";
    } else {
        x = Number(x);
        y = Number(y);

        if (op === "+") result = x + y;
        else if (op === "-") result = x - y;
        else if (op === "*") result = x * y;
        else if (op === "/") result = y !== 0 ? x / y : "Error: divide by 0";
        else if (op === "%") result = x % y;
        else result = "Invalid entry has been made";
    }

    document.write("<tr>");
    document.write("<td>" + x + "</td>");
    document.write("<td>" + op + "</td>");
    document.write("<td>" + y + "</td>");
    document.write("<td>" + result + "</td>");
    document.write("</tr>");

    
    if (typeof result === "number") {
        results.push(result);
    }
}
document.write("</table>");
document.write("<h2 style align='center'>Summary</h2>");
document.write("<table align='center' border='1' cellpadding='10'>");
document.write("<tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>");

if (results.length > 0) {

    let min = Math.min(...results);
    let max = Math.max(...results);

    let total = results.reduce((a, b) => a + b, 0);
    let avg = (total / results.length).toFixed(2);

    document.write("<tr>");
    document.write("<td>" + min + "</td>");
    document.write("<td>" + max + "</td>");
    document.write("<td>" + avg + "</td>");
    document.write("<td>" + total + "</td>");
    document.write("</tr>");
}
document.write("</table>");
