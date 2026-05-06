import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MentoradosService } from 'src/app/services/mentorados.service';

@Component({
  selector: 'app-cadastre-se',
  templateUrl: './cadastre-se.component.html',
  styleUrls: ['./cadastre-se.component.css']
})
export class CadastreSeComponent implements OnInit {

  showError: boolean = false;
  showSuccess: boolean = false;
  mensagemErro: string = '';
 
  constructor( private formBuilder: FormBuilder, private mentoradosService: MentoradosService) { }

  ngOnInit(): void {
  }

  cadastroForm = this.formBuilder.group({
    nome: ['', [Validators.required, Validators.minLength(4)]],
    email: [
      '',
      [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
      ],
    ],
    ciente: [false, [Validators.required]],
  });

  get nome(){
    return this.cadastroForm.get('nome');
  }

  get email(){
    return this.cadastroForm.get('email');
  }

  get ciente(){
    return this.cadastroForm.get('ciente');
  }

  public submit() {
    this.showError = false;
    this.showSuccess = false;

    if (this.cadastroForm.valid) {
      const model = {
        nome: this.cadastroForm.value.nome,
        email: this.cadastroForm.value.email,
        
      };
      this.mentoradosService.createUser(model).subscribe((response) => {
        console.log(response)
        this.showSuccess = true;
      },error => {
        this.showSuccess = false;
        this.showError = true;
        this.mensagemErro = error.error;
        console.log(error)
      });
    } else {
      
      Object.keys(this.cadastroForm.controls).forEach(field => {
        const control = this.cadastroForm.get(field);
        control.markAsTouched({ onlySelf: true });
      });
    }
  }
}