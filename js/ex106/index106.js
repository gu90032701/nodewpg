function getUserID() {
  return 20;
}
function isUserValid() {
  let userId = getUserID();
  if (userId > 30) return true;
  else return false;
}

if (isUserValid()) {
  console.log("User valid");
} else console.log("User not valid");
