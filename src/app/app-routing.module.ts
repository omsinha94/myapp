import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { ServiceComponent } from './service/service.component';
import { ClientComponent } from './client/client.component';
import { ContactComponent } from './contact/contact.component';
import { SettingComponent } from './setting/setting.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'user' },
    { path: 'user', component: ParentComponentComponent },
    { path: 'service', component: ServiceComponent },
    { path: 'client', component: ClientComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'setting', component: SettingComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }