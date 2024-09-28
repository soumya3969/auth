let input = prompt("Enter Month :");
let mon = input.toUpperCase();
let yer = +prompt("Enter Year :");

switch (mon) {
  case "JAN" || "MAR" || "MAY" || "JUL" || "AUG" || "OCT" || "DEC":
    console.log("31 Days");
    document.write("31 Days");
    break;

  case "FEB":
    if ((yer % 4 == 0 && yer % 100 != 0) || yer % 400 == 0) {
      console.log("29 Days");
      document.write("29 Days");
    } else {
      console.log("28 Days");
      document.write("28 Days");
    }
    break;

  case "APR" || "JUN" || "AUG" || "OCT" || "DEC":
    console.log("30 Days");
    document.write("30 Days");
    break;

  default:
    console.log("Invalid Month");
    document.write("Invalid Month");
    break;
}
