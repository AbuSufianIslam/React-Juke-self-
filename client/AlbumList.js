import React from 'react';

const AlbumList = (props) => {
	const { albums, selectedAlbum } = props;
	return (
		<div id="albums" className="row wrap">
			<div className="album">
				{albums.map((album) => {
					return (
						<a key={album.id} onClick={() => selectedAlbum(album.id)}>
							<img src={album.artworkUrl} />
							<p>{album.name}</p>
							<small>{album.artist.name}</small>
						</a>
					);
				})}
			</div>
		</div>
	);
};

export default AlbumList;
