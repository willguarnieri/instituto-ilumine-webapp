import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function ComoParticipar() {
  return (
    <>
      <Header />
      <section
        className="pt-40 md:pt-80 pb-10 bg-no-repeat bg-snowWhite bg-responsive"
        style={{ backgroundImage: 'url(/assets/images/header-decoration.png)' }}
      >
        <div className="container mx-auto w-8/12 text-right">
          <h1 className="font-zerocalcare text-8xl text-green">Saiba como participar</h1>
        </div>
      </section>

      <section className="py-24 bg-snowWhite">
        <div className="container w-11/12 md:w-8/12">
          <div className="w-10/12">
            <p className="text-darkGray font-museoRegular mb-6">
              Olá! Que legal que você se interessou em participar com a gente dessa jornada de cuidado emocional. A nossa plataforma disponibiliza trilhas de conteúdo e práticas em temas como: autoconhecimento, saúde integral, projeto de vida, competências sócio-emocionais e felicidade.
            </p>
            <p className="text-darkGray font-museoRegular mb-12">
              Disponibilizamos essas trilhas para jovens e educadores de escolas públicas, institutos e ONGs que trabalham com público entre 14 e 24 anos. Para participar basta preencher os dados no link abaixo e voce recebera login e senha para acessar o conteúdo.
            </p>
            <a
              href="https://forms.gle/vfZe43cCF7QKDPb97"
              target="_blank"
              rel="noreferrer"
              className="inline-block font-museoRegular rounded-button bg-green text-md mr-4 mb-4 h-12 w-full md:w-5/12 lg:w-52 uppercase border-2 border-solid border-green px-4 py-2 text-center hover:bg-white hover:text-green focus:outline-none"
            >
              Formulário &gt;
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
