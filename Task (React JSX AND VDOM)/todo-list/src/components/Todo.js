import React from "react";

function Todo() {
    return(
        <div>
            <h1 style={{textAlign: 'center', color: 'darkblue'}}>
                My To-Do List
            </h1>
            <div style={{ textAlign: 'center'}}>
            <input 
                type="text"
                placeholder="Add a new task"
                style={{ padding: '5px'}} 
            />
            <button 
                style={{
                    backgroundColor: 'darkblue',
                    color: 'white',
                    padding: '5px 10px',
                    border: 'none',
                    marginLeft: '5px',
            }}>
                Add
            </button>
           <ul style={{ listStyleType: 'circle', paddingLeft: '20px'}}>
           <li>Task 1</li>
           <li>Task 2</li>
           <li>Task 3</li>
           <li>Task 4</li>
           <li>Task 5</li>
                </ul>
            </div>
        </div>  
    );
}

export default Todo;