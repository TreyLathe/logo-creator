# LOGO CREATOR
Table of Contents:
- [User Story/Challenge Goal](#user-storychallenge-goal)
- [Resources Used & Credits](#resources-user--credits)
- [Relevant Links](#relevant-links)
- [Screenshots & Screencasts](#screenshots--screencasts)
- [Usage and Comments](#usage--comments)
- [Future Direction and Contributing](#future-directions-and-contributing)
- [Tests](#tests)

## USER STORY/CHALLENGE GOAL:
 AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer

Create a command line interface for a user to create a sgv logo of chosen shape, letters, and colors of both based on acceptance criteria: [Usage and Comments](#usage--comments)

## RESOURCES USER && CREDITS:
- Class instruction and office hours, specifically for assistance creating tests and understanding test-driven development.
- W3 sections on svg, promise/async, and more
- Xpert Learning assistant to help with validation code and the breakdown of the hexidecimal regular expression
- Jest documentation


## RELEVANT LINKS:
- Repository: https://github.com/TreyLathe/logo-creator

- Deployed Site: N/A

## SCREENSHOTS &&/|| SCREENCASTS:
ScreenCast: https://drive.google.com/file/d/1EqcIemoj4e6zXdQnJsvXJhST-ryJ2rer/view

Screenshot of Examples:
![SVG Logo Examples](./examples/Screenshot%202024-01-24%20at%205.17.17 PM.png).


## USAGE && COMMENTS:

In terminal command line, enter "node index.js" to start the application.

GIVEN a command-line application that accepts user input

> WHEN I am prompted for text
THEN I can enter up to three characters

User is prompted for three letters, if not equal than 3, alerted to use only 3. 

>WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose f.rom: circle, triangle, and square

User is prompted to choose from a list of shapes included those listed above and additionally triangle and hexagon

> WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
> WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)

User is prompted to add a hexidecimal number for color of shape and of the letters separatedly, if not, user is alerted that only hexidemical numbers are acceptable.  


>WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line

After input is recieved, a file is created logo.svg and output text "Generated logo.svg" is displayed. 

>WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered

Creates 300x200px svg image. (put in browser automatically? In more folder?)

## FUTURE DIRECTIONS AND CONTRIBUTING

- Create folder of created logos and name logos with unique names (test previous names to ask user to chose another name)

## TESTS

Using Jest testing framework, enter "npm run test" in terminal to test if shape, colors and letters are generated correctly in a named SVG file and validates shape and color inputs correctly. 