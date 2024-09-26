import React from 'react';

const YoutubeItem = (props) =>{
        return (
            <div className="youtube-item">
                <div className="youtube-img">
                    <img src={props.image} alt=""></img>
                </div>

                <div className="yt-footer" >
                        <img src={props.avatar} alt = "" className="avatar"></img>
                    <div className="infor">
                        <h2>Khoa hoc </h2>
                        <button   button  type="button"> change</button>
                        <h3 className="title">{props.title}</h3>
                        <h4 className="author">{props.author }</h4>
                    </div>
                </div>
            </div>
        )
};


export default YoutubeItem;