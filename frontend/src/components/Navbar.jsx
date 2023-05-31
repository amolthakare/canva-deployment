import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Image,
  Text,
  useDisclosure,
  Stack,
  Input,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import logo from "../assets/canva-logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        bg="#ffffff"
        px={{ base: "2", md: "8" }}
        boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px"
        position="sticky"
        top="0"
      >
        <Flex h={"72px"} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            mr="2"
            fontSize="20"
            onClick={isOpen ? onClose : onOpen}
            variant="ghost"
            _hover={{ variant: "ghost" }}
          />
          <HStack spacing={10} alignItems={"center"} w="100%">

            <Box>
              <Link to="/">
                <Image w={{ base: "70px", md: "80px" }} src={logo} alt="logo" />
              </Link>
            </Box>

            <HStack
              as={"nav"}
              spacing={8}
              display={{ base: "none", md: "none", lg: "flex" }}
              alignItems="center"
              fontSize="15px"
            >
              <Text>Design spotlight</Text>
              <Text>Business</Text>
              <Text>Education</Text>
              <Text>Plans and pricing</Text>
              <Text>Learn</Text>
            </HStack>
          </HStack>

          <Flex alignItems={"center"} gap="5" w="100%" justifyContent="right">
            <Input
              placeholder="Search Anything!"
              fontSize="14px"
              display={{ base: "none", md: "none", lg: "flex" }}
              w="60%"
              border="1px solid #989fa4"
              _hover={{ border: "1px solid #989fa4" }}
              borderRadius="4"
            />
            <Text>
              <i className="fa-solid fa-magnifying-glass"></i>
            </Text>
            <Button
              borderRadius="5"
              bg={{ base: "#8b3dff", md: "#e8e8e7" }}
              color={{ base: "#ffffff", md: "black" }}
              fontSize="15px"
              fontWeight="normal"
            >
              Log in
            </Button>

            <Button
              display={{ base: "none", md: "flex", lg: "flex" }}
              borderRadius="5"
              bg="#8b3dff"
              _hover={{ bg: "#7734dc" }}
              color="#ffffff"
              fontSize="15px"
              fontWeight="normal"
            >
              Sign Up
            </Button>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb="8" pt="5" pl="5" display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <Text>Design spotlight</Text>
              <Text>Business</Text>
              <Text>Education</Text>
              <Text>Plans and pricing</Text>
              <Text>Learn</Text>

              <Button
                borderRadius="5"
                bg="#8b3dff"
                _hover={{ bg: "#7734dc" }}
                color="#ffffff"
                fontSize="15px"
                fontWeight="normal"
              >
                Sign Up
              </Button>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
