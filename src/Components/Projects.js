import React from 'react';
import { img1, img2, img3, img4 } from "./../assets/index";

export default function CardTwo() {
  return (
    <div className='grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-6'>
      <div className="rounded-md border neon-border bg-white shadow-md transition-transform transform hover:scale-105">
        <img
          src={img1}
          alt="Laptop"
          className="h-[200px] w-full rounded-t-md object-cover"
        />
        <div className="p-4">
          <h1 className="text-lg font-semibold">Monkey Store</h1>
          <p className="mt-3 text-sm text-gray-600">
          "Monkey Create is your go-to for building sleek e-commerce sites. Powered by React, Node.js, Express, MongoDB, and Firebase, and hosted on Vercel, we ensure a smooth, modern online shopping experience."
          </p>
      <a href='https://monkeycloth.vercel.app/'>    <button
            type="button"
            className="mt-4 rounded-sm bg-rose-500 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-sky-500/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            view
          </button></a>
        </div>
      </div>
      <div className="rounded-md border neon-border bg-white shadow-md transition-transform transform hover:scale-105">
        <img
          src={img2}
          alt="Laptop"
          className="h-[200px] w-full rounded-t-md object-cover"
        />
        <div className="p-4">
          <h1 className="text-lg font-semibold">Sarpmitra-Chitra</h1>
          <p className="mt-3 text-sm text-gray-600">
          "Snake Rescue NGO: Dedicated to saving and rehabilitating snakes. Our website, built with HTML, CSS, and JavaScript and hosted on Vercel, provides updates, resources, and ways to support our mission."
          </p>
          <a href='https://sarpmitrachitra.vercel.app/'>    <button
            type="button"
            className="mt-4 rounded-sm bg-rose-500 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-sky-500/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            view
          </button></a>
        </div>
      </div>
      <div className="rounded-md border neon-border bg-white shadow-md transition-transform transform hover:scale-105">
        <img
          src={img3}
          alt="Laptop"
          className="h-[200px] w-full rounded-t-md object-cover"
        />
        <div className="p-4">
          <h1 className="text-lg font-semibold">Animesh Shukla</h1>
          <p className="mt-3 text-sm text-gray-600">
          "Explore my portfolio website, crafted with React and Tailwind CSS. Hosted on Vercel with Email.js integration for easy communication, it highlights my projects and skills in a sleek, modern design."
          </p>
          <a href='https://animeshshukla.vercel.app/'>    <button
            type="button"
            className="mt-4 rounded-sm bg-rose-500 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-sky-500/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            view
          </button></a>
        </div>
      </div>
      <div className="rounded-md border neon-border bg-white shadow-md transition-transform transform hover:scale-105">
        <img
          src={img4}
          alt="Laptop"
          className="h-[200px] w-full rounded-t-md object-cover"
        />
        <div className="p-4">
          <h1 className="text-lg font-semibold">Monkey Movies</h1>
          <p className="mt-3 text-sm text-gray-600">
          "Monkey Movie: Explore and enjoy films with our site built using React, Node.js, Express, MongoDB, and Firebase for authentication. IMDB integration offers extensive movie data for a rich viewing experience."
          </p>
          <a href=''>    <button
            type="button"
            className="mt-4 rounded-sm bg-rose-500 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-sky-500/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            view
          </button></a>
        </div>
      </div>
    </div>
  );
}
