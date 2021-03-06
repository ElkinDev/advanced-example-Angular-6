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
  // socket.emit('pdfHistoryQuery', {

  //   token: '2178f086aeb6c9b629203202',
  //   name: 'Roberto Carlo',
  //   mail: 'sonickfaber7@yahoo.es',
  //   //DATA DOCUMENT QUERY 
  //   numid: '6589985145',
  //   date: '2018-05-30T20:26:49.500Z',
  //   mailUser: 'sonickfaber7@yahoo.ess',
  //   codeQR: '6876468464589448'
  // }, resp=>{
  //   console.log(resp)
  // })
  //  }
   @HostListener('click',['$event'])
   elementCliked(elem){
     console.log('clicked',elem)
   }

}
