import { Component, OnInit, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { StudentModel } from 'src/app/model/student-model';

@Component({
  selector: 'app-students-add',
  templateUrl: './students-add.component.html',
  styleUrls: ['./students-add.component.css']
})
export class StudentsAddComponent implements OnInit {
@ViewChild('f') studentForm: NgModel
  constructor(private angularFirestor: AngularFirestore) { }

  ngOnInit() {
  }

  onAddStudent(){
    this.angularFirestor.collection<StudentModel>('students').add(this.studentForm.value).then((res)=>{
      this.studentForm.reset()
    })
  }

}
