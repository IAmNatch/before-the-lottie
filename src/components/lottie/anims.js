export const anims = {
    tests : {
        start: {
            action: 'start',
            time_start: 0,
            time_end: 10,
            navButtons: [['tests','toX'], ['tests', 'xToPlate'], ['honey', 'intro']],
            disableNavButtons: false,
            shouldLoop: true,
        },
        toX: {
            action: 'toX',
            time_start: 10,
            time_end: 18,
            navButtons: [['tests', 'xToPlate']],
            disableNavButtons: true,
            shouldLoop: false,
        },
        xToPlate: {
            action: 'xToPlate',
            time_start: 20,
            time_end: 26,
            navButtons: [['tests', 'toX']],
            disableNavButtons: true,
            shouldLoop: false,
            post: {
                time_start: 0,
                time_end: 10,
                shouldLoop: true,
            }
        }
    },
    start: [
        {type: 'animation', title:'Beef', location: 'beef', subSection: 'intro', overlay: {start: [10, 12], end: [13, 15]}},
        {type: 'animation', title:'Potatoes', location: 'potatoes', subSection: 'intro', overlay: {start: [20, 22], end: [23, 27]}},
        {type: 'animation', title:'Honey', location: 'honey', subSection: 'intro', overlay: {start: [20, 22], end: [22, ]}},
        {type: 'animation', title:'Milk', location: 'milk', subSection: 'intro', overlay: {start: [20, 22], end: [22, ]}},
        {type: 'animation', title:'Honey', location: 'honey', subSection: 'intro', overlay: {start: [20, 22], end: [22, ]}},
    ],
    honey: {
        intro: {
            action: 'intro',
            time_start: 20,
            time_end: 26,
            navButtons: [['honey', 'intro'], ['modal', 'vimeoUrl',]],
            internalButtons: [{}],
            location: 'honey',
            disableNavButtons: true,
            shouldLoop: false,
            post: {
                time_start: 0,
                time_end: 10,
                shouldLoop: true,
            }
        }
    },
    beef: {
        intro: {
            action: 'intro',
            time_start: 20,
            time_end: 26,
            navButtons: [{type: 'modal', title: 'Watch the Video', vimeoURL: 'set123'}, {type: 'animation', title:'Back to Plate', location: 'beef', subSection: 'intro'}],
            internalButtons: [{}],
            location: 'honey',
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
