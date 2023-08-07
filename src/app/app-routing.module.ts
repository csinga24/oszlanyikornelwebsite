import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CikkekComponent } from './menu/cikkek/cikkek.component';
import { CsaladfaComponent } from './menu/csaladfa/csaladfa.component';
import { GyerekComponent } from './menu/gyerek/gyerek.component';
import { PalyaComponent } from './menu/palya/palya.component';
import { KepekComponent } from './menu/kepek/kepek.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'kapcsolat', component: ContactComponent },
  { path: 'cikkek', component: CikkekComponent },
  { path: 'csaladfa', component: CsaladfaComponent },
  { path: 'gyerek', component: GyerekComponent },
  { path: 'palya', component: PalyaComponent },
  { path: 'kepek', component: KepekComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
