/* eslint-disable no-unused-vars */
import React from 'react';
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";

const Navbar = ()=>{
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Header section */}
      <header>
        <div className="lg:w-screen h-[54px] relative lg:left-16 top-4 w-48 flex justify-center items-center">
          <div>
            <div className="lg:left-[50px] lg:top-[15.77px] absolute left-2 text-stone-900 text-base font-normal font-['BIZ UDPGothic'] capitalize leading-relaxed">
              EN - FR
            </div>
            <div className="lg:left-[1234.45px] lg:top-[15.77px] absolute  text-stone-900 text-base font-normal font-['BIZ UDPGothic'] underline leading-relaxed max-[500px]:hidden">
              Se connecter
            </div>
            <div className="lg:left-[1053.84px] lg:top-[15.77px] absolute  text-stone-900 text-base font-normal font-['BIZ UDPGothic'] underline leading-relaxed max-[500px]:hidden">
              Créer un compte
            </div>
            <div className="lg:w-[403px] h-[53px] lg:left-[525.73px] left-[120px] w-[190px] top-[4.27px] absolute">
              <div className="lg:left-[28px] top-0 absolute">
                <span
                  style={{
                    color: "#333",
                    fontSize: "23.23px",
                    fontWeight: "normal",
                    fontFamily: "Jost",
                    lineHeight: "53.04px",
                  }}
                >
                  Bienvenue sur{" "}
                </span>
                <span
                  style={{
                    color: "#333",
                    fontSize: "23.23px",
                    fontFamily: "KyivType Sans",
                    lineHeight: "53.04px",
                  }}
                >
                  PANDA
                </span>
              </div>

              <div className="lg:w-[24.85px] lg:hidden h-7 left-[283.98px] top-[12.23px] absolute ">
                <div className="lg:w-[10.43px] h-[10.34px] left-[17.53px] top-[10.74px] absolute origin-top-left rotate-180">
                  {" "}
                </div>
                <div
                  className="w-[24.85px] h-7 lg:left-0 top-0 absolute left-[-50px]  border-stone-900"
                  onClick={toggleSidebar}
                >
                  {" "}
                  <MenuIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Header section End */}

      {/* Drawer for mobile */}

      <Drawer anchor="left" open={isSidebarOpen} onClose={toggleSidebar}>
        <List>
          {[
            "Créer un compte",
            "Créer un compte",
            "missions de PANDA",
            "Fonctionnalités",  
            "Experts",
            "Organisations en Afrique",
            "Offres d'emploi",
            "Evénements à venir",
            "Témoignages",
            "Fondateurs",
          ].map((text, _index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>


      {/* nav section  start*/}
      <br />
      <br />
      <br />
      <nav className={`lg:flex justify-center ite  `}>
        <div
          className={`lg:w-[1046px] h-[21px] justify-start items-start  lg:gap-10 lg:inline-flex  w-screen gap-20 hidden${
            isSidebarOpen ? "hidden" : ""
          }`}
        >
          <div className="text-stone-900 text-[13px] font-normal font-['BIZ UDPGothic'] capitalize leading-tight">
            {" "}
            missions de PANDA
          </div>
          <div className="text-stone-900 text-[13px] font-normal font-['BIZ UDPGothic'] capitalize leading-tight">
            {" "}
            Fonctionnalités
          </div>
          <div className="text-stone-900 text-[13px] font-normal font-['BIZ UDPGothic'] capitalize leading-tight">
            experts
          </div>
          <div className="text-stone-900 text-[13px] font-normal font-['BIZ UDPGothic'] capitalize leading-tight">
            Organisations en Afrique
          </div>
          <div className="text-stone-900 text-[13px] font-normal font-['BIZ UDPGothic'] leading-tight">
            Offres d emploi
          </div>
          <div className="text-stone-900 text-[13px] font-normal font-['BIZ UDPGothic'] leading-tight">
            Evénements à venir
          </div>
          <div className="text-stone-900 text-[13px] font-normal font-['BIZ UDPGothic'] capitalize leading-tight">
            {" "}
            Témoignages
          </div>
          <div className="text-stone-900 text-[13px] font-normal font-['BIZ UDPGothic'] capitalize leading-tight">
            Fondateurs
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
