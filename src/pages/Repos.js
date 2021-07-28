import React, { Fragment, useEffect, useState } from "react";
import FolderIcon from "@material-ui/icons/Folder";

const Repos = () => {
  const [repoData, setRepoData] = useState([]);
  const addRepos = async () => {
    const response = await fetch("http://localhost:4000/index", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      const name = data.gh_username;
      const repoRes = await fetch(`http://localhost:4000/user/${name}`, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (repoRes.ok) {
        const repoDatas = await repoRes.json();
        console.log(repoDatas);
        setRepoData(repoDatas.repo_info);
        console.log(repoData);
      }
    }
  };
  useEffect(() => {
    addRepos();
  }, []);
  return (
    <Fragment>
      {repoData &&
        repoData.map((item) => {
          return (
            <div class="card">
              <div class="card-body">{item.repo_name}</div>
              <FolderIcon style={{ float: "right" }} />
            </div>
          );
        })}
    </Fragment>
  );
};

export default Repos;
