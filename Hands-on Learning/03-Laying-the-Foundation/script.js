import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => ReactElement-Js object => HTML Element(render)

// using React
const heading = React.createElement('h1',{},'Hello World using React!'); // React Element(object), not HTML Element
console.log(heading); // JS object

// React Element using JSX => JSX -> Babel -> React Element-JS object -> HTML Element(render)
const jsxHeading = <h1 id="heading" className="heading1">heading using JSX</h1>;
console.log(jsxHeading); // JS object

// multiply lines of JSX should be enclosed within round brackets ();
const container =(
    <div id="container" >
        <p>Paragraph-1</p>
        <p>Paragraph-2</p>
        <p>Paragraph-3</p>
    </div>);


// both heading and jsxHeading are react object
const root = ReactDOM.createRoot(document.getElementById('root'));

// Component
// Class Based Components - old
// Functional components - new

// React Element -> React functional Component 
const JsxHeadingComponent = () => <h1 id="heading" className="heading1">heading using JSX</h1>;
console.log(JsxHeadingComponent); // JS object

const HeadingComponent = () => (<>
        {/* <JsxHeadingComponent></JsxHeadingComponent> */}
        {/* <JsxHeadingComponent /> */}
        { JsxHeadingComponent()}
        <h1>React Component</h1>
        <p>A react component is a normal javascript function that returns the piece of JSX code or which return react Element</p>
    </>);

// rendering
// root.render(heading);
// root.render(jsxHeading);
// root.render(container);

root.render(<HeadingComponent />);

// root.render(<HeadingComponent></HeadingComponent>); // we can also write it like this