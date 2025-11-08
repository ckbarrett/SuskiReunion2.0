import Countdown from './Countdown';

function EventInfo() {
const targetDate = "August 8, 2025 16:00:00 EDT";
  return (
    <div className="countdown-container" id="countdown">
      <div className="event-info">
        <h1 className="title">Suski Family Reunion</h1>
        <h2 className="subtitle">New Location TBD</h2>
        <h2 className="subtitle">We'll see you in 2027!</h2>
      </div>
      <Countdown targetDate={targetDate} />
    </div>
  );
}

export default EventInfo;
