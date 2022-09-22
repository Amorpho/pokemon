import './App.css';
import {Button} from "react-bootstrap";
import {useEffect, useState} from "react";
import SearchPokemon from "./SearchPokemon/SearchPokemon";
import Pokemon from "./Pokemon/Pokemon";

const App = () => {


    const [pokemon, setPokemon] = useState()
    const [namePokemon, setNamePokemon] = useState("pikachu");


    useEffect(() => {
        requestPokemon();
    }, []);


    const requestPokemon = async () => {
        const res = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${namePokemon}`
        );
        const json = await res.json();
        setPokemon(json);
        console.log(json)
    }


    return (
        <div>
           <header>
               <h1 style={{fontFamily:'Pokemon-hollow', textAlign:'center'}} >PoKeMoN</h1>
           </header>
            <div>
                <div className="container">
                    <SearchPokemon
                        onClick={requestPokemon}
                        inputValue={(e) => setNamePokemon(e.target.value)}/>
                </div>
                {
                    pokemon ? <Pokemon pokemon={pokemon}/> : null
                }
            </div>

        </div>
    );
}

export default App;
