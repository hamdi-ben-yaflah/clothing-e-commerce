import React from 'react';
import CollectionsOverviewComponent from '../../components/collections-overview/collections-overview.component';
import { Route } from 'react-router-dom';
import Collection from '../collection/collection.component';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions';

import  WithSpinner  from "../../components/with-spinner/with-spinner.component";
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverviewComponent)
const CollectionPageWithSpinner = WithSpinner (Collection);

class ShopPage extends React.Component {

  state = {
    loading: true
  }

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const collectionRef = firestore.collection('collections');
    const { updateCollections } = this.props;

    collectionRef.onSnapshot( async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({loading: false});
    })

  }

  render () {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
          <Route exact  path = {`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoding={loading} {...props} />} />
          <Route exact path= {`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoding={loading} {...props} />}/>
      </div> 
    );
  }
}  

const mapDispatchToProps = dispatch =>  ({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect (null, mapDispatchToProps)(ShopPage);