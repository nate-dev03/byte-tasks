import {
  Box,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Textarea,
  Checkbox,
  Button,
  Link
} from '@chakra-ui/react';
 
import { Form, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import users from '../../data/users.json';


export default function Login({ email, setEmail }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();


  const authenticate = (email, password) => {
    for (const user in users) {
      if (user.email == email && user.password == password) {
        console.log(user);
        return true;
      }
    }
    return false;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await authenticate(email, password); // Assuming you have the authenticate function
      navigate('/');
    } catch {
      setError('Invalid username or password');
    }
  };

  return (
    <Box maxW="300px">
      <Form method="post" action="/login" onSubmit={handleSubmit}>
        <FormControl isRequired mb="40px">
          <FormLabel>Email:</FormLabel>
          <Input 
            type="text"
            value={email}
            onChange= {(e) => setEmail(e.target.value)}
            name="email"
          />
        </FormControl>

        <FormControl isRequired mb="40px">
          <FormLabel>Password:</FormLabel>
          <Input
            type="password" 
            value={password}
            onChange= {(e) => setPassword(e.target.value)}
            name="password"
          />
          <Link>Forgot Password?</Link>
        </FormControl>

        <FormControl display="flex" alignItems="center" mb="40px">
          <Checkbox
             name="remember"
             size="lg"
             colorScheme="blue"
          />
          <FormLabel mb="0" ml="10px">Remember Me?</FormLabel>
        </FormControl>

        {error && <p style={{ color: 'red' }}>{error}</p>}
        <Button colorScheme="blue" type="submit">Sign In</Button>
      </Form>
    </Box>
  )
}
