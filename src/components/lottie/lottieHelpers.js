export const disableNavButtons = (core) => {
    core.disableNavButtonsHandler(true);
};

export const enableNavButtons = (core) => {
    core.disableNavButtonsHandler(false);
};

export const toFrames = (number) => number*24;
export const toMS = (number) => number*1000;
