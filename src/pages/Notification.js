import { useState } from 'react';
import "../styles/notification.css";
import { IoMdNotificationsOutline } from "react-icons/io";

const notifications = [
    { id: 1, text: "You have upcoming activities due", time: "1 day 15 hours ago" },
    { id: 2, text: "You have upcoming activities due", time: "8 days 15 hours ago" },
    { id: 3, text: "You have upcoming activities due", time: "15 days 15 hours ago" },
];

function Notification() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="notification-wrapper">
            <div className="notification-icon" onClick={() => setIsOpen(!isOpen)}>
            <IoMdNotificationsOutline className='not-icon' />
            </div>
            {isOpen && (
                <div className="notification-popup">
                    <div className="notification-header">
                        Notifications
                        <button className="notification-close" onClick={() => setIsOpen(false)}>✓</button>
                    </div>
                    <div className="notification-list">
                        {notifications.map(notification => (
                            <div key={notification.id} className="notification-item">
                                <div className="notification-text">{notification.text}</div>
                                <div className="notification-time">{notification.time}</div>
                                {/* <button className="notification-view">View full notification</button> */}
                            </div>
                        ))}
                    </div>
                    <button className="see-all">See all</button>
                </div>
            )}
        </div>
    );
}

export default Notification;