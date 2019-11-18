/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/sort-comp */
/* eslint-disable no-alert */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './styles';

import { dispatchArticles, getData } from '../redux/actions/articles';

class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  componentDidMount = async () => {
    const { getdata, save } = this.props;
    const articles = await save(getdata, window.location.pathname);
    this.setState({ articles });
  }

  render() {
    const { articles } = this.state;
    return (
      <div style={styles.body}>
        <h2 style={styles.pageTitle}>All articles</h2>
        <ul>
          {
            articles.map((article) => (
              <li key={articles.indexOf(article)} style={styles.li}>
                <div onClick={() => window.location.replace(`articles/${article.slug}`)}>
                  <h3 style={styles.preview}>{article.title}</h3>
                  <em style={styles.preview}>{article.description}</em>
                  <span style={styles.author}>{article.author.name}</span>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

Articles.propTypes = {
  save: PropTypes.func.isRequired,
  getdata: PropTypes.func,
  articles: PropTypes.arrayOf(Object),
};

Articles.defaultProps = {
  getdata: getData,
  articles: [],
};

const mapState = (state) => ({ articles: state.articles });

export default connect(mapState, { save: dispatchArticles })(Articles);
