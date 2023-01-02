import React, { useMemo } from 'react';
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Center,
} from '@chakra-ui/react';
// import {CloseIcon, MenuIcon} from 'react-icons/fa'
import { BiMenu, BiX } from 'react-icons/bi';
import Logo from '../logo';
import { LoginButton } from '../login-button';
import { Brand } from '../brand';
import { useWindowScroll } from 'react-use';
import { MAX_WIDTH_CONTENT } from '../../constants';

export const NavBar = (props: any) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <Brand />

      <Stack
        spacing={8}
        align="center"
        justify={['center', 'space-between', 'flex-end', 'flex-end']}
        direction={['column', 'row', 'row', 'row']}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem to="/marketplace">Marketplace</MenuItem>
        <MenuItem to="/ranking">Ranking</MenuItem>
        <MenuItem to="/wallet">Connect Wallet</MenuItem>
        <LoginButton />
        <MenuToggle toggle={toggle} isOpen={isOpen} />
      </Stack>
    </NavBarContainer>
  );
};

const NavBarContainer = ({ children, ...props }: any) => {
  const headerStyle = useMemo(() => {
    return {
      bg: '#aaa5',
      boxShadow: '0 10px 10px #0001',
      backdropFilter: 'auto',
      backdropBlur: '20px',
    };
  }, []);
  const { y } = useWindowScroll();
  const targetPositionY = useBreakpointValue<number>({
    base: 50,
    md: 80,
  })!;

  return (
    <Center
      position="fixed"
      w="100%"
      {...(y > targetPositionY ? headerStyle : {})}
    >
      <Flex
        as="header"
        justify="space-between"
        wrap="wrap"
        w="100%"
        zIndex={200}
        p="15px"
        color="white"
        {...props}
        maxW={MAX_WIDTH_CONTENT}
      >
        {children}
      </Flex>
    </Center>
  );
};

const MenuItem = ({ children, isLast, to = '/', ...rest }: any) => {
  return (
    <Link href={to}>
      <Text
        fontWeight="600"
        display={{ sm: 'none', base: 'none', md: 'block' }}
      >
        {children}
      </Text>
    </Link>
  );
};

const MenuToggle = ({ toggle, isOpen }: any) => {
  return (
    <Box display={{ base: 'block', md: 'none' }} onClick={toggle}>
      {isOpen ? <BiMenu size={20} /> : <BiX size={20} />}
    </Box>
  );
};
