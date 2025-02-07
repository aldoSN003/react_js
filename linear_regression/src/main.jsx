import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

function App() {
    const [xValues, setXValues] = useState('');
    const [yValues, setYValues] = useState('');
    const [data, setData] = useState({ x: [], y: [] });

    const handleEnter = (e, isXInput) => {
        if (e.key === 'Enter' && (isXInput ? xValues : yValues)) {
            e.preventDefault();

            if (isXInput) {
                document.getElementsByName('yvalues')[0].focus();
            } else {
                setData(prev => ({
                    x: [...prev.x, xValues],
                    y: [...prev.y, yValues],
                }));
                setXValues('');
                setYValues('');
                document.getElementsByName('xvalues')[0].focus();
            }
        }
    };

    return (
        <div className="app-container">
            <h1 className="text-3xl font-bold underline">Hello world!</h1>

            <div className="form-container">
                <form>
                    <div className="input-fields">
                        <label>
                            X values:
                            <input
                                name="xvalues"
                                value={xValues}
                                onChange={(e) => setXValues(e.target.value)}
                                onKeyDown={(e) => handleEnter(e, true)}
                                className="input-field"
                            />
                        </label>
                        <label>
                            Y values:
                            <input
                                name="yvalues"
                                value={yValues}
                                onChange={(e) => setYValues(e.target.value)}
                                onKeyDown={(e) => handleEnter(e, false)}
                                className="input-field"
                            />
                        </label>
                    </div>
                </form>
            </div>

            <div className="submitted-data">
                <h2 className="font-bold">Collected Data:</h2>
                {data.x.length > 0 && data.y.length > 0 ? (
                    <div className="data-display">
                        <div className="data-row">
                            <span className="data-header">X Values:</span>
                            {data.x.map((x, index) => (
                                <span key={index} className="data-item">{x}</span>
                            ))}
                        </div>
                        <div className="data-row">
                            <span className="data-header">Y Values:</span>
                            {data.y.map((y, index) => (
                                <span key={index} className="data-item">{y}</span>
                            ))}
                        </div>
                    </div>
                ) : (
                    <p>No data submitted yet.</p>
                )}
            </div>
        </div>
    );
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>
);