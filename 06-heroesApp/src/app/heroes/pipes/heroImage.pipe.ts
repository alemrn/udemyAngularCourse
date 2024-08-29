import { Pipe, type PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroImagePipe',
})
export class HeroImagePipe implements PipeTransform {

  transform(hero: Hero): string {
    if (!hero.id && !hero.alt_img) {
      return 'assets/no-image.png';
    }
    if (hero.alt_img?.includes('https')) {
      return hero.alt_img;
    }
    return `assets/heroes/${hero.id}.jpg`
  }

}
