import { Component, OnChanges, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ListTareas, Lists, constanst } from '../list-tareas';
import { ListTareasService } from '../list-tareas.service';
import { Subscriber } from 'rxjs';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
  providers: [ListTareasService]

})
export class FormsComponent implements OnInit {
  constructor(
    private _ListTareasService: ListTareasService
  ) { }
  formEditNote: NgForm
  formCreateNote: NgForm
  numberspage = 5 + 'a'
  title = 'Creador de Notas';
  nameLists = 'Lista de Tareas Pendientes';
  newlist = { id: null, name: null, description: null, cost: 0, priority: null }
  editList = { id: null, name: null, description: null, cost: 0, priority: null }
  show_form = false
  show_form_edit = false
  nameListEdit = null
  cacheList = null
  ListsRes
  prioritys = constanst

  ngOnInit(): void {
    this.ListsRes = Lists
    console.log('see metioooo', this.ListsRes.length)
  }

  editOneList(nota) {
    this._ListTareasService.setNoteEditList(nota)
    this.cacheList = nota
    this.show_form = false
    this.show_form_edit = true
    this.editList = nota
    window.scrollTo(0, 450)

  }
  addNote() {
    this.newlist = { id: null, name: null, description: null, cost: 0, priority: null }
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
    this.newlist.priority = formCreateNote.value.Priority || 'Sin Conocer'
    var CreatedList = this._ListTareasService.addNota(new ListTareas(this.newlist.id, this.newlist.name, this.newlist.description, this.newlist.cost, this.newlist.priority))
    if (CreatedList) {
      console.log(CreatedList, 'veaaamos')
      this.newlist = { id: null, name: null, description: null, cost: 0, priority: null }
      formCreateNote.reset()
      this.show_form = false
    }else{
      console.log('no creadppp')
    }

  }
  onSubmitEdit(formEditNote: NgForm) {
  }

  saveEditOneList(data) {

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




}
