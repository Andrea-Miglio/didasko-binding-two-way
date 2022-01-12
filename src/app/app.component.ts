import { Component, ViewChild, ElementRef, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  titolo:string = "Inserisci persona"
  @ViewChild("rif_nome") private tagNome:ElementRef;
  @ViewChild("rif_cognome") private tagCognome:ElementRef;
  @ViewChild("rif_eta") private tagEta:ElementRef;

  nome:string;
  cognome:string;
  eta:number;

  inputValori():void{
    this.nome = this.tagNome.nativeElement.value;
    this.cognome = this.tagCognome.nativeElement.value;
    this.eta = this.tagEta.nativeElement.value;
  }

  pulisciValori():void{
    this.tagNome.nativeElement.value = "";
    this.tagCognome.nativeElement.value = "";
    this.tagEta.nativeElement.value = 0;
    this.inputValori();
  }
}
