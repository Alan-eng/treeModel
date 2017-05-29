import React from "react";

export default class SearchInput extends React.Component {
	render() {
		return <input
		className="react-treeModel-default-search-input"
		onClick={this.props.startSearching} placeholder="Поиск..." value={this.props.searchInput} onChange={this.props.setSearchInput}/>;
	}
}
