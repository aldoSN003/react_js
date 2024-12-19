// eslint-disable-next-line react/prop-types
export function PokeCard({ imageUrl, id, name, type1, type2, url1, url2 }) {
    const typeColors = {
        "normal": "rgba(168, 167, 122, 0.35)",
        "fire": "rgba(240, 128, 48, 0.45)",
        "water": "rgba(104, 144, 240, 0.55)",
        "electric": "rgba(248, 208, 48, 0.45)",
        "grass": "rgba(120, 200, 80, 0.55)",
        "ice": "rgba(152, 216, 216, 0.55)",
        "fighting": "rgba(192, 48, 40, 0.55)",
        "poison": "rgba(160, 64, 160, 0.55)",
        "ground": "rgba(224, 192, 104, 0.55)",
        "flying": "rgba(168, 144, 240, 0.55)",
        "psychic": "rgba(248, 88, 136, 0.55)",
        "bug": "rgba(168, 184, 32, 0.55)",
        "rock": "rgba(184, 160, 56, 0.55)",
        "ghost": "rgba(112, 88, 152, 0.55)",
        "dragon": "rgba(112, 56, 248, 0.55)",
        "dark": "rgba(112, 88, 72, 0.55)",
        "steel": "rgba(184, 184, 208, 0.55)",
        "fairy": "rgba(240, 182, 188, 0.55)",
        "stellar": "rgba(138, 43, 226, 0.55)"
    };


    const cardStyle = {
        backgroundColor: typeColors[type1] || "#f0f0f0" // default to light gray if type1 is not found
    };

    return (
        <div className="card mt-5 mx-5 shadow-lg" style={cardStyle}>
            <img
                src={imageUrl}
                alt={name}
                className="poke-img"
            />
            <div className="">
                <h2>{name}</h2>
                <h3>{id}</h3>
                <div className="flex items-center justify-center gap-5 mb-5">
                    <img
                        src={url1}
                        alt={type1}
                        className="object-contain w-1/3 "
                    />
                    <img
                        src={url2}
                        alt={type2}
                        className="object-contain w-1/3 "
                    />
                </div>
                <button>View details</button>
            </div>
        </div>
    );
}
