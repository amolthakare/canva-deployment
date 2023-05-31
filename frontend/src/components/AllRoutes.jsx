import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import AddBook from "./AddBook";
import Book from "./Book";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addbooks" element={<AddBook />} />
        <Route path="/:book_id" element={<Book />}/>
      </Routes>
    </>
  );
};

export default AllRoutes;
