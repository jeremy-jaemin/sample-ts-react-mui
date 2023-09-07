import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { SampleAsync } from './pages/SampleAsync';
import { SampleDialog } from './pages/SampleDialog';
import { SampleJotai } from './pages/SampleJotai';
import { SampleReactQuery } from './pages/SampleReactQuery';
import { SampleTable } from './pages/SampleTable';
import { SampleMQTT } from './pages/SampleMQTT';
import { SampleJSPrinter } from './pages/SampleJSPrinter';
import { SampleAlcohol } from './pages/SampleAlcohol';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/SampleJotai" element={<SampleJotai />}></Route>
				<Route path="/SampleDialog" element={<SampleDialog />}></Route>
				<Route path="/SampleTable" element={<SampleTable />}></Route>
				<Route path="/SampleAsync" element={<SampleAsync />}></Route>
				<Route path="/SampleReactQuery" element={<SampleReactQuery />}></Route>
				<Route path="/SampleMQTT" element={<SampleMQTT />}></Route>
				<Route path="/SampleJSPrinter" element={<SampleJSPrinter />}></Route>
				<Route path="/SampleAlcohol" element={<SampleAlcohol />}></Route>
			</Routes>
		</div>
	);
}

export default App;
