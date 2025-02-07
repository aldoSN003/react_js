import Logo from "./assets/Escucha-tec.svg";
import "./index.css";
import NavBar from "./NavBar";
function App() {
  return (
    <>
      <NavBar />
      <div className="flex flex-col lg:flex-row items-center gap-10 justify-center py-16 px-6 ">
        <div className="flex flex-col items-center lg:items-start gap-6 text-center lg:text-left">
          <h1 className="font-bold text-6xl sm:text-7xl lg:text-8xl text-black leading-tight tracking-tight">
            Feedback Anónimo, Cambios Reales
          </h1>

          <h3 className="font-extralight text-xl sm:text-2xl lg:text-3xl text-black opacity-80">
            Tu privacidad es nuestra prioridad. Comparte tus reportes de manera
            anónima y ayuda a construir una mejor experiencia educativa.
          </h3>
        </div>

        <img
          src="https://images.unsplash.com/photo-1529946825183-536c6317f60e?q=80&w=763&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Educational Background"
          className="w-96 lg:w-110 rounded-full shadow-lg mt-8 lg:mt-0 object-contain"
        />
      </div>
    </>
  );
}

export default App;
