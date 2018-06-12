import { TestBed, inject } from '@angular/core/testing';

import { ListTareasService } from './list-tareas.service';

describe('ListTareasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListTareasService]
    });
  });

  it('should be created', inject([ListTareasService], (service: ListTareasService) => {
    expect(service).toBeTruthy();
  }));
});
