import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as AppBar from 'react-toolbox/lib/app_bar';

import * as Dropdown from 'react-toolbox/lib/dropdown';

const countries = [
{ value: 'EN-gb', label: 'England' },
{ value: 'ES-es', label: 'Spain' },
{ value: 'TH-th', label: 'Thailand' },
{ value: 'EN-en', label: 'USA' }
];

class DropdownTest extends React.Component<{}, {value:string}> {
	state = {
		value: 'ES-es',
	};

	handleChange = (value) => {
		this.setState({ value: value });
	};

	render() {
		return (
			<Dropdown
				auto
				onChange={this.handleChange}
				source={countries}
				value={this.state.value}
				/>
		);
	}
}

class NavBar extends React.Component<{}, {}> {
	render() {
		return (
			<AppBar fixed flat>
				<DropdownTest />
			</AppBar>
		);
	}
}

ReactDOM.render(<NavBar />, document.getElementById('app'));


