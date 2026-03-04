import Book from '../models/bookSchema.js'

export const validateBooks = (req , res, next) =>{
    const {title , author , publishedDate , pages , genre} = req.body
    if (!title || !author || !publishedDate || !pages || !genre) {
        return res.status(400).json({message : "All fields are required"})
    }
    next()
}
export const validateBookbyid =(req , res , next) =>{
    const {id} = req.params
    if(!id){
        return res.status(400).json({message : "Book id is required"})
    }
    next()
}
export const validateBookUpdate = (req , res , next) =>{
    const {title , author , publishedDate , pages , genre} = req.body
    if (!title && !author && !publishedDate && !pages && !genre) {
        return res.status(400).json({message : "At least one field is required to update"})
    }
    next()
}
export const validateBookDelete = (req , res , next) =>{
    const {id} = req.params
    if(!id){
        return res.status(400).json({message : "Book id is required"})
    }
    next()
}
