const mongoose = require('mongoose');

const ArtworksSchema = new mongoose.Schema({
    artist : String,
    artwork : String,
    description : String
})

const ArtworksModel = mongoose.model("artworks", ArtworksSchema)
module.exports = ArtworksModel