[![Test Status](https://github.com/binodswain/react-lib-template/workflows/Test/badge.svg)](https://github.com/binodswain/react-lib-template/actions?query=workflow%3ATest)
[![Build Status](https://github.com/binodswain/react-lib-template/workflows/Build/badge.svg)](https://github.com/binodswain/react-lib-template/actions?query=workflow%3ABuild)

# react-lib-template
A sample opinionated template to build npm packages. Uses below technologies to test and build the package.
- Reactjs
- Babel
- Rollup

# Running the code with example app
First, setup a CRA to use the code as package.
```bash
npx create-react-app example
```
In package.json, add the package name as a dependencies.
"react-lib-template": "file:..",

Note: replace `react-lib-template` with the name present in package.json in root dir.

Now run `npm start` script from root dir and from example/ dir.

# GitHub Actions
The template has two actions already setup. Replace **react-lib-template** accordingly.
- **Test**: to run the test script.
- **Build**: to test, lint and build the package

