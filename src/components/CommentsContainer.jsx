import React from 'react';

const commentsData = [
  {
    name: 'Kaustubh Sinha',
    text: 'lorem ipsum dolor sit amet, consectetur adip',
    replies: [
      {
        name: 'Kaustubh Sinha',
        text: 'lorem ipsum dolor sit amet, consectetur adip',
        replies: [
          {
            name: 'Kaustubh Sinha',
            text: 'lorem ipsum dolor sit amet, consectetur adip',
            replies: [
              {
                name: 'Kaustubh Sinha',
                text: 'lorem ipsum dolor sit amet, consectetur adip',
                replies: [],
              },
              {
                name: 'Kaustubh Sinha',
                text: 'lorem ipsum dolor sit amet, consectetur adip',
                replies: [],
              },
              {
                name: 'Kaustubh Sinha',
                text: 'lorem ipsum dolor sit amet, consectetur adip',
                replies: [],
              },
            ],
          },
          {
            name: 'Kaustubh Sinha',
            text: 'lorem ipsum dolor sit amet, consectetur adip',
            replies: [],
          },
          {
            name: 'Kaustubh Sinha',
            text: 'lorem ipsum dolor sit amet, consectetur adip',
            replies: [],
          },
          {
            name: 'Kaustubh Sinha',
            text: 'lorem ipsum dolor sit amet, consectetur adip',
            replies: [],
          },
        ],
      },
      {
        name: 'Kaustubh Sinha',
        text: 'lorem ipsum dolor sit amet, consectetur adip',
        replies: [],
      },
      {
        name: 'Kaustubh Sinha',
        text: 'lorem ipsum dolor sit amet, consectetur adip',
        replies: [],
      },
      {
        name: 'Kaustubh Sinha',
        text: 'lorem ipsum dolor sit amet, consectetur adip',
        replies: [],
      },
    ],
  },
  {
    name: 'Kaustubh Sinha',
    text: 'lorem ipsum dolor sit amet, consectetur adip',
    replies: [],
  },
  {
    name: 'Kaustubh Sinha',
    text: 'lorem ipsum dolor sit amet, consectetur adip',
    replies: [],
  },
  {
    name: 'Kaustubh Sinha',
    text: 'lorem ipsum dolor sit amet, consectetur adip',
    replies: [],
  },
];
// const commentDATAS = [
//   {
//     name: 'Kaustubh Sinha',
//     text: 'aaa',
//     replies: [],
//   },
// ];

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div>
      <Comment key={index} data={comment} />
      <div className='pl-5 border border-l-black ml-5'>
        //recursion component calling itself // at the end replie is also a
        comment //so better to render commentlist with prop as replies
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};
const Comment = ({ data }) => {
  const { name, text, replies } = data;

  return (
    <div className='flex shadow-sm bg-gray-100 my-2'>
      <img
        className='w-12 h-12'
        src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'
        alt='comment profile'
      />
      <div className='px-3'>
        <p className='font-bold'>{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsContainer = () => {
  return (
    <div className='px-3 mt-5'>
      <h1 className='text-2xl font-semibold'>Comments:</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
