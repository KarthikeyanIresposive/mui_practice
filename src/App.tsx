import React from 'react';
import Header from './components/Header';
import Productpage from './components/Productpage';
import Footer from './components/Footer';
import { ThemeProvider, createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#000', // Change this to your desired primary color
    },
    secondary: {
      main: '#D4E2D4', // Change this to your desired secondary color
    },

    // Add more palette options (e.g., error, warning, etc.) as needed
  },
  shape:{
    borderRadius:8
  },
  typography: {
   h6:{
    color:'#FFCACC',
    fontWeight:'bold'
  }
},


});

function App() {
  return (
    <div className="App">
    <Header />
    <Productpage />
    <Footer />
     
    </div>
  );
}

export default App;
