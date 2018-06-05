import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


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
  Lists = [
    { id: 1, name: 'Tarea one', description: 'This is description 1', cost: 5000 },
    { id: 2, name: 'Tarea Two', description: 'This is description 2', cost: 5000 },
    { id: 3, name: 'Tarea Three', description: 'This is description 3', cost: 5000 },
    { id: 5, name: 'Tarea1 For', description: 'This is description 4', cost: 5000 },
    { id: 6, name: 'Tarea2 For', description: 'This is description 5', cost: 5000 },
    { id: 7, name: 'Tarea3 For', description: 'This is description 6', cost: 5000 },
    { id: 8, name: 'Tarea5 For', description: 'This is description 7', cost: 1111 },
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
    console.log('se metioooo 2')

    this.show_form_edit = false;
    this.newlist.id = Math.floor(Math.random() * 588) + 615,
      this.newlist.name = formCreateNote.value.nameList,
      this.newlist.description = formCreateNote.value.descriptionList,
      this.newlist.cost = formCreateNote.value.CostList,
      this.Lists.push(this.newlist)
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
