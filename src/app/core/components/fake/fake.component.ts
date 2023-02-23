import { Component } from '@angular/core';
import { delay, filter, map, Observable, of, tap } from 'rxjs';
import { FakedemoService } from 'src/app/services/fakedemo.service';

@Component({
  selector: 'app-fake',
  templateUrl: './fake.component.html',
  styleUrls: ['./fake.component.scss']
})
export class FakeComponent {
  etat! : boolean
  isVisible! : boolean
  constructor(private $service : FakedemoService) {}
  // liste : Observable<string[]> = of(["salut", "coucou", "bonjour"])
  listeAfficher : string[] = []

  switchVisible() {
    this.isVisible = !this.isVisible
  }
  ngOnInit() {

    // this.liste.pipe(
      //   tap((l) => console.log(l)),
      //   delay(2000),
      //   tap((l) => console.log(l[0])),

      //   map((l) => l.filter((x : string) => x.length > 5)),
      //   tap((l) => console.log(l)),
      //   tap((l) => l.push("toto")),
      //   ).subscribe((data : string[]) => this.listeAfficher = data )

      this.$service.mafonction().subscribe((data : string[]) => this.listeAfficher = data )
      this.etat = this.$service.etat

      this.$service.etatSubject.subscribe({
        next : (data : boolean) => { this.etat = data}
      })
    }

    switch() {
      this.$service.switchEtat()
    }


    liste : string[] = ["toto", "tutu", "tata"]

    receptionDeEnfant(infoDeEnfant : string) {
      console.log(infoDeEnfant)
    }
  }
