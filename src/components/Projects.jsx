import React, { useContext } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import RandomJokes from "../assets/RandomJokes.svg";
import AreYouBored from "../assets/AreYouBored.svg";
import { useTranslation } from 'react-i18next';
import { UserContext } from '../context/UserContext';

export default function Project() {
    const { darkMode } = useContext(UserContext);

    const { t } = useTranslation();

    return (
        <div className={darkMode ? 'dark' : ''}>
            <section className="w-screen overflow-hidden relative flex flex-col items-center dark:bg-[#484148]">
                <h1 className='m-[50px] dark:text-[#FFFFFF]'>{t("project")}</h1>
                
                <div className="flex">
                    <div className="w-104 ml-6 mr-20">
                    <Card body inverse className="text-left mt-10 bg-blue-200 border-blue-200 rounded-lg w-11/12 ml-36 mr-20">
                            <CardBody>
                            <CardTitle className="mb-6 font-bold text-2xl text-black font-playfair-display">Random Jokes</CardTitle>
                                <CardText className='text-[#000000]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.</CardText>
                                <div className="card-buttons">
                                    <span className="mt-5 mr-2 inline-block px-8 py-1 bg-white text-black rounded-lg cursor-pointer font-playfair-display">react</span>
                                    <span className="mt-5 mr-2 inline-block px-8 py-1 bg-white text-black rounded-lg cursor-pointer font-playfair-display">vercel</span>
                                    <span className="mt-5 mr-2 inline-block px-8 py-1 bg-white text-black rounded-lg cursor-pointer font-playfair-display">axios</span>
                                    <span className="mt-5 mr-2 inline-block px-8 py-1 bg-white text-black rounded-lg cursor-pointer font-playfair-display">router</span>
                                </div>
                                <div className="mt-12">
                                <a href={`https://github.com/Hilal-Bilun-Kara`} className="text-black mr-36">{t("ViewonGithub")}</a>
                                <a href={`https://github.com/Hilal-Bilun-Kara`} className="text-black">{t("goToApp")} <span className="font-bold">&rarr;</span></a>
                                </div>
                                <CardImg src={RandomJokes} top className="mt-16 w-full" />
                            </CardBody>
                        </Card>
                    </div>

                    <div className="project-card">
                        <Card body inverse className="text-left mt-10 bg-blue-200 border-blue-200 rounded-lg w-7/12 ml-32 mr-20">
                            <CardBody>
                                <CardTitle className="mb-6 font-bold text-2xl text-black font-playfair-display">Are you bored?</CardTitle>
                                <CardText className="text-black">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!</CardText>
                                <div className="card-buttons">
                                    <span className="mt-5 mr-2 inline-block px-8 py-1 bg-white text-black rounded-lg cursor-pointer font-playfair-display">{t("react")}</span>
                                    <span className="mt-5 mr-2 inline-block px-8 py-1 bg-white text-black rounded-lg cursor-pointer font-playfair-display">{t("redux")}</span>
                                    <span className="mt-5 mr-2 inline-block px-8 py-1 bg-white text-black rounded-lg cursor-pointer font-playfair-display">{t("axios")}</span>
                                    <span className="mt-5 mr-2 inline-block px-8 py-1 bg-white text-black rounded-lg cursor-pointer font-playfair-display">{t("router")}</span>
                                    <span className="mt-5 mr-2 inline-block px-8 py-1 bg-white text-black rounded-lg cursor-pointer font-playfair-display">{t("vercel")}</span>
                                </div>
                                <div className="mt-12">
                                    <a href={`https://github.com/Hilal-Bilun-Kara`} className="text-black mr-24">{t("ViewonGithub")}</a>
                                    <a href={`https://github.com/Hilal-Bilun-Kara`} className="text-black">{t("goToApp")} <span className="font-bold">&rarr;</span></a>
                                </div>
                                <CardImg src={AreYouBored} top className="mt-8 w-full" />
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    )
}