import {PokemonList} from "../pokeApiTypes";
import {Button, Card} from "react-bootstrap";

type ListPokemonProps = {
    pokemons: PokemonList | undefined,
    onStatsClick: (url: string | null)=>void
}

export default function ListPokemon({pokemons, onStatsClick}: ListPokemonProps) {

    function getPokemonNumber(url: string) {
        return url.split('/')[6];
    }

    return (
        <>
            {pokemons?.results.map(pokemon => {
                return (
                    <div className="pokemonList">
                        <div className="card-content">
                            <Card>{pokemon.name.toUpperCase()}</Card>
                            <Card.Img src={`images/${getPokemonNumber(pokemon.url)}.png`}/>
                            <Button onClick={()=>onStatsClick(pokemon.url)}>Stats</Button>
                        </div>
                    </div>
                )
            })}
        </>
    );
}