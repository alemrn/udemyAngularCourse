import { switchMap } from 'rxjs';

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

import { Hero, Publisher } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { ConfirmDialogComponent } from '../../components/confirmDialog/confirmDialog.component';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: ``,
})
export class NewPageComponent implements OnInit {
  public heroForm = new FormGroup({
    id: new FormControl(''),
    superhero: new FormControl<string>('', { nonNullable: true }),
    publisher: new FormControl<Publisher>(Publisher.DCComics),
    alter_ego: new FormControl(''),
    first_appearance: new FormControl(''),
    characters: new FormControl(''),
    alt_img: new FormControl(''),
  });

  public publishers = [
    {
      id: Publisher.DCComics,
      desc: 'DC - Comics',
    },
    {
      id: Publisher.MarvelComics,
      desc: 'Marvel - Comics',
    },
  ];

  constructor(
    private srv: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {

    if (!this.router.url.includes('edit')) return;

    this.activatedRoute.params.pipe(
      switchMap(({id})=>this.srv.getHeroById(id)),

    ).subscribe(hero => {
      if (!hero) return this.router.navigateByUrl('/');

      this.heroForm.reset(hero);
      return;
    })

  }

  get currentHero(): Hero {
    const hero = this.heroForm.value as Hero;
    return hero;
  }

  onSubmit(): void {
    if (this.heroForm.invalid) return;

    if (this.currentHero.id) {
      this.srv.updateHero(this.currentHero).subscribe((hero) => {
        this.showSnackbar(`${hero.superhero} updated!!`)
      });
    } else {
      this.srv.addHero(this.currentHero).subscribe((hero) => {
        this.showSnackbar(`${hero.superhero} created!!`)
        this.router.navigate(['/heroes/edit', hero.id]);
      });
    }
  }

  onDeleteHero() {
    if (!this.currentHero.id) throw Error('Hero id is required');

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: this.heroForm.value,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.srv.deleteHero(this.currentHero.id).subscribe((result) => {
          if (result) {
            this.showSnackbar(`Se ha borrado el héroe ${this.currentHero.superhero}`);
            this.router.navigate(['/']);
          }
        });
      }
    });
  }

  showSnackbar(message: string): void{
    this.snackbar.open(message, 'done', {
      duration: 2500
    })
  }


}
