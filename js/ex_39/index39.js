let firstName = "chris";
let lastName = "Gu";
console.log(
  "my first name is " +
    firstName +
    " and it is " +
    firstName.length +
    " characters long "
);
console.log(
  "my last name is " +
    lastName +
    " and it is " +
    lastName.length +
    " characters long "
);
console.log(
  "The character difference between my first name and last name is " +
    Math.abs(lastName.length - firstName.length)
);
console.log(
  "My first name is longer than my last name:" +
    (firstName.length > lastName.length)
);
