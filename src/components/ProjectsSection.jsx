import React, { useState } from "react";

const ProjectsSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    {
      title: "Site vitrine – CM BRIDE",
      description:
        "Création d’un site vitrine responsive pour la boutique CM BRIDE, spécialisée dans la location de robes traditionnelles algériennes et de robes de mariée. Le projet a été réalisé entièrement en HTML, CSS et JavaScript, avec une attention portée à l’esthétique (fond noir, identité dorée), à la structure sémantique, et à l’optimisation mobile.",
      image: "/cmbride.jpg",
    },
    {
      title: "Site de logement type Airbnb",
      description:
        "Développement d’un site web de réservation de logements inspiré d’Airbnb, avec une interface utilisateur moderne et des filtres interactifs (lieu, prix, type de logement). Le projet utilise Firebase pour l’authentification sécurisée (avec JWT), la gestion des utilisateurs et la base de données. Le backend est développé en Node.js avec une API REST pour l’ajout, la modification et la suppression d’annonces. Ce projet met en œuvre des pratiques modernes de développement web fullstack.",
      image: "/airbnb.jpg",
    },
    {
      title: "API Rest – Projet Pokémon",
      description:
        "Création d’une API RESTful pour gérer une base de données de Pokémon, incluant les opérations CRUD complètes (création, lecture, mise à jour, suppression). Architecture MVC avec Node.js et MySQL. Ce projet met l’accent sur la structuration du code, les routes express, la validation des données et l’interaction avec une base relationnelle.",
      image: "/apipokemon.png",
    },
    {
      title: "Application Web conteneurisée (Votes)",
      description:
        "Déploiement d’une application de vote en environnement Docker multi-services. L’infrastructure inclut un backend Node.js, une base de données SQL, et un client web. Scripts de configuration pour l’automatisation, persistance des données, et communication inter-conteneurs. Le projet met en œuvre les fondamentaux DevOps.",
      image: "/vote.png",
    },
    
  {
    title: "Bataille Navale – Python",
    description: "Jeu de bataille navale codé en Python avec interface console. Gestion des tirs et règles classiques. Projet axé sur la logique et la programmation.",
    image: "/bataillenavale.png"
  },
  {
    title: "Jeu du Juste Prix – Python",
    description: "Jeu du Juste Prix développé en Python. Le joueur doit deviner un prix secret avec des indices. Projet simple et ludique axé sur la gestion des entrées utilisateur et la logique conditionnelle.",
    image: "/justeprix.png"
  },

    {
      title: "Jeu de Dames Chinoises (Java)",
      description:
        "Réalisation d’un jeu de dames chinoises en Java avec affichage console. Le plateau hexagonal est modélisé par une structure de données adaptée et les règles du jeu ont été implémentées pour permettre des déplacements valides, y compris les sauts multiples. Le projet met en œuvre la POO et la logique de vérification des coups.",
      image: "/damechinoise.png",
    },
    {
      title: "Jeu Puissance 4 – JavaScript",
      description:
        "Développement d’un jeu de Puissance 4 en JavaScript avec affichage texte via la console. Implémentation des règles officielles, détection de victoire (horizontale, verticale, diagonale) et alternance de tours entre deux joueurs. Ce projet met en avant la logique algorithmique et la gestion de l’état du plateau en mémoire.",
      image: "/puissance4.jpg",
    },
  ];

  return (
    <section className="py-20 bg-gray-900" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Mes Projets
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md">
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover rounded-md mb-4 cursor-pointer"
                  onClick={() => setSelectedImage(project.image)}
                />
              )}
              <h3 className="text-xl text-white font-semibold">
                {project.title}
              </h3>
              <p className="text-gray-300">{project.description}</p>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage}
              alt="Agrandie"
              className="max-w-[90%] max-h-[90%] rounded-lg shadow-xl border-4 border-white"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
