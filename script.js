console.log("Ready to go! 🚀");

const name = prompt("Favorite Game of Thrones main character:");
let house = "";

switch (name) {
  case "Khal Drogo":
    house = "Dothraki Horselord";
    break;
  case "Daenerys":
    house = "Targaryen";
    break;
  case "Jon Snow":
  case "Sansa":
  case "Arya":
    house = "Stark";
    break;
  default:
    house = "other";
}

console.log(`Your favorite character is from the house ${house}.`);
