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
                {type: 'btp', view: 'home', title:'Plate'}
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
            nextStop: 'boxes',
        },
        boxes: {
            description: 'Bees fly freely to pollinate plants and collect pollen, which they return to specially created bee boxes. Bee boxes are strategically placed by farmers in areas with access to varied nutrition to allow the bee to create high quality honey. Bee boxes are designed to allow the farmer to harvest the honey, which is encased in the waxy honeycomb. In our case, the honey farmer places bee boxes on the corners of neighboring farm’s property - giving his bees a varied source of nutrition and giving his neighbours the pollination his bees provide. Each bee lives for approximately 6 weeks, and creates just 1/10th of a teaspoon of honey in his lifetime!',
            stepNumber: 1,
            backgroundImage: null,
            location: 'honey',
            nextTitle: 'Collection',
            next: 'boxesToCollecting',
            previous: 'plateToBoxes',
            previousTitle: 'Plate',
        },
        boxesToCollecting: {
            type: 'animation',
            location: 'honey',
            time_start: 70.5,
            time_end: 77,
            shouldLoop: false,
            onComplete: true,
            nextStop: 'collecting',
        },
        collecting: {
            description: 'Honey farmers collect the honey from the bee boxes by sliding out panels in each box. Farmers use a time-tested smoking method to calm the bees and allow the easy removal of the bee box panels. These panels are then driven back to a central plant for processing.',
            stepNumber: 2,
            backgroundImage: null,
            location: 'honey',
            nextTitle: 'Processing',
            next: 'collectingToProcessing',
            previousTitle: 'Bee Boxes',
            previous: 'collectingToBoxes',
        },
        collectingToProcessing: {
            type: 'animation',
            location: 'honey',
            time_start: 80.5,
            time_end: 85,
            shouldLoop: false,
            onComplete: true,
            nextStop: 'processing',
        },
        processing: {
            description: 'The honeycomb that the bees create is scraped off the panels with a machine, dripping into a carefully positioned trough. The honeycomb substance is then placed in a spinning drum that separates the wax from the honey, and allows the honey to be collected separately. This honey is then pumped into storage barrels - from there, after being pumped into the appropriately sized container, it is ready for distribution! Some honey farmers ‘pasteurize’ their product by heating it to higher temperatures. This is done by some farmers to pump the honey through the processing plant more quickly.',
            stepNumber: 3,
            backgroundImage: null,
            location: 'honey',
            nextTitle: 'Cooking',
            next: 'processingToCooking',
            previous: 'processingToCollecting',
            previousTitle: 'Collection',
        },
        processingToCooking: {
            type: 'animation',
            location: 'honey',
            time_start: 90.5,
            time_end: 96,
            shouldLoop: false,
            onComplete: true,
            nextStop: 'cooking',
        },
        cooking: {
            description: 'Distribution comes in many flavors, and varies by product. Distributors store and sort foods until delivery to the end consumer, whether that is directly to the restaurant or to a supermarket. Distributors vary in size - some supply massive supermarket chains and deliver hundreds of thousands of kilograms of food each week. Some, like 100KM foods, are smaller and emphasize local delivery directly restaurants or specialty stores.',
            stepNumber: 4,
            backgroundImage: null,
            location: 'honey',
            next: 'btp',
            nextTitle: 'Back to Plate',
            previous: 'cookingToProcessing',
            previousTitle: 'Processing',
        }
    },
    beef: {
        intro: {
            action: 'intro',
            navButtons: [{type: 'animation', view: 'map', title:'Beef Tenderloin', location: 'beef', subSection: 'plateToCalving'},
                {type: 'btp', view: 'home', title:'Plate'}],
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
            nextTitle: 'Feedlot',
            next: 'calvingToFeedLot',
            previous: 'calvingToPlate',
            previousTitle: 'Plate',
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
            nextTitle: 'Slaughter',
            next: 'feedlotToSlaughter',
            previous: 'feedlotToCalving',
            previousTitle: 'Calving',
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
            nextTitle: 'Cooking',
            next: 'slaughterToCooking',
            previous: 'slaughterToFeedlot',
            previousTitle: 'Feedlot'
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
            nextTitle: 'Back to Plate',
            next: 'btp',
            previous: 'cookingToSlaughter',
            previousTitle: 'Slaughter',
        }
    },
    milk: {
        intro: {
            action: 'intro',
            navButtons: [{type: 'animation', view: 'map', title:'Bread Sauce', location: 'milk', subSection: 'plateToBarn'},
                {type: 'btp', view: 'home', title:'Plate'}],
            internalButtons: [{}],
            location: 'milk',
            disableNavButtons: false,
            shouldLoop: false,
        },
        plateToBarn: {
            type: 'animation',
            location: 'milk',
            time_start: 100.5,
            time_end: 106,
            shouldLoop: false,
            onComplete: true,
            nextStop: 'barn',
        },
        barn: {
            description: 'Dairy cows are born and spend a few hours with their mothers while they are licked off to stimulate blood flow. Once the calf has been cleaned off it is then moved to calving pens where the calves can more closely cared for and monitored. As soon as this is done, the cow is then milked and the mother\'s milk is given to the calf that is full of the essential vitamins and nutrients the calf needs. This milk given to the calf directly after birth is called colostrum. The mother cow will be carefully monitored and then return to the milking herd. Male calves are usually sent to other farms where they can be raised for veal or breeding purposes. Female calves are kept and raised until they have their first calf at about two years of age to continue the cycle.',
            stepNumber: 1,
            backgroundImage: null,
            location: 'milk',
            nextTitle: 'Milk Parlour',
            next: 'barnToMilk',
            previous: 'barnToPlate',
            previousTitle: 'Plate',
        },
        barnToMilk: {
            type: 'animation',
            location: 'milk',
            time_start: 110.5,
            time_end: 117.5,
            shouldLoop: false,
            onComplete: true,
            nextStop: 'milk'
        },
        milk: {
            description: 'On this farm, each of their 400 cows are milked three times per day to closely simulate the natural cycles of the cow and a calf. Each cow is logged in a computer system to check for vital health signs and cannot be milked if she has an infection or is on antibiotics. The milking parlour (where cows are milked) milks 24 cows at a time. The 24 cows are milked and are then released back into the herd to sleep and eat for the rest of the day.',
            stepNumber: 2,
            backgroundImage: null,
            location: 'milk',
            nextTitle: 'Milk truck',
            next: 'milkToTruck',
            previous: 'milkToBarn',
            previousTitle: 'Barn',
        },
        milkToTruck: {
            type: 'animation',
            location: 'milk',
            time_start: 120,
            time_end: 125.5,
            shouldLoop: false,
            onComplete: true,
            nextStop: 'truck'
        },
        truck: {
            description: 'The truck arrives at the plant and is then tested again for contaminants.  The milk is offloaded and pasteurized for safety purposes. Essential vitamins are added to the milk and it is then processed into cream, skim and other dairy products such as ice cream and butter. For the use of our dish we used buttermilk which has bacterial cultures added to it, in order to give it a unique taste.',
            stepNumber: 3,
            backgroundImage: null,
            location: 'milk',
            nextTitle: 'Cooking',
            next: 'truckToCooking',
            previous: 'truckToMilk',
            previousTitle: 'Milking Parlour',
        },
        truckToCooking: {
            type: 'animation',
            location: 'milk',
            time_start: 130,
            time_end: 136.5,
            shouldLoop: false,
            onComplete: true,
            nextStop: 'cooking'
        },
        cooking: {
            description: 'We sure as hell want to talk about the cooking process, we\'re just not sure what happned!',
            stepNumber: 4,
            backgroundImage: null,
            location: 'beef',
            nextTitle: 'Back to Plate',
            next: 'btp',
            previous: 'cookingToTruck',
            previousTitle: 'Milk Truck',
        }
    },
    potatoes: {
        intro: {
            action: 'intro',
            navButtons: [{type: 'animation', view: 'map', title:'Potatoe Tots', location: 'potatoes', subSection: 'plateToIrrigation'},
                {type: 'btp', view: 'home', title:'Plate'}],
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
            onComplete: true,
            nextStop: 'irrigation'
        },
        irrigation: {
            description: 'At the beginning of the potato’s growth, potato farmers ‘hill’ the dirt over the potato, providing it with a much needed cover to protect it from the elements and keep the seed well buried. Farmers also use this time to monitor their fields for pests or disease, and may use pesticides as appropriate to help keep the crop healthy. Potatoes are irrigated as needed throughout the hottest parts of the summer.',
            stepNumber: 1,
            backgroundImage: null,
            location: 'potatoes',
            nextTitle: 'Harvest',
            next: 'irrigationToHarvest',
            previous: 'irrigationToPlanting',
            previousTitle: 'Planting',
        },
        irrigationToHarvest: {
            type: 'animation',
            location: 'potatoes',
            time_start: 157,
            time_end: 163,
            shouldLoop: false,
            onComplete: true,
            nextStop: 'harvest'
        },
        harvest: {
            description: ' Potatoes are pulled out of the ground using a specialized harvesting machine that pulls them by their roots. They are sized and sorted on the harvester and uniform or damaged potatoes are spread back on the field. The potatoes are then transferred to large crates that are then sent to the processing facility.',
            stepNumber: 2,
            backgroundImage: null,
            location: 'potatoes',
            nextTitle: 'Processing',
            next: 'harvestToProcessing',
            previous: 'harvestToIrrigation',
            previousTitle: 'Irrigation',
        },
        harvestToProcessing: {
            type: 'animation',
            location: 'potatoes',
            time_start: 164,
            time_end: 170,
            shouldLoop: false,
            onComplete: true,
            nextStop: 'processing',
        },
        processing: {
            description: 'Potatoes are pulled out of the ground using a specialized harvesting machine that pulls them by their roots. They are sized and sorted on the harvester and uniform or damaged potatoes are spread back on the field. The potatoes are then transferred to large crates that are then sent to the processing facility.',
            stepNumber: 3,
            backgroundImage: null,
            location: 'potatoes',
            nextTitle: 'Cooking',
            next: 'processingToCooking',
            previous: 'ProccessingToHarvest',
            previousTitle: 'Harvest'
        },
        processingToCooking: {
            type: 'animation',
            location: 'potatoes',
            time_start: 174,
            time_end: 180,
            shouldLoop: false,
            onComplete: true,
            nextStop: 'cooking'
        },
        cooking: {
            description: 'We sure as hell want to talk about the cooking process, we\'re just not sure what happned!',
            stepNumber: 4,
            backgroundImage: null,
            location: 'potatoes',
            nextTitle: 'Back to Plate',
            next: 'btp',
            previous: 'cookingToProcessing',
            previousTitle: 'Processing',
        }
    },
    sunflowers: {
        intro: {
            action: 'intro',
            navButtons: [{type: 'animation', view: 'map', title:'Sunflower Oil', location: 'sunflowers', subSection: 'plateToPlanting'},
                {type: 'btp', view: 'home', title:'Plate'}],
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
            nextStop: 'planting',
        },
        planting: {
            description: 'Sunflowers are planted in early spring using a similar planter to other crops. It is towed behind a tractors and plants many rows of flowers at a time. The planter also puts a precise amount of fertilizer with each seed to help the plant start growth.',
            stepNumber: 1,
            backgroundImage: null,
            location: 'sunflowers',
            nextTitle: 'Blooming',
            next: 'plantingToBlooming',
            previous: 'plantingToPlate',
            previousTitle: 'Plate',
        },
        plantingToBlooming: {
            type: 'animation',
            location: 'sunflowers',
            time_start: 200,
            time_end: 208,
            shouldLoop: false,
            onComplete: true,
            nextStop: 'blooming',
        },
        blooming: {
            description: 'Sunflowers in bloom - in mid august the sunflowers are in full bloom and look like the flowers we all know and recognize. They are then left until late fall to dry and be harvested.',
            stepNumber: 2,
            backgroundImage: null,
            location: 'sunflowers',
            nextTitle: 'Harvest',
            next: 'bloomingToHarvest',
            previous: 'bloomingToPlanting',
            previousTitle: 'Planting',
        },
        bloomingToHarvest: {
            type: 'animation',
            location: 'sunflowers',
            time_start: 209.5,
            time_end: 215.5,
            shouldLoop: false,
            onComplete: true,
            nextStop: 'harvest',
        },
        harvest: {
            description: 'Sunflowers in bloom - in mid august the sunflowers are in full bloom and look like the flowers we all know and recognize. They are then left until late fall to dry ',
            stepNumber: 3,
            backgroundImage: null,
            location: 'sunflowers',
            nextTitle: 'Cooking',
            next: 'harvestToCooking',
            previous: 'harvestToBlooming',
            previousTitle: 'Blooming',
        },
        harvestToCooking: {
            type: 'animation',
            location: 'sunflowers',
            time_start: 220,
            time_end: 226,
            shouldLoop: false,
            onComplete: true,
            nextStop: 'cooking',
        },
        cooking: {
            description: 'We sure as hell want to talk about the cooking process, we\'re just not sure what happned!',
            stepNumber: 4,
            backgroundImage: null,
            location: 'sunflowers',
            nextTitle: 'Back to Plate',
            next: 'btp',
            previous: 'cookingToHarvest',
            previousTitle: 'Harvest',
        },
    }
};
