

function Navbar() {
    return (
      <nav className="flex gap-8 px-1 py-1 shadow-[rgba(0,0,0,1)_0px_32px_17px_-30px]">
        <div className="flex justify-between items-center w-full px-12">
          <h1 className="">nerd books</h1>
          <ul className="flex flex-row gap-8">
            <li>home</li>
            <li>shop</li>
          </ul>
        </div>
      </nav>
    )
}

export default Navbar;