import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectCollectionLoaded } from "../../redux/shop/shop.selectos";
import  WithSpinner  from "../../components/with-spinner/with-spinner.component";
import Collection from '../collection/collection.component';

const mapStateToProps = createStructuredSelector({
    isLoding: state => !selectCollectionLoaded(state)
  });


const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(Collection)

export default CollectionPageContainer;
