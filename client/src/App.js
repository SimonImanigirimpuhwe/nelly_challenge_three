import React, { useState } from 'react';
import SearchInput from './components/Search'
import Header from './components/Header'
import './App.css';
import Footer from './components/Footer';
import AlbumPhotos from './components/AlbumPhotos';

const API_URL = "http://localhost:5000"

function App() {
  const [photos, setPhotos] = useState([]);
  const [searchId, setSearchId]= useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false)

  const onSubmit = () => {
    if (searchId === "") {
      setError("Id is required")
    } 
    else {
      setLoading(true)
      fetch(`${API_URL}/photos/${searchId}`)
      .then((result) => result.json())
      .then((albums) => {
        setLoading(false)
        if (albums.msg) {
          setError(albums.msg)
        } else {
          setPhotos(albums.data)
        }
      })
      .catch((err) =>{ 
        setLoading(false)
        setError(err.message)
      })
    }
  }

  const onChange = ({value}) => {
    setSearchId(value)
    setError("")
    setPhotos([])
  }

  return (
    <div className="App">
      <Header />
      <SearchInput onSubmit={onSubmit} onChange={onChange} error={error}/>
      <AlbumPhotos photos={photos} loading={loading}/>
      <Footer />
    </div>
  );
}

export default App;
