import React, {useState,useEffect} from 'react';
import axios from 'axios';
import './photo.scss';

const getPhotos =(page)=>{
    return axios.get(`https://picsum.photos/v2/list?page=${page}&limit=6`)
        .then((response) =>{
            return response.data;
        })
        .catch((error)=>{
            console.log(error);

        });
}


const Photos = () => {
    const [randomPhoto, setRandomPhoto] = useState([]);
    const [nextPage,setNextPage] =useState(1);

    const handleLoadMore =()=>{
        getPhotos(nextPage).then((dates)=>{
            console.log(dates);
            setRandomPhoto(dates);  
            setNextPage(nextPage+1); 
        })
    }
    useEffect(()=>{
         handleLoadMore();
    },[]);
    return (
        <div>
        <div className='grid '>
            {randomPhoto.length > 0 && randomPhoto.map((item) =>(
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
        <div>
            <button onClick={handleLoadMore}>Load more</button>
        </div>
        </div>
    );
};

export default Photos;