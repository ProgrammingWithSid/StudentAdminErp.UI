import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from '../models/ui-models/student.model';
import { StudentService } from './student.service';

@Component({
  selector: 'app-syudents',
  templateUrl: './syudents.component.html',
  styleUrls: ['./syudents.component.css'],
})
export class SyudentsComponent implements OnInit {
  students: Student[] = [];
  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'dateOfBirth',
    'email',
    'mobile',
    'gender',
    'edit',
  ];
  dataSource: MatTableDataSource<Student> = new MatTableDataSource<Student>();
  @ViewChild(MatPaginator) matPaginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  filterString = '';

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    //Fetch Students

    this.studentService.getStudents().subscribe({
      next: (successResponse) => {
        this.students = successResponse;
        this.dataSource = new MatTableDataSource<Student>(this.students);

        if (this.matPaginator) {
          this.dataSource.paginator = this.matPaginator;
        }

        if (this.matSort) {
          this.dataSource.sort = this.matSort;
        }
      },
      error: (errorResponse) => {
        console.log(errorResponse);
      },
    });
  }

  filterStudents() {
    this.dataSource.filter = this.filterString.trim().toLocaleLowerCase();
  }
}
