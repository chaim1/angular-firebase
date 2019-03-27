import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { StudentModel } from 'src/app/model/student-model';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {
  students;
  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.afs.collection('students').stateChanges().subscribe(res=>{
      res.map(res=>{
        this.students = res.payload.doc.data()
      })
      // console.log(this.students);

      debugger
    });
  }
}

