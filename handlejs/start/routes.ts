/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('/register', 'AuthController.register')
  Route.post('/login', 'AuthController.login')
}).prefix('api/auth')


Route.group(() => {

  Route.group(() => {
    Route.get('/', 'CategoriesController.get')
    Route.post('/', 'CategoriesController.create')
    Route.delete('/:category_id', 'CategoriesController.delete')
    Route.get('/:category_id', 'CategoriesController.getLessons')
  }).prefix('/category')

  Route.group(() => {
    Route.get('/', 'CoursesController.get')
    Route.get('/:course_id', 'CoursesController.find')
    Route.post('/', 'CoursesController.create')
    Route.delete('/:course_id', 'CoursesController.delete')
  }).prefix('/course')

  Route.group(() => {
    Route.get('/', 'LessonsController.get')
    Route.post('/', 'LessonsController.create')
    Route.delete('/:lesson_id', 'LessonsController.delete')
  }).prefix('/lesson')

  Route.group(() => {
    Route.post('/', 'LikesController.like')
  }).prefix('/like')

}).prefix('/api').middleware('auth')

