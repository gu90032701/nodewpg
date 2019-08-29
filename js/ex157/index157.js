let games = [
  {
    name: "Crash Bandicoot N. Sane Trilogy",
    price: 1060,
    sold: 20,
    console: "PS4",
    showDetail: function() {
      console.log(
        "name: " +
          this.name +
          "\nprice: " +
          this.price +
          "\nsold: " +
          this.sold +
          "\nconsole: " +
          this.console +
          "\n---------------------------------"
      );
    }
  },
  {
    name: "Lego Marvel Super Heroes",
    price: 700,
    sold: 25,
    console: "XBOX",
    showDetail: function() {
      console.log(
        "name: " +
          this.name +
          "\nprice: " +
          this.price +
          "\nsold: " +
          this.sold +
          "\nconsole: " +
          this.console +
          "\n---------------------------------"
      );
    }
  },
  {
    name: "Gta V",
    price: 1449,
    sold: 30,
    console: "PS4",
    showDetail: function() {
      console.log(
        "name: " +
          this.name +
          "\nprice: " +
          this.price +
          "\nsold: " +
          this.sold +
          "\nconsole: " +
          this.console +
          "\n---------------------------------"
      );
    }
  },
  {
    name: "Mortal Kombat Xl",
    price: 1190,
    sold: 34,
    console: "PS4",
    showDetail: function() {
      console.log(
        "name: " +
          this.name +
          "\nprice: " +
          this.price +
          "\nsold: " +
          this.sold +
          "\nconsole: " +
          this.console +
          "\n---------------------------------"
      );
    }
  },
  {
    name: "Gta V",
    price: 1250,
    sold: 60,
    console: "XBOX",
    showDetail: function() {
      console.log(
        "name: " +
          this.name +
          "\nprice: " +
          this.price +
          "\nsold: " +
          this.sold +
          "\nconsole: " +
          this.console +
          "\n---------------------------------"
      );
    }
  },
  {
    name: "Fifa 2017",
    price: 890,
    sold: 15,
    console: "PS4",
    showDetail: function() {
      console.log(
        "name: " +
          this.name +
          "\nprice: " +
          this.price +
          "\nsold: " +
          this.sold +
          "\nconsole: " +
          this.console +
          "\n---------------------------------"
      );
    }
  },
  {
    name: "Uncharted 4",
    price: 950,
    sold: 30,
    console: "PS4",
    showDetail: function() {
      console.log(
        "name: " +
          this.name +
          "\nprice: " +
          this.price +
          "\nsold: " +
          this.sold +
          "\nconsole: " +
          this.console +
          "\n---------------------------------"
      );
    }
  },
  {
    name: "Mortal Kombat Xl",
    price: 940,
    sold: 30,
    console: "XBOX",
    showDetail: function() {
      console.log(
        "name: " +
          this.name +
          "\nprice: " +
          this.price +
          "\nsold: " +
          this.sold +
          "\nconsole: " +
          this.console +
          "\n---------------------------------"
      );
    }
  },
  {
    name: "Need For Speed",
    price: 790,
    sold: 10,
    console: "PS4",
    showDetail: function() {
      console.log(
        "name: " +
          this.name +
          "\nprice: " +
          this.price +
          "\nsold: " +
          this.sold +
          "\nconsole: " +
          this.console +
          "\n---------------------------------"
      );
    }
  },
  {
    name: "Lego Batman",
    price: 1000,
    sold: 18,
    console: "PS4",
    showDetail: function() {
      console.log(
        "name: " +
          this.name +
          "\nprice: " +
          this.price +
          "\nsold: " +
          this.sold +
          "\nconsole: " +
          this.console +
          "\n---------------------------------"
      );
    }
  },
  {
    name: "Fifa 17",
    price: 1290,
    sold: 12,
    console: "PS4",
    showDetail: function() {
      console.log(
        "name: " +
          this.name +
          "\nprice: " +
          this.price +
          "\nsold: " +
          this.sold +
          "\nconsole: " +
          this.console +
          "\n---------------------------------"
      );
    }
  },
  {
    name: " Resident Evil 7",
    price: 1390,
    sold: 10,
    console: "PS4",
    showDetail: function() {
      console.log(
        "name: " +
          this.name +
          "\nprice: " +
          this.price +
          "\nsold: " +
          this.sold +
          "\nconsole: " +
          this.console +
          "\n---------------------------------"
      );
    }
  },
  {
    name: "Dragon Ball XX",
    price: 1390,
    sold: 25,
    console: "XBOX",
    showDetail: function() {
      console.log(
        "name: " +
          this.name +
          "\nprice: " +
          this.price +
          "\nsold: " +
          this.sold +
          "\nconsole: " +
          this.console +
          "\n---------------------------------"
      );
    }
  }
];
const result1 = games.filter(value => {
  return value.console == "PS4";
});
const result2 = games.filter(value => {
  return value.console == "XBOX";
});
console.log("PS4 list:");
for (i = 0; i < result1.length; i++) {
  console.log(i);
  result1[i].showDetail();
}
console.log(
  "*************************************************************************"
);
console.log("XBOX list:");

for (i = 0; i < result2.length; i++) {
  console.log(i);
  result2[i].showDetail();
}
