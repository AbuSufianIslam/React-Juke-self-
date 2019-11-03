const router = require('express').Router();
const { Artist, Album, Song } = require('../db');

router.get('/', async (req, res, next) => {
	try {
		const albums = await Album.findAll({
			include: [ Artist ]
		});
		res.json(albums);
	} catch (error) {
		console.error(error);
		next(error);
	}
});

router.get('/:id', async (req, res, next) => {
	const albumId = Number(req.params.id);
	try {
		const album = await Album.findOne({
			where: {
				id: albumId
			},
			include: [ Artist, Song ]
		});
		res.json(album);
	} catch (error) {
		console.error(error);
		next(error);
	}
});

module.exports = router;
