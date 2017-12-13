export const disableNavButtons = (core) => {
    console.log('ran');
    core.disableNavButtonsHandler(true);
};

export const enableNavButtons = (core) => {
    console.log('I ran');
    core.disableNavButtonsHandler(false);
};

export const toFrames = (number) => number*30;
export const toMS = (number) => number*1000;
