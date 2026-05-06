import { useForm, type UseFormRegister } from 'react-hook-form';
import { CONTACT_EMAIL } from '../config/site';

export type ProcessoFormValues = {
  email: string;
  nomeCompleto: string;
  telefone: string;
  dataNascimento: string;
  bairro: string;
  cidade: string;
  escolaridade: string;
  curso: string;
  genero: string;
  movimentoSocial: string;
  movimentoSocialDetalhes: string;
  urlRedesSociais1: string;
  urlRedesSociais2: string;
  urlRedesSociais3: string;
  urlRedesSociais4: string;
  influenciadores: boolean;
  influenciadoresDetalhes: string;
  radio: boolean;
  radioDetalhes: string;
  tv: boolean;
  tvDetalhes: string;
  jornal: boolean;
  jornalDetalhes: string;
  revistas: boolean;
  revistasDetalhes: string;
  outros: boolean;
  outrosDetalhes: string;
  pessoasRedesSociais: string;
  urlVideo: string;
  urlCarta: string;
};

const escolaridadeOpts = [
  'Fundamental Completo',
  'Médio Incompleto',
  'Médio Completo',
  'Superior Incompleto',
  'Superior Completo',
];

const generoOpts = [
  'Masculino',
  'Feminino',
  'Homem transgênero',
  'Mulher Transgênero',
  'Homem Transexual',
  'Mulher Transexual',
  'Cisgênero',
  'Não sei responder',
  'Prefiro não responder',
  'Outros',
];

function buildMailBody(v: ProcessoFormValues): string {
  const lines: string[] = ['Inscrição — Processo Seletivo Ilumine', ''];
  (Object.keys(v) as (keyof ProcessoFormValues)[]).forEach((key) => {
    const val = v[key];
    lines.push(`${key}: ${val === true ? 'sim' : val === false ? 'não' : val}`);
  });
  return lines.join('\n');
}

