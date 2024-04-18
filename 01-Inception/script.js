//  How to create Nested HTML Tags using React
/* <div id='parent'>
    <div id='child1'>
        <h1>I am h1 Tag!</h1>
        <h1>I am h1 Tag!</h1>
    </div>
    <div id='child2'>
        <h1>I am h1 Tag!</h1>
        <h1>I am h1 Tag!</h1>
    </div>
</div> */

const nested_tags = React.createElement('div',{id:'parent'},
[React.createElement('div',{id:'child1'},
[React.createElement('h1',{},'I am a h1 Tag!'),React.createElement('h1',{},'I am a h1 Tag!')]),
React.createElement('div',{id:'child1'},
[React.createElement('h1',{},'I am a h1 Tag!'),React.createElement('h1',{},'I am a h1 Tag!')])]);

const heading = React.createElement('h1',{},'Hello World using React!'); // React Element, not HTML Element
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading); 
root.render(nested_tags); 