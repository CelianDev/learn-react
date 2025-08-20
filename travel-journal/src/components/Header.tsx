function Header() {
  return(
    <header className="bg-red-400 p-4 flex flex-row justify-center items-center gap-2">
      <img className="size-10" src="./src/assets/globe.png"></img>
      <span className="text-white">my travel journal.</span>
    </header>
  )
}

export default Header