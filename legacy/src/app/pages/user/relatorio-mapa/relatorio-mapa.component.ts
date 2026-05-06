import { RelatorioMapa, TIPO_DIMENSAO, DimensaoModel } from 'src/app/models/relatorio-mapa.model';
import { Component, OnInit } from '@angular/core';
import { TesteMapaService } from 'src/app/services/teste-mapa.service';
import { AuthService } from 'src/app/auth/auth.service';
import { UsersService } from 'src/app/services/users.service';
import { UserProfile } from 'src/app/models/user.model';


@Component({
  selector: 'app-relatorio-mapa',
  templateUrl: './relatorio-mapa.component.html',
  styleUrls: ['./relatorio-mapa.component.css'],
  host: { 'class': 'w-full' }
})

export class RelatorioMapaComponent implements OnInit {

  loading: boolean = true;
  testeFeito: boolean = false;
  exibirRelatorio: boolean = false;
  cadastroFinalizado: boolean = false;
  relatorioMapaSaudeBemEstar: DimensaoModel[]
  relatorioMapaApoioSocialFamiliar: DimensaoModel[]
  relatorioMapaIdentidadeSocial: DimensaoModel[]
  relatorioMapaHabilidadesSocioemocionais: DimensaoModel[]
  dataConclusao: Date

  constructor(private testeMapa: TesteMapaService, private userService: UsersService, private authService: AuthService) { }

  ngOnInit(): void {

    const currentUser = this.authService.getCurrentUser();

    this.userService.getById(currentUser.id)
      .subscribe((response: UserProfile) => {
        this.cadastroFinalizado = response.cpf !== null && response.cpf !== '';
        if (this.cadastroFinalizado == true) {

          this.testeMapa.getById(currentUser.id).subscribe(
            response => {

              this.dataConclusao = response.dataConclusao
              this.relatorioMapaSaudeBemEstar = response.dimensoes.filter((obj) => {
                return obj.grupo === TIPO_DIMENSAO.SaudeBemEstar
              });

              this.relatorioMapaApoioSocialFamiliar = response.dimensoes.filter((obj) => {
                return obj.grupo === TIPO_DIMENSAO.ApoioSocialFamiliar
              });

              this.relatorioMapaIdentidadeSocial = response.dimensoes.filter((obj) => {
                return obj.grupo === TIPO_DIMENSAO.IdentidadeSocial
              });

              this.relatorioMapaHabilidadesSocioemocionais = response.dimensoes.filter((obj) => {
                return obj.grupo === TIPO_DIMENSAO.HabilidadesSocioemocionais
              });

              if (response.dimensoes.length > 0) {
                this.exibirRelatorio = true;
              }
              else {
                this.testeFeito = true;
              }

              this.loading = false;
            },
            error => {
              this.exibirRelatorio = false;
              this.testeFeito = false;
              this.loading = false;
            });
        }
      });
  }

  exibirDetalhe(obj: DimensaoModel) {
    const newValue = !obj.exibirDetalhe;

    this.relatorioMapaSaudeBemEstar.forEach((item) => {
      item.exibirDetalhe = false;
    });
    this.relatorioMapaApoioSocialFamiliar.forEach((item) => {
      item.exibirDetalhe = false;
    });
    this.relatorioMapaIdentidadeSocial.forEach((item) => {
      item.exibirDetalhe = false;
    });
    this.relatorioMapaHabilidadesSocioemocionais.forEach((item) => {
      item.exibirDetalhe = false;
    });

    obj.exibirDetalhe = newValue;
  }

  getClassification(classification) {
    if (classification == 'Inferior') {
      return 'level-1'
    }
    else if (classification == 'Médio Inferior') {
      return 'level-2'
    }
    else if (classification == 'Médio') {
      return 'level-3'
    }
    else if (classification == 'Médio Superior') {
      return 'level-4'
    }
    else {
      return 'level-5'
    }
  }
}