import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function Institucional() {
  return (
    <>
      <Header />

      <section className="min-h-96 bg-yellow py-10 relative">
        <div className="relative z-20 h-full w-screen containter grid grid-cols-1 md:grid-cols-2">
          <div className="px-10 pt-10 md:px-20 md:pt-20 ">
            <h1 className="font-zerocalcare text-8xl text-darkGray max-w-xs">Nós somos o Ilumine,</h1>
            <p className="font-museoRegular text-2xl text-darkGray mt-16 mb-24 max-w-md">
              Um <strong>instituto social</strong> dedicado a <strong>cuidar da saúde mental e emocional de jovens</strong>, inspirando <strong>mudanças positivas nas escolas e nas comunidades</strong>.
            </p>
          </div>
          <div className="hidden md:grid items-center">
            <img src="/assets/images/person-jumping.png" alt="" />
          </div>
        </div>
        <div
          className="absolute z-10 -bottom-10 left-0 min-h-96 h-full w-full bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: 'url(/assets/images/line-rainbow.png)' }}
        />
      </section>

      <section className="min-h-96 bg-white py-24 relative">
        <div className="containter relative z-20 justify-center max-w-4xl w-screen px-10 pb-10  grid  grid-cols-1 md:grid-cols-3 gap-9 justify-items-center mx-auto">
          <h1 className="font-museoSemiBold text-3xl text-darkGray text-right">
            Pequenas mudanças são capazes de promover grandes transformações.
          </h1>
          <p className="font-museoLight text-base text-darkGray col-span-2 text">
            Acreditamos que cuidar da saúde, do bem-estar e das relações dentro da escola é o caminho para construir comunidades mais humanas, seguras e inspiradoras.
            <br />
            <br />
            Quando há escuta, acolhimento e confiança, a escola se transforma em um espaço de pertencimento, onde cada estudante pode se sentir valorizado, fortalecer vínculos e sonhar com novos futuros possíveis.
            <br />
            <br />
            Os jovens têm um poder transformador imenso: são protagonistas de mudanças que ultrapassam os muros da escola e alcançam toda a sociedade. Por isso, <strong>fortalecer a saúde emocional, o bem-estar coletivo e a convivência entre as pessoas é investir em um mundo mais empático e solidário.</strong>
            <br />
            No Ilumine, <strong>acolhemos vulnerabilidades, promovemos conexões, inspiramos coragem, cultivamos confiança e amplificamos vozes.</strong> Assim, o Ilumine acende caminhos de cuidado e transformação coletiva.
            <br />
            <br />
            Iluminar para despertar. Iluminar para expandir. Iluminar para guiar. Iluminar para encorajar. Iluminar para empoderar. Iluminar para transformar.
            <br />
            <br />
            Ilumine. Mentes que sonham transformam mundos.
          </p>
        </div>

        <div className="containter relative z-20 justify-center max-w-4xl w-screen px-10 pb-10 grid grid-cols-1 md:grid-cols-3 gap-9 justify-items-center mx-auto">
          <h2 className="font-museoSemiBold text-3xl text-darkGray text-right">Nossa missão</h2>
          <p className="font-museoLight text-base text-darkGray col-span-2">
            <strong>Trabalhar a saúde mental de jovens em contextos de vulnerabilidade socioeconômica.</strong>
            <br />
            <br />
            Atuamos em escolas públicas brasileiras com o Programa Ilumine, que promove saúde mental e convivência de forma contínua e integrada à rotina escolar, com base em evidências.
          </p>
        </div>

        <div
          className="absolute z-10 -bottom-40 md:-bottom-36 left-0 h-56 md:h-96 w-full bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: 'url(/assets/images/line-rainbow-small.png)' }}
        />
      </section>

      <section
        className="min-h-96 py-24 bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: 'url(/assets/images/light-bg.png)' }}
      >
        <div className="relative w-screen">
          <div className="containter px-10 pt-32 md:px-20 md:pt-20">
            <div className="flex flex-wrap justify-center">
              <img src="/assets/icons/curved-text.svg" className="hidden md:inline-block" alt="Mentes que sonham" />
              <img src="/assets/icons/mentes-que-sonham.svg" className=" inline-block md:hidden" alt="Mentes que sonham" />
              <img
                src="/assets/icons/transformam-mundos.svg"
                className="inline-block mt-12 md:hidden transform -rotate-6"
                alt="Transformam mundos"
              />
            </div>
            <div className="flex flex-wrap justify-center mt-28">
              <div
                className="bg-center bg-no-repeat bg-contain w-56 h-28 text-center flex items-center mb-6 px-4"
                style={{ backgroundImage: 'url(/assets/images/bg-yellow.png)' }}
              >
                <p className="font-zerocalcare text-4xl text-white">Melhorar o clima escolar e a convivência</p>
              </div>
              <div
                className="bg-center bg-no-repeat bg-contain w-56 h-28 text-center flex items-center mb-6 px-4"
                style={{ backgroundImage: 'url(/assets/images/bg-pink.png)' }}
              >
                <p className="font-zerocalcare text-4xl text-white">Promover Conexões</p>
              </div>
              <div
                className="bg-center bg-no-repeat bg-contain w-56 h-28 text-center flex items-center mb-6 px-4"
                style={{ backgroundImage: 'url(/assets/images/bg-orange.png)' }}
              >
                <p className="font-zerocalcare text-4xl text-white">Fortalecer o protagonismo jovem</p>
              </div>
              <div
                className="bg-center bg-no-repeat bg-contain w-56 h-28 text-center flex items-center mb-6 px-6"
                style={{ backgroundImage: 'url(/assets/images/bg-green.png)' }}
              >
                <p className="font-zerocalcare text-4xl text-white">Fortalecer o desenvolvimento integral</p>
              </div>
              <div
                className="bg-center bg-no-repeat bg-contain w-56 h-28 text-center flex items-center mb-6 px-6"
                style={{ backgroundImage: 'url(/assets/images/bg-yellow-2.png)' }}
              >
                <p className="font-zerocalcare text-4xl text-white">Melhorar habilidades sociais</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-96 bg-white py-24">
        <div className="containter justify-center max-w-4xl w-screen px-10 pt-10  grid grid-cols-1 md:grid-cols-3 gap-9 justify-items-center mx-auto">
          <h1 className="font-museoSemiBold text-3xl text-darkGray text-right">Como funciona?</h1>
          <p className="font-museoLight text-base text-darkGray col-span-2">
            A atuação do Ilumine acontece por meio de <strong>parcerias com Secretarias de Educação, com foco em escolas públicas</strong> que atendam <strong>adolescentes e jovens</strong> dos <strong>anos finais do Ensino Fundamental e do Ensino Médio.</strong>
            <br />
            <br />
            Juntos, desenvolvemos <strong>ações e experiências educativas</strong> voltadas ao fortalecimento da <strong>saúde, do bem-estar e da convivência</strong> nas escolas.
            <br />
            <br />
            Nossos conteúdos e metodologias estimulam a <strong>escuta ativa, o protagonismo juvenil e o cuidado coletivo</strong>, explorando temas como <strong>saúde mental, relações positivas, convivência, empatia, cidadania e futuro</strong>.
            <br />
            <br />
            Todas as atividades têm como base o protagonismo jovem: são práticas, colaborativas e conectadas com o dia a dia escolar — porque acreditamos que <strong>escolas que cuidam formam gerações mais conscientes, solidárias e transformadoras.</strong>
            <br />
            <br />
            <strong>Vamos juntos construir escolas mais saudáveis, acolhedoras e inspiradoras?</strong>
          </p>
        </div>
      </section>

      <section className="min-h-96 bg-veryLightOrange py-24 px-4">
        <div className="container max-w-5xl grid gap-4 col-auto row-auto md:grid-cols-12 md:grid-rows-6">
          <figure className="col-span-3 row-span-3">
            <img className="w-full h-full object-cover" src="/assets/images/good-vibes.png" alt="" />
          </figure>
          <figure className="col-span-2 row-span-2">
            <img className="w-full h-full object-cover" src="/assets/images/girl.png" alt="" />
          </figure>
          <figure className="col-span-1 row-span-1">
            <img className="w-full h-full object-cover" src="/assets/images/girl.png" alt="" />
          </figure>
          <figure className="col-span-2 row-span-1" />
          <figure className="col-span-3 row-span-3">
            <img className="w-full h-full object-cover" src="/assets/images/girls-sunflower.png" alt="" />
          </figure>
          <figure className="col-span-1 row-span-2" />
          <figure className="col-span-1 row-span-1">
            <img className="w-full h-full object-cover" src="/assets/images/girls-sunflower.png" alt="" />
          </figure>
          <figure className="col-span-1 row-span-1">
            <img className="w-full h-full object-cover" src="/assets/images/balloons-smile.png" alt="" />
          </figure>
          <figure className="col-span-1 row-span-1" />
          <figure className="col-span-2 row-span-2">
            <img className="w-full h-full object-cover" src="/assets/images/balloons-smile.png" alt="" />
          </figure>
          <figure className="col-span-3 row-span-3">
            <img className="w-full h-full object-cover" src="/assets/images/balloons.png" alt="" />
          </figure>
          <figure className="col-span-1 row-span-1">
            <img className="w-full h-full object-cover" src="/assets/images/balloons-smile.png" alt="" />
          </figure>
          <figure className="col-span-1 row-span-1">
            <img className="w-full h-full object-cover" src="/assets/images/girl.png" alt="" />
          </figure>
          <figure className="col-span-2 row-span-2">
            <img className="w-full h-full object-cover" src="/assets/images/girls-sunflower.png" alt="" />
          </figure>
          <figure className="col-span-2 row-span-2">
            <img className="w-full h-full object-cover" src="/assets/images/good-vibes.png" alt="" />
          </figure>
          <figure className="col-span-2 row-span-2">
            <img className="w-full h-full object-cover" src="/assets/images/girl.png" alt="" />
          </figure>
          <figure className="col-span-1 row-span-1" />
          <figure className="col-span-1 row-span-1" />
          <figure className="col-span-1 row-span-1">
            <img className="w-full h-full object-cover" src="/assets/images/good-vibes.png" alt="" />
          </figure>
          <figure className="col-span-4 row-span-1" />
          <figure className="col-span-1 row-span-1">
            <img className="w-full h-full object-cover" src="/assets/images/girl.png" alt="" />
          </figure>
          <figure className="col-span-7 row-span-1" />
        </div>
      </section>

      <Footer />
    </>
  );
}
