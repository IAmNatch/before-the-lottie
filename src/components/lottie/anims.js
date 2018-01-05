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
            title: 'Honey Glaze',
            type: 'intro',
            view: 'intro',
            navButtons: [
                {type: 'animation', view: 'map', title:'Honey Glaze', location: 'honey', subSection: 'plateToBoxes'},
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
            nextStop: 'boxes'
        },
        boxes: {
            description: 'Bees fly freely to pollinate plants and collect pollen, which they return to specially created bee boxes. Bee boxes are strategically placed by farmers in areas with access to varied nutrition to allow the bee to create high quality honey. Bee boxes are designed to allow the farmer to harvest the honey, which is encased in the waxy honeycomb. In our case, the honey farmer places bee boxes on the corners of neighboring farm’s property - giving his bees a varied source of nutrition and giving his neighbours the pollination his bees provide. Each bee lives for approximately 6 weeks, and creates just 1/10th of a teaspoon of honey in his lifetime!',
            stepNumber: 1,
            backgroundImage: null,
            location: 'honey',
            next: 'boxesToCollecting',
            previous: 'plateToBoxes'
        },
        boxesToCollecting: {
            type: 'animation',
            location: 'honey',
            time_start: 70.5,
            time_end: 77,
            shouldLoop: false,
            onComplete: true,
            nextStop: 'collecting'
        },
        collecting: {
            description: 'Honey farmers collect the honey from the bee boxes by sliding out panels in each box. Farmers use a time-tested smoking method to calm the bees and allow the easy removal of the bee box panels. These panels are then driven back to a central plant for processing.',
            stepNumber: 2,
            backgroundImage: null,
            location: 'honey',
            next: 'collectingToProcessing',
            previous: 'collectingToBoxes'
        },
        collectingToProcessing: {
            type: 'animation',
            location: 'honey',
            time_start: 80.5,
            time_end: 85,
            shouldLoop: false,
            onComplete: true,
            nextStop: 'processing'
        },
        processing: {
            description: 'The honeycomb that the bees create is scraped off the panels with a machine, dripping into a carefully positioned trough. The honeycomb substance is then placed in a spinning drum that separates the wax from the honey, and allows the honey to be collected separately. This honey is then pumped into storage barrels - from there, after being pumped into the appropriately sized container, it is ready for distribution! Some honey farmers ‘pasteurize’ their product by heating it to higher temperatures. This is done by some farmers to pump the honey through the processing plant more quickly.',
            stepNumber: 3,
            backgroundImage: null,
            location: 'honey',
            next: 'processingToCooking',
            previous: 'processingToCollecting'
        },
        processingToCooking: {
            type: 'animation',
            location: 'honey',
            time_start: 90.5,
            time_end: 96,
            shouldLoop: false,
            onComplete: true,
            nextStop: 'cooking'
        },
        cooking: {
            description: 'Distribution comes in many flavors, and varies by product. Distributors store and sort foods until delivery to the end consumer, whether that is directly to the restaurant or to a supermarket. Distributors vary in size - some supply massive supermarket chains and deliver hundreds of thousands of kilograms of \
            food each week. Some, like 100KM foods, are smaller and emphasize local delivery directly restaurants or specialty stores.',
            stepNumber: 4,
            backgroundImage: null,
            location: 'honey',
            next: 'btp',
            previous: 'cookingToProcessing',
        }
    },
    beef: {
        intro: {
            action: 'intro',
            navButtons: [{type: 'animation', view: 'map', title:'Beef Tenderloin', location: 'beef', subSection: 'plateToCalving'},
                {type: 'btp', view: 'home', title:'Back to Plate'}],
            internalButtons: [{}],
            location: 'beef',
            disableNavButtons: false,
            shouldLoop: false,
        },
        plateToCalving: {
            type: 'animation',
            location: 'beef',
            time_start: 20.5,
            time_end: 26,
            shouldLoop: false,
            onComplete: true,
            nextStop: 'calving',
        },
        calving: {
            description: 'Beef farmers have specially selected breeding cows that give birth to young calves on pasture. The calves are kept with their mothers for approximately 8 months, as they usually roam outdoors and drink her milk. As the calves grow, they begin weaning off their mother’s milk and eating grass, on pasture. This stage of production is usually its own farm and is called a “cow calf” operation After about 8 months, the now larger cattle are moved to the next stage called a feedlot.',
            stepNumber: 1,
            backgroundImage: null,
            location: 'beef',
            next: 'calvingToFeedLot',
            previous: 'calvingToPlate',
        },
        calvingToFeedLot: {
            type: 'animation',
            location: 'beef',
            time_start: 30.5,
            time_end: 37.5,
            shouldLoop: false,
            onComplete: true,
            nextStop: 'feedlot',
        },
        feedlot: {
            description: 'Feedlots take in cattle from numerous cow calf operations and house them either in large barns or outdoors in pens. Feedlots are much larger than cow calf farms as they aggregate cattle from many cow calf operations. The cattle continue growing as they are fed a diet that varies from farm to farm but usually includes a mixture of grains and forages, which contain a higher fat percentage. The cattle reach market size between 18 months and 2 years, when they are transported for the slaughter.',
            stepNumber: 2,
            backgroundImage: null,
            location: 'beef',
            next: 'feedlotToSlaughter',
            previous: 'feedlotToCalving',
        },
        feedlotToSlaughter: {
            type: 'animation',
            location: 'beef',
            time_start: 40.5,
            time_end: 45.5,
            shouldLoop: false,
            onComplete: true,
            nextStop: 'slaughter',
        },
        slaughter: {
            description: 'The cattle are loaded onto trailers that ensure the safety of the cattle while in transport. The trailers are also well ventilated to reduce stress. Once the cattle arrive at the processing facility they are herded into a specially designed lane called a chute that helps reduce stress during this stage. Modern slaughter techniques are used to ensure that the animal is unconscious immediately and feels no pain. Both of these stages have been carefully researched to ensure the most efficient and humane slaughter. People such as Temple Grandin were pioneers in this field. Butchers then cut each carcass into cuts of meat that we would recognize in a grocery store or at a restaurant.',
            stepNumber: 3,
            backgroundImage: null,
            location: 'beef',
            next: 'slaughterToCooking',
            previous: 'slaughterToFeedlot',
        },
        slaughterToCooking: {
            type: 'animation',
            location: 'beef',
            time_start: 40.5,
            time_end: 45.5,
            shouldLoop: false,
            onComplete: true,
            nextStop: 'cooking',
        },
        cooking: {
            description: 'We sure as hell want to talk about the cooking process, we\'re just not sure what happned!',
            stepNumber: 4,
            backgroundImage: null,
            location: 'beef',
            next: 'btp',
            previous: 'cookingToSlaughter',
        }
    },
    milk: {
        intro: {
            action: 'intro',
            navButtons: [{type: 'animation', view: 'map', title:'Bread Sauce', location: 'milk', subSection: 'plateToBarn'},
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
            navButtons: [{type: 'animation', view: 'map', title:'Potatoe Tots', location: 'potatoes', subSection: 'plateToIrrigation'},
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
            navButtons: [{type: 'animation', view: 'map', title:'Sunflower Oil', location: 'sunflowers', subSection: 'plateToPlanting'},
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
