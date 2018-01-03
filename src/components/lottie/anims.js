export const anims = {
    start: [
        {type: 'intro', view: 'intro', title:'Beef', location: 'beef', subSection: 'intro', overlay: {start: [10, 12], end: [13, 15]}},
        {type: 'intro', view: 'intro', title:'Potatoes', location: 'potatoes', subSection: 'intro', overlay: {start: [20, 22], end: [23, 27]}},
        {type: 'intro', view: 'intro', title:'Honey', location: 'honey', subSection: 'intro', overlay: {start: [20, 22], end: [22, ]}},
        {type: 'intro', view: 'intro', title:'Milk', location: 'milk', subSection: 'intro', overlay: {start: [20, 22], end: [22, ]}},
        {type: 'intro', view: 'intro', title:'Sunflowers', location: 'sunflowers', subSection: 'intro', overlay: {start: [20, 22], end: [22, 24]}},
    ],
    honey: {
        intro: {
            title: 'Honey',
            type: 'intro',
            view: 'intro',
            time_start: 20,
            time_end: 26,
            navButtons: [
                {type: 'animation', view: 'map', title:'Honey', location: 'honey', subSection: 'toBeeBoxesfromPlate'},
                {type: 'btp', view: 'home', title:'Back to Plate'},

            ],
            internalButtons: [{}],
            location: 'honey',
            disableNavButtons: true,
            shouldLoop: false,
            post: {
                time_start: 0,
                time_end: 10,
                shouldLoop: true,
            }
        },
        toBeeBoxesfromPlate: {
            type: 'animation',
            location: 'honey',
            time_start: 20,
            time_end: 22,
            onComplete: 'beeBoxes'
        },
        beeBoxes: {

        }

    },
    beef: {
        intro: {
            action: 'intro',
            time_start: 20,
            time_end: 24,
            navButtons: [{type: 'animation', title: 'Go home!', location: 'beef', subSection: 'intro'}],
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
