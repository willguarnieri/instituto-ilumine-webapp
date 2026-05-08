import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Depoimentos } from '../components/Depoimentos';

interface TeamMember {
  name: string;
  role: string;
  photo: string;
  linkedin: string;
  bio: string;
}

const team: TeamMember[] = [
  {
    name: 'Luciana Barrancos',
    role: 'Diretora Executiva',
    photo: '/assets/images/luciana-barrancos.png',
    linkedin: 'https://www.linkedin.com/in/luciana-barrancos/',
    bio: 'Formada em Direito e Administração de Empresas pela FGV, com MBA pela Stanford University. Iniciou a carreira como advogada de M&A no Mattos Filho Advogados e atuou por mais de quatro anos com investimentos de impacto na International Finance Corporation (IFC, World Bank). Trabalhou como Strategy & Operations Associate na Cerebral Inc., startup de saúde mental no Vale do Silício, e foi Gerente Executiva do Instituto Cactus, organização filantrópica pioneira no campo da saúde mental, onde liderou sua fundação e gestão institucional. Foi responsável pelo planejamento estratégico e orçamentário, representação institucional, gestão das áreas de operações, financeiro, TI e RH, definição de novos projetos, parcerias estratégicas e gestão de portfólio. Possui expertise em saúde mental, filantropia, políticas públicas, administração e direito, além de sólida experiência em estratégia e operações, gestão de projetos, investimentos de impacto e iniciativas de impacto social.',
  },
  {
    name: 'Viviane Hoffmann',
    role: 'Coordenadora de Projetos',
    photo: '/assets/images/viviane-hoffmann.png',
    linkedin: 'https://www.linkedin.com/in/viviane-hoffmann-0778a0125/',
    bio: 'Psicóloga com especialização em Neuropsicologia e Doutorado em Psiquiatria e Psicologia Médica pela UNIFESP, incluindo período de pesquisa no Departamento de Psiquiatria da Columbia University, em Nova York. Atuou como Psicóloga Clínica e Coordenadora de Pesquisa na EPM-UNIFESP, além de Professora Colaboradora na Faculdade de Medicina da UnB. No setor público, foi Consultora Técnica na Coordenação de Saúde Mental, Álcool e outras Drogas do Ministério da Saúde e Coordenadora-Geral na Secretaria Nacional de Cuidados e Prevenção às Drogas. Consultora especialista para organismos internacionais como OPAS/OMS, OEA/CICAD, UNODC, PNUD e EUDA em projetos de prevenção, apoio psicossocial em emergências e políticas públicas. Possui expertise em saúde mental, psicopatologia infantil, violência e trauma, prevenção e gestão intersetorial, com atuação em contextos clínicos, acadêmicos, governamentais e organismos internacionais.',
  },
];

const linkedinIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

function TeamMemberModal({ member, onClose }: { member: TeamMember; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div
        className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 z-10"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl leading-none"
          aria-label="Fechar"
        >
          ×
        </button>

        <div className="flex items-center gap-5 mb-6">
          <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-green flex-shrink-0">
            <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
          </div>
          <div>
            <h3 className="font-museoSemiBold text-darkGray text-xl leading-tight">{member.name}</h3>
            <p className="font-museoRegular text-gray-500 text-sm mt-1">{member.role}</p>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 font-museoRegular text-xs text-green hover:underline uppercase mt-2"
            >
              {linkedinIcon} LinkedIn
            </a>
          </div>
        </div>

        {member.bio && (
          <p className="font-museoRegular text-gray-600 text-sm leading-relaxed">
            {member.bio}
          </p>
        )}
      </div>
    </div>
  );
}

