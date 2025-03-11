import { useState } from "react";
import notificationsData from "./notifications";
import "./App.css";

// Notification component that uses the children prop
function Notification({ children }) {
  return <div className="notification">{children}</div>;
}

function App() {
  // Store notifications in state, starting with data from notifications.js
  const [notifications, setNotifications] = useState(notificationsData);

  // Function to delete a single notification by its ID
  const handleDelete = (id) => {
    setNotifications(notifications.filter((notif) => notif.id !== id));
  };

  // Function to clear all notifications
  const handleClearAll = () => {
    setNotifications([]);
  };

  return (
    <div className="app">
      <h1>Notification Center</h1>
      <h2>Notifications ({notifications.length})</h2>

      {notifications.length > 0 ? (
        <>
          {notifications.map((notif) => (
            <Notification key={notif.id}>
              <p><strong>{notif.name}:</strong> {notif.message}</p>
              <button onClick={() => handleDelete(notif.id)}>Clear</button>
            </Notification>
          ))}
          <button className="clear-all" onClick={handleClearAll}>Clear All</button>
        </>
      ) : (
        // Show message when there are no notifications
        <p>No notifications</p>
      )}
    </div>
  );
}

export default App;
