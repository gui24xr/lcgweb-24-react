import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { urls } from '../utils/urls';


const MusicPage = () => {

    const [musicData,setMusicaData] = useState([])
    const [loading,setLoading] = useState(true)
   

    useEffect(()=>{
        setLoading(true)
        axios.get(urls.music)
        .then(res => {
            setMusicaData(res.data)
            setLoading(false)
        })
        .catch( error => {
            console.error('Error:', error)
            setLoading(false)
        })
    },[])

    return (
        <div>
            <p>Musica</p>
            {
                loading ? <p>Cargando</p> : (
                    musicData.map((track) => (
                        <div key={track.id} style={{ margin: '20px', maxWidth: '300px' }}>
                          <img
                            src={track.image}
                            alt={track.title}
                            style={{ width: '100%', borderRadius: '8px' }}
                          />
                          <h2>{track.title}</h2>
                          <p><strong>Author:</strong> {track.author}</p>
                          <p><strong>Release Date:</strong> {track.releaseDate}</p>
                          <p><strong>Duration:</strong> {track.duration}</p>
                          <div>
                            <strong>Listen Here:</strong>
                            <ul>
                              {track.platformLinks.map((link, index) => (
                                <li key={index}>
                                  <a href={link} target="_blank" rel="noopener noreferrer">
                                    {link}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))
                )
            }
            
        </div>
    );
}

export default MusicPage;
