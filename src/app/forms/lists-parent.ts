import { Component } from '@angular/core';
import { ListTareas, Lists } from '../list-tareas';
import { ListTareasService } from '../list-tareas.service';

@Component({
    selector: 'lists-parent',
    templateUrl: './lists-parent.component.html',
    providers:[ListTareasService]
    
})
export class listParent {
    constructor(
        
    ){}

    ListsRes = Lists
    nameLists = 'Lista de Tareas Pendientes'
    // ngOnInit(): void{
    //     console.log(this.ListsRes[0])
    // }

    editOneList(data){
        console.log('one')
    }

    doSomething(data){
       
        console.log('compa hasta aqui llegamos, list-parent.ts',data)
      }
}
