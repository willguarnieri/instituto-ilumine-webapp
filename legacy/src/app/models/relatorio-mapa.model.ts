export type RelatorioMapa = {
    dataConclusao: Date;
    dimensoes: DimensaoModel[]
    

}

export type DimensaoModel = {
    id: number
    dimensao: string
    pontuacao: number
    classificacao: string
    descricao: string
    confiabilidade: string
    grupo: TIPO_DIMENSAO
    exibirDetalhe: boolean
}

export enum TIPO_DIMENSAO{
    
    'SaudeBemEstar' = 0,
    'ApoioSocialFamiliar' = 1,
    'IdentidadeSocial' = 2,
    'HabilidadesSocioemocionais' = 3,
    'VulnerabilidadeSocial' = 4
}