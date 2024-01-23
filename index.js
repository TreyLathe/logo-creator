const inquirer = require("inquirer");
const fs = require("fs");
const { generateSVG } = require("./lib/shapes");

//async function acts like a callback or promise (thank you w3school :)
async function createSVG() {
  const answers = await inquirer.prompt([
    {
      type: "list",
      name: "shape",
      message: "Choose a shape:",
      choices: ["circle", "square", "rectangle", "triangle", "hexagon"],
    },
    {
      type: "input",
      name: "letters",
      message: "Enter three letters to display:",
      validate: function (value) {
        if (value.length === 3) {
          return true;
        }

        return "Please enter exactly three letters.";
      },
    },
    {
      type: "input",
      name: "color",
      message: "Choose a color for shape (in hex, e.g., #ff00ff):",
      // validate function using match to make sure it's hexidecimal
      validate: function (value) {
        const pass = value.match(/^#(?:[0-9a-fA-F]{3}){1,2}$/i);
        if (pass) {
          return true;
        }

        return "Please enter a valid hex color.";
      },
    },
    {
      type: "input",
      name: "colorLetter",
      message: "Choose a color for letters(in hex, e.g., #ff00ff):",
      // validate function using match to make sure it's hexidecimal
      validate: function (value) {
        const pass = value.match(/^#(?:[0-9a-fA-F]{3}){1,2}$/i);
        if (pass) {
          return true;
        }

        return "Please enter a valid hex color.";
      },
    },
  ]);
  // Call the generateSVG function with the user's answers to create the SVG content
  const svgContent = generateSVG(
    answers.shape,
    answers.color,
    answers.letters,
    answers.colorLetter
  );
  fs.writeFileSync("shape.svg", svgContent);
  // Log a message to the console indicating the SVG file has been created
  console.log("SVG file created as shape.svg");
}

createSVG();
