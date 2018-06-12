import { Component, OnInit,Input, OnChanges, Injectable,EventEmitter,Output } from '@angular/core';
import { ListTareas,constanst} from '../list-tareas';
import { ListTareasService } from '../list-tareas.service';

@Component({
    selector: 'list-child',
    template: `
    <div class="card  mb-3" [ngClass]="{'bg-success': nota.priority.toUpperCase()=='ALTA', 'bg-danger': nota.priority.toUpperCase()=='BAJA', 'bg-primary': nota.priority.toUpperCase()=='MEDIA', 'bg-light': nota.priority.toUpperCase()=='' ||  nota.priority.toUpperCase()=='SIN CONOCER','text-white':nota.priority.toUpperCase()!='SIN CONOCER'}"  style="max-width: 18rem;">
  <div class="card-header">{{nota.id}} - {{nota.name}}</div>
  <div class="card-body">
    <h5 class="card-title">Nombre {{nota.name}}</h5>
    <p class="card-text"> Descripción{{nota.description}}</p>
    <p class="card-text">Costo {{nota.cost}}</p>
    <p class="card-text">Prioridad {{nota.priority}}</p>
  </div>
</div> `,
    providers:[ListTareasService]

})
export class listsChild implements OnInit {
    constructor(    public _ListTareasService:ListTareasService
    ) { 

    }

    @Input() nota: ListTareas;
    @Input('nameLists') nameLists: string;
    ngOnInit() { 
    }
  

    doSomething(data){
       
        console.log('compa hasta aqui llegamos, list-child.ts',data)
      }
}
