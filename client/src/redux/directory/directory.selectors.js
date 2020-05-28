import { createSelector } from "reselect";

//input selector
const selectDirectory = state => state.directory;

export const selectDirectorySection = createSelector(
    [selectDirectory],
    (directory) => directory.sections
);
