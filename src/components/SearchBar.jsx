function SearchBar({search,setSearch}){
  
  return(
    <div>
      <input className="input" type="text" value={search} placeholder="Search"  onChange={(e) => setSearch(e.target.value)}/>    
    </div>
  )
}
export default SearchBar