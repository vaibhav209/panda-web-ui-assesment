/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-irregular-whitespace */
import React from 'react';

const Banner = () => {
  return (
    <>
      <div className="w-screen lg:h-auto text-center text-stone-900 lg:text-[65px] text-[35px]  font-['Jost'] leading-[87.75px]">
        Nous réunissons experts du monde entier et organisations en Afrique
      </div>
      <div className="flex justify-around flex-wrap items-center">
        <div className="mt-10">
          <div className="w-[255px] h-28 opacity-20 text-stone-500 text-[40px] font-medium font-['Jost'] leading-[46.80px]">
            Organisations en Afrique
          </div>
          <div className="w-[294.93px] h-[236.07px] opacity-20 text-stone-900 text-[15px] font-medium font-['Jost'] leading-tight">
            Vous êtes une entreprise privée ou publique basée en Afrique et vous
            avez du mal à recruter des profils expérimentés? Vous êtes une
            start-up africaine et vous souhaitez faire appel aux services d'un
            prestataire externe? Vous recherchez une expertise spécifique pour
            réaliser un futur projet?
            <br />
            <br />
            Grâce à son réseau, PANDA vous aide à trouver les experts dont vous
            avez besoin!
          </div>
        </div>
        <div>
          <img
            src="https://blogger.googleusercontent.com/img/a/AVvXsEjaKphdlt9sMCcuFJmk70v3iHQ54__rlKxz13CImNuM7K5Z7F-S1t1mLoL8pv6--23XDIX7IalzI-jmDQ4dUNkxpVLl8czUdarAmuqdC1ff5EwsGcOuCr7GQwBMaWJLrD6u9cpLM63hZl1y2hgi6i-mV1MmrA3hMi7agABPrs5zX2i6pL5VW1vnE1ZsoGX1"
            alt="Banner Img"
            className=" lg:w-[500px] lg:h-[490.29px] ml-2 "
          ></img>
        </div>
        <div className="mt-10">
          <div className="opacity-20 text-stone-500 text-[40px] font-medium font-['Jost'] leading-[46.80px]">
            Experts{' '}
          </div>
          <div className="w-[279.79px] h-[265.66px] opacity-20 text-stone-900 text-[15px] font-medium font-['Jost'] leading-tight">
            Vous êtes un professionnel expérimenté et vous planifiez de partir
            travailler en Afrique? Vous vous rendez souvent sur le continent
            africain pour des raisons professionnelles et vous souhaitez étendre
            votre réseau? Vous souhaitez partager votre expertise avec des
            organisations africaines sans vous déplacer?
            <br />
            <br />
            PANDA est la plateforme de networking des experts pour la
            réalisation de leurs projets professionnels sur le continent
            africain!{' '}
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
