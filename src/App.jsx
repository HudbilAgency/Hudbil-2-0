import { BrowserRouter as Router } from "react-router-dom";
import Routers from "./Routes/Routes";
import ScrollToTop from "./Components/ScrollToTop";

function App() {

  return (
    <>
      <Router>
        <ScrollToTop />
        <Routers />
      </Router>
    </>
  );
}

export default App;

// import { BrowserRouter as Router } from "react-router-dom";
// import { useEffect } from "react";
// import Routers from "./Routes/Routes";
// import ScrollToTop from "./Components/ScrollToTop";
// import { messaging } from "./firebase";
// import { getToken } from 'firebase/messaging';

// function App() {

//   async function requestPermission() {
//     const permission = await Notification.requestPermission();

//     if (permission === "granted") {
//       const token = await getToken(messaging, { vapidKey: 'BBwTjx9MN408kbDq1N9xtkgO6VonMhrKgFJuXjSlHfrr3VawLe8Y7rSm7uEgGes_qB9YOc5knmE7KIbPp0jA_sQ' });

//       if (token) {
//         console.log("Device token obtained successfully");

//         const apiUrl = "https://notification-marketing-hudbil.onrender.com/api/save-device-token";

//         const userData = {
//           deviceToken: token,
//         };

//         try {
//           const response = await fetch(apiUrl, {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify(userData),
//           });

//           if (response.ok) {
//             console.log("Device token sent to server successfully.");
//           } else {
//             console.error("Failed to send device token to backend.");
//           }
//         } catch (error) {
//           console.error("Error sending device token:");
//         }
//       }
//     } else if (permission === "denied") {
//       console.log("Notification permission denied");
//     }
//   }

//   useEffect(() => {
//     setTimeout(() => {
//     requestPermission();
//     }, 2000)
//   }, []);

//   return (
//     <>
//       <Router>
//         <ScrollToTop />
//         <Routers />
//       </Router>
//     </>
//   );
// }

// export default App;