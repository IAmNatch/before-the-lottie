export const anims = {
    tests : {
        toX: {
            action: 'toX',
            time_start: 0,
            time_end: 6,
            buttons: [{}],
            disableNavButtons: true,
            shouldLoop: false,
        },
        xToPlate: {
            action: 'xToPlate',
            time_start: 10,
            time_end: 16,
            buttons: [{}],
            disableNavButtons: true,
            shouldLoop: false,
            post: {
                time_start: 20,
                time_end: 22,
                shouldLoop: true,
            }
        }
    }
};
