import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ShearchBoxComponent } from './components/shearch-box/shearch-box.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { GifsService } from './services/gifs.service';
import { GifCardComponent } from './components/gif-card/gif-card.component';
import { SharedModule } from "../shared/shared.module";



@NgModule({
  declarations: [
    HomePageComponent,
    ShearchBoxComponent,
    CardListComponent,
    GifCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
],
  exports: [
    HomePageComponent,
    ShearchBoxComponent,
    CardListComponent,
    GifCardComponent
  ]
})
export class GifsModule { }
