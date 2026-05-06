import { AuthService } from 'src/app/auth/auth.service';
import { TIPO_ESCOLARIDADE, TIPO_GENERO, TIPO_INSTITUICAO, TIPO_USUARIO, UserProfile } from './../../../models/user.model';
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-minha-conta',
  templateUrl: './minha-conta.component.html',
  styleUrls: ['./minha-conta.component.scss']
})
export class MinhaContaComponent implements OnInit {

  mostrarInputFoto: boolean = false;
  ready = false;
  angForm: FormGroup;
  generos: Array<string> = Object.keys(TIPO_GENERO).filter(key => isNaN(+key));
  escolaridades: Array<string> = Object.keys(TIPO_ESCOLARIDADE).filter(key => isNaN(+key));
  instituicoes: Array<string> = Object.keys(TIPO_INSTITUICAO).filter(key => isNaN(+key));

  fotoDestaque: any;
  previewUrl: string | ArrayBuffer;

  constructor(private userService: UsersService,
              private authService: AuthService,
              private fb: FormBuilder) {
    this.angForm = this.fb.group({
      id: ['', Validators.required],
      tipo: [0, [Validators.required] ],
      nome: ['', [Validators.required, Validators.minLength(10)] ],
      email: ['', [ Validators.required, Validators.email]],
      cpf: ['', [Validators.required] ],
      rg: ['',  [Validators.required]],
      whatsapp: ['',  [Validators.required]],
      dataNascimento: [''],
      instituicao: [null],
      instituicaoOutros: [''],
      foto: ['']
    });
  }

  ngOnInit(): void {
    const currentUser = this.authService.getCurrentUser();
    this.userService.getById(currentUser.id)
      .subscribe( (response: UserProfile) => {
        this.angForm.controls.id.setValue(response.id);
        this.angForm.controls.tipo.setValue(response.tipo);
        this.angForm.controls.nome.setValue(response.nome);
        this.angForm.controls.email.setValue(response.email);
        this.angForm.controls.cpf.setValue(response.cpf);
        this.angForm.controls.rg.setValue(response.rg);
        this.angForm.controls.whatsapp.setValue(response.whatsApp);
        if (response.dataNascimento) {
          this.angForm.controls.dataNascimento.setValue(response.dataNascimento.substring(0, response.dataNascimento.indexOf('T')));
        }
        this.angForm.controls.instituicao.setValue(response.instituicao);
        this.angForm.controls.instituicaoOutros.setValue(response.instituicaoOutros);
        this.angForm.controls.foto.setValue(response.foto);
        this.ready = true;
      });
  }

  Salvar(): void {
   
    if (this.angForm.valid) {
      console.log(this.angForm.value)
      this.userService.editUser(this.angForm.value, this.fotoDestaque).subscribe(() => {
        this.userService.getById(this.angForm.value.id).subscribe(profile => {
          this.authService.currentUser.userProfile = profile;
          this.authService.currentUser.nome = profile.nome;
        });
      });
    } else {
      Object.keys(this.angForm.controls).forEach(field => {
        const control = this.angForm.get(field);
        control.markAsTouched({ onlySelf: true });
      });
    }
  }

  preview(): void {
    const reader = new FileReader();
    reader.readAsDataURL(this.fotoDestaque);
    reader.onload = (event) => {
      this.previewUrl = reader.result;
    };
  }
}
