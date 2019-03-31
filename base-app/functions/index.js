const functions = require('firebase-functions');

exports.createStudent = functions.firestore.document('students/{Id}').onCreate((snap,context)=>{
  // console.log(studentId);
  // return true;
  return snap.ref.set({
    created_timestamp: new Date()
  },{
    merge: true
  });
});
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
