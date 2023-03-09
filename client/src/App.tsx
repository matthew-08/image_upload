import { Button, Card, Flex, Heading, Input, Text } from '@chakra-ui/react';
import './global.css';
import { useState } from 'react';
import useMutation from './hooks/useMutation';

const validFileTypes = ['image/jpg', 'image/jpeg', 'image/png'];

function App() {
  const { mutate, loading } = useMutation({ url: '/images' });
  const [error, setError] = useState('');
  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    const file = e.target.files[0];
    if (!validFileTypes.find((type) => file.type === type)) {
      setError('Invalid file type');
    } else {
      const formData = new FormData();
      formData.append('image', file);
    }
  };
  return (
    <Flex minH="100vh" minW="100%" align="center" flexDir="column">
      <Heading mt="4rem" mb="2rem">
        Image uploading!
      </Heading>
      <Text textAlign="center" maxW="70ch">
        Welcome to my image uploading app.
        <br />
        This app was created in order to further my understanding of uploading,
        displaying, and storing images with React, NodeJS, and AWS S3.
      </Text>
      <Flex mt="3rem">
        <Input type="file" hidden id="imageInput" onChange={handleUpload} />
        <Button
          as="label"
          htmlFor="imageInput"
          size="lg"
          variant="solid"
          colorScheme="cyan"
          cursor="pointer"
        >
          Upload
        </Button>
        <Text>{error && error}</Text>
      </Flex>
    </Flex>
  );
}

export default App;
