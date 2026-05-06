import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  const [displayMenu, setDisplayMenu] = useState(false);

  return (
    <header
      className={`h-20 bg-snowWhite shadow relative lg:static z-30 ${displayMenu ? 'shadow-none' : 'shadow'}`}
    >
      <div className="container flex items-center justify-between h-full">
        <Link to="/" className="w-6/12 lg:w-3/12 h-full relative cursor-pointer z-20 ">
          <img
            className="absolute left-1 lg:left-2 xl:left-20 -top-6"
            src="/assets/images/logo-horizontal.png"
            alt="Instituto Ilumine"
          />
        </Link>

        <button
          type="button"
          className="lg:hidden text-gray-500 w-10 h-10 relative focus:outline-none bg-snowWhite"
          onClick={() => setDisplayMenu((v) => !v)}
          aria-label="Abrir menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <nav
          className={`font-museoRegular text-xs text-lightGray uppercase items-center bg-snowWhite
     shadow w-full absolute top-20 right-0 flex-col lg:max-h-16 lg:shadow-none lg:flex-row lg:text-center lg:w-10/12 lg:relative lg:top-0 ${
       displayMenu ? 'flex' : 'hidden lg:flex'
     }`}
        >
          <ul className="items-center text-center flex flex-col lg:max-h-16 lg:flex-row flex-1 lg:w-8/12">
            <li className="nav-link lg:border-r">
              <Link to="/o-instituto" onClick={() => setDisplayMenu(false)}>
                <i className="icon icon-sun bg-veryLightGray mr-2 w-4 h-4" />
                O Instituto
              </Link>
            </li>
            <li className="nav-link lg:border-r">
              <Link className="inline-flex items-center" to="/como-contribuir" onClick={() => setDisplayMenu(false)}>
                <i className="icon icon-tap bg-veryLightGray mr-3 w-4 h-4" />
                Como Contribuir
              </Link>
            </li>
            <li className="nav-link lg:border-r">
              <Link className="inline-flex items-center" to="/fale-conosco" onClick={() => setDisplayMenu(false)}>
                <i className="icon icon-message bg-veryLightGray mr-3 w-4 h-4" />
                Contato
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
