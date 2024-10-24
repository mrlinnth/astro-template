import { useEffect, useState } from 'react';

function Comments() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // declare the async data fetching function
    const fetchData = async () => {
      // get the data from the api
      const response = await fetch('https://dummyjson.com/comments');
      // convert the data to json
      const json = await response.json();
      console.log('json', json);
      // set state with the result
      setComments(json.comments);
    };

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, []);

  return (
    <div className="prose">
      <h1>Comments React Component</h1>
      {comments.map((comment: any, index: number) => (
        <div key={index}>
          <h3>{comment.user.username} said</h3>
          <p>{comment.body}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Comments;
