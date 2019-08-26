import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRepoHover]'
})
export class RepoHoverDirective {

  constructor(private elem: ElementRef) {
    this.elem.nativeElement.style.backgroundColor = '#FFE5B4';
  }

}
