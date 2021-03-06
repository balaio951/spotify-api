'use strict';

var _search = require('./search');

var _album = require('./album');

module.exports = {
    search: _search.search,
    searchArtists: _search.searchArtists,
    searchAlbums: _search.searchAlbums,
    searchPlaylist: _search.searchPlaylist,
    getAlbum: _album.getAlbum,
    getAlbums: _album.getAlbums,
    getAlbumTracks: _album.getAlbumTracks
};