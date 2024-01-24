import React from "react";
import Nav from "../components/Nav";
import FilmDBImage from "../assets/FilmDB.png";
import Meteo from "../assets/Meteo-1.png";

const posts = [
  {
    title: "Films Database",
    href: "https://filmdata.netlify.app/",
    description:
      "Explorez mon projet de recherche de films, alimenté par l'API TMDB. Ce site interactif permet aux utilisateurs de découvrir des films, de les rechercher par titres et de les ajouter à une liste de favoris personnalisée.",
    imageUrl: FilmDBImage,
    date: "Janv 2024",
    category: "React - Tailwind",
  },
  {

    title: "Météo Vue",
    href: "https://meteovuejs.netlify.app",
    description:
      "Explorez mon projet de recherche de films, alimenté par l'API TMDB. Ce site interactif permet aux utilisateurs de découvrir des films, de les rechercher par titres et de les ajouter à une liste de favoris personnalisée.",
    imageUrl: Meteo,
    date: "Juin 2023",
    category: "Vue - Tailwind",
  },
  // More posts...
];

const Projects = () => {
  return (
    <div>
      <Nav />
      <div className="min-h-screen bg-stone-100">
        <div className="py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Mes projets
              </h2>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                blablablablabla...
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {posts.map((post, index) => (
                <article
                  key={index}
                  className="flex flex-col items-start justify-between"
                >
                  <div className="relative w-full">
                    <img
                      src={post.imageUrl}
                      alt=""
                      className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                    />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="max-w-xl">
                    <div className="mt-8 flex items-center gap-x-4 text-xs">
                      <time className="text-gray-500">{post.date}</time>
                      <p className="relative px-3 py-2 font-medium text-sm text-gray-800">
                        {post.category}
                      </p>
                    </div>
                    <div className="group relative">
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                        <span className="absolute inset-0" />
                        {post.title}
                      </h3>
                      <p className="mt-5 text-justify text-sm leading-6 text-gray-600">
                        {post.description}
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => window.open(post.href, "_blank")}
                    className="rounded-full mt-2 bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  >
                    Visiter
                  </button>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
