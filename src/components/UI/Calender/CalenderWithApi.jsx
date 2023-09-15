import { Scheduler } from "@aldabil/react-scheduler";
import { useEffect, useState } from "react";
import axios from "axios";


const CalenderWithAPi = () => {
    const baseURL = `https://calender-app-api.vercel.app/api/v1/calender`
    const [events, setEvents] = useState([]);
    useEffect(() => {
        axios.get(baseURL).then((response) => {
            console.log(response.data);
            setEvents(response.data);
          });
    }, []);
    /* const fetchRemote = async (query) => {
        console.log("🚀 ~ file: Calender.jsx:8 ~ fetchRemote ~ query:", query)
        return new Promise((res) => {
            setTimeout(() => {
                
                res(events);
            }, 3000);
        });
    }; */
    const fetchRemote = async () => {
        const response = await axios.get(baseURL);
        setEvents(response.data);
        return response.data;
    };
    const onConfirm = async(event, action) => {
        return new Promise(async(resolve, reject) => {
            try {
                if (action === "edit") {
                    console.log("this is a edit event");
                } else if (action === "create") {
                    console.log("this is a new event");
                    const response = await axios.post(baseURL, event);
                    console.log(response);
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
                events={events}
                onConfirm={onConfirm}
                onDelete={handleDelete}
                view="week"
                draggable={true}
            />
        </div>
    );
};

export default CalenderWithAPi;