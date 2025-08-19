import SearchBar from "./components/SearchBar";
import searchImages from "./api";
import {useState} from "react";
import ImageList from "./components/ImageList";

function App() {
    const imagesMockData = [
        {id: 1, description: "Image 1"},
        {id: 2, description: "Image 2"},
        {id: 3, description: "Image 3"},
    ];

    const [images, setImages] = useState([]);
    // search the images with user input from SearchBar
    const handleFormSubmit = async (userInput) => {
        console.log("userInput: ", userInput);
        // returns list of images from Unsplash API
        const result = await searchImages(userInput);
        setImages(result);
    };
    return (
        <div>
            <SearchBar onSubmit={handleFormSubmit} />
            <ImageList images={images} />
        </div>
    );
}

export default App;
