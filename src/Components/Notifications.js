import React, { useEffect, useState } from "react";
import "../Styles/Notifications.scss";
import axios from "axios";
import ClearIcon from "@mui/icons-material/Clear";

function Notifications() {
  const [notifs, setNotifs] = useState([]);

  useEffect(() => {
    const fetchNotification = async () => {
      const config = {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkNvZGVyIn0.B1QyKzKxzpxay1__A8B85ij32rqFoOIAFGDqBmqXhvs`,
        },
      };
      try {
        const { data } = await axios.get(
          `https://sw-coding-challenge.herokuapp.com/api/v1/notifications`,
          config
        );
        setNotifs(data.d);
        console.log(data.d);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchNotification();
  }, []);

  function deleteNotif(id) {
    setNotifs((prevNotif) => {
      return prevNotif.filter((notifs, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="notification">
      <ul>
        {notifs.length !== 0 ? (
          notifs.map((notif, index) => {
            return (
              <li key={index}>
                <h1>{notif.title}</h1>
                <p>{notif.description}</p>
                <ClearIcon className="notification__icon" onClick={() => deleteNotif(index)}
                />
                <hr />
              </li>
            );
          })
        ) : (
          <h2>No Notifications</h2>
        )}
      </ul>
    </div>
  );
}

export default Notifications;
