import React, {Component} from 'react';
import { Link } from 'react-router-dom';
class SearchComponents extends Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };
    }
    handleChange = (e) => {
        this.setState({text : e.target.value})
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // this.props.searchChange(this.state.text)
    }
    render() {
        return (<div>
            <form onSubmit={(e) => this.handleSubmit(e)}>
          <label htmlFor="new-todo2">
            搜尋案號:
          </label>
          <input
            id="new-todo"
            onChange={(e) => this.handleChange(e)}
            value={this.state.text}
          />
          <Link to={`/retrieve/${this.state.text}`}>
          <button>
            搜尋
          </button>
          </Link>
        </form>
        </div>)
    }
}
export default SearchComponents