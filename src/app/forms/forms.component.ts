import { Component, OnChanges, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ListTareas, Lists } from '../list-tareas';
import { ListTareasService } from '../list-tareas.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
  providers:[ListTareasService]
  
})
export class FormsComponent implements OnInit {

  constructor(
    private _ListTareasService:ListTareasService
  ) { }
  public formEditNote: any = {};
  formCreateNote: NgForm
  numberspage = 5 + 'a'
  title = 'Creador de Notas';
  nameLists = 'Lista de Tareas Pendientes';
  newlist = { id: null, name: null, description: null, cost: 0 }
  editList = { id: null, name: null, description: null, cost: 0 }
  show_form = false
  show_form_edit = false
  nameListEdit = null
  cacheList = null
  ListsRes
  ngOnInit():void{
    this.ListsRes=Lists
    console.log('see metioooo',this.ListsRes.length)
  }

  editOneList(nota){
    this._ListTareasService.setNoteEditList(nota)
}
  addNote() {
    this.newlist = { id: null, name: null, description: null, cost: 0 }
    this.show_form_edit = false;
    this.show_form ? this.show_form = false : this.show_form = true
  }
  cancel() {
    alert('veaalo')
    this.show_form = false
  }
  onSubmit(formCreateNote: NgForm) {
    this.show_form_edit = false;
    this.newlist.id = Math.floor(Math.random() * 588) + 615
    this.newlist.name = formCreateNote.value.nameList
    this.newlist.description = formCreateNote.value.descriptionList
    this.newlist.cost = formCreateNote.value.CostList
    Lists.push(new ListTareas(this.newlist.id, this.newlist.name, this.newlist.description, this.newlist.cost))
    this.newlist = { id: null, name: null, description: null, cost: 0 }
    formCreateNote.reset()
    this.show_form = false
  }
  public doSomething(data){
    this.cacheList = data
    this.show_form = false
    this.show_form_edit = true
    this.editList = data
    console.log('compa hasta aqui llegamos,',data)
  }

  saveEditOneList(data) {
    console.log('veaamoslo', this.formCreateNote)
    
  }
  cancelEditOneList(idlistDAta) {
    Lists.forEach((e, i) => {
      if (e.id === idlistDAta) {
        //splice eliminar de un objeto
        this.show_form_edit = false
        Lists.splice(i, 1)

      }

    })
  }
  onChanges():void{
    console.log('entra entraa?')
  }



}
