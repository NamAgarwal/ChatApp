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

  user_name = localStorage.getItem("User_name");
  room_name = localStorage.getItem("room_name");

  function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
          message : msg,
          name : user_name ,
          like : 0
      }) ;
      console.log(msg);
      document.getElementById("msg").value = "";
  };

  function logout(){

    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
  
    window.location = "index.html";
  
  };