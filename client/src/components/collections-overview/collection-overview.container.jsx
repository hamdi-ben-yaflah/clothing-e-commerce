import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectCollectionFetching } from "../../redux/shop/shop.selectos";
import  WithSpinner  from "../../components/with-spinner/with-spinner.component";
import CollectionsOverviewComponent from '../../components/collections-overview/collections-overview.component';

const mapStateToProps = createStructuredSelector({
    isLoding: selectCollectionFetching
  });


const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverviewComponent)

export default CollectionsOverviewContainer;
