import React from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import AlbumList from './AlbumList';
import Player from './Player';
import SingleAlbum from './SingleAlbum';

export default class Main extends React.Component {
	constructor() {
		super();
		this.state = {
			albums: [],
			singleAlbum: {}
		};
		this.selectedAlbum = this.selectedAlbum.bind(this);
		this.deSelect = this.deSelect.bind(this);
		this.start = this.start.bind(this);
	}

	async componentDidMount() {
		const { data } = await axios.get('/api/albums');
		//console.log('data--------------------', data);
		this.setState({
			albums: data
		});
	}
	async selectedAlbum(albumId) {
		const { data } = await axios.get(`/api/albums/${albumId}`);
		console.log('data--------------------', data);

		this.setState({
			singleAlbum: data
		});
	}
	deSelect() {
		this.setState({
			singleAlbum: {}
		});
	}
	start(audioSource) {
		const audio = document.createElement('audio');
		audio.src = audioSource;
		audio.load();
		audio.play();
	}
	render() {
		return (
			<div id="main" className="row container">
				<Sidebar deSelect={this.deSelect} />
				<div className="container">
					{this.state.singleAlbum.id ? (
						<SingleAlbum singleAlbum={this.state.singleAlbum} songPlay={this.start} />
					) : (
						<AlbumList albums={this.state.albums} selectedAlbum={this.selectedAlbum} />
					)}
				</div>

				<Player />
			</div>
		);
	}
}
