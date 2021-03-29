let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
const https = require('https')
const NewsAPI = require('newsapi');

// create a reference to the model
let News = require('../models/news');

module.exports.fetchAndUpdateNews = (req, res, next) => {

    const newsapi = new NewsAPI('95d609a049394d099af8adfa03783f4f');
    newsapi.v2.sources({
        category: 'technology',
        language: 'en',
        country: 'us'
    }).then(response => {
        
        var data = [];

        for (let index = 0; index < response.sources.length; index++) {
            let newNews = News({
                "id": response.sources[index].id,
                "name": response.sources[index].name,
                "description": response.sources[index].description,
                "url": response.sources[index].url,
                "category": response.sources[index].category,
                "language": response.sources[index].language,
                "country": response.sources[index].country
            })        
    
            News.create(newNews, (err, News) =>{
                if(err)
                {
                    console.log(err);
                    res.end(err);
                }
            }); 

        }
    res.json(response.sources); 

})

}