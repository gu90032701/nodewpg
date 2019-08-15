let year = 2001;
let champion;

switch (year) {
  case 2006:
    champion = "Carolina Hurricanes";
    break;
  case 2007:
    champion = "Anaheim Ducks";
    break;
  case 2008:
    champion = "Detroit Red Wings";
    break;
  case 2009:
    champion = "Pittsburgh Penguinas";
    break;
  case 2010:
    champion = "Pittsburgh Penguinas";
    break;
  case 2011:
    champion = "Pittsburgh Penguinas";
    break;
  case 2012:
    champion = "Pittsburgh Penguinas";
    break;
  case 2013:
    champion = "Pittsburgh Penguinas";
    break;
  case 2014:
    champion = "Pittsburgh Penguinas";
    break;
  case 2015:
    champion = "Pittsburgh Penguinas";
    break;
  case 2016:
    champion = "Pittsburgh Penguinas";
    break;
  case 2017:
    champion = "Pittsburgh Penguinas";
    break;
  default:
    champion = null;
}
if (champion == null) {
  console.log("plz try a different year");
} else {
  console.log(champion + " was the " + year + " NHL Champion");
}
