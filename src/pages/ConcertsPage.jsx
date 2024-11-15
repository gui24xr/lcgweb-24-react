import React,{useState,useEffect} from 'react';
import axios from 'axios'
import { urls } from '../utils/urls';


const ConcertsPage = () => {
    
    const [concertsData,setConcertsData] = useState([])
    const [loading,setLoading] = useState(true)
   

    useEffect(()=>{
        setLoading(true)
        axios.get(urls.concerts)
        .then(res => {
            setConcertsData(res.data)
            setLoading(false)
        })
        .catch( error => {
            console.error('Error:', error)
            setLoading(false)
        })
    },[])

    return (
        <div>
            <p>Conciertos y eventos</p>
            {
                loading ? <h1>Cargando...</h1> : (
                    concertsData.map((concert) => (
                        <div key={concert.id} style={{ margin: '20px', maxWidth: '300px' }}>
                          <img
                            src={concert.pictureURL}
                            alt={concert.name}
                            style={{ width: '100%', borderRadius: '8px' }}
                          />
                          <h2>{concert.name}</h2>
                          <p><strong>Venue:</strong> {concert.venue.name}</p>
                          <p><strong>Location:</strong> {concert.venue.address}, {concert.venue.city}</p>
                          <p><strong>Date:</strong> {new Date(concert.date).toLocaleDateString()}</p>
                          <p><strong>Time:</strong> {concert.time}</p>
                          <div>
                            <strong>Get Tickets:</strong>
                            <a
                              href={concert.ticketLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ display: 'block', color: 'blue', textDecoration: 'underline' }}
                            >
                              Buy Tickets
                            </a>
                          </div>
                        </div>
                      ))
                )
            }
        </div>
    );
}

export default ConcertsPage;
