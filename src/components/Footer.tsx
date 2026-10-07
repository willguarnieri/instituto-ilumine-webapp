import { Link } from 'react-router-dom';
export function Footer() {
  return (
    <footer className="h-full bg-darkGray text-white font-museoRegular text-xs uppercase p-4">
      <div className="container md:flex md:items-start h-full py-8">
        <Link to="/" className="cursor-pointer inline-flex justify-center items-center p-6 w-full md:w-3/12">
          <img src="/assets/images/logo-vertical.png" alt="Ilumine" />
        </Link>
        <ul className="flex flex-col justify-center items-center md:items-start md:ml-8 w-full md:w-4/12 md:pt-6">
          <li className="p-3 hover:underline cursor-pointer">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>Início</Link>
          </li>
          <li className="p-3 hover:underline cursor-pointer">
            <Link to="/o-instituto" onClick={() => window.scrollTo(0, 0)}>O Instituto</Link>
          </li>
          <li className="p-3 hover:underline cursor-pointer">
            <Link to="/como-contribuir" onClick={() => window.scrollTo(0, 0)}>Como Contribuir</Link>
          </li>
          <li className="p-3 hover:underline cursor-pointer">
            <Link to="/fale-conosco" onClick={() => window.scrollTo(0, 0)}>Contato</Link>
          </li>
        </ul>
        <div className="flex flex-col items-center md:items-start w-full md:w-5/12 md:pt-6 mt-6 md:mt-0 border-t md:border-t-0 md:border-l border-white/20 md:pl-8">
          <p className="p-3 font-museoRegular text-xs uppercase tracking-wide">Associação Instituto Ilumine</p>
          <p className="p-3 normal-case text-white/70 text-[11px]">CNPJ: 34.957.392/0001-01</p>
          <address className="p-3 not-italic normal-case text-white/70 text-[11px] leading-relaxed">
            Rua Gilberto Sabino, 215, Andar 1, Sala 06
            <br />
            Pinheiros, São Paulo/SP – CEP 05425-020
          </address>
          <a href="mailto:contato@institutoilumine.com.br" className="p-3 hover:underline normal-case">
            contato@institutoilumine.com.br
          </a>
          <a href="https://www.instagram.com/institutoilumine/" target="_blank" rel="noreferrer" className="p-3 hover:underline">
            Instagram
          </a>
          <a href="https://www.linkedin.com/company/institutoilumine" target="_blank" rel="noreferrer" className="p-3 hover:underline">
            LinkedIn
          </a>
          <div className="p-3 mt-2 normal-case text-white/70 text-[10px] leading-relaxed max-w-xs">
            <span className="font-museoSemiBold text-white uppercase text-xs">Atenção:</span>{' '}
            O Instituto Ilumine não oferece acolhimento psicológico. Caso precise de ajuda, ligue para{' '}
            <span className="font-museoSemiBold text-white">188 (CVV)</span> ou acesse{' '}
            <a href="https://www.cvv.org.br" target="_blank" rel="noreferrer" className="underline hover:text-white text-white/70">
              www.cvv.org.br
            </a>
            . Em caso de emergência, procure atendimento em um hospital mais próximo.
          </div>
        </div>
      </div>
    </footer>
  );
}
