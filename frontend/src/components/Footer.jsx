import { Box, Flex, Select, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <>
      <Box w="100%" mt="20" border="1px solid #cecece" py="10" bg="#ffffff">
        <SimpleGrid columns={[1, 2, 3, 5]} spacing="40px" w="90%" m="auto">
          <Box>
            <Text fontSize="18px" fontWeight="bold" mb="5">
              Features
            </Text>

            <Text fontSize="14px">Curved text generator</Text>
            <Text fontSize="14px" mt="3">
              Photo effects
            </Text>
            <Text fontSize="14px" mt="3">
              Image enhancer
            </Text>
            <Text fontSize="14px" mt="3">
              Add frames to photos
            </Text>
            <Text fontSize="14px" mt="3">
              Add text to photos
            </Text>
            <Text fontSize="14px" mt="3">
              Online video recorder
            </Text>
            <Text fontSize="14px" mt="3">
              See more features
            </Text>
          </Box>
          <Box>
            <Text fontSize="18px" fontWeight="bold" mb="5">
              Explore
            </Text>

            <Text fontSize="14px">Font pairing</Text>
            <Text fontSize="14px" mt="3">
              Custom prints
            </Text>
            <Text fontSize="14px" mt="3">
              Colors
            </Text>
            <Text fontSize="14px" mt="3">
              Blog
            </Text>
            <Text fontSize="14px" mt="3">
              Apps
            </Text>
          </Box>

          <Box>
            <Text fontSize="18px" fontWeight="bold" mb="5">
              Community
            </Text>

            <Text fontSize="14px">Online communities</Text>
            <Text fontSize="14px" mt="3">
              Creators
            </Text>
            <Text fontSize="14px" mt="3">
              Creators
            </Text>
            <Text fontSize="14px" mt="3">
              Canva Represents Fund
            </Text>
            <Text fontSize="14px" mt="3">
              Developers
            </Text>
            <Text fontSize="14px" mt="3">
              Partnerships
            </Text>
            <Text fontSize="14px" mt="3">
              Affiliates program
            </Text>
          </Box>
          <Box>
            <Text fontSize="18px" fontWeight="bold" mb="5">
              Download
            </Text>
            <Text fontSize="14px">iOS</Text>
            <Text fontSize="14px" mt="3">
              Android
            </Text>
            <Text fontSize="14px" mt="3">
              Windows
            </Text>
            <Text fontSize="14px" mt="3">
              Mac
            </Text>
          </Box>
          <Box>
            <Text fontSize="18px" fontWeight="bold" mb="5">
              Company
            </Text>
            <Text fontSize="14px">About</Text>
            <Text fontSize="14px" mt="3">
              Newsroom
            </Text>
            <Text fontSize="14px" mt="3">
              Careers
            </Text>
            <Text fontSize="14px" mt="3">
              Terms and Privacy
            </Text>
            <Text fontSize="14px" mt="3">
              Contacts
            </Text>
          </Box>
        </SimpleGrid>
      </Box>

      <Flex
        alignItems="center"
        w="90%"
        m="auto"
        py="5"
        justifyContent="space-between"
        flexDirection={{ base: "column", md: "row" }}
        gap="5"
      >
        <Box fontSize="14px">
          <Select border="1px solid #cecece">
            <option>English</option>
            <option>Hindi</option>
            <option>Marathi</option>
          </Select>
        </Box>
        <Box textAlign="center">
          <Text color="grey" fontSize="13px">
            © 2023 All Rights Reserved, Canva®
          </Text>
          <Text fontSize="14px" mt="1">
            Privacy policy | Terms
          </Text>
        </Box>
        <Flex alignItems="center" gap="4" fontSize="19px">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-pinterest"></i>
        </Flex>
      </Flex>
    </>
  );
};

export default Footer;
