import React from "react";
import Heading from "../../components/search/heading/heading";
import SearchForm from "../../components/search/textfield/textfield";
import SearchContent from "../../components/search/content/content";
class ArticlesPage extends React.Component {
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

export default ArticlesPage;
