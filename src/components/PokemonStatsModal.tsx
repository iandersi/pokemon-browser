import React, {Dispatch} from "react";
import {Button, Modal} from "react-bootstrap";
import {PokemonList, PokemonStats} from "../pokeApiTypes";

type PokemonStatsModalProps = {
    pokemon: PokemonStats | undefined,
    handleClose: ()=>void
}

export default function PokemonStatsModal({pokemon, handleClose}: PokemonStatsModalProps) {

    function getPokemonNumber(url: string) {
        return url.split('/')[6];
    }

    return (
        <>
            <Modal show={!!pokemon} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>{pokemon?.name.toUpperCase()}</Modal.Title>
                </Modal.Header>
                <Modal.Body>Body</Modal.Body>
                <Modal.Footer><Button onClick={handleClose}>Close</Button></Modal.Footer>
            </Modal>
        </>
    );
}