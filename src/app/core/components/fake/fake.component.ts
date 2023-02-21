import { Component } from '@angular/core';
import { FakedemoService } from 'src/app/services/fakedemo.service';

@Component({
  selector: 'app-fake',
  templateUrl: './fake.component.html',
  styleUrls: ['./fake.component.scss']
})
export class FakeComponent {
  etat! : boolean
  constructor(private $service : FakedemoService) {}

  ngOnInit() {
    this.etat = this.$service.etat

    this.$service.etatSubject.subscribe({
      next : (data : boolean) => { this.etat = data}
    })
  }

  switch() {
    this.$service.switchEtat()
  }
}
