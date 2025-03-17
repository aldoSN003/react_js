import './App.css';
import { ChevronFirst, ChevronLast } from 'lucide-react';
import { useState, useEffect } from 'react';
import mqtt from 'mqtt';

function App() {
    const [client, setClient] = useState(null);
    const [isConnected, setIsConnected] = useState(false);
    const [messages, setMessages] = useState([]); // State to store MQTT messages

    useEffect(() => {
        const brokerUrl = "ws://broker.emqx.io:8083/mqtt"; // WebSocket URL
        const options = {
            clean: true,
            connectTimeout: 4000,
            clientId: `mqtt_client_${Math.random().toString(16).substr(2, 8)}`,
        };

        const mqttClient = mqtt.connect(brokerUrl, options);

        mqttClient.on("connect", () => {
            const message = "Connected to MQTT broker";
            setMessages((prev) => [...prev, message]); // Add connection message to state
            setIsConnected(true);

            mqttClient.subscribe("esp32/motor/speed", (err) => {
                if (!err) {
                    const message = "Subscribed to esp32/motor/speed";
                    setMessages((prev) => [...prev, message]); // Add subscription message to state
                }
            });

            mqttClient.subscribe("esp32/motor/direction", (err) => {
                if (!err) {
                    const message = "Subscribed to esp32/motor/direction";
                    setMessages((prev) => [...prev, message]); // Add subscription message to state
                }
            });
        });

        mqttClient.on("message", (topic, message) => {
            const msg = `Message received on topic: ${topic}, Message: ${message.toString()}`;
            setMessages((prev) => [...prev, msg]); // Add received message to state
        });

        mqttClient.on("error", (err) => {
            const message = `MQTT Error: ${err}`;
            setMessages((prev) => [...prev, message]); // Add error message to state
            setIsConnected(false);
        });

        mqttClient.on("close", () => {
            const message = "Disconnected from MQTT broker";
            setMessages((prev) => [...prev, message]); // Add disconnection message to state
            setIsConnected(false);
        });

        setClient(mqttClient);

        return () => {
            mqttClient.end();
        };
    }, []);

    // Function to set motor direction to Forward
    const setForward = () => {
        if (client && isConnected) {
            client.publish("esp32/motor/direction", "HIGH", { qos: 0, retain: false });
            const message = "Published: HIGH to topic esp32/motor/direction";
            setMessages((prev) => [...prev, message]); // Add publish message to state
        }
    };

    // Function to set motor direction to Backward
    const setBackward = () => {
        if (client && isConnected) {
            client.publish("esp32/motor/direction", "LOW", { qos: 0, retain: false });
            const message = "Published: LOW to topic esp32/motor/direction";
            setMessages((prev) => [...prev, message]); // Add publish message to state
        }
    };

    // Function to stop the motor
    const stopMotor = () => {
        if (client && isConnected) {
            client.publish("esp32/motor/direction", "LOW", { qos: 0, retain: false });
            client.publish("esp32/motor/speed", "0", { qos: 0, retain: false });
            const message = "Published: LOW, 0 to stop the motor";
            setMessages((prev) => [...prev, message]); // Add publish message to state
        }
    };

    return (
        <>
            <h1 className="text-2xl font-bold text-center mt-4 text-black">
                MQTT Connection: {isConnected ? "Connected ✅" : "Disconnected ❌"}
            </h1>

            <div className='flex flex-col items-center'>
                <div className='flex flex-row gap-20'>
                    <div>
                        <ChevronFirst onClick={setBackward} className='cursor-pointer text-black' />
                    </div>
                    <div>
                        <ChevronLast onClick={setForward} className='cursor-pointer text-black' />
                    </div>
                </div>

                <div className="mt-4">
                    <button
                        onClick={stopMotor}
                        className="mt-4 p-2 bg-red-500 text-white rounded cursor-pointer"
                    >
                        Stop Motor
                    </button>
                </div>

                {/* Textarea to display MQTT messages */}
                <div className="mt-8 w-full max-w-lg text-black">
                    <textarea
                        className="w-full h-48 p-2 border border-gray-300 rounded-md"
                        value={messages.join('\n')}
                        readOnly
                        placeholder="MQTT messages will appear here..."
                    />
                </div>
            </div>
        </>
    );
}

export default App;