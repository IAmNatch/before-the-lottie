export const anims = {
    start: [
        {type: 'intro', view: 'intro', title:'Beef', location: 'beef', subSection: 'intro', overlay: {start: [10, 11], end: [13, 15]}},
        {type: 'intro', view: 'intro', title:'Potatoes', location: 'potatoes', subSection: 'intro', overlay: {start: [12, 13], end: [23, 27]}},
        {type: 'intro', view: 'intro', title:'Honey', location: 'honey', subSection: 'intro', overlay: {start: [14, 15], end: [22, 28]}},
        {type: 'intro', view: 'intro', title:'Milk', location: 'milk', subSection: 'intro', overlay: {start: [16, 17], end: [22, ]}},
        {type: 'intro', view: 'intro', title:'Sunflowers', location: 'sunflowers', subSection: 'intro', overlay: {start: [18, 19], end: [22, 24]}},
    ],
    honey: {
        intro: {
            title: 'Honey',
            type: 'intro',
            view: 'intro',
            navButtons: [
                {type: 'animation', view: 'map', title:'Honey', location: 'honey', subSection: 'plateToBoxes'},
                {type: 'btp', view: 'home', title:'Back to Plate'}
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
        plateToBoxes: {
            type: 'animation',
            location: 'honey',
            time_start: 60.5,
            time_end: 66,
            shouldLoop: false,
            onComplete: true,
        },
        boxes: {
        },
        boxesToCollecting: {
            type: 'animation',
            location: 'honey',
            time_start: 70.5,
            time_end: 77,
            shouldLoop: false,
            onComplete: true,
        }
    },
    beef: {
        intro: {
            action: 'intro',
            navButtons: [{type: 'animation', view: 'map', title:'Begin Adventure', location: 'beef', subSection: 'plateToCalving'},
                {type: 'btp', view: 'home', title:'Back to Plate'}],
            internalButtons: [{}],
            location: 'beef',
            disableNavButtons: false,
            shouldLoop: false
        },
        plateToCalving: {
            type: 'animation',
            location: 'honey',
            time_start: 20.5,
            time_end: 26,
            shouldLoop: false,
            onComplete: true,
        },
        calving: {

        },
    },
    milk: {
        intro: {
            action: 'intro',
            navButtons: [{type: 'animation', view: 'map', title:'Begin Adventure', location: 'milk', subSection: 'plateToBarn'},
                {type: 'btp', view: 'home', title:'Back to Plate'}],
            internalButtons: [{}],
            location: 'beef',
            disableNavButtons: false,
            shouldLoop: false
        },
        plateToBarn: {
            type: 'animation',
            location: 'honey',
            time_start: 100.5,
            time_end: 106,
            shouldLoop: false,
            onComplete: true,
        },
        barn: {
        },
    },
    potatoes: {
        intro: {
            action: 'intro',
            navButtons: [{type: 'animation', view: 'map', title:'Begin Adventure', location: 'potatoes', subSection: 'plateToIrrigation'},
                {type: 'btp', view: 'home', title:'Back to Plate'}],
            internalButtons: [{}],
            location: 'potatoes',
            disableNavButtons: false,
            shouldLoop: false
        },
        plateToIrrigation: {
            type: 'animation',
            location: 'potatoes',
            time_start: 145.5,
            time_end: 151,
            shouldLoop: false,
            onComplete: ({location: 'potatoes', subSection: 'plateToIrrigation'}),
        },
        irrigation: {

        },
    },
    sunflowers: {
        intro: {
            action: 'intro',
            navButtons: [{type: 'animation', view: 'map', title:'Begin Adventure', location: 'sunflowers', subSection: 'plateToPlanting'},
                {type: 'btp', view: 'home', title:'Back to Plate'}],
            internalButtons: [{}],
            location: 'sunflowers',
            disableNavButtons: false,
            shouldLoop: false
        },
        plateToPlanting: {
            type: 'animation',
            location: 'sunflowers',
            time_start: 190.5,
            time_end: 196,
            shouldLoop: false,
            onComplete: ({location: 'sunflowers', subSection: 'plateToPlanting'}),
        },
        planting: {

        },
    }
};
