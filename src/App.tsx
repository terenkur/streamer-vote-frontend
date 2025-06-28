import { useEffect, useState } from "react";

type GameEntry = {
  game: string;
  votes: number;
  voters: string[];
};

export default function App() {
  const [games, setGames] = useState<GameEntry[]>([]);

  useEffect(() => {
    fetch("/games/details")
      .then((res) => res.json())
      .then(setGames);
  }, []);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Голосование за игры 🎮</h1>
      <div className="space-y-4">
        {games.map((g) => (
          <div key={g.game} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{g.game}</h2>
            <p className="text-sm text-gray-600">Голосов: {g.votes}</p>
            <ul className="mt-2 text-sm text-gray-700 list-disc ml-4">
              {g.voters.map((voter) => (
                <li key={voter}>{voter}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
