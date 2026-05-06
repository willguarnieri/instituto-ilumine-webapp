import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { CONTACT_EMAIL } from '../config/site';

interface FormValues {
  nome: string;
  email: string;
  telefone: string;
  assunto: string;
  mensagem: string;
}

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mnjwzdog';

export function FaleConosco() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, touchedFields, isSubmitted, isSubmitting },
  } = useForm<FormValues>({ mode: 'onChange' });
  const [showSuccess, setShowSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const showFieldError = (name: keyof FormValues) =>
    (touchedFields[name] || isSubmitted) && errors[name];

  async function onSubmit(data: FormValues) {
    setSubmitError(false);
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: data.nome,
          email: data.email,
          whatsapp: data.telefone,
          subject: data.assunto,
          message: data.mensagem,
        }),
      });
      if (response.ok) {
        setShowSuccess(true);
        reset();
      } else {
        setSubmitError(true);
      }
    } catch {
      setSubmitError(true);
    }
  }

  return (
    <>
      <Header />
      <section className="relative">
        <div className="container md:w-8/12 mx-auto py-16 md:py-32">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-4/12 px-2 mb-4">
              <div className="flex items-center justify-center">
                <div>
                  <h1 className="font-zerocalcare text-6xl text-pink mb-4">Fale conosco!</h1>
                  <p className="mb-24 font-museoRegular text-lightGray">{CONTACT_EMAIL}</p>
                </div>
              </div>
            </div>
            <form className="w-full lg:w-8/12 px-2 mb-4 md:pl-12" onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="block md:grid md:grid-flow-col">
                <div className="px-4">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="NOME*"
                      className="bg-transparent outline-none placeholder-lightGray border border-green text-lightGray rounded-3xl px-6 py-3 w-full mb-5"
                      {...register('nome', { required: true, minLength: 4 })}
                    />
                    {showFieldError('nome') && errors.nome?.type === 'required' && (
                      <div className="text-xs text-orange absolute feedback-text">Campo Obrigatório.</div>
                    )}
                    {showFieldError('nome') && errors.nome?.type === 'minLength' && (
                      <div className="text-xs text-orange absolute feedback-text">Campo muito curto.</div>
                    )}
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      placeholder="E-MAIL*"
                      className="bg-transparent outline-none placeholder-lightGray border border-green text-lightGray rounded-3xl px-6 py-3 w-full mb-5"
                      {...register('email', {
                        required: true,
                        pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                      })}
                    />
                    {showFieldError('email') && errors.email?.type === 'required' && (
                      <div className="text-xs text-orange absolute feedback-text">Campo Obrigatório.</div>
                    )}
                    {showFieldError('email') && errors.email?.type === 'pattern' && (
                      <div className="text-xs text-orange absolute feedback-text">E-mail inválido.</div>
                    )}
                  </div>
                </div>

                <div className="px-4">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="WHATSAPP*"
                      className="bg-transparent outline-none placeholder-lightGray border border-green text-lightGray rounded-3xl px-6 py-3 w-full mb-5"
                      {...register('telefone', { required: true })}
                    />
                    {showFieldError('telefone') && (
                      <div className="text-xs text-orange absolute feedback-text">Campo Obrigatório.</div>
                    )}
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      placeholder="ASSUNTO*"
                      className="bg-transparent outline-none placeholder-lightGray border border-green text-lightGray rounded-3xl px-6 py-3 w-full mb-5"
                      {...register('assunto', { required: true, minLength: 4 })}
                    />
                    {showFieldError('assunto') && errors.assunto?.type === 'required' && (
                      <div className="text-xs text-orange absolute feedback-text">Campo Obrigatório.</div>
                    )}
                    {showFieldError('assunto') && errors.assunto?.type === 'minLength' && (
                      <div className="text-xs text-orange absolute feedback-text">Campo muito curto.</div>
                    )}
                  </div>
                </div>
              </div>

              <div className="px-4 mb-4">
                <div className="relative">
                  <textarea
                    placeholder="MENSAGEM*"
                    className="h-36 resize-none bg-transparent outline-none placeholder-lightGray border border-green text-lightGray rounded-3xl px-6 py-3 w-full"
                    {...register('mensagem', { required: true, minLength: 4 })}
                  />
                  {showFieldError('mensagem') && errors.mensagem?.type === 'required' && (
                    <div className="text-xs text-orange absolute feedback-text-mensagem">Campo Obrigatório.</div>
                  )}
                  {showFieldError('mensagem') && errors.mensagem?.type === 'minLength' && (
                    <div className="text-xs text-orange absolute feedback-text-mensagem">Campo muito curto.</div>
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="cursor-pointer float-right font-museoRegular rounded-button bg-green text-md mr-4 mb-4 h-12 w-5/12 lg:w-52 uppercase border-2 border-solid border-green p-0 text-center hover:bg-white hover:text-green disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'ENVIANDO...' : 'ENVIAR'}
              </button>

              <div className="clear-both">
                {showSuccess && (
                  <div className="feedback text-md text-green">Mensagem enviada com sucesso! Em breve retornaremos.</div>
                )}
                {submitError && (
                  <div className="feedback text-md text-orange">Erro ao enviar. Tente novamente ou entre em contato pelo e-mail.</div>
                )}
                {isSubmitted && !showSuccess && Object.keys(errors).length > 0 && (
                  <div className="feedback text-md text-orange">O formulário contém erros. Por favor verifique.</div>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
