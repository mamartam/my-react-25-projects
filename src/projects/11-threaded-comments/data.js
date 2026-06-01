const commentsData = [
  {
    id: 1,
    author: "Elena",
    text: "Hi! Great article.",
    replies: [
      {
        id: 2,
        author: "Igor",
        text: "Agreed, I really liked it too!",
        replies: [
          {
            id: 3,
            author: "Elena",
            text: "Thanks for the support, Igor :)",
            replies: [],
          },
        ],
      },
      {
        id: 4,
        author: "Max",
        text: "But I feel like the author missed something.",
        replies: [],
      },
    ],
  },
  {
    id: 5,
    author: "Taras",
    text: "Will there be a sequel?",
    replies: [],
  },
];

export default commentsData;
