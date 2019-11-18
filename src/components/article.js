import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

import { getData } from '../redux/actions/articles';

import styles from './styles';

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article: {},
    };
  }

  componentDidMount = async () => {
    const { getdata, location } = this.props;
    const article = await getdata(location.pathname);
    this.setState({ article: article.data });
  }

  render() {
    const { article } = this.state;
    return (
      <div style={styles.body}>
        <h4 style={styles.pageTitle}>
          Article slug:
          {' '}
          {article.slug}
        </h4>
        <h1 style={styles.pageTitle}>{article.title}</h1>
        <h3>{article.description}</h3>
        <div style={styles.content}>{ReactHtmlParser(article.body)}</div>
      </div>
    );
  }
}
Article.propTypes = {
  getdata: PropTypes.func,
  location: PropTypes.object.isRequired,
};

Article.defaultProps = {
  getdata: getData,
};

export default Article;
