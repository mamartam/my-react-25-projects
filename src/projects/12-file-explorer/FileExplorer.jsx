import { useState } from "react";

function FileExplorer({ fileData }) {
  return (
    <>
      {fileData.map((folder) => (
        <Element key={folder.id} fileData={folder} />
      ))}
    </>
  );
}

function Element({ fileData }) {
  const [open, setOpen] = useState(false);

  function handleDoubleClick() {
    setOpen((prevStatus) => !prevStatus);
  }

  return (
    <div style={{ marginLeft: " 20px" }}>
      <p onDoubleClick={handleDoubleClick} style={{ cursor: "pointer" }}>
        {fileData.type === "folder" ? (open ? "📂" : "📁") : "📄"}
        {fileData.name}
      </p>
      {fileData.type === "folder" &&
      fileData.children &&
      fileData.children.length !== 0 &&
      open ? (
        <FileExplorer fileData={fileData.children} />
      ) : null}
    </div>
  );
}

export default FileExplorer;
