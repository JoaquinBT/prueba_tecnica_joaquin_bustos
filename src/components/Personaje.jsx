import { useState } from 'react';
import { Button, Modal, Box, Typography } from "@mui/material";

function Personaje({ estado, especie, genero, ubicacion }) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
        console.log(estado)
        console.log(ubicacion)
        console.log(especie);
        console.log(genero);
        console.log(ubicacion)
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button onClick={handleOpen}>Ver Detalles</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    border: '2px solid #000',
                    boxShadow: 24,
                    p: 4,
                }}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Detalles del Personaje
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Estado: {estado}<br />
                        Especie: {especie}<br />
                        Género: {genero}<br />
                        Ubicación: {ubicacion}
                    </Typography>
                    <Button onClick={handleClose}>{especie}</Button>
                </Box>
            </Modal>
        </div>
    );
}

export default Personaje;


  