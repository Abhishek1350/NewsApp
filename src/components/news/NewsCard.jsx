import React from "react"
import "./news.css"

const NewsCard = ({ title, description, url, urlToImage, publishedAt }) => {
    return (
        <div className="card">
            <div className="card-img">
                <img height="170" src={!urlToImage ? "./logo.png" : urlToImage} alt="news" />
            </div>
            <div className="card-body">
                <h2 className="card-title">{title.slice(0, 50)}...</h2>
                <p className="card-dec">{!description ? "Sorry description not found for this article and this is just a dummy description click on read more for more info" : description.slice(0, 120)}...</p>
                <p className="card-time"><strong>Published At : </strong>{publishedAt} </p>
                <a href={url} target="_black" className="card-btn">Read More</a>
            </div>
        </div>
    )
};

export default NewsCard