function generateSVG(shape, color, letters, colorLetter) {
  // Define the SVG namespace URL
  const svgNS = "http://www.w3.org/2000/svg";
  // Variable to hold the shape element as a string
  let shapeEl;
  // Begin constructing the SVG element as a string, setting the necessary namespace and dimensions
  let svgEl = `<svg xmlns="${svgNS}" width="300" height="200">`;

  //shape creation using switch based on chape and color choices of user.
  switch (shape.toLowerCase()) {
    case "circle":
      shapeEl = `<circle cx="100" cy="100" r="80" fill="${color}" />`;
      break;
    case "square":
      shapeEl = `<rect x="10" y="10" width="180" height="180" fill="${color}" />`;
      break;
    case "rectangle":
      shapeEl = `<rect x="10" y="30" width="180" height="140" fill="${color}" />`;
      break;
    case "triangle":
      shapeEl = `<polygon points="100,10 190,190 10,190" fill="${color}" />`;
      break;
    case "hexagon":
      shapeEl = `<polygon points="50,10 150,10 200,100 150,190 50,190 0,100" fill="${color}" />`;
      break;
    default:
      shapeEl = "";
  }

  // Append a text element to the SVG string
  // The text content is user-defined, positioned at the center, with fixed font size and color
  svgEl += shapeEl;
  svgEl += `<text x="33%" y="55%" dominant-baseline="middle" text-anchor="middle" font-size="60" fill="${colorLetter}">${letters}</text>`;
  svgEl += `</svg>`;

  return svgEl;
}

module.exports = { generateSVG };


//refactored code to use a shape class could not get it to work, needs more testing
// //a general shape class
// class SVGGenerator {
//   constructor(shape, color, letters, colorLetter) {
//     // Define the SVG namespace URL
//     this.svgNS = "http://www.w3.org/2000/svg";
//     this.shape = shape.toLowerCase();
//     this.color = color;
//     this.letters = letters;
//     this.colorLetter = colorLetter;
//   }
// //specific shape coordinates with chosen color
//   generateCircle() {
//     return `<circle cx="100" cy="100" r="80" fill="${this.color}" />`;
//   }

//   generateSquare() {
//     return `<rect x="10" y="10" width="180" height="180" fill="${this.color}" />`;
//   }

//   generateRectangle() {
//     return `<rect x="10" y="30" width="180" height="140" fill="${this.color}" />`;
//   }

//   generateTriangle() {
//     return `<polygon points="100,10 190,190 10,190" fill="${this.color}" />`;
//   }

//   generateHexagon() {
//     return `<polygon points="50,10 150,10 200,100 150,190 50,190 0,100" fill="${this.color}" />`;
//   }
// //generate svg based on user choice
//   generateSVG() {
//     let shapeEl = '';

//     switch (this.shape) {
//       case "circle":
//         shapeEl = this.generateCircle();
//         break;
//       case "square":
//         shapeEl = this.generateSquare();
//         break;
//       case "rectangle":
//         shapeEl = this.generateRectangle();
//         break;
//       case "triangle":
//         shapeEl = this.generateTriangle();
//         break;
//       case "hexagon":
//         shapeEl = this.generateHexagon();
//         break;
//     }

//   //create link to logo.svg appending link, shape, letter and letter color
//     const svgEl = `<svg xmlns="${this.svgNS}" width="300" height="200">${shapeEl}<text x="33%" y="55%" dominant-baseline="middle" text-anchor="middle" font-size="60" fill="${this.colorLetter}">${this.letters}</text></svg>`;

//     return svgEl;
//   }
// }

// module.exports = { SVGGenerator };