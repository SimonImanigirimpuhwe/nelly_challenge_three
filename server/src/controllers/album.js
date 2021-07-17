import photos from "../utils/db.json";

const getAlbumPhotos = async (req, res) => {
    const {id} = req.params;

    const filteredPhotos = photos.filter(photo => photo.albumId.toString() === id);

    if (filteredPhotos.length === 0)  {
        return res.status(404).json({msg: "No album with such Id"})
    }

    return res.status(200).json({ data: filteredPhotos})
};


export default getAlbumPhotos