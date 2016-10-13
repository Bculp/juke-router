'use strict';

import React from 'react';
import SongsContainer from '../containers/SongsContainer';
import convertAlbum from '../converters';
import convertSong from '../converters';

export default class Album extends React.Component {

	componentDidMount() {

		//added songs && to songs.js so only map over songs when have songs
		this.props.fetchAlbum(this.props.params.albumId)
	}

	render () {
		const { selectedAlbum } = this.props;
		return (
		  <div className="album">
		    <div>
		      <h3>{ selectedAlbum.name }</h3>
		      <img src={ selectedAlbum.imageUrl } className="img-thumbnail" />
		    </div>
		    <SongsContainer songs={selectedAlbum.songs} />
		  </div>
		)
	}

}