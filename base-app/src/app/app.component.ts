import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from '@angular/forms';

import {
  AngularFirestore,
  AngularFirestoreCollection
} from "@angular/fire/firestore";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;
  private itemsCollection: Observable<any[]>;
  items;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = this.afs.collection('students').valueChanges();
  }

  ngOnInit() {
    this.itemsCollection.subscribe(res => {
      this.items = res;
    })
  }

  title = "base-app";
  onSubmit() {
    this.afs.collection('students').doc(this.signupForm.value.doc).set({'name':this.signupForm.value.name, 'age':this.signupForm.value.age}).then(res=>{
      console.log(res);
    });
  }
}
