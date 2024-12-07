import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { IIComponent } from '../pages/ii/ii.component';
import { AboutComponent } from '../pages/about/about.component';
import { DonateComponent } from '../pages/donate/donate.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'insect-identify',
        component: IIComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'donate',
        component: DonateComponent
    }

];
