import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ListTareas } from '../list-tareas';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {

  constructor() { }
  public formEditNote: any = {};
  formCreateNote: NgForm
  numberspage = 5 + 'a'
  title = 'Creador de Notas';
  nameLists = 'Lista de Tareas Pendientes';

  //Creando Lista con Clases
  Lists = [
    new ListTareas(1, 'Tarea one', 'This is description 1', 100),
    new ListTareas(2, 'Tarea Two', 'This is description 2', 200),
    new ListTareas(3, 'Tarea three', 'This is description 3', 300),
    new ListTareas(4, 'Tarea four', 'This is description 4', 400),
    new ListTareas(5, 'Tarea five', 'This is description 5', 500),
    new ListTareas(6, 'Tarea six', 'This is description 6', 600),
    new ListTareas(7, 'Tarea eight', 'This is description 7', 700),
    new ListTareas(8, 'Tarea nine', 'This is description 8', 800),
    new ListTareas(9, 'Tarea then', 'This is description 9', 900),
    new ListTareas(10, 'Tarea eleven', 'This is description 10', 500),
    new ListTareas(11, 'Tarea twelve', 'This is description 12', 500),
    new ListTareas(12, 'Tarea seven', 'This is description 13', 600),

  ];
  newlist = { id: null, name: null, description: null, cost: 0 }
  editList = { id: null, name: null, description: null, cost: 0 }
  show_form = false
  show_form_edit = false
  nameListEdit = null
  cacheList = null
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
    console.log('se metioooo 2', __filename)

    this.show_form_edit = false;
    this.newlist.id = Math.floor(Math.random() * 588) + 615
    this.newlist.name = formCreateNote.value.nameList
    this.newlist.description = formCreateNote.value.descriptionList
    this.newlist.cost = formCreateNote.value.CostList
    this.Lists.push(new ListTareas(this.newlist.id, this.newlist.name, this.newlist.description,this.newlist.cost))
    this.newlist = { id: null, name: null, description: null, cost: 0 }
    formCreateNote.reset()
    this.show_form = false
  }
  editOneList(data) {
    this.cacheList = data

    this.show_form = false
    this.show_form_edit = true
    this.editList = data

  }
  saveEditOneList(data) {
    console.log('veaamoslo', this.formCreateNote)
  }
  cancelEditOneList(idlistDAta) {
    this.Lists.forEach((e, i) => {
      if (e.id === idlistDAta) {
        //splice eliminar de un objeto
        this.show_form_edit = false
        this.Lists.splice(i, 1)

      }

    })
  }



}
