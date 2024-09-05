// Your Firebase configuration object
const firebaseConfig = {

    apiKey: "AIzaSyDuNNDduNS3DgdkhwGivRvcTgnYEduN08Q",

    authDomain: "hostel-3559f.firebaseapp.com",
  
    projectId: "hostel-3559f",
  
    storageBucket: "hostel-3559f.appspot.com",
  
    messagingSenderId: "337807658068",
  
    appId: "1:337807658068:web:37bf5b3d434b243910b1c1",
  
    measurementId: "G-LXVR868CJ2"
  
  
  };
  

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

document.getElementById('complaintForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    const rollNumber = document.getElementById('rollNumber').value;
    const roomNumber = document.getElementById('roomNumber').value;
    const problemDescription = document.getElementById('problemDescription').value;

    if (rollNumber && roomNumber && problemDescription) {
        try {
            // Add complaint to Firestore
            await db.collection('complaints').add({
                rollNumber: rollNumber,
                roomNumber: roomNumber,
                problemDescription: problemDescription,
                timestamp: new Date()
            });

            // Clear the form
            document.getElementById('complaintForm').reset();

            // Show success message
            document.getElementById('message').innerText = 'Complaint submitted successfully!';
        } catch (error) {
            console.error("Error adding document: ", error);
            document.getElementById('message').innerText = 'Failed to submit complaint.';
        }
    } else {
        document.getElementById('message').innerText = 'Please fill out all fields.';
    }
});
