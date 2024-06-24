import React, { useEffect } from 'react';
import logo from './assets/img/Atlantislogo.png'; 

const MeuComponente = () => {
  useEffect(() => {
    // Define a cor do fundo do body quando o componente é montado
    document.body.style.backgroundColor = '#f0f8ff'; // Substitua 'corDesejada' pela cor que você quer

    // Limpa a cor do fundo quando o componente é desmontado
    return () => {
      document.body.style.backgroundColor = ''; // Reseta para o valor padrão ou outra cor desejada
    };
  }, []);
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <img src={logo} alt="Logotipo do Projeto" />
    </div>
  );
};

export default MeuComponente;
