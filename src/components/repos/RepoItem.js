import React from "react";
import PropTypes from "prop-types";

const RepoItem = ({ repo }) => {
    return (
        <div className="card p-2 my-2">
            <h5 className="card-text">
                <a href={repo.html_url}>{repo.name}</a>
            </h5>
        </div>
    );
};

RepoItem.propTypes = {
    repo: PropTypes.object.isRequired
};

export default RepoItem;
