import { createSelector } from "reselect";



//input selector
const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    (collecions) => Object.keys(collecions).map(key => collecions[key])
);

export const selectCollection = collectionUrlParam => 
 createSelector(
    [selectCollections],
    (collections) => collections[collectionUrlParam]
);
