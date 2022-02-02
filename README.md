## React Typescript From Scratch
This is a template to demonstrate how to set up a React TypeScript application without the use of CRA. 

The following packages have been utilized to set up and run the application:

- [Webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://www.npmjs.com/package/husky) 

This template was developed by following this React Typescript + Webpack [tutorial](https://www.youtube.com/watch?v=Elpu7CIuqjY&list=PLC3y8-rFHvwiWPS2RO3BKotLRfgg_8WEo&index=1)

## Get Started
- Install NodeJS
- Download this repo
- CD into the downloaded repo
- run `yarn install` to install all dependencies
- run `yarn start` to build and launch the app

## If you want to play with the code
Husky has been used in this application to prevent commits containing code with linting or formatting issues. 

To prevent errors upon committing you can make use of the two following commands to run both the linter and formatter.

- run `yarn lint` to run eslint
- run `yarn format` to run prettier

## If you want to build the app
- run `yarn build` to run webpack
- CD into the build folder
- run `npx serve` to launch the app