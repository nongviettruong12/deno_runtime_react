import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Index = () => {
  const [dinosaurs, setDinosaurs] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(`/api/dinosaurs/`);
      const allDinosaurs = await response.json();
      setDinosaurs(allDinosaurs);
    })();
  }, []);
  return (
    <main id="content">
      <h1>🦕 Dinosaur ap</h1>
      <p> click on a dinosaur below to learn more.</p>
      {dinosaurs.map((dinosaur: { name: string; description: string }) => {
        return (
          <Link
            to={`/${dinosaur.name.toLowerCase()}`}
            key={dinosaur.name}
            className="btn-primary"
          >
            {dinosaur.name}
          </Link>
        );
      })}
    </main>
  );
};
