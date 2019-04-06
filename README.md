# Contact List

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Using API from [Simple Contact CRUD API](https://simple-contact-crud.herokuapp.com/documentation).<br>
To see this project in action, go to [Demo](https://finmavis.github.io/contact-list)

## Getting Started

Clone this repo : 
```git clone https://github.com/finmavis/contact-list.git```

Navigate to the root folder and install all dependencies :
- [Yarn](https://yarnpkg.com) : `yarn install`
- [NPM](https://yarnpkg.com) : `npm install`

Start Development Mode :
- `yarn start` or `npm start`
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- Happy Hacking!

## Folder Structure
```
src/
  component/
    styles/
  helpers/
  App.js
  App.test.js
  index.css
  index.js
```

- `component` : Folder to put ours Component
  - `styles` : Folder to put our Styled Component that reusable
- `helpers` : Folder to put our helpers function like Consume API or others helpers

## Style Utilities

### Relative Unit
This project using relative unit based 10px. so you can use `1rem` which means `10px` propeties in css to help ours styling more easier handling Resposive.