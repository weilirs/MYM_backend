const axios = require("axios");

const NASA_API_KEY = 'Z8yXgP5PgKk6KvltbfZT0M8Rns4xc5gOwwyID5RL';

const nasaController = async(req,res) =>{
  
  try {
    const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching NASA data' });
  }
};

module.exports = {
    nasaController
}