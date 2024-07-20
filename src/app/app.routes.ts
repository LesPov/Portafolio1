import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { ProyectComponent } from './proyect/proyect.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { CanActivateWarningGuard } from './can-activate-warning.guard';

export const routes: Routes = [
    { path: 'about', component: AboutComponent },
    { path: 'resume', component: ResumeComponent },
    { path: 'proyect', component: ProyectComponent },
    { path: 'blog', component: BlogComponent, canActivate: [CanActivateWarningGuard] },
    { path: 'contact', component: ContactComponent, canActivate: [CanActivateWarningGuard] },
    { path: '', redirectTo: '/about', pathMatch: 'full' },
    { path: '**', redirectTo: '/about' } // Maneja rutas no encontradas
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }