//Ideal scenerio of chaining called as 'Callback Hell'

// doSomething(function(result){
//     doSomethingElse(result,function(newResult){
//         doThirdThing(newResult,function(finalResult){
//             console.log('Got the final result : '+ finalResult);
//         },failureCallback);
//     },failureCallback);
// },failureCallback);


//for Solving above Problem Promises were introduced

//Promise into Action
//Example 1
// const hasMeeting = false;
// const meeting = new Promise((resolve,reject)=>{
//     if(!hasMeeting){
//         const meetingDetails ={
//             name : 'Marketing Meeting',
//             location : 'Skype',
//             time : '1pm'
//         }
//         resolve(meetingDetails);
//     }else{
//         reject(new Error("Meeting already Scheduled"));
//     }
// });

// meeting.then((result)=>{
// //resolve data
// console.log("<in then> : Meeting Scheduled",result);
// })
// .catch((error)=>{
// //reject Data
// console.log("<in catch>: ",error.message);
// });
//----------------------------------------------
//Example 2
const hasMeeting = false;
const meeting = new Promise((resolve,reject)=>{
    if(!hasMeeting){
        const meetingDetails ={
            name : 'Marketing Meeting',
            location : 'Skype',
            time : '1pm'
        }
        resolve(meetingDetails);
    }else{
        reject(new Error("Meeting already Scheduled"));
    }
});
//addToCalender : Method 1 :
// const addToCalendar = meetingDetails => {
//     return new Promise((resolve,reject)=>{
//         const calendar = `${meetingDetails.name} is scheduled at ${meetingDetails.time} on ${meetingDetails.location}`;
//         resolve(calendar);
//     })
// }
//addToCalender : Method 2
const addToCalendar = (meetingDetails) => {
  const calendar = `${meetingDetails.name} is scheduled at ${meetingDetails.time} on ${meetingDetails.location}`;
  return Promise.resolve(calendar);
};
meeting
.then(addToCalendar)
.then((result)=>{
//resolve data
console.log("<in then> : Meeting Scheduled !!",result);
})
.catch((error)=>{
//reject Data
console.log("<in catch>: ",error.message);
});