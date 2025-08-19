import {useState} from "react";
import "./SearchBar.css";

function SearchBar({onSubmit}) {
    const [term, setTerm] = useState("");

    const handleChange = (event) => {
        const userInput = event.target.value;
        setTerm(userInput);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(term);
    };
    return (
        <div className="search-bar">
            <form onSubmit={handleSubmit}>
                <label>Search Images</label>
                <input value={term} onChange={handleChange}></input>
            </form>
        </div>
    );
}

export default SearchBar;
