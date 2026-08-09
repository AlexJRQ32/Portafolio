import './Topbar.css'

export function Topbar() {
  return(
    <>
      <section className='topbar'>
        <div className='logo'>
          <i className="fa-solid fa-code logo-icon" />
          <p>
            CodeCraft
          </p>
        </div>
        <nav className='navbar'>
          <ul>
            <li>
              <a href="#">
                Home
              </a>
            </li>
            <li>
              <a href="#About">
                About
              </a>
            </li>
            <li>
              <a href="#Skills">
                Skills
              </a>
            </li>
            <li>
              <a href="#Projects">
                Projects
              </a>
            </li>
            <li>
              <a href="#Blog">
                Blog
              </a>
            </li>
            <li>
              <a href="#Contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <button className='btn-hire'>
          Hire Me
        </button>
      </section>
    </>
  )
}