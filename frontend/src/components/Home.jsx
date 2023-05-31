import { Box, Button, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://india-youth.onrender.com/book").then((res) => {
      setData(res.data);
      console.log(res);
    });
  }, []);

  const onDelete = (_id) => {
    axios.delete(`https://india-youth.onrender.com/book/${_id}`).then(() => {
      axios.get("https://india-youth.onrender.com/book").then((res) => {
        setData(res.data);
        console.log(res);
      });
    });
  };

  return (
    <Box mt="8">
      <Box textAlign="center">
        <Text fontSize={{ base: "3xl", md: "5xl" }} fontWeight="bold">
          Add your favourite books
        </Text>
        <Text>
          Canva makes it easy to create professional designs and to share or
          print them.
        </Text>

        <Link to="/addbooks">
          <Button
            borderRadius="5"
            bg="#8b3dff"
            _hover={{ bg: "#7734dc" }}
            color="#ffffff"
            fontSize="15px"
            fontWeight="normal"
            position="static"
            mt="5"
          >
            Add Book
          </Button>
        </Link>
      </Box>

      <SimpleGrid
        columns={[1, 1, 2, 3, 4]}
        spacing={"40px"}
        w={{ base: "90%", md: "85%" }}
        m="auto"
        mt="16"
      >
        {data &&
          data.map((item) => (

            <Box key={item._id} border="1px solid #cecece">
              <Link to={`/${item._id}`}>
                <Box h="60%">
                  <Image w="100%" h="100%" src={item.image} alt="booksImg" />
                </Box>
              </Link>
              <Box p="3">
                <Text fontSize="18px" fontWeight="bold">
                  {item.title}
                </Text>
                <Text mt="2">Auther : {item.author}</Text>

                <Flex alignItems="center" justifyContent="space-between" mt="5">
                  <Button
                    borderRadius="3"
                    position="static"
                    size="sm"
                    fontWeight="normal"
                    colorScheme="red"
                    onClick={() => onDelete(item)}
                  >
                    Delete
                  </Button>

                  <Link to="/update">
                    <Button
                      borderRadius="3"
                      position="static"
                      size="sm"
                      fontWeight="normal"
                      colorScheme="green"
                    >
                      Edit
                    </Button>
                  </Link>
                </Flex>
              </Box>
            </Box>

          ))}
      </SimpleGrid>
    </Box>
  );
};

export default Home;
