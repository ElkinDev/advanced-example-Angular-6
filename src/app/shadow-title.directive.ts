import { Directive,ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[ShadowTitle]'
})
export class ShadowTitleDirective {

  constructor(element:ElementRef) {
    element.nativeElement.style.textShadow='2px 2px 2px #19967E,3px 3px 2px #19967E,4px 4px 2px #19967E';
   }
  //  @HostListener('click') doSomething(){
  //    console.log('Clicked')
  //  }

  //  @HostListener('mouseenter') doSomethingElse(){
  //   console.log('Enter Mouse')
  // }
  // @HostListener('mouseleave') doSomethingElseElse(){
  //   console.log('Leave Mouse')
  // }
  // @HostListener('mousemove') doSomethingElseElseElse(){
  //   console.log('Move Mouse')
  // }
  //  @HostListener('document:click',['$event'])
  //  elementCliked(elem){
  //    console.log('clicked',elem)
  //  }
   @HostListener('click',['$event'])
   elementCliked(elem){
     console.log('clicked',elem)
   }

}
