import Navbar from "./components/navbar";
import ItemProjet from "./components/itemprojet";
import { Link } from "react-scroll";
import { useState } from "react";
import profile from "./assets/profile.jpeg" ;
import team from "./assets/equipe.png";
import event from "./assets/evenement.png";
import bank from "./assets/banque.png";
import entraineur from "./assets/entraineur.png";
import { Analytics } from '@vercel/analytics/react';



export default function App() {
  const [style, setStyle] = useState({});

  const handleMouseMove = (e) => {
    const { clientX, clientY, target } = e;
    const { top, left, width, height } = target.getBoundingClientRect();
    const xPos = (clientX - left) / width - 0.5;
    const yPos = (clientY - top) / height - 0.5;
    setStyle({
      transform: `rotateY(${xPos * 60}deg) rotateX(${yPos * -60}deg)`,
      transition: "transform .1s",
    });
  };

  const visiteur = () => {
    //appel api 
    if (localStorage.getItem("visiteur") === null) {
      localStorage.setItem("visiteur", 1);
    }
    else {
      localStorage.setItem("visiteur", parseInt(localStorage.getItem("visiteur")) + 1);
    }
  }

  const resetStyle = () => {
    setStyle({
      transform: `rotateY(0deg) rotateX(0deg)`,
      transition: "transform 1s",
    });
  };

  return (
    <>
    <Analytics/>
      <Navbar />
      <body className="bg-background-body content-center overflow-hidden">
        <main className="container mx-auto mt-0 justify-center overflow-hidden text-white ">
          <div className="flex justify-center flex-col overflow-hidden mx-auto my-0 max-w-5xl min-h-screen ">
            <h1 className="text-8xl font-bold text-slate-200 fadeInAndSlideFast">
              Hello World!
            </h1>
            <h1 className="text-8xl font-semibold text-primary fadeInAndSlide">
              Ici Tarek Houamed
            </h1>
            <p className="mt-3 text-xl text-slate-200 font-sans fadeInAndSlideSlow">
              Je suis passionné par le développement logiciel et <br />
              les nouvelles technologies. Actuellement, je suis à <br />
              la recherche d'une opportunité dans le domaine du <br />
              développement ou DevOps.
            </p>
            <Link
              to="about"
              smooth={true}
              duration={1000}
              className="flex items-center justify-center w-16 h-16 mt-4 mb-2 border-2 border-primary bg-transparent rounded-full text-2xl hover:translate-y-3 cursor-pointer  duration-1000 fadeInAndSlideButton"
            >
              &#8595;
            </Link>
            {/* Bouton flèche vers le bas */}
          </div>
          <div className="flex  items-center max-w-5xl pt-28 mx-auto my-0 font-bold mb-12" id="about">
            <h2 className="text-4xl text-slate-300 " >
              À propos
            </h2>
            <hr className="flex w-1/3 mx-2 border-1 border-primary" />
          </div>

          <section className="transition-opacity max-w-5xl justify-center mx-auto my-0 duration-500 flex pb-28">
            <div>
              <p className="font-sans text-slate-300 pb-4">
                J'ai commencé à étudier l'informatique en 2018 à l'Université de
                Lille, <br /> j'ai obtenu mon diplôme de licence en informatique
                en 2021. <br />
                Par la suite, j'ai continué mes études en Master 2 Génie
                Logiciel <br /> à l'Université de Lille. Actuellement, je suis
                alternant ingénieur DevOps <br /> chez Inetum. <br />
              </p>
              <p className="font-sans text-slate-300 pb-4">
                Mon objectif professionnel est de devenir un expert du
                développement <br /> backend/DevOps et de contribuer à la
                création d'applications robustes <br /> et évolutives. Je suis
                passionné par la conception et la mise en œuvre <br />{" "}
                d'architectures logicielles efficaces, ainsi que par
                l'automatisation <br /> des processus de développement pour
                améliorer la productivité <br /> et la fiabilité des équipes de
                développement.
              </p>
              <p className="font-sans text-slate-300 pb-4">
                J'ai soif d'apprendre continuellement et de me tenir au courant{" "}
                <br /> des dernières tendances et technologies du domaine, afin
                de relever <br />
                les défis complexes du développement backend/DevOps.
              </p>
              <p className="font-sans text-slate-300 pb-4">
                Voici quelques technologies avec lesquelles j'ai travaillé
                récemment :
              </p>
              <ul className="grid col-span-2 text-slate-300 space-x-0  grid-cols-2">
                <li className="relative pl-4">
                  <span className="absolute top-1/2 left-0 transform -translate-y-1/2 w-1 h-1 bg-primary rounded-full"></span>
                  Java (Spring Boot, EE)
                </li>
                <li className="relative pl-4">
                  <span className="absolute top-1/2 left-0 transform -translate-y-1/2 w-1 h-1 bg-primary rounded-full"></span>
                  Python
                </li>
                <li className="relative pl-4">
                  <span className="absolute top-1/2 left-0 transform -translate-y-1/2 w-1 h-1 bg-primary rounded-full"></span>
                  JavaScript
                </li>
                <li className="relative pl-4">
                  <span className="absolute top-1/2 left-0 transform -translate-y-1/2 w-1 h-1 bg-primary rounded-full"></span>
                  React
                </li>
                <li className="relative pl-4">
                  <span className="absolute top-1/2 left-0 transform -translate-y-1/2 w-1 h-1 bg-primary rounded-full"></span>
                  Docker
                </li>
                <li className="relative pl-4">
                  <span className="absolute top-1/2 left-0 transform -translate-y-1/2 w-1 h-1 bg-primary rounded-full"></span>
                  Ansible
                </li>
              </ul>
            </div>
            {/* <img src="src/assets/profile.jpeg" alt="profile" className="rounded-full w-1/4 h-1/4 mx-auto my-0" /> */}
            <img
              src={profile}
              alt="profile"
              className="rounded-full w-1/4 h-1/4 mx-auto my-0"
              style={style}
            />
          </section>

          <section
            className="transition-opacity max-w-4xl text-slate-300 pt-28 pb-28 justify-center mx-auto my-0 duration-500 "
            id="experience"
          >
            <div className="flex  items-center max-w-5xl mx-auto my-0 font-bold mb-12 gap-2">
              <h2 className="text-4xl text-slate-300" id="about">
                Expérience
              </h2>
              <hr className="flex w-2/3 mx-2 border-1 border-primary" />
            </div>
            <div className="grid grid-cols-7 ">
              <div className="text-slate-300  ">
                <button className=" transition hover:translate-x-2">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary duration-300 border-l-2 border-primary pl-2 "
                  >
                    Actuellement
                  </a>
                </button>
              </div>
              <div className="text-slate-300  col-span-6">
                <h3 className="pb-2">
                  <span>Ingénieur DevOps chez</span>
                  <span className="text-primary"> Inetum</span>
                </h3>
                <p className="pb-4 text-slate-400 text-xs">
                  Septembre 2022 - Aujourd'hui
                </p>
                <div>
                  <ul className="pl-4">
                    <li className="relative pb-2 list-disc list-outside marker:text-primary ">
                      Développement d'une application web pour la gestion
                      d'effectifs
                    </li>
                    <li className="relative pb-2 list-disc list-outside marker:text-primary ">
                      Responsable de l'automatisation des gestes d'exploitation
                      de niveau N1 et N2, <br /> de la gestion de la maintenance
                      et de la planification, l'analyse des besoins et des{" "}
                      <br /> déclenchements de supervision, ainsi que l'analyse
                      des Documents d'Exploitation (DEX).
                    </li>
                    <li className="relative pb-2 list-disc list-outside marker:text-primary">
                      Chargé de concevoir des workflows d'automatisation, de
                      développer des rôles/playbooks génériques et spécifiques,
                      et de suivre les mises en production. Proposition de
                      solutions et d'améliorations axées sur la qualité et la
                      satisfaction du client. <br />
                      <br />
                      <strong>
                      Environnement : Linux - Agile - Ansible - AWX - Gitlab -
                      Centreon - ServiceNow
                      </strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section
            className="transition-opacity max-w-5xl text-slate-300 justify-center mx-auto my-0 duration-500  mb-12"
            id="projects"
          >
            <div className="flex  items-center max-w-5xl mx-auto my-0 font-bold mb-6 gap-2">
              <h2 className="text-3xl text-slate-300" id="about">
                Quelques projets
              </h2>
              <hr className="flex w-2/3 mx-2 border-1 border-primary" />
            </div>
            <ol className="grid space-y-2 pl-12 gap-4">
              <li>
                <ItemProjet
                  title="Gestion des effectifs"
                  description="Application web pour la gestion d'effectifs"
                  image={team}
                />
              </li>
              <li style={{ marginLeft: "6rem" }}>
                <ItemProjet
                  title="WeMeet"
                  description="Application web permettant de créer des événements"
                  image={event}
                />
              </li>
              <li>
                <ItemProjet
                  title="AssistCoach"
                  description="Application facilitant le management des équipes de football"
                  image={entraineur}
                />
              </li>
              <li style={{ marginLeft: "6rem" }}>
                <ItemProjet
                  title="Réseau de banque"
                  description="Back-end d'une application de gestion de banque"
                  image={bank}
                />
              </li>
            </ol>
          </section>
          <section
            className="transition-opacity max-w-5xl text-slate-300 justify-center mx-auto my-0 duration-500 mb-14 "
            id="contact"
          >
            <div className="flex  items-center max-w-5xl mx-auto my-0 font-bold mb-6 gap-2">
              <h2 className="text-3xl text-slate-300" id="about">
                La suite ?
              </h2>
              <hr className="flex w-2/3 mx-2 border-1 border-primary" />
            </div>{" "}
            <div>
              <p className="text-slate-300">
                Je suis actuellement à la recherche de nouvelles opportunités,
                ma boîte de réception est toujours ouverte.<br/> Que vous ayez une
                question ou simplement envie de dire bonjour, je ferai de mon
                mieux pour vous répondre rapidement !
              </p>
              <button className="flex justify-center items-center w-1/6 h-1/4 p-4 mx-auto my-0 mt-4 rounded-md border-2 border-primary shadow-xl transform transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-2">
                <a href="mailto:tarek.houamed@outlook.fr">
                  Contactez-moi !
                </a>
              </button>
            </div>
          </section>
        </main>
        <footer className="flex justify-center items-center w-full h-16 text-xs text-slate-300 ">
          Designed and developed by Houamed Tarek
          <p>Vous etes le {visiteur()} visiteur</p>
        </footer>
      </body>
    </>
  );
}
