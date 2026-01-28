import "./pokemonCardComponent.css"
import { Col } from "react-bootstrap"
import { getPokemonDetails } from "../../services/pokeApiSerive"
import { formatPokedexPosition } from "../../services/helperService"
import { useState, useEffect } from "react";

function PokemonCardComponent({ name, url }) {
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        // Traemos todos los detalles del pokemon una sola vez
        getPokemonDetails(url).then((response) => {
            setPokemon(response);
        });
    }, [url]);

    if (!pokemon) return null;

    // Extraemos datos para la carta
    const mainType = pokemon.types[0].type.name;
    const hp = pokemon.stats[0].base_stat;
    const pokedexPosition = formatPokedexPosition(pokemon.id);
    const image = pokemon.sprites.other['official-artwork'].front_default;

    return (
        <Col lg={4} md={6} className="mb-4">
            {/* Clase dinámica para el color según el tipo */}
            <div className={`pokemon-card-main type-${mainType}`}>
                <div className="pokemon-card-container">
                    
                    <div className="pokemon-card-header">
                        <h4 className="pokemon-name">{name}</h4>
                        <div className="pokemon-stats">
                            <span className="hp-label">HP {hp}</span>
                            <span className="pokedex-id">#{pokedexPosition}</span>
                        </div>
                    </div>

                    <div className="pokemon-card-image-box">
                        <img src={image} alt={name} className="pokemon-img" />
                    </div>

                    <div className="pokemon-card-abilities">
                        <div className="ability-info">
                            <small className="ability-label">HABILIDAD PRINCIPAL</small>
                            <div className="ability-row">
                                <span className="ability-name">{pokemon.abilities[0]?.ability.name || "N/A"}</span>
                                <span className="ability-damage">40</span>
                            </div>
                        </div>
                        <p className="pokemon-desc">
                            Este Pokémon de tipo {mainType} es conocido por su gran resistencia en combate.
                        </p>
                    </div>

                </div>
            </div>
        </Col>
    );
}

export default PokemonCardComponent;