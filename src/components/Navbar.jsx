import { Avatar, Flex, Box, Heading, Text, Button, Spacer, HStack, useToast } from '@chakra-ui/react'
import { Icon, UnlockIcon } from '@chakra-ui/icons'

import { Bars4Icon } from '@heroicons/react/24/solid'

import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const setLogin = () => {
    setIsLoggedIn(true);
  }

  const toast = useToast();

  const showToast = () => {
    toast({
      title: 'Logged out',
      description: 'Successfully logged out',
      duration: 5000,
      isClosable: true,
      status: 'success',
      position: 'top',
      icon: <UnlockIcon />
    })
  }

  const showLogin = () => {
    navigate("/login");
  }
  
  return (
    <Flex as="nav" p="10px" mb="40px" alignItems="center">

      <Heading as="h1">Byte Tasks</Heading>
      <Spacer />

      { isLoggedIn ? 
      <HStack spacing="20px">
        <Avatar name="mario" src="/img/mario.png" />
        <Text>mario@netninja.dev</Text>
        <Button colorScheme="blue" onClick={showToast}>Logout</Button> 
      </HStack>
       :
      <Button colorScheme="blue" onClick={showLogin}>Login</Button>
      }
    </Flex>
  )
}
