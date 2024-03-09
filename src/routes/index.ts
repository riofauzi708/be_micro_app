import express from 'express'
import UserController from '../controllers/UserController'
import BlogController from '../controllers/BlogController'
import PaslonController from '../controllers/PaslonController'
import PartaiController from '../controllers/PartaiController'
import VoteController from '../controllers/VoteController'

const Route = express.Router()

Route.post('/user', UserController.create)
Route.post('/blog', BlogController.create)
Route.post('/paslon', PaslonController.create)
Route.post('/partai', PartaiController.create)
Route.post('/vote', VoteController.create)

Route.get('/users', UserController.find)
Route.get('/blogs', BlogController.find)
Route.get('/paslons', PaslonController.find)
Route.get('/partais', PartaiController.find)

Route.put('/user/:id', UserController.update)
Route.put('/blog/:id', BlogController.update)
Route.put('/paslon/:id', PaslonController.update)
Route.put('/partai/:id', PartaiController.update)

Route.delete('/user/:id', UserController.delete)
Route.delete('/blog', BlogController.delete)
Route.delete('/paslon/:id', PaslonController.delete)
Route.delete('/partai/:id', PartaiController.delete)


export default Route
