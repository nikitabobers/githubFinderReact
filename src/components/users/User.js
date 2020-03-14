import React, { Fragment, Component } from "react";
import Spinner from "../layout/Spinner";
import Repos from "../repos/Repos";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export class User extends Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.login);
        this.props.getUserRepos(this.props.match.params.login);
    }
    static propTypes = {
        loading: PropTypes.bool.isRequired,
        user: PropTypes.object.isRequired,
        repos: PropTypes.array.isRequired,
        getUser: PropTypes.func.isRequired,
        getUserRepos: PropTypes.func.isRequired
    };
    render() {
        const {
            name,
            avatar_url,
            location,
            bio,
            blog,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable,
            company
        } = this.props.user;
        const { loading, repos } = this.props;

        if (loading) return <Spinner />;

        return (
            <Fragment>
                <Link to="/" className="btn btn-light">
                    Back to Search
                </Link>
                Hireable:{" "}
                {hireable ? (
                    <i className="fas fa-check text-success" />
                ) : (
                    <i className="fas fa-times-circle text-danger" />
                )}
                <div className="card p-3">
                    <div className="row">
                        <div className="card-body mx-auto col-sm-6 text-center">
                            <img
                                src={avatar_url}
                                alt="avatar"
                                className="card-img-top mx-auto"
                                style={{ width: "150px" }}
                            />
                            <div className="card-body"></div>
                            <h3 className="card-title">{name}</h3>
                            <p className="card-text">{location}</p>
                        </div>
                        <div className="card-body mx-auto col-sm-6">
                            {bio && (
                                <Fragment>
                                    <h3>Bio</h3>
                                    <p>{bio}</p>
                                </Fragment>
                            )}
                            <a href={html_url} className="btn btn-dark my-1">
                                Github
                            </a>
                            <ul>
                                <li>
                                    {login && (
                                        <Fragment>
                                            <strong>Username: </strong> {login}
                                        </Fragment>
                                    )}
                                </li>
                                <li>
                                    {company && (
                                        <Fragment>
                                            <strong>Company: </strong> {company}
                                        </Fragment>
                                    )}
                                </li>
                                <li>
                                    {blog && (
                                        <Fragment>
                                            <strong>Blog: </strong> {blog}
                                        </Fragment>
                                    )}
                                </li>
                            </ul>
                        </div>
                        <div className="mx-auto">
                            <span className="badge badge-primary mx-2">Followers: {followers}</span>
                            <span className="badge badge-secondary mx-2">Following: {following}</span>
                            <span className="badge badge-warning mx-2">Public Repos: {public_repos}</span>
                            <span className="badge badge-info mx-2">Public Gists: {public_gists}</span>
                        </div>
                    </div>
                </div>
                <Repos repos={repos} />
            </Fragment>
        );
    }
}

export default User;
