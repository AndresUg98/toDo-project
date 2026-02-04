
function TodoCounter({total, completed}) {
  return (
    <h1 className="text-2xl font-bold">Has completado {completed} de {total} TODOs</h1>
  );
}

export  {TodoCounter};