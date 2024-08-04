import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { CanActivateWarningGuard } from './componets/foldersbloks/can-activate-warning.guard';

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
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule]
})
export class AppRoutingModule { } 