function generateSVG(shape, color, letters, colorLetter) {
  // Define the SVG namespace URL
  const svgNS = "http://www.w3.org/2000/svg";
  // Variable to hold the shape element as a string
  let shapeEl;
  // Begin constructing the SVG element as a string, setting the necessary namespace and dimensions
  let svgEl = `<svg xmlns="${svgNS}" width="200" height="200">`;

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
  svgEl += `<text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-size="40" fill="${colorLetter}">${letters}</text>`;
  svgEl += `</svg>`;

  return svgEl;
}

module.exports = { generateSVG };
