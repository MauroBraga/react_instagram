const express = require('express')
const multer = require('multer')
const uploadConfig = require('./config/upload')

const PostCotroller = require('./controller/PostController')
const LikeController = require('./controller/LikeController')

const routes = new express.Router()
const upload = multer(uploadConfig)

routes.get('/posts', PostCotroller.index)
routes.post('/posts', upload.single('image'), PostCotroller.store)

routes.post('/posts/:id/like',  LikeController.store)


module.exports = routes