import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ResumeComponent } from './componets/resume/resume.component';
import { ProyectComponent } from './componets/proyect/proyect.component';
import { ContactComponent } from './componets/contact/contact.component';
import { BlogComponent } from './componets/blog/blog.component';
import { CanActivateWarningGuard } from './can-activate-warning.guard';
import { AboutComponent } from './componets/about/about.component';

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