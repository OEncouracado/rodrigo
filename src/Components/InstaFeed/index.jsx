import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./style.css"


const InstaFeed = ({ isLightMode }) => {
    const [feedList, setFeedList] = useState([]);

    useEffect(() => {
        async function getInstafeed() {
            const token = process.env.REACT_APP_INSTA_TOKEN;
            const fields = "media_url,media_type,permalink";
            const url = `https://graph.instagram.com/me/media?access_token=${token}&fields=${fields}`;

            const { data } = await axios.get(url);
            setFeedList(data.data);
        }

        getInstafeed();
    }, []);

    return (<div className="d-flex flex-column">
        <p className={isLightMode ? "text-center":"text-center text-white"}>Feed do Instagram</p>
        <div className={isLightMode ? "ifeedB":"ifeed"}>
            {feedList.map(item => (
                <a key={item.id} href={item.permalink} target="_blank" rel="noopener noreferrer" className="ifeedimg">
                    {item.media_type === "IMAGE" || item.media_type === "CAROUSEL_ALBUM" ? <img src={item.media_url} alt="Instagram Feed" /> : (<video controls><source src={item.media_url}/> </video>)}
                </a>
            ))}
        </div>
    </div>);
};

export default InstaFeed;
