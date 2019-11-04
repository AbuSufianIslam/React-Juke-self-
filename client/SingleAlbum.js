import React from 'react';

const SingleAlbum = (props) => {
	const { singleAlbum, songPlay } = props;
	console.log('singleAlbum', singleAlbum);
	return (
		<div id="single-album" className="column">
			<div className="album">
				<a>
					<img src={singleAlbum.artworkUrl} />
					<p>{singleAlbum.name}</p>
					<small>{singleAlbum.artist.name}</small>
				</a>
			</div>
			<table id="songs">
				<tbody>
					<tr className="gray">
						<td />
						<td>#</td>
						<td>Name</td>
						<td>Artist</td>
						<td>Genre</td>
					</tr>
					{singleAlbum.songs.map((song) => {
						return (
							<tr key={song.id}>
								<td>
									<i className="fa fa-play-circle" onClick={() => songPlay(song.audioUrl)} />
								</td>
								<td>{song.id}</td>
								<td>{song.name}</td>
								<td>{singleAlbum.artist.name}</td>
								<td>{song.genre}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default SingleAlbum;
