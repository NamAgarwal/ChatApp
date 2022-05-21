
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyADMlUvWj-45k585rVtZVxt97S16jIjS3g",
    authDomain: "the-chat-app-79b65.firebaseapp.com",
    databaseURL: "https://the-chat-app-79b65-default-rtdb.firebaseio.com",
    projectId: "the-chat-app-79b65",
    storageBucket: "the-chat-app-79b65.appspot.com",
    messagingSenderId: "329909829513",
    appId: "1:329909829513:web:4d4bea79c215b0a2572b58"
  };
  
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig)
  
function addHead() {
  username = localStorage.getItem("User_name");
  document.getElementById("user_name").innerHTML = "Welcome "+ username+ "!!";
};
  
  function addRoom(){
  
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "chat_room.html";
  };
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
       console.log("Room name - "+ Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'> #"+ Room_names + "</div><hr>";
       document.getElementById("output").innerHTML += row; 
        });});}
  getData();
  
  function redirectToRoomName(name){
   console.log(name);
   localStorage.setItem("room name", name);
   window.location("chat_room.html");
  }
  