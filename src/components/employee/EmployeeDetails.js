import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../store/action/actions';
import './emp.css';
import { createStructuredSelector } from 'reselect';
function EmployeeDetails(props) {
  const _id = props.match.params.id;

  useEffect(() => {
    props.fetchPosts();
  }, []);
  var post = props.posts.posts[_id];

  return (
    <div className='empd_container'>
      Details page
      <br></br>
      <img src={post.avatar}></img>
      <br></br>
      <span>Id: {post.id}</span>
      <br></br>
      <span>Email id: {post.email}</span>
      <br></br>
      <span>
        Name : {post.first_name} {post.last_name}
      </span>
    </div>
  );
}
const structuredSelector = createStructuredSelector({
  posts: (state) => state.posts,
});

const mapDispatchToProps = { fetchPosts };
export default connect(structuredSelector, mapDispatchToProps)(EmployeeDetails);
