// import './App.css';
import React from "react";
import MyHeader from './MyHeader';
import Counter from "./Counter";
import Container from "./Container";
function App() {

	// inline style방식
	// const style = {
	// 	App: {
	// 		backgroundColor: "black",
	// 	},
	// 	h2: {
	// 		color: "red",
	// 	},
	// 	bold_text: {
	// 		color: "green",
	// 	}
	// };

	
	const counterProps = {
		a:1,
		b:2,
		c:3,
		// 없다면 undefined가 넘어감
		// initialValue:5
	}
	return (
		<Container>
			{/* container component의 child로 전달됨 */}
			<div>
				<MyHeader />
				<Counter {...counterProps}/>
			</div>
		</Container>
	);
}

// es module시스템
// 1개만 내보낼 수 있음
export default App;
