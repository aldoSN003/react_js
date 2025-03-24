import React, { useState, useEffect } from "react";
import mqtt from "mqtt";
export default function Form() {
    const [client, setClient] = useState(null);
    const [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
        const brokerUrl = "ws://broker.emqx.io:8083/mqtt"; // WebSocket URL
        const options = {
            clean: true,
            connectTimeout: 4000,
            clientId: `mqtt_client_${Math.random().toString(16).substr(2, 8)}`,
        };

        const mqttClient = mqtt.connect(brokerUrl, options);

        mqttClient.on("connect", () => {
            console.log("Connected to MQTT Broker");
            setIsConnected(true);
        });

        mqttClient.on("error", (err) => {
            console.error("Connection error: ", err);
            setIsConnected(false);
        });

        setClient(mqttClient);

        return () => {
            mqttClient.end(); // Cerrar la conexión al desmontar el componente
        };
    }, []);

    const signUp = (formData) => {
        const data = {
            email: formData.get("email"),
            password: formData.get("password"),
            description: formData.get("description"),
            status: formData.get("status"),
            diet: formData.getAll("diet"),
            favColor: formData.get("favcolor"),
        };

        if (client && isConnected) {
            const topic = "form/data"; // Tópico MQTT
            const payload = JSON.stringify(data); // Convertir a JSON
            client.publish(topic, payload, (err) => {
                if (err) {
                    console.error("Error publishing message: ", err);
                } else {
                    console.log("Message published:", payload);
                }
            });
        } else {
            console.error("MQTT client not connected");
        }
    };
    return (
        <section className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Signup Form</h1>
                <form action={signUp} className="space-y-6">
                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            defaultValue="joe@schmoe.com"
                            placeholder="joe@schmoe.com"
                            className="mt-1 block text-black w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            defaultValue="password123"
                            className="mt-1 text-black block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description:</label>
                        <textarea
                            id="description"
                            name="description"
                            defaultValue="Short description"
                            className="mt-1 text-black block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    {/* Employment Status */}
                    <fieldset>
                        <legend className="block text-sm font-medium text-gray-700">Employment status:</legend>
                        <div className="mt-2 space-y-2">
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="status"
                                    defaultChecked={true}
                                    value="unemployed"
                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                />
                                <span className="ml-2 text-sm text-gray-700">Unemployed</span>
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="status"
                                    value="part-time"
                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                />
                                <span className="ml-2 text-sm text-gray-700">Part time</span>
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="status"
                                    value="full-time"
                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                />
                                <span className="ml-2 text-sm text-gray-700">Full time</span>
                            </label>
                        </div>
                    </fieldset>

                    {/* Dietary Restrictions */}
                    <fieldset>
                        <legend className="block text-sm font-medium text-gray-700">Dietary restrictions:</legend>
                        <div className="mt-2 space-y-2">
                            {["Vegetarian", "Vegan", "Gluten-Free", "Dairy-Free", "Nut Allergy"].map((diet) => (
                                <label key={diet} className="flex items-center">
                                    <input
                                        type="checkbox"
                                        name="diet"
                                        value={diet.toLowerCase()}
                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                    />
                                    <span className="ml-2 text-sm text-gray-700">{diet}</span>
                                </label>
                            ))}
                        </div>
                    </fieldset>

                    {/* Favorite Color */}
                    <div>
                        <label htmlFor="favcolor" className="block text-sm font-medium text-gray-700">Choose your favorite color:</label>
                        <select
                            id="favcolor"
                            name="favcolor"
                            defaultValue=""
                            required
                            className="mt-1 block w-full text-black px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        >
                            <option value="" disabled>Choose a color</option>
                            {["Red", "Blue", "Green", "Yellow", "Purple", "Orange", "Black", "White"].map((color) => (
                                <option key={color} value={color.toLowerCase()}>{color}</option>
                            ))}
                        </select>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
}