import mongoose, { isValidObjectId } from "mongoose";
import { Book } from "../models/book.model.js";



// Get all books
const getAllBooks = async (req, res) => {
    const books = await Book.find();
    if (!books.length) throw Error("No Book found");

    return res.status(200).json({
        status: 200,
        message: "All books fetched successfully",
        books:books,
    });
};

// Add a new book
const addBook = async (req, res) => {
    const { title, description, category, author, price } = req.body;

    requireFields([title, description, category, author]);

    const newBook = await Book.create({ title, description, category, author, price });

    if (!newBook) throw Error("Something went wrong while creating new book");

    return res.status(201).json({
        status: 201,
        message: "New book added successfully",
        book: newBook,
    });
};

// Update a book
const updateBook = async (req, res) => {
    const { bookId } = req.params;
    const { title, description, category } = req.body;

    if (!isValidObjectId(bookId)) throw Error("Valid book id is required");

    requireFields([title, description, category]);

    const updatedBook = await Book.findByIdAndUpdate(
        bookId,
        { $set: { title, description, category } },
        { new: true }
    );

    if (!updatedBook) throw Error("Something went wrong while updating book");

    return res.status(200).json({
        status: 200,
        message: "Book updated successfully",
        book: updatedBook,
    });
};

// Delete a book
const deleteBook = async (req, res) => {
    const { bookId } = req.params;

    if (!isValidObjectId(bookId)) throw Error("Valid book id is required");

    await Book.findByIdAndDelete(bookId);

    return res.status(200).json({
        status: 200,
        message: "Book deleted successfully",
        book: {},
    });
};

// Filter books by category
const filterBooksByCategory = async (req, res) => {
    const { category } = req.query;

    if (!category) throw Error("Category is required");

    const books = await Book.find({ category });

    if (!books.length) throw Error(`No books found in ${category} category`);

    return res.status(200).json({
        status: 200,
        message: "Books filtered successfully",
        books,
    });
};

export {
    addBook,
    updateBook,
    deleteBook,
    getAllBooks,
    filterBooksByCategory,
};
