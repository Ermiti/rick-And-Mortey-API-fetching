/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from 'react';
import React from 'react';
import {IAPP} from './IApp';
export default function People() {
  const [characters , setCharacters] = useState<IAPP[]  | any>();

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Rick and Morty Characters</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {characters.map((character:IAPP) => (
          <div className="bg-white p-4 rounded shadow">
            <img src={character.image} className="w-full h-48 object-cover rounded" />
            <h2 className="text-xl font-bold mt-2">{character.name}</h2>
            <p className="text-gray-700">{character.species}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
