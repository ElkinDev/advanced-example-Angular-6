import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Lists } from '../list-tareas';
import { ListTareasService } from '../list-tareas.service';


@Component({
    selector: 'nota-detail',
    templateUrl: './nota-detail.component.html'
})
export class notaDetailComponent implements OnInit {
    constructor(
        private route: ActivatedRoute, private _ListTareasService: ListTareasService

    ) { }
    private id = +this.route.snapshot.paramMap.get('id');

    ngOnInit(): void {
        this._ListTareasService.setNoteEditList(this.id)


    }
    editOneList(data) {
        console.log('yeah', data)
    }
    ngAfterViewInit() {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
        //  console.log(Lists[this.id])

    }
}
