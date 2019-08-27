let user = {
  username: null,
  password: null,
  greet: function(username) {
    if (this.username !== null) {
      console.log(`Hello, I'm user ${this.username}`);
    } else {
      console.log("Please assign a username value");
    }
  },
  updaterUsername: function(value1) {
    this.username = value1;
  },
  updatePassword: function(value) {
    this.password = value;
  }
};
user.updaterUsername("abc");
user.updatePassword("123456");
user.greet();
