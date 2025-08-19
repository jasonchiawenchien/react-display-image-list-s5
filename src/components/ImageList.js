import ImageShow from "./ImageShow";
import "./ImageList.css";

function ImageList({images}) {
    const imagesMockData = [
        {id: 1, alt_description: "Image 1"},
        {id: 2, alt_description: "Image 2"},
        {id: 3, alt_description: "Image 3"},
    ];
    const renderedImages = images.map((image) => {
        return <ImageShow image={image} key={image.id} />;
    });
    return <div className="image-list">{renderedImages}</div>;
}

export default ImageList;
