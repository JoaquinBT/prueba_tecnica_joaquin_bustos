import { useEffect, useState } from 'react'
import './App.css'
import { Box, Container, Grid } from '@mui/material';
import Personaje from './components/Personaje';

function App() {
  const [personajes, setPersonajes] = useState([]);


  useEffect(()=>{
    const getPersonajes = async ()=>{
      const response  = await fetch('https://rickandmortyapi.com/api/character');
      const listaPersonajes = await response.json();
      const {results} = listaPersonajes;
      //console.log(results);
      
      

      setPersonajes(results);
    }
    getPersonajes();

  },[]);

  return (
    <>
      <div>
        <h1>Personajes</h1>
        <Container maxWidth="md">
          <Box padding={2}>
            <Grid container spacing={2} >
              {
                personajes.map(personaje=>{
                  return(
                    <Grid item key={personaje.id} xs={12} sm={6} md={4}>
                        <div >
                          <img src={personaje.image} alt={personaje.name}/>
                          <br></br>
                          <span>Nombre: {personaje.name}</span>
                          <Personaje estado={personaje.status} especie={personaje.species} genero={personaje.gender} ubicacion={personaje.location.name}/>
                        </div>
                    </Grid>    
                )
                })
              }
            </Grid>
          </Box>
        </Container>
      </div>
        
    </>
  )
}

export default App
