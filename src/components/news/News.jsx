import React, { useState, useEffect } from "react";
import "./news.css";
import NewsCard from "./NewsCard";
import Spinner from "../spinner/Spinner"

const News = ({ category }) => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    document.title = `News-${category}`
    window.scrollTo(0, 0)
    const apiKey = process.env.REACT_APP_API_KEY
    const fetchNews = async () => {
      const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}`)
      const status = await response.json();
      const articles = status.articles
      setNewsData(articles);
      setLoading(false)
    }
    fetchNews();
  }, [category])

  return (
    <>
      <div className="news-container">
        <h1 className="heading">Top Headlines On <span style={{ color: "blue" }}> {category.toUpperCase()} </span></h1>
        {
          loading && <Spinner />
        }
        <div className="card-container">
          {
            newsData.map((elem) => {
              const { title, description, url, urlToImage, publishedAt } = elem
              return <NewsCard title={title} description={description} url={url} urlToImage={urlToImage} publishedAt={publishedAt} key={url} />
            })
          }
        </div>
      </div>
    </>
  );
};

export default News;
