import { useNavigate } from "react-router-dom";
import Navbar from "./maincomponentes/Navbar";

const Main = () => {
    const navigate = useNavigate();

    return (
        <div style={{ minHeight: "100vh", backgroundColor: "#23272b", color: "#fff" }}>
            <Navbar />
            <h1 className="text-center">
                Bienvenido a la página principal
            </h1>
            <div className="container mt-5">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h1 style={{ fontFamily: "'Comic Sans MS', cursive, sans-serif", fontWeight: "bold" }}>
                            Juega con tus amigos
                        </h1>
                        <p>
                            Brindamos un servicio sin lag, rápido y con muchas opciones para jugar con tus amigos.
                        </p>
                    </div>
                    <div className="col-md-6 text-center">
                        <img 
                            src="https://pngimg.com/uploads/minecraft/minecraft_PNG66.png" 
                            alt="Minecraft Hosting" 
                            className="img-fluid"
                            style={{ maxHeight: "300px" }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Main;