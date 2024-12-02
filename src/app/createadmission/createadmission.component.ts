import { Component, OnInit } from '@angular/core';
import { Admission } from '../admission/admission.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdmissionService } from '../admission/admission.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-createadmission',
  standalone: true,
  templateUrl: './createadmission.component.html',
  styleUrl: './createadmission.component.css',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
})
export class CreateadmissionComponent implements OnInit {
  admission: Admission = new Admission();
  formValue!: FormGroup;
  admissionData: any;

  constructor(
    private admissionService: AdmissionService,
    private router: Router,
    private httpclient: HttpClient,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      studentName: [''],
      fathersName: [''],
      mothersName: [''],
      dateOfBirth: [''],
      phone: [''],
      email: [''],
      gender: [''],
      subject: [''],
      privacyPolicyAccepted: [false],
    });
  }

  createAdmission() {
    this.admission.studentName = this.formValue.value.studentName;
    this.admission.fathersName = this.formValue.value.fathersName;
    this.admission.mothersName = this.formValue.value.mothersName;
    this.admission.dateOfBirth = this.formValue.value.dateOfBirth;
    this.admission.phone = this.formValue.value.phone;
    this.admission.email = this.formValue.value.email;
    this.admission.gender = this.formValue.value.gender;
    this.admission.subject = this.formValue.value.subject;
    this.admission.privacyPolicyAccepted =
      this.formValue.value.privacyPolicyAccepted;

    this.admissionService.createAdmission(this.admission).subscribe({
      next: (res) => {
        console.log(res);
        this.formValue.reset();
        this.router.navigate(['/admission']);
      },

      error: (error) => {
        console.log(error);
      },
    });
  }
}
