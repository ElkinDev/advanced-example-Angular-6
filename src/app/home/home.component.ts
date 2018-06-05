import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public Mantenimiento:boolean;
  AngularDefinition:Array<any>;
  private FeaturesAngular:Array<any>;
  constructor() {
    this.Mantenimiento=false;
    this.AngularDefinition=[
      {
        title:'¿Que Es angular 6 ?',
        img:'assets/angular.png',
        paragraph1:'Angular es un Framework para crear aplicaciones de lado cliente en HTML y TypeScript,y está escrito en TypeScript, la cual puedes implementar funcionalidades opciones de librerias de TypeScript e importalas dentro de tus aplicaciones.<br> Los bloques de construcción básicos de una aplicación angular son NgModules que proporciona una compilación por components. Angular está Definida por un set de NgModules, y una aplicación siempore tiene un root module un modulo de raíz que permite el arranque, que a su ves tiene muchas más modulos de caracteristicas.',
        list:['Los componentes definen vistas, que son conjuntos de elementos de pantalla que Angular puede elegir y modificar según la lógica y los datos de su programa. Cada aplicación tiene al menos un componente raíz. (App-root)','Los componentes usan servicios que proporcionan una funcionalidad específica que no está directamente relacionada con las vistas. Los proveedores de servicios pueden inyectarse en componentes como dependencias, haciendo que su código sea modular, reutilizable y eficiente.'],
        paragraph2:'Ambos Componentes y Servicios son simplemente clases, Los metadatos de una clase de componente lo asocian con una plantilla que define una vista. The metadata for a service class provides the information Angular needs to make it available to components through Dependency Injection (DI).'
      }
    ]
    this.FeaturesAngular=[
      {
        title:'Modules',
        paragraph:'Angular Está Definido con the NgModule, que difiere y complementa el Modulo de JavaScript (ES2015). Angular define el NgModule, que difiere y complementa el módulo JavaScript (ES2015). Un NgModule declara un contexto de compilación para un conjunto de componentes que está dedicado a un dominio de aplicación, un flujo de trabajo o un conjunto de capacidades estrechamente relacionadas. Un NgModule puede asociar sus componentes con código relacionado, como servicios, para formar unidades funcionales. <br> Cada aplicación angular tiene un módulo raíz, denominado de manera convencional AppModule, que proporciona el mecanismo de arranque que inicia la aplicación. Una aplicación generalmente contiene muchos módulos funcionales.',
        href:'https://angular.io/guide/architecture-modules',
        link:'Vea la introducción de los Módulos de Angular.io'
        
      },
      {
        title:'Components',
        paragraph:'Cada aplicación angular tiene al menos un componente, el componente raíz que conecta una jerarquía de componentes con la página DOM. Cada componente define una clase que contiene datos y lógica de la aplicación, y está asociada a una plantilla HTML que define una vista que se mostrará en un entorno objetivo.<br>El decorador @Component identifica la clase inmediatamente debajo como componente y proporciona la plantilla y los metadatos relacionados específicos del componente.',
        href:'https://angular.io/guide/architecture-components',
        link:'vea Introducción a los componentes.'
        
      },
      {
        title:'Templates, directives, y data binding',
        paragraph:'Una plantilla combina HTML con Angular que puede modificar los elementos HTML antes de que se muestren. Las directivas de plantilla proporcionan lógica de programa, y el marcado vinculante conecta los datos de su aplicación y el modelo de objetos del documento (DOM).<br> El enlace de eventos permite que su aplicación responda a la entrada del usuario en el entorno objetivo actualizando los datos de su aplicación.<br>El enlace de propiedad le permite interpolar valores que se computan a partir de los datos de su aplicación en el HTML.',
        href:'https://angular.io/guide/architecture-components',
        link:'vea la Introducción a los componentes.'
      },
      {
        title:'Servicios e inyección de dependencias',
        paragraph:'Para los datos o la lógica que no está asociada a una vista específica y que desea compartir entre los componentes, crea una clase de servicio. Una definición de clase de servicio va precedida inmediatamente por el decorador @Injectable. El decorador proporciona los metadatos que permiten que su servicio se inyecte en los componentes del cliente como una dependencia.<br>La inyección de dependencia (o DI) le permite mantener sus clases de componentes delgadas y eficientes. No obtienen datos del servidor, validan la entrada del usuario o inician sesión directamente en la consola; delegan tales tareas a los servicios.',
        href:'https://angular.io/guide/architecture-services',
        link:'vea la Introducción a los componentes.'
      },
      {
        title:'Routing',
        paragraph:'Angular Router NgModule proporciona un servicio que le permite definir una ruta de navegación entre los diferentes estados de aplicación y ver jerarquías en su aplicación. Se basa en las convenciones de navegación del navegador familiares. <br>El enrutador mapea rutas de tipo URL a vistas en lugar de páginas. Cuando un usuario realiza una acción, como hacer clic en un enlace, que cargaría una página nueva en el navegador, el enrutador intercepta el comportamiento del navegador y muestra u oculta las jerarquías de vista.',
        list:['Ingrese una URL en la barra de direcciones y el navegador navega a la página correspondiente.','Haga clic en los enlaces en la página y el navegador navega a una nueva página.','Haga clic en los botones para retroceder y avanzar del navegador y el navegador navega hacia atrás y hacia adelante por el historial de las páginas que ha visto.'],
        href:'https://angular.io/guide/router',
        link:' vea la Introducción a los componentes.'
      },

    ]
  }
  



}
