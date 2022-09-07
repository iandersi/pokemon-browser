import React, {useEffect, useState} from 'react';
import './css/App.css';
import axios from "axios";
import ListPokemon from "./components/ListPokemon";
import {PokemonList, PokemonStats} from "./pokeApiTypes";
import {Button} from "react-bootstrap";
import LoadingSpinner from "./components/LoadingSpinner";
import PokemonStatsModal from "./components/PokemonStatsModal";
import {PokeApiBaseUrl} from "./config";

function App() {
    const [showLoadingSpinner, setShowLoadingSpinner] = useState(false);
    const [pokemons, setPokemons] = useState<PokemonList>({
        count: 0,
        next: null,
        previous: null,
        results: []
    });
    const [pokemonStats, setPokemonStats] = useState<PokemonStats>();

    let nextUrl = pokemons.next;
    let previousUrl = pokemons.previous;

    console.log(pokemons);

    useEffect(() => {
        getPokemonListData(`${PokeApiBaseUrl}/api/v2/pokemon/?limit=24&offset=0`);
    }, []);


    function scrollUp(){
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    function getPokemonStatsData(url: string | null){
        if (url === null) return;
        axios.get<PokemonStats>(url).then(response => {
            setPokemonStats(response.data);
        }).catch(reason => {
            console.error('Failed to get pokemon stats batch.', reason);
        })
    }

    function getPokemonListData(url: string | null){
        if (url === null) return;
        if (showLoadingSpinner) return;
        setShowLoadingSpinner(true);
        axios.get<PokemonList>(url).then(response => {
            setPokemons((response.data));
        }).catch(reason => {
            console.error('Failed to get pokemon batch.', reason);
        }).finally(()=> {
            setShowLoadingSpinner(false);
        })
    }


    return (
        <>
            <div className="prev-and-next-buttons">
                <Button variant="success" onClick={() => getPokemonListData(previousUrl)}>Previous</Button>
                <Button variant="success" onClick={() => getPokemonListData(nextUrl)}>Next</Button>
            </div>
            <div className="container">
                {showLoadingSpinner && <LoadingSpinner/>}
                {!showLoadingSpinner && <ListPokemon pokemons={pokemons} onStatsClick={getPokemonStatsData}/>}
            </div>
            <div className="prev-and-next-buttons">
                <Button variant="success" onClick={() => getPokemonListData(previousUrl)}>Previous</Button>
                <Button variant="success"  onClick={()=> scrollUp()}>Top</Button>
                <Button variant="success" onClick={() => getPokemonListData(nextUrl)}>Next</Button>
            </div>
            <PokemonStatsModal pokemon={pokemonStats} handleClose={()=>setPokemonStats(undefined)}/>
        </>
    );
}

export default App;
