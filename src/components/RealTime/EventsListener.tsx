import React, { useEffect, useState } from 'react';

const EventListener: React.FC = () => {
  const [events, setEvents] = useState<string[]>([]);

  useEffect(() => {
    const ws = new WebSocket('wss://cardano-event-source.example');

    ws.onmessage = (event) => {
      const newEvent = event.data;
      setEvents((prevEvents) => [...prevEvents, newEvent]);
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <div>
      <h2>Événements en Temps Réel</h2>
      <ul>
        {events.map((event, index) => (
          <li key={index}>{event}</li>
        ))}
      </ul>
    </div>
  );
};

export default EventListener;
