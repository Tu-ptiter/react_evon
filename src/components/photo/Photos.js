import React, {useState,useEffect} from 'react';
import axios from 'axios';
import './photo.scss';

const getPhotos =()=>{
    return axios.get('https://picsum.photos/v2/list')
        .then((response) =>{
            return response.data;
        })
        .catch((error)=>{
            console.log(error);

        });
}


const Photos = () => {
    const [randomPhoto, setRandomPhoto] = useState([]);
    useEffect(()=>{
        getPhotos().then((dates)=>{
            console.log(dates);
            setRandomPhoto(dates);
        })

    },[]);
    return (
        <div>
            {randomPhoto.map((item) =>(
                <div className='container' >
                    <div>
                        <h1>{item.id}</h1>
                        <p>{item.author}</p>
                        
                    </div>
                    <div>
                        <img src={item.download_url} className='css-img'></img>
                    </div>
                    <br></br>
                </div>
                
            ))}
        </div>
    );
};

export default Photos;