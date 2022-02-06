
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
const app =  {
  initializeApp(firebaseConfig);
}
console.log(firebase);

  function addUser(){
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("User_name", user_name);
    window.location = "room_page.html";

    userName = localStorage.getItem("User_name");

 firebase.database().ref("/").child(userName).update({
  purpose : "adding user"
})
console.log(userName);
    };
  