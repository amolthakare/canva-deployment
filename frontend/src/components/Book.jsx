import { Flex, Box, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Book = () => {
    const [book, setBook] = useState({});
    const params = useParams();
    console.log(book);

    useEffect(() => {
        axios
            .get(
                `https://india-youth.onrender.com/book/${params.book_id}`
            )
            .then((res) => res.data)
            .then((res) => {
                setBook(res.data);
                console.log(res)
            });
    }, [params]);

    console.log(params);

    return (
        <>
            <Flex w={{ base: "90%", md: '80%' }} gap="20" flexDirection={{ base: "column", md: "row" }}>
                <Box>
                    <Image src="" alt="" />
                </Box>
                <Box>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                </Box>
            </Flex>
        </>
    )
}

export default Book