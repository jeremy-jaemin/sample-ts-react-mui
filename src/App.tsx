import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { SampleJotai } from './pages/SampleJotai';
import { SampleDialog } from './pages/SampleDialog';
import { SampleTable } from './pages/SampleTable';
import { SampleAsync } from './pages/SampleAsync';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/SampleJotai" element={<SampleJotai />}></Route>
				<Route path="/SampleDialog" element={<SampleDialog />}></Route>
				<Route path="/SampleTable" element={<SampleTable />}></Route>
				<Route path="/SampleAsync" element={<SampleAsync />}></Route>
			</Routes>
		</div>
	);
}

export default App;
