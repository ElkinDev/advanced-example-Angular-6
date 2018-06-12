import { Injectable } from '@angular/core';
import { ListTareas,Lists } from './list-tareas';

@Injectable()

export class ListTareasService {

  
  private editListNow;

  lowlim:number = 10;
  uplim:number = 20;
  constructor(
  ) { }

  /** GET heroes from the server */
  getHeroes() {
    return Lists
  }

  /** GET hero by id. Return `undefined` when id not found */
  getHeroNo404<Data>(id: number) {

  }

  /** GET hero by id. Will 404 if id not found */
  getNota(id: number) {
  }

  /* GET heroes whose name contains search term */
  searchNota(term: string) {

  }

  //////// Save methods //////////

  /** POST: add a new hero to the server */
  addNota(nota:ListTareas) {
    Lists.push(new ListTareas(nota.id, nota.name, nota.description, nota.cost, nota.priority))
    return true;
  }

  /** DELETE: delete the hero from the server */
  deleteHero(index: number) {
   
  }
  setNoteEditList(nota) {
    this.editListNow= nota
    console.log('veaamos quee',this.editListNow= nota)
  }
  getNoteEditList() {
    return this.editListNow;
  }
  /** PUT: update the hero on the server */
  updateHero(nota) {

  }

}
