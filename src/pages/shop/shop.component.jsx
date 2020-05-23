import React from 'react';
import CollectionsOverviewComponent from '../../components/collections-overview/collections-overview.component';
import { Route } from 'react-router-dom';
import Collection from '../collection/collection.component';
import { connect } from 'react-redux';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { createStructuredSelector } from "reselect";
import { selectCollectionFetching, selectCollectionLoaded } from "../../redux/shop/shop.selectos";

import  WithSpinner  from "../../components/with-spinner/with-spinner.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverviewComponent)
const CollectionPageWithSpinner = WithSpinner (Collection);

class ShopPage extends React.Component {

  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;

    fetchCollectionsStartAsync()
  }

  render () {
    const { match, isCollectionFetching, isCollectionsLoaded } = this.props;

    return (
      <div className="shop-page">
          <Route 
          exact  
          path = {`${match.path}`} 
          render={(props) => <CollectionsOverviewWithSpinner 
          isLoding={isCollectionFetching} {...props} />} />
          <Route 
          exact 
          path= {`${match.path}/:collectionId`} 
          render={(props) => <CollectionPageWithSpinner 
          isLoding={!isCollectionsLoaded} {...props} />}/>
      </div> 
    );
  }
}  

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectCollectionFetching,
  isCollectionsLoaded: selectCollectionLoaded
})

const mapDispatchToProps = dispatch =>  ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect (mapStateToProps, mapDispatchToProps)(ShopPage);