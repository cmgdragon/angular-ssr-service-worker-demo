import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChampionListComponent } from './champion-list/champion-list.component';
import { ChampionDetailComponent } from './champion-detail/champion-detail.component';

const routes: Routes = [
    {
        path: '',
        component: ChampionListComponent,
    },
    {
        path: 'champion/:id',
        component: ChampionDetailComponent
    },
    {
      path: '**',
      component: ChampionListComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
