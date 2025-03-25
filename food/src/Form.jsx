export default function Form() {
    const signUp = (formData) => {
        const data = {
            email: formData.get("email"),
            password: formData.get("password"),
            description: formData.get("description"),
            status: formData.get("status"),
            diet: formData.getAll("diet"),
            favColor: formData.get("favcolor"),
        };
        console.log(data);
    };

    return (
        <section className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
            <div className="w-full max-w-lg bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
                <h1 className="text-2xl font-bold text-gray-700 dark:text-gray-200 mb-4">Signup Form</h1>
                <form action={signUp} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block font-medium text-gray-600 dark:text-gray-300">Email:</label>
                        <input id="email" type="email" name="email" defaultValue="joe@schmoe.com" placeholder="joe@schmoe.com" className="w-full p-2 border rounded-lg focus:ring focus:ring-indigo-300 dark:bg-gray-700 dark:text-white"/>
                    </div>
                    <div>
                        <label htmlFor="password" className="block font-medium text-gray-600 dark:text-gray-300">Password:</label>
                        <input id="password" type="password" name="password" defaultValue="password123" className="w-full p-2 border rounded-lg focus:ring focus:ring-indigo-300 dark:bg-gray-700 dark:text-white"/>
                    </div>
                    <div>
                        <label htmlFor="description" className="block font-medium text-gray-600 dark:text-gray-300">Description:</label>
                        <textarea id="description" name="description" defaultValue="Short description" className="w-full p-2 border rounded-lg focus:ring focus:ring-indigo-300 dark:bg-gray-700 dark:text-white"></textarea>
                    </div>
                    <fieldset className="p-3 border rounded-lg dark:border-gray-600">
                        <legend className="font-medium text-gray-600 dark:text-gray-300">Employment status:</legend>
                        <div className="space-y-2">
                            {["unemployed", "part-time", "full-time"].map(status => (
                                <label key={status} className="flex items-center space-x-2">
                                    <input type="radio" name="status" value={status} defaultChecked={status === "unemployed"} className="accent-indigo-500"/>
                                    <span className="text-gray-700 dark:text-gray-300 capitalize">{status.replace("-", " ")}</span>
                                </label>
                            ))}
                        </div>
                    </fieldset>
                    <fieldset className="p-3 border rounded-lg dark:border-gray-600">
                        <legend className="font-medium text-gray-600 dark:text-gray-300">Dietary restrictions:</legend>
                        <div className="space-y-2">
                            {["Vegetarian", "Vegan", "Gluten-Free", "Dairy-Free", "Nut Allergy"].map(diet => (
                                <label key={diet} className="flex items-center space-x-2">
                                    <input type="checkbox" name="diet" value={diet.toLowerCase()} className="accent-indigo-500"/>
                                    <span className="text-gray-700 dark:text-gray-300">{diet}</span>
                                </label>
                            ))}
                        </div>
                    </fieldset>
                    <div>
                        <label htmlFor="favcolor" className="block font-medium text-gray-600 dark:text-gray-300">Choose your favorite color:</label>
                        <select id="favcolor" name="favcolor" defaultValue="" required className="w-full p-2 border rounded-lg focus:ring focus:ring-indigo-300 dark:bg-gray-700 dark:text-white">
                            <option value="" disabled>Choose a color</option>
                            {["Green", "Red", "Black"].map(color => (
                                <option key={color} value={color.toLowerCase()}>{color}</option>
                            ))}
                        </select>
                    </div>
                    <button type="submit" className="w-full bg-indigo-500 text-white p-2 rounded-lg hover:bg-indigo-600 transition">Submit</button>
                </form>
            </div>
        </section>
    );
}
