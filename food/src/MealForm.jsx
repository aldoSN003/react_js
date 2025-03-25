import Box from '@mui/material/Box';
import {RichTreeView} from '@mui/x-tree-view/RichTreeView';
import {useState} from "react";

export default function MealForm() {
    const [tipoPlato, setTipoPlato] = useState("");
    const [nombrePlato, setNombrePlato] = useState("");
    const [ingrediente, setIngrediente] = useState("");
    const [listIngredients, setListIngredients] = useState([]);

    const ingredientsListItems = listIngredients.map((ingredient, index) => (
        <li key={index}>{ingredient}</li>
    ));

    const MUI_X_PRODUCTS = [
        {
            id: 'grid',
            label: 'Data Grid',
            fontWeight: 'bold',
            fontStyle: "normal",
            children: [
                {id: 'grid-community', label: '@mui/x-data-grid'},
                {id: 'grid-pro', label: '@mui/x-data-grid-pro'},
                {id: 'grid-premium', label: '@mui/x-data-grid-premium'},
            ],
        },
        {
            id: 'pickers',
            label: 'Date and Time Pickers',
            children: [
                {id: 'pickers-community', label: '@mui/x-date-pickers'},
                {id: 'pickers-pro', label: '@mui/x-date-pickers-pro'},
            ],
        },
        {
            id: 'charts',
            label: 'Charts',
            children: [{id: 'charts-community', label: '@mui/x-charts'}],
        },
        {
            id: 'tree-view',
            label: 'Tree View',
            children: [{id: 'tree-view-community', label: '@mui/x-tree-view'}],
        },
    ];

    const signUp = (formData) => {
        const data = {
            "tipo-plato": formData.get("tipo-plato"),
            "nombre-plato": formData.get("nombre-plato"),
            "ingredientes": listIngredients,
        };
        console.log(JSON.stringify(data, null, 2));

        setTipoPlato("");
        setNombrePlato("");
        setListIngredients([]);
        setIngrediente(""); // Clear the ingredient input if neede
    };

    const handleAddIngredient = () => {
        if (ingrediente.trim() !== "") {
            setListIngredients(prevIngredients => [...prevIngredients, ingrediente]);
            setIngrediente(""); // Clear the input field after adding
        }
    };

    return (
        <div className="bg-gray-100 dark:bg-gray-900 ">
            <section className="flex items-center justify-center min-h-screen p-4">
                <div className="w-full max-w-lg bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
                    <h1 className="text-2xl font-bold text-gray-700 dark:text-gray-200 mb-4">Signup Form</h1>
                    <form action={signUp} className="space-y-4">
                        <div>
                            <label htmlFor="text" className="block font-medium text-gray-600 dark:text-gray-300">Tipo de
                                plato</label>
                            <select
                                id="tipo-plato"
                                name="tipo-plato"
                                defaultValue=""
                                onChange={(e) => setTipoPlato(e.target.value)}
                                required
                                className="w-full p-2 border rounded-lg focus:ring focus:ring-indigo-300 dark:bg-gray-700 dark:text-white">
                                <option value="" disabled>Escoge una opción</option>
                                {["Desayuno", "Comida", "Cena", "Colación"].map(tipo => (
                                    <option key={tipo} value={tipo.toLowerCase()}>{tipo}</option>
                                ))}
                            </select>
                        </div>
                        {tipoPlato && (
                            <div>
                                <label htmlFor="text" className="block font-medium text-gray-600 dark:text-gray-300">Nombre
                                    de plato</label>
                                <input id="nombre-plato"
                                       type="text"
                                       name="nombre-plato" defaultValue=""
                                       placeholder="ejemplo: Huevo a la mexicana"
                                       required
                                       onChange={(e) => setNombrePlato(e.target.value)}
                                       className="w-full p-2 border rounded-lg focus:ring focus:ring-indigo-300 dark:bg-gray-700 dark:text-white"/>
                            </div>
                        )}
                        {nombrePlato.trim() !== "" && (
                            <div>
                                <label htmlFor="text"
                                       className="block font-medium text-gray-600 dark:text-gray-300">Ingrediente:</label>
                                <input id="ingrediente"
                                       type="text"
                                       name="ingrediente"
                                       value={ingrediente} // Use value instead of defaultValue
                                       placeholder="ejemplo: jitomate"
                                       onChange={(e) => setIngrediente(e.target.value)}

                                       className="w-full p-2 border rounded-lg focus:ring focus:ring-indigo-300 dark:bg-gray-700 dark:text-white"/>
                            </div>
                        )}
                        {ingrediente.trim() !== "" && (
                            <button type="button" onClick={handleAddIngredient}
                                    className="w-full mt-5 bg-gray-500 text-white p-2 rounded-lg hover:bg-gray-600 transition cursor-pointer">Añadir
                                ingrediente
                            </button>
                        )}
                        <ul className="list-disc px-25 mt-9">
                            {ingredientsListItems}
                        </ul>
                        <button type="submit"
                                onSubmit={() =>
                                    setTipoPlato("")
                                    }
                                className="w-full bg-indigo-500 text-white p-2 rounded-lg hover:bg-indigo-600 transition">Submit
                        </button>
                    </form>
                </div>
            </section>
            <section className="flex flex-col items-center ">
                <Box sx={{width: {xs: '95%', sm: '80%', md: '60%'}}}>
                    <RichTreeView items={MUI_X_PRODUCTS}/>
                </Box>
            </section>
        </div>
    );
}