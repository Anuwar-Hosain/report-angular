import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
// import { MatSort } from '@angular/material/sort';
import { AdmissionService } from './admission.service';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-admission',
  standalone: false,
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css'],
})
export class AdmissionComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'studentName',
    'fathersName',
    'mothersName',
    'dateOfBirth',
    'phone',
    'email',
    'gender',
    'subject',
    'privacyPolicyAccepted',
  ];
  dataSource = new MatTableDataSource<any>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private admissionService: AdmissionService) {}

  ngOnInit(): void {
    this.admissionService.getAllAdmission().subscribe((data) => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  downloadPDF(): void {
    const doc = new jsPDF();

    doc.text('Admission Report', 14, 20);

    (doc as any).autoTable({
      head: [this.displayedColumns],
      body: this.dataSource.data.map((row) =>
        this.displayedColumns.map((col) => row[col])
      ),
      startY: 30,
    });

    doc.save('admission_report.pdf');
  }

  downloadXLS(): void {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.dataSource.data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Admissions');

    // এক্সেল ফাইলের বাফার জেনারেট করুন
    const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });

    // ফাইল ডাউনলোড করুন
    const blob = new Blob([wbout], { type: 'application/octet-stream' });
    saveAs(blob, 'admission_report.xlsx');
  }
}
