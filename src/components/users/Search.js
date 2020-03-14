import React, { Component } from "react";
import PropTypes from "prop-types";

class Search extends Component {
    state = {
        text: ""
    };

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired
    };

    onSubmit = e => {
        e.preventDefault();
        if (this.state.text === "") {
            this.props.setAlert("Please enter username", "danger");
        } else {
            this.props.searchUsers(this.state.text);
            this.setState({ text: "" });
        }
    };
    onChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { showClear, clearUsers } = this.props;

        return (
            <div className="container" style={{ maxWidth: "600px" }}>
                <form onSubmit={this.onSubmit} className="form">
                    <input
                        type="text"
                        name="text"
                        placeholder="Search Users..."
                        className="form-control mb-2"
                        value={this.state.text}
                        onChange={this.onChange}
                    />
                    <input type="submit" value="Search" className="btn btn-primary btn-block " />
                </form>

                {showClear && (
                    <button className="btn btn-secondary btn-block my-2" onClick={clearUsers}>
                        Clear
                    </button>
                )}
            </div>
        );
    }
}

export default Search;
