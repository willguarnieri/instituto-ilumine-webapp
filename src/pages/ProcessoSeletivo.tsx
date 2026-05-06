import { useCallback, useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ProcessoInfo } from './ProcessoInfo';
import { ProcessoSeletivoForm } from './ProcessoSeletivoForm';

export function ProcessoSeletivo() {
  const [showForm, setShowForm] = useState(false);

  const openForm = useCallback(() => {
    setShowForm(true);
    window.setTimeout(() => document.getElementById('top')?.scrollIntoView({ behavior: 'smooth' }), 0);
  }, []);

  const back = useCallback(() => {
    setShowForm(false);
    window.setTimeout(() => document.getElementById('top')?.scrollIntoView({ behavior: 'smooth' }), 0);
  }, []);

  return (
    <>
      <Header />

      <section className="min-h-96 py-16 bg-image-before relative z-10">
        <div className="container text-center z-10">
          <h2 className="font-zerocalcare  text-8xl md:text-9xl text-darkGray">Processo Seletivo</h2>
          <p className="font-museoSemiBold text-xl md:text-2xl text-darkGray mb-10 mt-5 max-w-4xl mx-auto uppercase">
            PROCESSO SELETIVO PARA CONTRATAÇÃO DE ASSISTENTE CRIATIVO COM FOCO EM COMUNICAÇÃO
          </p>
          <p className="font-museoLight text-base text-darkGray mb-10 mt-5 max-w-3xl mx-auto">
            O Instituto Ilumine, que atua na promoção de saúde emocional de jovens, potencializando seus talentos e engajando-os na construção de um mundo melhor, está selecionando um/a profissional para compor seu quadro de Assistente Criativo com foco em Comunicação, em tempo integral, 40hs, com contrato regido pela Consolidação das Leis Trabalhistas (CLT).
          </p>
        </div>
      </section>
      <div id="top" />

      {!showForm && <ProcessoInfo onOpenForm={openForm} />}
      {showForm && <ProcessoSeletivoForm onBack={back} />}

      <Footer />
    </>
  );
}
