import { ViewIcon, EditIcon } from '@chakra-ui/icons';
import {
  Flex,
  Box,
  SimpleGrid,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Button,
  HStack,
  Divider,

  Avatar,
} from '@chakra-ui/react';



import { useLoaderData } from 'react-router-dom';

export default function Dashboard() {
  const tasks = useLoaderData()['tasks'];
  return (
    <SimpleGrid spacing={10} minChildWidth="300px">
      {tasks && tasks.map(task => (
        <Card key={task.id} borderTop="8px" borderColor="blue.400" bg="white">
          <CardHeader>
            <Flex>
              <Avatar src={task.img} />

              <Box ml="10px" mt="9px">
                <Heading as="h3" size="sm">{task.title}</Heading>
                <Text>by {task.author}</Text>
              </Box>
            </Flex>
          </CardHeader>

          <CardBody color="gray.500">
            <Text>{task.description}</Text>
          </CardBody>

          <Divider borderColor="gray.200" />

          <CardFooter>
            <HStack>
              <Button variant="ghost" leftIcon={<ViewIcon />}>Watch</Button>
              <Button variant="ghost" leftIcon={<EditIcon />}>Comment</Button>
            </HStack>
          </CardFooter>
        </Card>
      ))}
    </SimpleGrid>
  )
}


export const tasksLoader = async () => {
  const res = await fetch('https://nate-dev03.github.io/byte-tasks-server/db.json');
  return res.json();
}
