import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function FacaParte() {
  return (
    <>
      <Header />
      <div className="bg-veryLightOrange">
        <section className="min-h-96  py-24 px-4">
          <div className="container text-center">
            <h2 className="font-zerocalcare text-6xl text-darkGray">Faça Parte</h2>
            <p className="font-museoRegular text-2xl md:text-lg text-darkGray mb-10 mt-5 max-w-lg mx-auto">
              Buscamos parceiros que se identifiquem com o propósito da promoção e prevenção em saúde mental e emocional para jovens em contextos de vulnerabilidade. Quer fazer parte dessa rede?
            </p>
          </div>
        </section>

        <section className="min-h-96  py-12 px-4" id="fazer-parte">
          <div className="container max-w-5xl">
            <div className="max-w-2xl">
              <p className="font-museoLight text-base text-darkGray mb-10 mt-5 mx-auto">
                Se você é <strong>profissional ou estudante</strong> e faz parte de uma <strong>escola pública, organização social, instituição parceira ou órgão governamental</strong> interessado em conhecer e/ou participar do projeto <strong>Ilumine</strong>, entre em contato com a gente pelo e-mail <strong>contato@institutoilumine.com.br</strong>.
              </p>
              <p className="font-museoLight text-base text-darkGray mb-10 mt-5 mx-auto">
                <strong>Ajude o Ilumine a chegar ainda mais longe!</strong> Com sua doação, podemos ampliar o impacto dos nossos projetos e fortalecer o cuidado com jovens em todo o país. <strong>Faça sua contribuição</strong> via PIX: CNPJ 34.957.392/0001-01.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
