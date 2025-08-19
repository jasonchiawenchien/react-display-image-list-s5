import axios from "axios";

const searchImages = async (term) => {
    try {
        const response = await axios.get(
            "https://api.unsplash.com/search/photos",
            {
                headers: {
                    Authorization:
                        "Client-ID BBlsNVowhOFWv5QSofgDNL2h4rx9ZAFdR4uru1qlhFA",
                },
                params: {
                    query: term,
                },
            }
        );
        const {results: images} = response.data; // images is an array of objects
        console.log("api.js");
        console.log(images);
        // const newImages = images.map((image) => {
        //     return {
        //         id: image.id,
        //         alt_description: image.alt_description,
        //         urls: image.urls,
        //     };
        // });
        // console.log("newImages: ", newImages);
        return images;
    } catch (error) {
        console.error("Error fetching images:", error);
    }
};

export default searchImages;
