const fileSystemData = [
  {
    id: "1",
    name: "src",
    type: "folder",
    children: [
      {
        id: "2",
        name: "components",
        type: "folder",
        children: [
          { id: "3", name: "Button.jsx", type: "file" },
          { id: "4", name: "Header.jsx", type: "file" },
        ],
      },
      { id: "5", name: "App.js", type: "file" },
      { id: "6", name: "index.css", type: "file" },
    ],
  },
  {
    id: "7",
    name: "public",
    type: "folder",
    children: [
      { id: "8", name: "index.html", type: "file" },
      { id: "9", name: "favicon.ico", type: "file" },
    ],
  },
  { id: "10", name: "package.json", type: "file" },
];

export default fileSystemData;
