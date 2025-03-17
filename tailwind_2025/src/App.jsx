
import './App.css'
function Card({title}) {
    return (
        <div style={{border:"1px solid #4b5362"}}>
            <h2>
                {title}
            </h2>
        </div>
    );
}

function App() {


  return (
  <div className="card-container">
      <Card title="Hello World!"/>
  </div>


  )
}

export default App
