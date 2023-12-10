setInterval(() => {
    const currentTime = new Date();

    const options12HourTime = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true // Use 12-hour clock with AM/PM
    };

    const options24HourTime = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false // Use 24-hour clock with AM/PM
    };

    const formatted12HrTime = currentTime.toLocaleTimeString('en-US', options12HourTime);
    const formatted24HrTime = currentTime.toLocaleTimeString('en-US', options24HourTime);

    console.log(formatted12HrTime);
    console.log(formatted24HrTime);
}, 1000)