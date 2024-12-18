import { useEffect } from 'react';
import gsap from 'gsap';
import "./index.css";
import Header from './components/Header';
import Info from './components/Info';
import data from "./data.json";

function App() {
    useEffect(() => {
        // Stagger animation for each Info card
        gsap.fromTo(".components",
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, stagger: 0.1, delay: 0.3 }
        );

    }, []);

    return (
        <div>
            <Header />
            <div className="components">
                {
                    data.map((item) => (
                        <Info
                            key={item.title}
                           {...item}



                        />
                    ))
                }
            </div>
        </div>
    );
}

export default App;
