import React from "react";

const Main = () => {
  return (
    <React.Fragment>
      <section className="bg-white w-[70rem] h-96 p-10 mt-6">
        <img className="mx-auto w-96" src="/orkut_logo.png" alt="orkut-logo" />
        <div className="mt-5">
          <p className="text-center">
            <strong className="text-pink-700">Conecta-se</strong> aos seus
            amigos e familiares usando recados e mensagens instantâneas
          </p>
          <p className="text-center">
            <strong className="text-pink-700">Conheça</strong> novas pessoas
            através de amigos de seus amigos e comunidades
          </p>
          <p className="text-center">
            <strong className="text-pink-700">Compartilha</strong> seus vídeos,
            fotos e paixões em um só lugar
          </p>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Main;
