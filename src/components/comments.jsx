import React, { useEffect } from 'react';
import { comment_API } from '../utils/constants';

const comments = () => {
  const [comments, setComments] = useState([]);

  const getComments = async () => {
    const resp = await fetch(comment_API);
    const data = await resp.json();
    setComments(data);
    console.log(data);
  };

  useEffect(() => {
    getComments();
  }, []);

  return <div>comments</div>;
};

export default comments;
