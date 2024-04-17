import Ellipse from "../assets/Ellipse.svg";
import Node from "../assets/node-logo.svg";
import Figma from "../assets/figma-logo.svg";
import React from "../assets/ReactLogo.svg";
import JS from "../assets/js-logo.svg";
import Redux from "../assets/Redux.svg";
import VS from "../assets/Vscode.svg";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";




export default function Skills() {
  const { darkMode } = useContext(UserContext);

  const { t } = useTranslation();

    return (
      <div  className={darkMode ? 'dark' : ''} >
        <section className="w-screen h-[72vh] bg-[#FFFFFF] dark:bg-[#484148] overflow-hidden relative ">
         <img className="absolute border-[20px] border-[#D9D9D9] dark:border-[#525252] border-transparent rounded-full left-[1000px] top-[-80px]" src={Ellipse}/>
            <h1 className="mt-10 dark:text-[#FFFFFF]">{t('skills')}</h1>
           

        <div className="grid grid-cols-6 p-10">
         
          <div className="text-center">
            <img src={JS} className="w-15 h-15 mx-auto mr-4 mt-12" />
            <p className="text-m font-medium text-gray-700 px-4 ml-16 dark:text-[#FFFFFF]">JAVASCRİPT</p>
          </div>

    
          <div className="text-center">
            <img src={React} className="w-15 h-15 mx-auto mr-4 mt-12" />
            <p className="text-m font-medium text-gray-700 ml-16 dark:text-[#FFFFFF]">REACT</p>
          </div>

          <div className="text-center">
            <img src={Redux} className="w-15 h-15 mx-auto mr-4 mt-12" />
            <p className="text-m font-medium text-gray-700 ml-16 dark:text-[#FFFFFF]">REDUX</p>
          </div>
          
          <div className="text-center">
            <img src={Node} className="w-15 h-15 mx-auto mr-4 mt-12" />
            <p className="text-m font-medium text-gray-700 ml-16 dark:text-[#FFFFFF]">NODE</p>
          </div>

          <div className="text-center">
            <img src={VS} className="w-15 h-15 mx-auto mr-4 mt-12" />
            <p className="text-m font-medium text-gray-700 ml-16 dark:text-[#FFFFFF]">VS CODE</p>
          </div>

          <div className="text-center">
            <img src={Figma} className="w-15 h-15 mx-auto mr-4 mt-12" />
            <p className="text-m font-medium text-gray-700 ml-16 dark:text-[#FFFFFF]">FİGMA</p>
          </div>
          <span className="absolute rounded-full w-[70px] h-[30px] bg-[#525252] left-[9px] top-[350px] border-l border-r-0 border-t-0 border-b-0 rounded-l-none rounded-r-full"></span>
        </div>
      
        </section>
        </div>
    )
}
    
