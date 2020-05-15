import { createSelector } from "reselect";

//input selector
const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    (shop) => shop.collections
);
