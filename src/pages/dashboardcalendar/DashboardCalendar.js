import "./dashboardcalendar.css"
import React, { useState, useRef, useEffect } from 'react';
import { DayPilot, DayPilotCalendar, DayPilotNavigator } from "@daypilot/daypilot-lite-react";


const styles = {
    wrap: {
        display: "flex"
    },
    left: {
        marginRight: "10px"
    },
    main: {
        flexGrow: "1"
    }
};

const DashboardCalendar = () => {
    const calendarRef = useRef()

    const editEvent = async (e) => {
        const dp = calendarRef.current.control;
        const modal = await DayPilot.Modal.prompt("Update event text:", e.text());
        if (!modal.result) { return; }
        e.data.text = modal.result;
        dp.events.update(e);
    };

    const [calendarConfig, setCalendarConfig] = useState({
        viewType: "Week",
        durationBarVisible: false,
        timeRangeSelectedHandling: "Enabled",
        onTimeRangeSelected: async args => {
            const dp = calendarRef.current.control;
            const modal = await DayPilot.Modal.prompt("Create a new event:", "Event 1");
            dp.clearSelection();
            if (!modal.result) { return; }
            dp.events.add({
                start: args.start,
                end: args.end,
                id: DayPilot.guid(),
                text: modal.result
            });
        },
        onEventClick: async args => {
            await editEvent(args.e);
        },
        contextMenu: new DayPilot.Menu({
            items: [
                {
                    text: "Delete",
                    onClick: async args => {
                        const dp = calendarRef.current.control;
                        dp.events.remove(args.source);
                    },
                },
                {
                    text: "-"
                },
                {
                    text: "Edit...",
                    onClick: async args => {
                        await editEvent(args.source);
                    }
                }
            ]
        }),
        onBeforeEventRender: args => {
            args.data.areas = [
                {
                    top: 3,
                    right: 3,
                    width: 20,
                    height: 20,
                    symbol: "icons/daypilot.svg#minichevron-down-2",
                    fontColor: "#fff",
                    toolTip: "Show context menu",
                    action: "ContextMenu",
                },
                {
                    top: 3,
                    right: 25,
                    width: 20,
                    height: 20,
                    symbol: "icons/daypilot.svg#x-circle",
                    fontColor: "#fff",
                    action: "None",
                    toolTip: "Delete event",
                    onClick: async args => {
                        const dp = calendarRef.current.control;
                        dp.events.remove(args.source);
                    }
                }
            ];


            const participants = args.data.participants;
            if (participants > 0) {
                // show one icon for each participant
                for (let i = 0; i < participants; i++) {
                    args.data.areas.push({
                        bottom: 5,
                        right: 5 + i * 30,
                        width: 24,
                        height: 24,
                        action: "None",
                        image: `https://picsum.photos/24/24?random=${i}`,
                        style: "border-radius: 50%; border: 2px solid #fff; overflow: hidden;",
                    });
                }
            }
        }
    });

    useEffect(() => {
        const events = [
            {
                id: 1,
                text: "Tutorial Numbers",
                start: "2023-11-14T07:00:00",
                end: "2023-11-14T08:00:00",
                participants: 1,
            },
            {
                id: 2,
                text: "Tutorial Subtraction",
                start: "2023-11-14T08:00:00",
                end: "2023-11-14T09:00:00",
                backColor: "#6aa84f",
                participants: 1,
            },
            {
                id: 3,
                text: "Tutorial Addition",
                start: "2023-11-14T09:00:00",
                end: "2023-11-14T10:00:00",
                backColor: "#f1c232",
                participants: 1,
            },
            {
                id: 4,
                text: "Tutorial Subtraction",
                start: "2023-11-14T10:30:00",
                end: "2023-11-14T11:00:00",
                backColor: "#cc4125",
                participants: 1,
            },
            {
                id: 5,
                text: "Tutorial Chart",
                start: "2023-11-14T11:00:00",
                end: "2023-11-14T12:00:00",
                backColor: "#fff",
                participants: 3,
            },
        ];

        const startDate = "2023-11-01";

        calendarRef.current.control.update({ startDate, events });
    }, []);

    return (
        <div style={styles.wrap}>
            <div style={styles.left}>
                <DayPilotNavigator
                    selectMode={"Week"}
                    showMonths={1}
                    skipMonths={1}
                    startDate={"2023-11-14"}
                    selectionDay={"2023-11-14"}
                    onTimeRangeSelected={args => {
                        calendarRef.current.control.update({
                            startDate: args.day
                        });
                    }}
                />
            </div>
            <div style={styles.main}>
                <DayPilotCalendar
                    {...calendarConfig}
                    ref={calendarRef}
                />
            </div>
        </div>
    );
}

export default DashboardCalendar;
