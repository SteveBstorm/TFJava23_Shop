import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.scss']
})
export class ChildrenComponent {

  @Input() info! : string
  @Input() truc! : string[]

  @Output() envoiEvent : EventEmitter<string> = new EventEmitter<string>()

  envoi(t : string){
    this.envoiEvent.next(t)
  }
}
