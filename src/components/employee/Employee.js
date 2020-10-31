import React from 'react';
import { fetchPosts, deleteItem } from '../../store/action/actions';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './emp.css';
class Employee extends React.Component {
  cilcked = (e) => {
    var id = e.target.getAttribute('div_clicked');
    this.props.history.push(`/details/${id}`);
  };

  componentDidMount() {
    this.props.fetchPosts();
  }

  deleteObj = (data, search) => {
    return data.splice(search, 1);
  };

  deleteItemOnClick = (e) => {
    var id = e.target.getAttribute('div_clicked');
    var arr = this.props.posts.posts;
    this.deleteObj(arr, id);
    this.props.deleteItem(arr);
  };
  render() {
    const { posts } = this.props.posts;
    return (
      <div className='app-container'>
        <h4>Employee List</h4>
        {posts.length > 0 &&
          posts.map((post, i) => {
            return (
              <div key={post.id} className='each-post'>
                <img className='img' src={post.avatar}></img>
                {post.first_name} {post.last_name}
                <div>
                  <button div_clicked={i} onClick={this.cilcked}>
                    Details
                  </button>
                  <button div_clicked={i} onClick={this.deleteItemOnClick}>
                    Delete
                  </button>
                </div>
              </div>
            );
          })}

        {/* </div> */}
        {/* <div className='posts-button-container'>
          <div className='button_cont' align='center'>
            <a className='example_a' onClick={this.onClick}>
              Fetch Posts
            </a>
          </div>
        </div> */}
      </div>
    );
  }
}

const structuredSelector = createStructuredSelector({
  posts: (state) => state.posts,
});
const mapDispatchToProps = { fetchPosts, deleteItem };
export default connect(structuredSelector, mapDispatchToProps)(Employee);
