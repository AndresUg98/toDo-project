
function TodoList(props) {
  return (
    <>
      <h2 className="text-2xl text-white text-shadow-sm font-semibold bg-cyan-300 rounded-t-xl py-2">Lista de tareas</h2>
      <ul className="flex flex-col gap-8  py-12">
        <li className="flex flex-col gap-8 items-center"> {props.children} </li>
      </ul>
    </>
  );
}

export  {TodoList};