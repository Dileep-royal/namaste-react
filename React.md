![](https://www.freecodecamp.org/news/content/images/2022/04/featured.jpg)
# Introduction to React

### React is a JavaScript library for building UI

React is used to remove the hectic process of DOM manipulation done by developers. Facebook realized this and created a library.
React is developed by **Jordan Walke👨‍💻**, who is a Meta/Facebook software Engineer.

He designed it in 2011 for news feed of Facebook, later used in Instagram in 2012 and they open-sourced it as library on 29, May 2013.

# 💫 Some features of React

➕ React.js is an platform-agnostic JavaScript library.</br>
➕ Used to build interfaces that changes data dynamically without reloading the page.</br>
➕ React.js mainly focuses on View part of MVC Architecture.</br>
➕ React is used to develop both web & mobile applications.</br>
➕ Key features are creating Components, reusable UI Elements, and State management.</br>
➕ Used for server-side rendering (SSR) which eventually enhances SEO.</br>
➕ It comes with so many other companion libraries to take care of things related to frontend.</br>

## Important jargons of React

1. State
2. Components
3. Re-rendering

Problems with Manual DOM Manipulation

- No Central State
- React provides us a State, Components, Re-rendering concepts to make things easy to perform DOM manipulation and to make dynamic websites.

# 🧨State:

State is a JavaScript object that represents the parts of a component that can change over time. It is Used to store dynamic data in a component.

### **Purpose:**

By managing state, React allows components to update and re-render based on changes in the application's data or user interactions.

State is typically initialized in the **`constructor`** of a class component using **`this.state = initialState;`**. To update the state, you use the **`setState`** method, triggering a re-render.

# 📦Component:

- **Definition:** A component in React is a reusable, self-contained piece of code that encapsulates a specific functionality or part of the user interface.
- **Purpose:** Components help in structuring and organizing the UI into modular pieces, making it easier to manage and maintain.
- **Types:** React components can be **class components or functional components**. Class components have **access to state and lifecycle methods**, while functional components **can use hooks to manage state and effects.**

# 🔄️Re-rendering:

- **Definition:** Re-rendering is the process of updating the DOM to reflect changes in the state or props of a component.
- **Triggering Re-renders:** React components re-render when their state or props change. Calling **`setState`** triggers a re-render of the component. Parent component re-renders can also lead to re-rendering of child components.
- **Virtual DOM:** React uses a virtual DOM to optimize rendering. Instead of directly updating the actual DOM on each state change, React compares the virtual DOM with the real DOM and updates only the necessary parts.

# 📝Summary
State allows components to manage dynamic data, components organize and encapsulate UI logic, and re-rendering ensures that the UI stays in sync with the application's state.

✨ Instead of doing things repeatedly and provoking the DRY principle.</br>
✨ React allows us to create the components, which are reusable just like functions and assigns each of them with state variables which are useful to keep track of changes occurs.
⇒ Re-rendering is taken care by react itself.