import React from "react";
import ReactDOM from "react-dom";
import "../../src/treeModel.css";
import TreeModel from "../../src/treeModel";

class App extends React.Component {

	componentWillMount() {
		const tree = [{
			id: 1,
			name: "Южный федеральный округ",
			nodes: [
				{
					id: 30,
					name: "Ростовская область",
					nodes: [
						{
							id: 666,
							name: "Багаевский",
							nodes: null
						}, {
							id: 727,
							name: "Батайск",
							nodes: null
						}, {
							id: 737,
							name: "Азов",
							nodes: [
								{
									id: 8888,
									name: "Вложенный объект",
									nodes: null
								},
								{
									id: 821321,
									name: "Other string",
									nodes: null
								},
								{
									id: 213131231,
									name: "Some other string",
									nodes: null
								}
							]
						}, {
							id: 815,
							name: "Аксай",
							nodes: null
						}, {
							id: 910,
							name: "Волгодонск",
							nodes: null
						}, {
							id: 1000,
							name: "Гуково",
							nodes: null
						}
					]
				}
			]
		},
		{
			id: 2,
			name: "Округ",
			nodes: [
				{
					id: 301,
					name: "Другая область",
					nodes: [
						{
							id: 6661,
							name: "Багаевский",
							nodes: null
						}, {
							id: 7271,
							name: "Батайск",
							nodes: null
						}, {
							id: 7371,
							name: "Азов",
							nodes: null
						}, {
							id: 8151,
							name: "Аксай",
							nodes: null
						}, {
							id: 9101,
							name: "Волгодонск",
							nodes: null
						}, {
							id: 10001,
							name: "Гуково",
							nodes: [
								{
									id: 6661231,
									name: "dsdasdas",
									nodes: null
								}, {
									id: 72321371,
									name: "Батайск1231",
									nodes: null
								}, {
									id: 737111221,
									name: "Другой город",
									nodes: null
								}, {
									id: 81351,
									name: "Еще город",
									nodes: null
								}, {
									id: 941101,
									name: "Волгодонск",
									nodes: null
								},
							]
						}
					]
				}
			]
		},
		{
			id: 3,
			name: "Южный федеральный округ",
			nodes: [
				{
					id: 302,
					name: "Ростовская область",
					nodes: [
						{
							id: 6662,
							name: "Багаевский",
							nodes: null
						}, {
							id: 7272,
							name: "Батайск",
							nodes: null
						}, {
							id: 7372,
							name: "Азов",
							nodes: null
						}, {
							id: 8152,
							name: "Аксай",
							nodes: null
						}, {
							id: 9102,
							name: "Волгодонск",
							nodes: null
						}, {
							id: 100023,
							name: "Гуково",
							nodes: null
						}
					]
				}
			]
		}]



		this.setState({
			tree: tree
		});
	}

	onNodeMouseClick(event, tree) {
		this.setState({
			tree: tree
		});
	}

	render() {
		return (
			<TreeModel
				tree={this.state.tree}
				onNodeMouseClick={this.onNodeMouseClick.bind(this)}
				maxLeaves={Infinity}
			/>
		);
	}
}
ReactDOM.render(<App />, document.getElementById("example"));
