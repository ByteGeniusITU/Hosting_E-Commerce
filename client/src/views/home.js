import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from "react-router-dom";


const Home = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="home">
      <h1>Bienvenido a la Página Principal</h1>
      <button onClick={() => loginWithRedirect()}>Iniciar Sesión</button>
    </div>
  );
};

export default Home;