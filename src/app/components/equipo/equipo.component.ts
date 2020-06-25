import { Component, OnInit } from '@angular/core';
import{EquipoService} from '../../services/equipo.service';
import {Equipo} from '../../models/equipos';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalDialogService } from "../../services/modal-dialog.service";

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {

Titulo = "Equipos"
Items: Equipo[] = [];
EstadoForm: string;
FormReg: FormGroup;
submitted = false;
  
  constructor(private equiposServices: EquipoService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.EstadoForm='L';
    this.submitted = false;
    this.getEquipo();
    this.FormReg = this.formBuilder.group({
          IdEquipo:[0],
         EquipoNombre: ['',[Validators.required]],
         EquipoRanking: ['',[Validators.required]]
    });
  }

getEquipo(){
  this.equiposServices.get()
  .subscribe((res:Equipo[])=>{
    this.Items = res;
  });
}

Agregar(){
  window.scroll(0,0);
  this.EstadoForm = 'A';
  this.submitted = false;
}

Grabar(){
  this.submitted = true;
  if(this.FormReg.invalid){
   
    return;
  }
  const itemCopy = { ...this.FormReg.value };
  itemCopy.IdEquipo = 0;
  this.equiposServices.post(itemCopy).subscribe((res:any)=>{
    this.getEquipo();
    this.Volver();
  
  });
}
Volver() {
    this.EstadoForm = "L";
  };
}