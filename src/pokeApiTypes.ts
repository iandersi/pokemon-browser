export type PokemonListItem = {
    name: string,
    url: string
}

export type PokemonList = {
    count: number,
    next: string | null,
    previous: string | null,
    results: PokemonListItem[]
}

export type PokemonStats = {
    id: number,
    name: string,
    base_experience: number,
    height: number,
    weight: number,
    abilities: PokemonAbilities[];
}

export type PokemonAbilities = {
    ability: PokemonAbility[];
}

export type PokemonAbility = {
    name: string
}