export function Home() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <>
      <Header />
      <section>
        <Swiper>
          <SwiperSlide>
            <div
              className="relative h-screen w-screen bg-left bg-no-repeat bg-cover md:bg-center"
              style={{ backgroundImage: 'url(/assets/images/banner-home-1.png)' }}
            >
              <div className="containter absolute z-10 top-0 left-0 max-w-3xl px-10 py-20 md:px-20 md:pt-20 ">
                <h1 className="font-zerocalcare text-6xl text-darkGray max-w-md">Que bom receber você aqui no Ilumine</h1>
                <p className="font-museoRegular text-2xl text-darkGray mt-16 mb-24">
                  Somos uma entidade filantrópica, sem fins lucrativos, fundada em 2019, com a missão de trabalhar a saúde mental de jovens em contextos de vulnerabilidade socioeconômica.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      <section className="min-h-96 bg-yellow text-center py-24">
        <div className="container">
          <h2 className="font-zerocalcare text-6xl text-darkGray">O INSTITUTO</h2>
          <div className="w-8/12 mx-auto">
            <p className="font-museoRegular text-md md:text-lg text-darkGray mb-10 mt-5 mx-auto">
              O <strong>Instituto Ilumine</strong> nasceu em 2019 com um propósito genuíno: <strong>iluminar caminhos de transformação por meio do cuidado com a saúde mental e emocional de jovens</strong>.
            </p>
            <p className="font-museoRegular text-md md:text-lg text-darkGray mb-10 mt-5 mx-auto">
              Desde então, essa <strong>missão</strong> vem se expandindo e inspirando uma rede de pessoas comprometidas em <strong>tornar as escolas espaços de acolhimento, bem-estar e convivência saudável</strong>.
            </p>
            <p className="font-museoRegular text-md md:text-lg text-darkGray mb-10 mt-5 mx-auto">
              Após 4 anos entregando a "Jornada Ilumine", uma jornada de autoconhecimento e promoção de saúde mental desenvolvida internamente, para centenas de jovens de escolas públicas brasileiras e ONGs locais, passamos por uma revisão estratégica em 2024.
            </p>
            <p className="font-museoRegular text-md md:text-lg text-darkGray mb-10 mt-5 mx-auto">
              Em 2025 mapeamos uma iniciativa global de prevenção promissora para implementação a nível de política pública nacional, para jovens de escolas públicas.
            </p>
          </div>
          <Link
            to="/o-instituto"
            className="inline-block font-museoRegular rounded-button bg-pink text-md h-12 w-52 uppercase border-2 border-solid border-pink p-0 leading-[3rem] text-center hover:bg-white hover:text-pink focus:outline-none"
          >
            Saiba Mais &gt;
          </Link>
        </div>
      </section>

      <section className="bg-white py-20 text-center">
        <div className="container">
          <h2 className="font-zerocalcare text-6xl text-darkGray mb-16">NOSSO TIME</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-16">
            {team.map(member => (
              <div key={member.name} className="flex flex-col items-center">
                <button
                  onClick={() => member.bio ? setSelectedMember(member) : undefined}
                  className={`w-40 h-40 rounded-full overflow-hidden border-4 border-green mb-4 transition-transform duration-200 ${member.bio ? 'cursor-pointer hover:scale-105' : 'cursor-default'}`}
                >
                  <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
                </button>
                <button
                  onClick={() => member.bio ? setSelectedMember(member) : undefined}
                  className={`font-museoSemiBold text-darkGray text-lg ${member.bio ? 'hover:text-green cursor-pointer' : 'cursor-default'}`}
                >
                  {member.name}
                </button>
                <p className="font-museoRegular text-darkGray text-sm mb-3">{member.role}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-museoRegular text-sm text-green hover:underline uppercase"
                >
                  {linkedinIcon} LinkedIn
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedMember && (
        <TeamMemberModal member={selectedMember} onClose={() => setSelectedMember(null)} />
      )}

      <section className="min-h-96 bg-white py-36 relative">
        <div className="container grid grid-cols-1 md:grid-cols-2 relative gap-6 justify-items-center">
          <div className="flex-shrink-0 grid justify-center flower-mask w-max">
            <img src="/assets/images/joven-home.png" alt="" />
          </div>
          <div className="text-start pt-10 ml-4 md:pt-4 lg:pt-10">
            <h2 className="font-zerocalcare text-6xl text-green">PARTICIPE</h2>
            <p className="font-museoRegular text-xl md:text-2xl text-darkGray mb-6 mt-5 w-4/5">
              O <strong>Instituto Ilumine</strong> acredita na força das parcerias para promover saúde mental e bem-estar nas escolas.
            </p>
            <p className="font-museoRegular text-xl md:text-2xl text-darkGray mb-6 w-4/5">
              Se você é <strong>gestor, educador ou profissional</strong> de uma <strong>ONG, Instituto, Escola Pública ou órgão público</strong>, <strong>entre em contato com a gente</strong> e descubra como podemos atuar juntos na construção de ambientes escolares mais saudáveis e acolhedores.
            </p>
            <p className="font-museoRegular text-xl md:text-2xl text-darkGray mb-10 w-4/5">
              E se você é <strong>jovem</strong>, também pode nos procurar. Sua voz e seu engajamento fazem parte dessa transformação.
            </p>
            <Link
              to="/como-participar/jovens"
              className="inline-block font-museoRegular rounded-button bg-green text-md mr-4 mb-4 h-12 w-5/12 lg:w-52 uppercase border-2 border-solid border-green p-0 leading-[3rem] text-center hover:bg-white hover:text-green focus:outline-none"
            >
              Jovens &gt;
            </Link>
            <Link
              to="/como-participar/educador"
              className="inline-block font-museoRegular rounded-button bg-orange text-md h-12 w-6/12 lg:w-52 uppercase border-2 border-solid border-orange p-0 leading-[3rem] text-center hover:bg-white hover:text-orange focus:outline-none"
            >
              Educadores &gt;
            </Link>
          </div>
        </div>
        <div className="bg-circle absolute z-10 -right-52 -bottom-52" />
      </section>

      <section className="min-h-96 py-20 md:py-40 max-w-4xl mx-auto">
        <Depoimentos />
      </section>

      <Footer />
    </>
  );
}
