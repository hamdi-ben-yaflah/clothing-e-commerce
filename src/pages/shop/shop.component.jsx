import React from 'react';
import CollectionsOverviewComponent from '../../components/collections-overview/collections-overview.component';
import { Route } from 'react-router-dom';
import Collection from '../collection/collection.component';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const collectionRef = firestore.collection('collections');
    const { updateCollections } = this.props;
    collectionRef.onSnapshot( async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
    })

  }

  render () {
    const { match } = this.props;

    return (
      <div className="shop-page">
          <Route exact  path = {`${match.path}`} component={CollectionsOverviewComponent} />
          <Route exact path= {`${match.path}/:collectionId`} component={Collection}/>
      </div> 
    );
  }
}  

const mapDispatchToProps = dispatch =>  ({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect (null, mapDispatchToProps)(ShopPage);