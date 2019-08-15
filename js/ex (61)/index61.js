let weekdayNumber = "8";

switch (weekdayNumber) {
  case "1":
    message = "its monday";
    break;
  case "2":
    message = "tuesday";
    break;
  case "3":
    message = "wednesday";
    break;
  case "4":
    message = "thursday";
    break;
  case "5":
    message = "friday";
    break;
  case "6":
    message = "saturday";
    break;
  case "7":
    message = "sunday";
    break;
  default:
    message = "Error: Please input a number bettwen 1 and 7";
}
console.log(message);
