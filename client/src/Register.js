import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigator = useNavigate();

    return(
        <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
            <div className="card p-4 shadow" style={{ width: "100%", maxWidth: "400px" }}>
                <h2 className="text-center mb-4">Registro</h2>
                <form >
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Ingresa tu email" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Usuario</label>
                        <input type="text" className="form-control" id="username" placeholder="Ingresa tu usuario" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Contraseña</label>
                        <input type="password" className="form-control" id="password" placeholder="Ingresa tu contraseña" required />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Registrarse</button>
                </form>
            </div>
        </div>

    );

}

export default Register;