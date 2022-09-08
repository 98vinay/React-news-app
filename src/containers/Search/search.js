import React from "react";
import Heading from "../../components/search/heading/heading";
import SearchForm from "../../components/search/textfield/textfield";
import SearchContent from "../../components/search/content/content";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
class SearchPage extends React.Component {
  componentWillUnmount() {
    this.props.clearSearchPage();
  }
  render() {
    return (
      <div>
        <Heading heading="Search" />
        <SearchForm />
        <SearchContent />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    clearSearchPage: () => dispatch(actions.clearSearchData()),
  };
};
export default connect(null, mapDispatchToProps)(SearchPage);
