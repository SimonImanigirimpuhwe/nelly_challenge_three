import React from 'react'
import Card from './Card'
import EmptyContent from './EmptyContent'
import LoadingPhotos from './Loading'

const AlbumPhotos = ({photos, loading}) => {
    return (
        <div className="album_wrapper">
            {loading && <LoadingPhotos />} 
            {photos.length > 0 ? photos.map((photo) => (
                <Card photo={photo} key={photo.id}/>
            )): <EmptyContent />}
        </div>
    )
}

export default AlbumPhotos
