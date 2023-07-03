import React from 'react';
import PostList from './PostList';

const App = () => {
  const posts = [
    {
      "id": 1,
      "title": "Hello World",
      "content": "Try Reactjs is awesome. Can't wait to learn more",
      "date": "12-04-2017",
      "slug": "hello-world"
    },
    {
      "id": 2,
      "title": "Setup React",
      "content": "Setting up react is easy. Learn more about it!",
      "date": "1-28-2018",
      "slug": "setup-react"
    }
  ];

  return (
    <div>
      <h1>Post List</h1>
      <PostList posts={posts} />
    </div>
  );
};

export default App;
