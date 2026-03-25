<p align="center">
  <img align="center" src="../FONT/favicon.svg" height="180" alt="Favicon" />
  <h1 align="center">STudent API - Lab Report</h1>
  <p align="center">A REpresentational State Transfer Application Program Interface utilizing a JSON file as model. <b>Report examined by <a href="https://github.com/lostmart">@lostmart</a></b></p>
  

  <div align="center">
    
  ![Node.js](https://img.shields.io/badge/Node.js-darkgreen?logo=node.js)
  ![JavaScript](https://img.shields.io/badge/Vanilla_JS-yellow?logo=javascript)
  </div>

  <div align="center">
    
  [Overview](../README.md)
  </div>
</p>

## Functionality Overview
<p align="center">
  <img align="center" src="./img/rest.png" height="400" alt="Description Image" />

## Received Instructions
* Report documents your progress building a REST API with Node.js and Express.
* For ∀ section, answer the questions in your own words and include the required screenshots.
* Screenshots must be clear and readable. Crop them to show only the relevant part of the screen.

<br/><br/>

## Section 1 — Project Setup
### 1.1 Package.json & Nodemon
Nodemon is a development tool that automatically restarts your server when you save a file. It should be installed as a **dev dependency** — meaning it is only needed during development, not in production.

**Your task:** Explain in your own words the difference between a regular dependency and a dev dependency. Why does it matter?
>The difference between a `dependency` and a `devDependency` is that the `devDependency` object consists of dependencies the developer needs to properly conceive the intended goal, whereas the `dependency` object includes critical dependencies needed for the project to function as intended. This distinction matters for the client to avoid installing dependencies that serve no purpose for them.

<br/>

### 1.2 CommonJS vs. ES Modules
Node.js supports two module systems. You may encounter both in the wild.

|  | CommonJS (old) | ES Modules (new) |
| --- | --- | --- |
| Import | `const x = require('x')` | `import x from 'x'` |
| Export | `module.exports = x` | `export default x` |
| Enable | Default in Node.js | Add `"type": "module"` in `package.json` |

**Your task:** Which module system is your project using? How do you know?
>The project uses the ES6 module system. This can be determined by navigating to [package.json::line18](../package.json) and finding the `type` property.

<br/>

### Project File Structure [SCREENSHOT 1]
Take a screenshot of your project folder open in VS Code (the Explorer panel on the left). Your structure should show at minimum:
```
project/
├── index.js
├── package.json
├── package-lock.json
├── node_modules/
└── students.json
```

><p align="center"><img align="center" src="./img/project-bef.png" height="480" alt="Favicon" /></p>
