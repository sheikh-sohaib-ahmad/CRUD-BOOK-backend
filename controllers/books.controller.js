import Book from '../models/bookSchema.js'

export const createBook = async (req, res) => {
    const {title , author , publishedDate , pages , genre} = req.body
    try {
        const book = await Book.create({
            title,
            author,
            publishedDate,
            pages,
            genre
        })
        res.status(201).json(book)
    } catch (error) {
        res.status(400).json({message : error.message})
    }
}

export const getBooks = async (req, res) => {
    try {
        const books = await Book.find()
        res.status(200).json(books)
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

export const getBook = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id)
        if (!book) return res.status(404).json({message: 'Book not found'})
        res.status(200).json(book)
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

export const updateBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, {new: true})
        if (!book) return res.status(404).json({message: 'Book not found'})
        res.status(200).json(book)
    } catch (error) {
        res.status(400).json({message : error.message})
    }
}

export const deleteBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id)
        if (!book) return res.status(404).json({message: 'Book not found'})
        res.status(200).json({message: 'Book deleted'})
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}
