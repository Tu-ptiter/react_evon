import React from 'react';
import YoutubeItem from './YoutubeItem';
import { YoutubeData } from '../../data';


const YoutubeList = (props) => {
    return (
        <div>
            <div className="youtube-list">
                {props.children}
                {YoutubeData.map((item,index)=>{
                console.log(item);
                return(
                    <YoutubeItem
                    key={item.id}
                    image={item.image}
                    title={item.title || "Say Yes (Vietnamese Version)"}
                    author={item.author}
                    avatar={item.avatar || item.image}
                    ></YoutubeItem>
                )})};            
            </div>
        </div>
    );
};

export default YoutubeList;