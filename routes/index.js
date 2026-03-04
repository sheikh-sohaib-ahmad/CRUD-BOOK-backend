import express from 'express'
import { createBook , getBooks , getBook , updateBook , deleteBook } from '../controllers/books.controller.js'
import { validateBooks , validateBookbyid , validateBookUpdate , validateBookDelete } from '../middlewares/booksMiddlewares.js'
const router = express.Router()

router.route('/').get((req, res) => {
    res.send('API is running.....')
})

router.route('/books')
    .post(validateBooks, createBook)
    .get(getBooks)

router.route('/books/:id')
    .get(validateBookbyid, getBook)
    .put(validateBookUpdate, updateBook)
    .delete(validateBookDelete, deleteBook)

export default router