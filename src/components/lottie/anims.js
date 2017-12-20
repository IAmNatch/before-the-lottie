export const anims = {
    tests : {
        start: {
            action: 'start',
            time_start: 0,
            time_end: 10,
            buttons: [{}],
            disableNavButtons: false,
            shouldLoop: true,
        },
        toX: {
            action: 'toX',
            time_start: 10,
            time_end: 20,
            buttons: [{}],
            disableNavButtons: true,
            shouldLoop: false,
        },
        xToPlate: {
            action: 'xToPlate',
            time_start: 20,
            time_end: 26,
            buttons: [{}],
            disableNavButtons: true,
            shouldLoop: false,
            post: {
                time_start: 0,
                time_end: 10,
                shouldLoop: true,
            }
        }
    }
};
