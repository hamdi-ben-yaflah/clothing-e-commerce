import React from 'react';
import CollectionsOverviewComponent from '../../components/collections-overview/collections-overview.component';
import { Route } from 'react-router-dom';
import Collection from '../collection/collection.component';

const ShopPage = ({match}) => {
        return (
          <div className="shop-page">
              <Route exact  path = {`${match.path}`} component={CollectionsOverviewComponent} />
              <Route exact path= {`${match.path}/:collectionId`} component={Collection}/>
          </div> 
        );
}

export default ShopPage;