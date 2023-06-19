import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AccountService } from 'src/services/account/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[MessageService]
})
export class LoginComponent {
  email: string = "";
  password: string = "";
  verif : boolean = false;


  info: object = {"email": this.email, "password":this.password };

  constructor(private userlogin : AccountService, private router:Router, private messageService: MessageService){}
  testelogin(){

    this.info = {"email": this.email, "password":this.password };
    console.log(this.info);
    this.userlogin.getLogin(this.info).subscribe((res)=>{
      console.log(res)

      if (res.message == "Login realizado com sucesso"){
      localStorage.setItem('id',res.id)
      this.verif = false;
      this.router.navigateByUrl('/admin/dashboard')
      this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Login realizado' });
      }
      else if (res.message == "Senha Errada"){
          this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Senha errada' });
          this.verif = true
      }
      else if (res.message == "Email não existe"){
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Email errado' });
        this.verif = true;
      }
    }
  )}
}
