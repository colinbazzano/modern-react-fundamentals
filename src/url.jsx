/*
******ATTENTION HERE!*********

This file will *NOT* work, it only contains example code to give a better
idea of the practical use for hooks and modern react fundamentals

this file covers the topic: Don't Stop the Data Flow
and shows how refetching upon change can be a breeze when using the dependency
array from useEffect
*/

import { useEffect } from "react";

// OLD WAY FIRST
class SearchResults extends React.Component {
  state = {
    data: null,
    currentPage: 0
  };
  componentDidMount() {
    this.fetchResults();
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.currentPage !== this.state.currentPage ||
      prevProps.query !== this.props.query
    ) {
      this.fetchResults();
    }
  }
  fetchResults() {
    const url = this.getFetchUrl();
    // Do the fetching
  }
  getFetchUrl() {
    return (
      "http://myapi/results?query" +
      this.props.query +
      "&page=" +
      this.state.currentPage
    );
  }
  render() {
    // ...
  }
}

// NEW MORE MODERN APPROACH USING USESTATE AND USEEFFECT
function SearchResultsHooks({ query }) {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    function fetchResults() {
      const url = getFetchUrl();
      // do the fetching
    }

    function getFetchUrl() {
      return "http://myapi/results?query" + query + "&page=" + currentPage;
    }

    fetchResults();
  }, [currentPage, query]); // here it covers refetching on change
  // ....
}
