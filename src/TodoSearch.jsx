
function TodoSearch({searchValue,setSearchValue}) {

  // Getting the value of the seach input
  const searchInput = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <input type="text" placeholder="Cortar cebolla" className='w-full border-2 border-gray-300 rounded-md p-2' 
    value={searchValue}
    onChange={searchInput}
    />
  );
}

export  {TodoSearch};