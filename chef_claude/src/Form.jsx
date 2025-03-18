export default function Form() {


    function signUp(formData) {
        const data = {
            email: formData.get("email"),
            password: formData.get("password"),
            description: formData.get("description"),
            status: formData.get("status"), // Radio button (single value)
            diet: formData.getAll("diet")   // Checkboxes (array of values)
        };

        console.log(JSON.stringify(data, null, 2)); // Pretty-print JSON in console
    }


    return (
        <section className="mb-12 p-6 bg-gray-50 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-center mb-6">Signup Form</h1>
            <form action={signUp} className="space-y-6">

                {/* Email Input */}
                <div className="flex flex-col space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Email:</label>
                    <input
                        id="email"
                        defaultValue="joe@schmoe.com"
                        type="email"
                        name="email"
                        placeholder="joe@schmoe.com"
                        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Password Input */}
                <div className="flex flex-col space-y-2">
                    <label htmlFor="password" className="text-sm font-medium text-gray-700">Password:</label>
                    <input
                        id="password"
                        defaultValue="password123"
                        type="password"
                        name="password"
                        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Description Textarea */}
                <div className="flex flex-col space-y-2">
                    <label htmlFor="description" className="text-sm font-medium text-gray-700">Description:</label>
                    <textarea
                        id="description"
                        name="description"
                        defaultValue="Short description"
                        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Employment Status Fieldset */}
                <fieldset className="space-y-4">
                    <legend className="text-sm font-medium text-gray-700">Employment status:</legend>
                    <div className="flex flex-col space-y-2">
                        <label className="flex items-center space-x-2">
                            <input type="radio" name="status" defaultChecked={true} value="unemployed" className="form-radio text-blue-500" />
                            <span>Unemployed</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input type="radio" name="status" value="part-time" className="form-radio text-blue-500" />
                            <span>Part time</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input type="radio" name="status" value="full-time" className="form-radio text-blue-500" />
                            <span>Full time</span>
                        </label>
                    </div>
                </fieldset>

                {/* Dietary Restrictions Fieldset */}
                <fieldset className="space-y-4">
                    <legend className="text-sm font-medium text-gray-700">Dietary restrictions:</legend>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" name="diet" value="vegetarian" className="form-checkbox text-blue-500" />
                            <span>Vegetarian</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" name="diet" value="vegan" className="form-checkbox text-blue-500" />
                            <span>Vegan</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" name="diet" value="gluten-free" className="form-checkbox text-blue-500" />
                            <span>Gluten-Free</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" name="diet" value="dairy-free" className="form-checkbox text-blue-500" />
                            <span>Dairy-Free</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" name="diet" value="nut-allergy" className="form-checkbox text-blue-500" />
                            <span>Nut Allergy</span>
                        </label>
                    </div>
                </fieldset>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Submit
                </button>
            </form>
        </section>
    )

}