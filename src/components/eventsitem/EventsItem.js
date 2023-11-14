import "./eventsitem.css"

const EventsItem = ({ session, title, mentor, time }) => (
    <div className="pages-row sched-events">
        <div className="pages-col-9">
            <div className="pages-row">
                <div className="pages-col-12">
                    <p className="session-events">{session}</p>
                    <h4 className="title-events">{title}</h4>
                    <p className="mentor-events">{mentor}</p>
                </div>
            </div>
        </div>
        <div className="pages-col-3">
            <div className="pages-row">
                <div className="pages-col-12">
                    <p className="time-events">{time}</p>
                </div>
            </div>
        </div>
    </div>
);

export default EventsItem;