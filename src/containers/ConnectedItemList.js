import { connect } from 'react-redux'
import { itemsFetch, errorAfterFiveSec } from '../store/actions/actionCreators';
import ItemList from '../components/ItemList';

const mapStateToProps = (state) => {
    console.log(state)
    return {
        items: state.itemFetchSucces,
        failed: state.itemFetchFailed.failed,
        errorText: state.itemFetchFailed.errorText,
        loading: state.itemLoading
    }
}

const mapDispathcToProps = (dispatch) => {
    return {
        itemsFetchData: (url) => dispatch(itemsFetch(url)),
        itemFail: () => dispatch(errorAfterFiveSec())
    }
}

export default connect(mapStateToProps, mapDispathcToProps)(ItemList);