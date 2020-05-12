import React from "react";

const imgStyle = {
  hight: "auto",
  width: "150px",
  border: "4px solid RebeccaPurple ",
  borderRadius: "5%"
};
const articleStyle = {
  width: "80%",
  margin: "0 auto",
  color: "olive"
};

const articleContent = {
  padding: "20px"
};

const errorMessage = {
  color: "red"
};

function NewsItem(props) {
  const article = props.article;

  return (
    <article style={articleStyle}>
      {article.error && <h2 style={errorMessage}>{article.error}</h2>}
      {article.title && (
        <table>
          <tr>
            <td>
              <a href={article.url} target="_blank">
                <img style={imgStyle} src={article.urlToImage} alt="" />
              </a>
            </td>
            <td class={articleContent}>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
            </td>
          </tr>
        </table>
      )}
    </article>
  );
}

/*
const mapStateToProps = state => ({
  article: state.news
});
*/
export default NewsItem;
