import React from 'react';
import {
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Box,
} from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';
export const HeadLine = () => {
  return (
    <Box
      p={{ base: '20px', md: '50px' }}
      bg="var(--bgPrimary)"
      paddingTop="100px"
      color="white"
      mt="auto"
      borderRadius="12px"
    >
      <Text fontSize="4xl" as="b">
        Marketplace
      </Text>
      <Text mt={2}>
        Browse through more than 50k NFTs on the NFT Marketplace.
      </Text>
    </Box>
  );
};
