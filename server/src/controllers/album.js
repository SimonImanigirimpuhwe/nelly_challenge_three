import axios from "axios"

const getAlbumPhotos = async (req, res) => {
    const {id} = req.params;
    axios.get("https://jsonplaceholder.typicode.com/photos")
    .then((photos) => {

        const filteredPhotos = photos.data.filter(photo => photo.albumId.toString() === id);
    
        if (filteredPhotos.length === 0)  {
            return res.status(404).json({msg: "No album with such Id"})
        }
    
        return res.status(200).json({ data: filteredPhotos})
    })
    .catch((err) => {
        return res.status(500).json({msg: err.message})
    })
};


export default getAlbumPhotos