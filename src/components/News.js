import React from "react";
import { connect } from "react-redux";
import NewsItem from "./NewsItem";

const mapStateToProps = state => ({
  articles: state.articles
});

class News extends React.Component {
  render() {
    if (this.props.articles) {
      return (
        <div>
          <div className="news">
            {this.props.articles.map((article, index) => (
              <NewsItem article={article} />
            ))}
          </div>
        </div>
      );
    } else {
      return "Sorry";
    }
  }
}

export default connect(mapStateToProps)(News);
