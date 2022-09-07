import React, {Dispatch} from "react";
import {Button, Modal} from "react-bootstrap";
import {PokemonList, PokemonStats} from "../pokeApiTypes";

type PokemonStatsModalProps = {
    pokemon: PokemonStats | undefined,
    handleClose: ()=>void
}

export default function PokemonStatsModal({pokemon, handleClose}: PokemonStatsModalProps) {

    let pokemonAbilities = pokemon?.abilities.map(ability => <div className="ability">{ability.ability.name}</div>)

    return (
        <>
            <Modal show={!!pokemon} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>{pokemon?.name.toUpperCase()}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>Base experience: {pokemon?.base_experience}</div>
                    <div>Height: {pokemon?.height}</div>
                    <div>Weight: {pokemon?.weight}</div>
                    Abilities:{pokemonAbilities}
                </Modal.Body>
                <Modal.Footer><Button variant="success" onClick={handleClose}>Close</Button></Modal.Footer>
            </Modal>
        </>
    );
}