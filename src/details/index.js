import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useNavigate, useParams } from "react-router";
import Modal from '@mui/material/Modal';

const style = {
    position:  'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width:500,
    maxHeight: '90%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function Details( {pokemons , typesTrad ,t}) {

    const [open, setOpen] = React.useState(true);
    const { id } = useParams();
    const navigate = useNavigate();
    const pokemon = pokemons[id-1];
    const lang = t;

    const typeData = pokemon.types.map((type)=>{return type});
    const pokemonWeight = hectoToKg(pokemon.weight)
    const pokemonHeight = decimetreToMetre(pokemon.height)

    function handleHome() {
        navigate("/");
    }

    function handleWindowLocationClose() {
        handleHome();
        setOpen(false)
    };

    function hectoToKg(hecto){
        return hecto/10
    }

    function decimetreToMetre(decimetre){
        return decimetre/10
    }

    return (
        <div>

            <Modal
                open={open}
                onClose={handleWindowLocationClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} >
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        N°{pokemon.id} {pokemon.names[lang]}
                    </Typography>
                    <img src={pokemon.image} alt="" style={{width:"20%"}}/>
                    <Typography id="modal-modal-description" sx={{ mt: 1, display: 'flex'}} gap={"25px"}>
                        {pokemon.types.map((type)=>{return <div key={type} className={"type-"+ type}>{typesTrad[type][lang]}</div>})}
                    </Typography>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Poids : {pokemonWeight} kg Taille : {pokemonHeight} m <br/> Attaques:
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2, display:"flex", flexWrap:"wrap", gap:"5px"}}>
                        {pokemon.moves.map((move)=>{return <Typography key={move} id="modal-modal-description" fontFamily={['monospace']} sx={{ mt: 2 }}>{move}</Typography>})}
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}