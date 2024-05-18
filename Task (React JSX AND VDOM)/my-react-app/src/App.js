import React from "react";

function MyComponent() {
    const handleclick = () => alert("Hello, React!");
    return (
    <div>
        <h1>Hello, React!</h1>
        <button onClick={handleclick}>Click Me</button>
    </div>
    );
}


export default MyComponent;