const { generateSVG } = require("./shapes");


describe("circle", () => {
  test("creates a green circle", () => {
    let circle = generateSVG("circle", "#00ff00", "WCL", "#ffffff");
    let expectedResults =
      '<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><circle cx="100" cy="100" r="80" fill="#00ff00" /><text x="33%" y="55%" dominant-baseline="middle" text-anchor="middle" font-size="60" fill="#ffffff">WCL</text></svg>';
    expect(circle).toEqual(expectedResults);
  });
});

describe("hexagon", () => {
  test("creates a purple hexagon", () => {
    let hexagon = generateSVG("hexagon", "#800080", "WCL", "#ffffff");
    let expectedResults =
      '<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><polygon points="50,10 150,10 200,100 150,190 50,190 0,100" fill="#800080" /><text x="33%" y="55%" dominant-baseline="middle" text-anchor="middle" font-size="60" fill="#ffffff">WCL</text></svg>';
    expect(hexagon).toEqual(expectedResults);
  });
});

describe("generateSVG function", () => {
  it("should generate an SVG with the specified shape", () => {
    const svgContent = generateSVG("circle", "#ff00ff", "ABC", "#00ff00");
  });

  it("should validate the input letters correctly", () => {
     });

  it("should validate the input color correctly", () => {
      });
});