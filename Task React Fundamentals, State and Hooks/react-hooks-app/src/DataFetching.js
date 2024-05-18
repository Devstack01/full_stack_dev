import React, {useState, useEffect} from "react";

function DataFetching() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => setData(data));
    }, []);
    return(
        <div>
            <h2>Posts</h2>
            <ul>
                {data.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );

}
export default DataFetching;