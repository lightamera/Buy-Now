import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PassToPagesGuard } from './_guard/pass-to-pages.guard';
import { AuthGuard } from './_guard/auth.guard';

const routes: Routes = [

    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', loadChildren: "./login/login.module#LoginModule", canActivate: [PassToPagesGuard] },
    { path: 'pages', loadChildren: "./pages/pages.module#PagesModule", canActivate: [AuthGuard] }

];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
