import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateadmissionComponent } from './createadmission/createadmission.component';
import { AdmissionComponent } from './admission/admission.component';
import { LogingComponent } from './loging/loging.component';

const routes: Routes = [
  { path: 'admission', component: AdmissionComponent },
  { path: 'admission-form', component: CreateadmissionComponent },
  { path: 'login', component: LogingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
