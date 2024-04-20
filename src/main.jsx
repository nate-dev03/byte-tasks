import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "@fontsource/outfit"

import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <App style={ { fontFamily: 'Outfit' } }  />
    </ChakraProvider>
  </React.StrictMode>,
)
