# Episode-03 Laying the Foundation

# Configure `Scripts`key in package.json

- The "scripts" key in a **`package.json`** file is used to define various command-line scripts that can be executed via `npm`.
- These scripts can perform a wide range of tasks, such as running tests, building the project, starting a development server, or deploying the application.
- Here is a example

```json
"scripts": {
     "start": "parcel index.html",
     "build": "parcel build index.html",
     "test": "jest"
}
```

To execute this scripts use the following command:

**Syntax:**

`npm run scripts_key`  or `npm scripts_key`

**Example:**

`npm run start`  or `npm start`

# What is the value returned by createElement()

- React object, not a HTML element

# Introduction to JSX

JSX stands for "JavaScript XML." It's a syntax extension for JavaScript that allows developers to write HTML-like code directly within JavaScript files

- JSX is `not` html inside a JavaScript.
- JSX is a HTML-like or XML-like syntax.
- Both `createElement` and `JSX` gives you same React object. Then what is the difference.
- `JSX` is mainly out there to make code more readable and understandable by programmers.
- With `createElement` ,we have very clumsy and verbose code to create elements and it become hard to create a nested elements.
- To make developers life easy `JSX` is invented.
- JSX is Developer First
- Even this `JSX` code is `Transpiled`(converted) to actual JavaScript by using a tool like [**Babel**](https://babeljs.io/), it's transformed into regular JavaScript function calls that create React elements.
- JSX makes it easier to visualize and understand the structure of your UI components compared to using pure JavaScript to create elements.
    
    `JSX   ⇒   Babel  ⇒  JS`
    

### In JSX, how to give a class to HTML Element

`<h1 className=”heading” >Example of heading with class name</h1>`

## Note:

- Make sure to enclose the multiple lines JSX syntax with in round brackets `()`.
- Also if we multiple lines of JSX code inside a Component and this JSX code must have a one parent element.
- Use this incase you don’t want any root element `<> </>`.

### Assignment

How to write HTML-like JSX i.e. different properties of HTML Elements

## Component

[Intro to React](https://www.notion.so/Intro-to-React-a04b7aa6ec6a43e9aa24dd48d8bdb9d5?pvs=21)

- A component is a normal JavaScript function that returns a piece of JSX Code (or) React element.
- Components are of two types:
1. Class Based Component
2. Functional Component

## Functional Component

- These are stateless functional components that accept props (short for properties) as arguments and return React elements.
- Functional components are typically used for simple UI elements that don't need to manage state.
- The component name’s first letter should be in uppercase and we render the component using angle brackets `<> </>` the following syntax.

     `<>ComponentName</>`          

```jsx
import React from 'react';

const MyComponent = (props) => {
  return <div>Hello, {props.name}!</div>;
};
```

## Class Based Components

- These are ES6 classes that extend `React.Component` and have their own state.
- Class components have a render() method that returns React elements, and they can also have lifecycle methods for managing component state and handling side effects.

```jsx

import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}
```

## Component Composition

- Component Composition is a composition of one or more component(s) within another component.

Example:

```jsx
const JsxHeadingComponent = () => <h1 id="heading" className="heading1">heading using JSX</h1>;
console.log(JsxHeadingComponent); // JS object

const HeadingComponent = () => (<>
        <JsxHeadingComponent />
        <h1>React Component</h1>
        <p>A react component is a normal javascript function that returns the piece of JSX code or which return react Element</p>
    </>);
```

- We can write JavaScript code within the Component / react Element / JSX code.
- We have enclose the JavaScript code within the curly parenthesis `{}`.

## XSS(Cross Site Scripting)

- Injecting a JavaScript code into user’s web browsers and getting access to their data from Cookies, Session Storage, Local Storage.
- JSX takes care of Injection Attacks i.e. sanitizes the JavaScript code.

## Summary

- At the End of the day, a Component is a JavaScript function.
- At the End of the day, React Element is an JavaScript object.
- At the End of the day, JSX Code is React Element.