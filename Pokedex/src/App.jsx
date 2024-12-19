import './App.css';
import './index.css';
import {useEffect, useState} from 'react';
import {PokeCard} from './components/Card.jsx';

function App() {
    const [pokemonData, setPokemonData] = useState([]);
    const [loading, setLoading] = useState(true); // Track loading state

    useEffect(() => {
        // First, fetch the list of Pokémon
        const fetchData = async () => {
            const base_url = "https://pokeapi.co/api/v2/";
            const response = await fetch(base_url + 'pokemon?limit=15&offset=22');
            const data = await response.json();

            // Once we have the list of Pokémon, fetch additional data for each Pokémon
            const pokemonDetails = await Promise.all(
                data.results.map(async (pokemon) => {
                    const pokemonDetailResponse = await fetch(pokemon.url);
                    const pokemonDetailData = await pokemonDetailResponse.json();

                    // Fetch type data for each Pokémon's types (type1 and type2)
                    const type1_url = pokemonDetailData.types[0]?.type.url
                        ? await fetch(pokemonDetailData.types[0].type.url).then(res => res.json())
                        : null;

                    const type2_url = pokemonDetailData.types[1]?.type.url
                        ? await fetch(pokemonDetailData.types[1].type.url).then(res => res.json())
                        : null;

                    return {
                        name: pokemon.name,
                        id: pokemonDetailData.id,
                        imageUrl: pokemonDetailData.sprites.other.showdown.front_default,
                        type1: pokemonDetailData.types[0]?.type.name,
                        type2: pokemonDetailData.types[1]?.type.name || null, // Type2 can be null
                        test: pokemonDetailData.types[0]?.type.url,
                        url1: type1_url?.sprites?.['generation-vii']?.['lets-go-pikachu-lets-go-eevee']?.name_icon || null,
                        url2: type2_url?.sprites?.['generation-vii']?.['lets-go-pikachu-lets-go-eevee']?.name_icon || null,
                    };
                })
            );

            setPokemonData(pokemonDetails); // Set the fetched details in state
            setLoading(false); // Set loading to false when the data is ready
        };

        fetchData();
    }, []);


    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
            {/* Conditionally render data or loading state */}
            {loading ? (
                <p>Loading...</p>
            ) : (
                pokemonData.map((pokemon, index) => (
                    <PokeCard
                        typeImages={pokemon.typeImages}
                        key={index}
                        imageUrl={pokemon.imageUrl}
                        name={pokemon.name}
                        id={`#${pokemon.id}`}
                        type1={pokemon.type1}
                        type2={pokemon.type2}
                        url1={pokemon.url1}
                        url2={pokemon.url2}
                    />
                ))
            )}
        </div>
    );
}

export default App;
