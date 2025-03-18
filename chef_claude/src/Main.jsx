import TextField from "./TextField";
import Button from "./Button";
import { ToastContainer, toast } from 'react-toastify';
import Form from "./Form.jsx";
import {useState} from "react";

export default function Main() {
    const notify = (ingredient) => toast(`Added: ${ingredient}`);

    const [ingredients,setIngredients] =  useState([
        "Chicken", "Oregano", "Tomatoes"
    ]);

    const ingredientsListItems = ingredients.map((ingredient, index) => (
        <li key={index}>{ingredient}</li>
    ));


    function handleSubmit(formData) {


        const newIngredient = formData.get("ingredient");
        setIngredients(prevIngredients =>[...prevIngredients, newIngredient]);
        notify(newIngredient);





    }

// Show toast message

    return (<main className="pt-5 px-5 ">

<Form className=""/>




        <form action={handleSubmit} className="flex flex-col sm:flex-row justify-center items-center gap-3  ">
            <TextField type="text" className={""} placeholder="e.g. oregano" name="ingredient"/>
            <Button children="+ Add ingredient" className=""/>
        </form>

        <ul className="list-disc px-25 text-center mt-9">
            {ingredientsListItems}
        </ul>


        <ToastContainer autoClose={2000}/>
    </main>);
}


