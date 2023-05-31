import { Box, Button, Input, Text, useToast } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useState } from "react";
// import { Navigate } from "react-router-dom";

const AddBook = () => {
    const toast = useToast();
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [image, setImage] = useState("");
    const [genre, setGenre] = useState("");
    const [description, setDescription] = useState("");
    const [year, setYear] = useState("");
    const [pages, setPages] = useState("");

    const handleSubmit = () => {
        const payload = {
            title,
            author,
            image,
            description,
            genre,
            year,
            pages,
        };
        console.log(payload);

        axios
            .post(`https://india-youth.onrender.com/book`,
                payload,
            )
            .then(() => {
                toast({
                    title: "Added",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                });
            });
    };

    return (
        <>
            <Text textAlign="center" fontWeight="bold" fontSize="30px" mt="10">
                Add Book
            </Text>
            <Box w={{ base: "90%", md: "40%" }} m="auto" mt="5">
                <Box>
                    <Input
                        position="static"
                        onChange={(e) => setTitle(e.target.value)}
                        border="1px solid #444444"
                        type="text"
                        placeholder="add title"
                    />
                </Box>
                <Box mt="5">
                    <Input
                        position="static"
                        onChange={(e) => setAuthor(e.target.value)}
                        border="1px solid #444444"
                        type="text"
                        placeholder="add author"
                    />
                </Box>
                <Box mt="5">
                    <Input
                        position="static"
                        onChange={(e) => setImage(e.target.value)}
                        border="1px solid #444444"
                        type="url"
                        placeholder="image url"
                    />
                </Box>
                <Box mt="5">
                    <Input
                        position="static"
                        onChange={(e) => setGenre(e.target.value)}
                        border="1px solid #444444"
                        type="text"
                        placeholder="genre"
                    />
                </Box>
                <Box mt="5">
                    <Input
                        position="static"
                        onChange={(e) => setDescription(e.target.value)}
                        border="1px solid #444444"
                        type="text"
                        placeholder="description"
                    />
                </Box>
                <Box mt="5">
                    <Input
                        position="static"
                        onChange={(e) => setYear(e.target.value)}
                        border="1px solid #444444"
                        type="number"
                        placeholder="year"
                    />
                </Box>
                <Box mt="5">
                    <Input
                        position="static"
                        onChange={(e) => setPages(e.target.value)}
                        border="1px solid #444444"
                        type="number"
                        placeholder="pages"
                    />
                </Box>

                <Button
                    borderRadius="5"
                    bg="#8b3dff"
                    _hover={{ bg: "#7734dc" }}
                    color="#ffffff"
                    fontSize="15px"
                    fontWeight="normal"
                    position="static"
                    mt="5"
                    w="100%"
                    onClick={handleSubmit}
                >
                    Add +
                </Button>
            </Box>
        </>
    );
};

export default AddBook;
