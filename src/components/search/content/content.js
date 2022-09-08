import React from "react";
import { connect } from "react-redux";
import Article from "../../Articles/Article/Article";
import Loader from "../../../utilities/Loader/Loader";
import { Pagination } from "@mui/material";
import Aux from "../../../hoc/auxilary";
import * as actions from "../../../store/actions/index";
import isMobile from "../../../utilities/Device/Device";
import { Box } from "@mui/system";

function SearchResults(props) {
  const { articles, searchTerm } = props;
  let pageSize = 9;
  let pagesCount =
    props.totalResults > 0 && Math.ceil(props.totalResults / pageSize);
  const handleArticleClick = (data) => {
    // props.openArticle(data);
    // navigate("/details");
  };

  const paginationHandler = (event, page) => {
    props.onPageChange(searchTerm, page);
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
    <Aux>
      <div className="articles-container">
        {articleListMap.length > 0 ? articleListMap : null}
      </div>
      {props.totalResults > 0 ? (
        <Box
          component="div"
          sx={{
            margin: "20px 0px",
          }}
        >
          <Pagination
            count={pagesCount}
            onChange={paginationHandler}
            page={props.currentPage}
            size={isMobile() ? "small" : "large"}
            variant="outlined"
            color="primary"
            shape="rounded"
            sx={{
              ul: {
                justifyContent: "center",
              },
            }}
          />
        </Box>
      ) : null}
    </Aux>
  );
}
const mapStateToProps = (state) => {
  return {
    isLoading: state.searchPage.loading,
    errorText: state.searchPage.errorText,
    articles: state.searchPage.articles,
    totalResults: state.searchPage.totalCount,
    currentPage: state.searchPage.currentPage,
    searchTerm: state.searchPage.searchText,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onPageChange: (text, pageNo) => dispatch(actions.searchInit(text, pageNo)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
