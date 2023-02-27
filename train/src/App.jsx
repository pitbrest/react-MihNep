import { Component } from 'react';
import './App.css';

class App extends Component {
	state = {
		posts: [],
		loading: true,
		comments: [],
	};

	componentDidMount() {
		console.log('componentDidMount');
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((data) => data.json())
			.then((data) =>
				this.setState({
					posts: data,
					loading: false,
				})
			);
	}
	componentDidUpdate() {
		console.log('componentDidUpdate');
	}

	render() {
		return (
			<div className='App'>
				<ul className='post-container'>{this.state.loading ? <span>Loading...</span> : this.state.posts.map((post) => <li key={post.id}>{post.title}</li>)}</ul>
			</div>
		);
	}
}

export { App };
