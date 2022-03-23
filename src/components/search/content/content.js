import React from "react";
import { connect } from "react-redux";
import Article from "../../Articles/Article/Article";
import Loader from "../../../utilities/Loader/Loader";
function SearchResults(props) {
  const { articles } = props;
  const handleArticleClick = (data) => {
    // props.openArticle(data);
    // navigate("/details");
  };

  const articleListMap = articles.map((ele, index) => {
    return (
      <Article
        item={ele}
        key={ele + index}
        handleClick={() => handleArticleClick(ele)}
      />
    );
  });

  return props.isLoading ? (
    <Loader />
  ) : (
    <div className="articles-container">
      {articleListMap.length > 0 ? articleListMap : null}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    isLoading: state.searchPage.loading,
    errorText: state.searchPage.errorText,
    articles: state.searchPage.articles,
  };
};
// const mapDispatchToProps = () => {
//   return {};
// };
export default connect(mapStateToProps, null)(SearchResults);
