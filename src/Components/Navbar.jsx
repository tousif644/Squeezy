import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Text,
  useDisclosure,
  Button,
  Stack,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

function Navbar() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { colormode, toggleColoMode } = useColorMode();
  return (
    <Box
      boxShadow="md"
      p="2"
      rounded="md"
      bg="white"
      px={4}
    >
      <Flex h={16} alignItems="center" justifyConten="space-between">
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack>
          <Link as={ReactLink} to="/">
            <Flex alignItems="center">
              <Text fontWeight={600} fontSize={36} fontFamily={"Poppins"}>
                Squeezy.
              </Text>
            </Flex>
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
}

export default Navbar;
