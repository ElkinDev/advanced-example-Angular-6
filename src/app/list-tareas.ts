export class ListTareas {
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public cost: number,
        public priority:string
    ) { }

}
export const Lists = [
    { id: 1, name: 'Tarea one', description: 'This is description 1', cost: 100,priority:'alta' },
    { id: 2, name: 'Tarea Two', description: 'This is description 2', cost: 200,priority:'alta' },
    { id: 3, name: 'Tarea three', description: 'This is description 3', cost: 300,priority:'media' },
    { id: 4, name: 'Tarea four', description: 'This is description 4', cost: 400,priority:'baja' },
    { id: 5, name: 'Tarea five', description: 'This is description 5', cost: 500,priority:'baja' },
    { id: 6, name: 'Tarea six', description: 'This is description 6', cost: 600,priority:'media' },
    { id: 7, name: 'Tarea eight', description: 'This is description 7', cost: 700,priority:'alta' },
    { id: 8, name: 'Tarea nine', description: 'This is description 8', cost: 800,priority:'alta' },
    { id: 9, name: 'Tarea then', description: 'This is description 9', cost: 900,priority:'alta' },
    { id: 10, name: 'Tarea eleven', description: 'This is description 10', cost: 500,priority:'baja' },
    { id: 11, name: 'Tarea twelve', description: 'This is description 12', cost: 500,priority:'media' },
    { id: 12, name: 'Tarea seven', description: 'This is description 13', cost: 600,priority:'baja' }
]
export const constanst=[
    {priority:'alta'},
    {priority:'media'},
    {priority:'baja'},
    {priority:'sin conocer'},

]
