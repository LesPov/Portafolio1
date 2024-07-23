import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ResumeComponent } from './componets/resume/resume.component';
import { ProyectComponent } from './componets/proyect/proyect.component';
import { ContactComponent } from './componets/contact/contact.component';
import { BlogComponent } from './componets/blog/blog.component';
import { CanActivateWarningGuard } from './componets/foldersbloks/can-activate-warning.guard';
import { AboutComponent } from './componets/about/about.component';

export const routes: Routes = [
    { path: 'about', loadComponent: () => import('./componets/about/about.component').then(m => m.AboutComponent) },
    { path: 'resume', loadComponent: () => import('./componets/resume/resume.component').then(m => m.ResumeComponent) },
    { path: 'proyect', loadComponent: () => import('./componets/proyect/proyect.component').then(m => m.ProyectComponent) },
    { path: 'blog', loadComponent: () => import('./componets/blog/blog.component').then(m => m.BlogComponent), canActivate: [CanActivateWarningGuard] },
    { path: 'contact', loadComponent: () => import('./componets/contact/contact.component').then(m => m.ContactComponent), canActivate: [CanActivateWarningGuard] },
    { path: '', redirectTo: '/about', pathMatch: 'full' },
    { path: '**', redirectTo: '/about' }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }