import { useState } from 'react';
import notificationsData from './notifications';
import './App.css';

function App() {
  const [notifications, setNotifications] = useState(notificationsData);

  const clearNotification = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  const clearAllNotifications = () => {
    setNotifications([]);
  };

  return (
    <div className="App">
      <h1>Notifications</h1>
      <p>Number of notifications: {notifications.length}</p>
      <button onClick={clearAllNotifications}>Clear All</button>
      <ul>
        {notifications.map(notification => (
          <li key={notification.id}>
            <strong>{notification.name}</strong>: {notification.message}
            <button onClick={() => clearNotification(notification.id)}>Clear</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
