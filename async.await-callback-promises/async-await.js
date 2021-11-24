const hasNewMeeting = true;
const newMeeting = new Promise((resolve,reject)=>{
    if(!hasNewMeeting){
        const meetingDetails = {
            name : "Grooming Meeting",
            time : "2pm",
            location : "Google Meet"
        };
        resolve(meetingDetails);
    }else{
        reject(new Error("Meeting already in place"));
    }
});
const addToNewCalendar = meetingDetails =>{
    const meetingMessage = `${meetingDetails.name} has been scheduled on ${meetingDetails.time} at ${meetingDetails.location}`;
    return Promise.resolve(meetingMessage);
}
async function myMeeting(){
    try{
        const meetingDetails = await newMeeting;
        const message = await addToNewCalendar(meetingDetails);
        console.log(message)
    }catch(error){
        console.log(error.message)
    }
   
}

myMeeting();

//if there is ony one method do below steps else wrap in try catch
//.catch(error=>console.log(error.message));