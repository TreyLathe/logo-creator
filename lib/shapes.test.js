const { generateSVG } = require("./shapes");

describe("circle", () => {
  test("creates a green circle", () => {
    let circle = generateSVG("circle", "#00ff00", "WCL", "#ffffff");
    let expectedResults =
      '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><circle cx="100" cy="100" r="80" fill="#00ff00" /><text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-size="40" fill="#ffffff">WCL</text></svg>';
    expect(circle).toEqual(expectedResults);
  });
});

describe("hexagon", () => {
  test("creates a purple hexagon", () => {
    let hexagon = generateSVG("hexagon", "#800080", "WCL", "#ffffff");
    let expectedResults =
      '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><circle cx="100" cy="100" r="80" fill="#800080" /><text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-size="40" fill="#ffffff">WCL</text></svg>';
    expect(hexagon).toEqual(expectedResults);
  });
});