export function ProcessoSeletivoForm({ onBack }: { onBack: () => void }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm<ProcessoFormValues>({
    defaultValues: {
      email: '',
      nomeCompleto: '',
      telefone: '',
      dataNascimento: '',
      bairro: '',
      cidade: '',
      escolaridade: '',
      curso: '',
      genero: '',
      movimentoSocial: '',
      movimentoSocialDetalhes: '',
      urlRedesSociais1: '',
      urlRedesSociais2: '',
      urlRedesSociais3: '',
      urlRedesSociais4: '',
      influenciadores: false,
      influenciadoresDetalhes: '',
      radio: false,
      radioDetalhes: '',
      tv: false,
      tvDetalhes: '',
      jornal: false,
      jornalDetalhes: '',
      revistas: false,
      revistasDetalhes: '',
      outros: false,
      outrosDetalhes: '',
      pessoasRedesSociais: '',
      urlVideo: '',
      urlCarta: '',
    },
  });

  function onSubmit(data: ProcessoFormValues) {
    const body = buildMailBody(data);
    const encoded = encodeURIComponent(body);
    const subject = encodeURIComponent('Processo seletivo — Assistente Criativo');
    const max = 1800;
    if (encoded.length <= max) {
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${encoded}`;
      return;
    }
    void navigator.clipboard.writeText(body).then(() => {
      window.alert(
        'O texto da inscrição foi copiado para a área de transferência (é muito longo para abrir automaticamente no e-mail). Cole no corpo da mensagem após abrir seu cliente de e-mail.',
      );
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}`;
    });
  }

  const inputClass =
    'bg-transparent text-lightGray outline-none placeholder-lightGray border border-veryLightGray rounded-full px-6 min-w-full max-w-96 h-14 focus:border-darkGray focus:text-darkGray';

  return (
    <section>
      <div className="container max-w-5xl py-20 mx-auto">
        <div className="max-w-3xl mx-auto">
          <button
            type="button"
            className="font-museoRegular text-xs text-darkGray uppercase hover:underline cursor-pointer bg-transparent border-none"
            onClick={onBack}
          >
            &lt; voltar
          </button>
        </div>
        <div className="font-museoSemiBold text-darkGray text-center my-10">
          <h3 className="text-2xl">FORMULÁRIO: </h3>
          <p className="text-lg">ASSISTENTE CRIATIVO COM FOCO EM COMUNICAÇÃO</p>
        </div>
        <form id="formInscricao" onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="flex flex-wrap w-11/12 md:grid md:grid-cols-2 md:gap-y-0 md:gap-x-5 md:max-w-2xl lg:max-w-3xl mx-auto text-lightGray text-lg">
            <div className="w-full mb-5">
              <input
                type="email"
                placeholder="E-mail*"
                className={inputClass}
                {...register('email', { required: true, pattern: /.+@.+\..+/ })}
              />
              {isSubmitted && errors.email?.type === 'required' && (
                <div className="text-xs text-orange mt-2 pl-4">Campo Obrigatório.</div>
              )}
              {isSubmitted && errors.email?.type === 'pattern' && (
                <div className="text-xs text-orange mt-2 pl-4">Email inválido.</div>
              )}
            </div>
            <div className="w-full mb-5">
              <input
                type="text"
                placeholder="Nome Completo*"
                className={inputClass}
                {...register('nomeCompleto', { required: true })}
              />
              {isSubmitted && errors.nomeCompleto && (
                <div className="text-xs text-orange mt-2 pl-4">Campo Obrigatório.</div>
              )}
            </div>
            <div className="w-full mb-5">
              <input type="text" placeholder="Telefone*" className={inputClass} {...register('telefone', { required: true })} />
              {isSubmitted && errors.telefone && (
                <div className="text-xs text-orange mt-2 pl-4">Campo Obrigatório.</div>
              )}
            </div>
            <div className="w-full mb-5">
              <input
                type="text"
                placeholder="Data de Nascimento*"
                className={inputClass}
                {...register('dataNascimento', { required: true })}
              />
              {isSubmitted && errors.dataNascimento && (
                <div className="text-xs text-orange mt-2 pl-4">Campo Obrigatório.</div>
              )}
            </div>
            <div className="w-full mb-5">
              <input type="text" placeholder="Bairro em que reside*" className={inputClass} {...register('bairro', { required: true })} />
              {isSubmitted && errors.bairro && (
                <div className="text-xs text-orange mt-2 pl-4">Campo Obrigatório.</div>
              )}
            </div>
            <div className="w-full mb-5">
              <input type="text" placeholder="Cidade em que reside*" className={inputClass} {...register('cidade', { required: true })} />
              {isSubmitted && errors.cidade && (
                <div className="text-xs text-orange mt-2 pl-4">Campo Obrigatório.</div>
              )}
            </div>
            <div className="w-full pb-5">
              <select className={`${inputClass} appearance-none`} {...register('escolaridade', { required: true })}>
                <option value="">Grau de Escolaridade*</option>
                {escolaridadeOpts.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
              {isSubmitted && errors.escolaridade && (
                <div className="text-xs text-orange mt-2 pl-4">Campo Obrigatório.</div>
              )}
            </div>
            <div className="w-full">
              <input type="text" placeholder="Curso" className={`${inputClass} mb-5`} {...register('curso')} />
            </div>
            <div className="w-full pb-4">
              <select className={`${inputClass} appearance-none`} {...register('genero', { required: true })}>
                <option value="">Gênero com que se identifica*</option>
                {generoOpts.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
              {isSubmitted && errors.genero && (
                <div className="text-xs text-orange mt-2 pl-4">Campo Obrigatório.</div>
              )}
            </div>

            <div className="w-full col-span-2 pl-4 md:pl-8 mt-8">
              <p className="font-museoRegular text-lightGray text-lg mb-4">
                Fez ou faz parte de algum movimento social, coletivo ou organização? Se sim, qual?
              </p>
              <div className="inline-flex md:inline-block mr-12 mb-4 gap-4">
                <label className="inline-flex items-center gap-2 cursor-pointer">
                  <input type="radio" value="sim" {...register('movimentoSocial')} />
                  Sim
                </label>
                <label className="inline-flex items-center gap-2 cursor-pointer">
                  <input type="radio" value="nao" {...register('movimentoSocial')} />
                  Não
                </label>
              </div>
              <input type="text" className={`${inputClass} w-10/12`} {...register('movimentoSocialDetalhes')} />
            </div>

            <div className="w-full col-span-2 mt-8">
              <div className="pl-4 md:pl-8 mb-4">
                <p>Redes sociais (Facebook/Instagram/outras)</p>
                <small>(Insira os links abaixo)</small>
              </div>
              <div className="flex flex-wrap md:grid md:grid-cols-2 gap-y-0 gap-x-5">
                <input type="text" className={`${inputClass} mb-5`} {...register('urlRedesSociais1')} />
                <input type="text" className={`${inputClass} mb-5`} {...register('urlRedesSociais2')} />
                <input type="text" className={`${inputClass} mb-5`} {...register('urlRedesSociais3')} />
                <input type="text" className={`${inputClass} mb-5`} {...register('urlRedesSociais4')} />
              </div>
            </div>

            <div className="w-full col-span-2 pl-4 md:pl-8 mb-4 mt-8">
              <div className="mb-4">
                <p>Quais as fontes de informação que você acessa?</p>
              </div>
              <CheckboxRow label="Influenciadores. Quais?" regDetail="influenciadoresDetalhes" regFlag="influenciadores" register={register} />
              <CheckboxRow label="Rádio. Qual?" regDetail="radioDetalhes" regFlag="radio" register={register} />
              <CheckboxRow label="TV. Quais programas?" regDetail="tvDetalhes" regFlag="tv" register={register} />
              <CheckboxRow label="Jornal. Quais?" regDetail="jornalDetalhes" regFlag="jornal" register={register} />
              <CheckboxRow label="Revistas. Quais?" regDetail="revistasDetalhes" regFlag="revistas" register={register} />
              <CheckboxRow label="Outros. Quais?" regDetail="outrosDetalhes" regFlag="outros" register={register} />
            </div>

            <div className="w-full col-span-2 mt-6">
              <p className="pl-4 md:pl-8 mb-4">Cite também algumas pessoas que você adora seguir nas redes sociais! </p>
              <input type="text" className={`${inputClass} w-full`} {...register('pessoasRedesSociais')} />
            </div>

            <div className="w-full col-span-2 flex flex-wrap mt-6 justify-between mb-5">
              <div className="pl-4 md:pl-8 mb-4 md:w-5/12">
                <p>URL do seu vídeo* </p>
                <small>(Faça upload do arquivo no Google Drive e insira aqui o link de compartilhamento) </small>
              </div>
              <div>
                <input type="text" className={inputClass} {...register('urlVideo', { required: true })} />
                {isSubmitted && errors.urlVideo && (
                  <div className="text-xs text-orange mt-2 pl-4">Campo Obrigatório.</div>
                )}
              </div>
            </div>

            <div className="w-full col-span-2 flex flex-wrap mt-8 justify-between items-center mb-5">
              <div className="pl-4 md:pl-8 mb-4 md:w-5/12">
                <p>URL da sua carta de apresentação*</p>
                <small>(Faça upload do arquivo no Google Drive e insira aqui o link de compartilhamento) </small>
              </div>
              <div>
                <input type="text" className={inputClass} {...register('urlCarta', { required: true })} />
                {isSubmitted && errors.urlCarta && (
                  <div className="text-xs text-orange mt-2 pl-4">Campo Obrigatório.</div>
                )}
              </div>
            </div>
          </div>
          <div className="w-full text-center mt-16">
            <button
              type="submit"
              className="font-museoRegular rounded-button w-44 h-14 bg-green text-md uppercase border-2 border-solid border-green text-center focus:outline-none hover:bg-white hover:text-green"
            >
              Enviar &gt;
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function CheckboxRow({
  label,
  regFlag,
  regDetail,
  register,
}: {
  label: string;
  regFlag: keyof ProcessoFormValues;
  regDetail: keyof ProcessoFormValues;
  register: UseFormRegister<ProcessoFormValues>;
}) {
  return (
    <div className="block md:inline-flex w-full items-center justify-between mb-12 md:mb-7">
      <label className="relative text-center inline-flex items-center gap-2 cursor-pointer">
        <input type="checkbox" className="h-5 w-5 cursor-pointer" {...register(regFlag)} />
        {label}
      </label>
      <input
        type="text"
        className="bg-transparent text-lightGray outline-none border-b border-veryLightGray px-2 w-full md:w-7/12 lg:w-8/12 focus:border-darkGray focus:text-darkGray"
        {...register(regDetail)}
      />
    </div>
  );
}
