'use strict';

import { connect } from 'react-redux';
import Album from '../components/Album';
import { receiveAlbum, fetchAlbum } from '../action-creators/albums';

const mapStateToProps = ({ selectedAlbum }) => ({
  selectedAlbum
});

const mapdispatchToProps = dispatch => ({
	fetchAlbum: albumId => dispatch(fetchAlbum(albumId))
})

export default connect(
  mapStateToProps, mapdispatchToProps
)(Album);