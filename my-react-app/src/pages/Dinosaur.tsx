import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const Dinosaur = () => {
  const { selectedDinosaur } = useParams();
  const [dinosaur, setDino] = useState({ name: "", description: "" });

  useEffect(() => {
    (async () => {
      const resp = await fetch(`/api/dinosaurs/${selectedDinosaur}`);
      console.log("response", resp);
      const dino = await resp.json();
      setDino(dino);
    })();
  }, [selectedDinosaur]);
  return (
    <div>
      <h1>{dinosaur.name}</h1>
      <p>{dinosaur.description}</p>
      <Link to="/">Back to all dinosaurs</Link>
    </div>
  );
};
