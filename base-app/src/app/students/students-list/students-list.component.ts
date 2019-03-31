import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { StudentModel } from "src/app/model/student-model";

@Component({
  selector: "app-students-list",
  templateUrl: "./students-list.component.html",
  styleUrls: ["./students-list.component.css"]
})
export class StudentsListComponent implements OnInit {
  private users: Observable<any>;
  students;
  student: StudentModel;
  constructor(private afs: AngularFirestore) {}

  ngOnInit() {
    this.users = this.afs.collection("students").snapshotChanges();
    this.users.subscribe(res => {
      this.students = [];
      res.map(respons => {
        this.student = respons.payload.doc.data();
        this.student.Id = respons.payload.doc.id;
        this.students.push(this.student);
      });
    });
  }
}
