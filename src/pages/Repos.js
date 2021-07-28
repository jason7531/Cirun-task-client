import React, { Fragment } from "react";
import FolderIcon from "@material-ui/icons/Folder";
const Repos = () => {
  return (
    <Fragment>
      <div class="card">
        <div class="card-body">This is some text within a card body.</div>
        <FolderIcon style={{ float: "right" }} />
      </div>
      <div class="card">
        <div class="card-body">This is some text within a card body.</div>
      </div>
      <div class="card">
        <div class="card-body">This is some text within a card body.</div>
      </div>
    </Fragment>
  );
};

export default Repos;
