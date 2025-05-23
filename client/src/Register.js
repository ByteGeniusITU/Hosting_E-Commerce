import { useState } from "react";
import { useNavigate } from "react-router";

const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    function handleEmailChange(e) {
        setEmail(e.target.value);
        if (e.target.value === "") {
            setErrors({ ...errors, email: "El campo email no puede estar vacío" });
        } else {
            const newErrors = { ...errors };
            delete newErrors.email;
            setErrors(newErrors);
        }
    }

    function handleUsernameChange(e) {
        setUsername(e.target.value);
        if (e.target.value === "") {
            setErrors({ ...errors, username: "El campo usuario no puede estar vacío" });
        } else {
            const newErrors = { ...errors };
            delete newErrors.username;
            setErrors(newErrors);
        }
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
        if (e.target.value === "") {
            setErrors({ ...errors, password: "El campo contraseña no puede estar vacío" });
        } else {
            const newErrors = { ...errors };
            delete newErrors.password;
            setErrors(newErrors);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();

        let formErrors = {};
        if (email === "") formErrors.email = "El campo email no puede estar vacío";
        if (username === "") formErrors.username = "El campo usuario no puede estar vacío";
        if (password === "") formErrors.password = "El campo contraseña no puede estar vacío";

        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        // Aquí puedes manejar el registro, como enviar los datos al servidor
        console.log("Datos enviados:", { email, username, password });

        // Redirigir al usuario después del registro exitoso
        navigate("/home");
    }

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">
                    <div className="card shadow-sm">
                        <div className="card-header bg-primary text-white">
                            <h3 className="mb-0 text-center">Registro</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label fw-bold">Email</label>
                                    <input
                                        id="email"
                                        type="email"
                                        className={`form-control ${errors.email ? "is-invalid" : ""}`}
                                        value={email}
                                        onChange={handleEmailChange}
                                        required
                                    />
                                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label fw-bold">Usuario</label>
                                    <input
                                        id="username"
                                        type="text"
                                        className={`form-control ${errors.username ? "is-invalid" : ""}`}
                                        value={username}
                                        onChange={handleUsernameChange}
                                        required
                                    />
                                    {errors.username && <div className="invalid-feedback">{errors.username}</div>}
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label fw-bold">Contraseña</label>
                                    <input
                                        id="password"
                                        type="password"
                                        className={`form-control ${errors.password ? "is-invalid" : ""}`}
                                        value={password}
                                        onChange={handlePasswordChange}
                                        required
                                    />
                                    {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                                </div>

                                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                    <button
                                        type="button"
                                        className="btn btn-secondary me-md-2"
                                        onClick={() => navigate("/")}
                                    >
                                        Cancelar
                                    </button>
                                    <button type="submit" className="btn btn-primary">
                                        Registrarse
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;