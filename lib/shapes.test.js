const { generateSVG } = require("./shapes");

describe("circle", () => {
  test("creates a green circle", () => {
    let circle = generateSVG("circle", "green", "WCL", "white");
    let expectedResults =
      '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><circle cx="100" cy="100" r="80" fill="green" /><text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-size="40" fill="white">WCL</text></svg>';
    expect(circle).toEqual(expectedResults);
  });
});

describe("hexagon", () => {
  test("creates a purple hexagon", () => {
    let hexagon = generateSVG("hexagon", "purple", "WCL", "white");
    let expectedResults =
      '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><circle cx="100" cy="100" r="80" fill="green" /><text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-size="40" fill="white">WCL</text></svg>';
    expect(hexagon).toEqual(expectedResults);
  });
});
