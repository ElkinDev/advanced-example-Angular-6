import { Component, OnInit,Input, OnChanges, Injectable,EventEmitter,Output } from '@angular/core';
import { ListTareas } from '../list-tareas';
import { ListTareasService } from '../list-tareas.service';

@Component({
    selector: 'list-child',
    template: `<a class="list-group-item"  >{{nota.id}} -- {{nota.name}}</a> `,
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
