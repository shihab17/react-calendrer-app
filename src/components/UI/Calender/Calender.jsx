import { Scheduler } from "@aldabil/react-scheduler";
import { EVENTS } from "../../../utils/event";


const Calender = () => {
    // const [events, setEvents] = useState(EVENTS);
    const fetchRemote = async (query) => {
        console.log("🚀 ~ file: Calender.jsx:8 ~ fetchRemote ~ query:", query)
        return new Promise((res) => {
            setTimeout(() => {
                res(EVENTS);
            }, 3000);
        });
    };
    const onConfirm = (event, action) => {
        return new Promise((resolve, reject) => {
            try {
                if (action === "edit") {
                    console.log("this is a edit event");
                } else if (action === "create") {
                    console.log("this is a new event");
                }
                setTimeout(() => {
                    resolve({
                        ...event,
                        event_id: event.event_id || Math.random()
                    });
                }, 3000);
            } catch (error) {
                reject(error);
            }
        });
    };
    const handleDelete = (eventId) => {
        return new Promise((resolve, reject) => {
            try {
                setTimeout(() => {
                    resolve(eventId);
                }, 3000);
            } catch (error) {
                reject(error);
            }
        },
        );
    };

    return (
        <div className="mx-5">
            <Scheduler
                getRemoteEvents={fetchRemote}
                onConfirm={onConfirm}
                onDelete={handleDelete}
                view="week"
                draggable={true}
            />
        </div>
    );
};

export default Calender;