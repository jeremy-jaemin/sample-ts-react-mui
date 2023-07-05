import { Button, Paper, Stack, Typography } from '@mui/material';
import { useAtom } from 'jotai';
import { NavigateButton } from '../components/NavigateButton';
import { numberAtom } from '../state/state';

export const Home = () => {
	const [numClick, setNumClick] = useAtom(numberAtom);

	const handleTest1 = () => {
		const test = undefined;
		const test2 = null;
		test && console.log('undefined');
		!test && console.log('defined');
		test2 && console.log('undefined');
		!test2 && console.log('defined');
	};
	const handleTest2 = () => {};

	return (
		<Paper elevation={5} sx={{ p: 2, width: 300 }}>
			<Stack direction="column" spacing={1} width={300}>
				<Typography variant="h5">Home Page</Typography>
				<Typography>Atom : {numClick}번 클릭!</Typography>
				<NavigateButton path="SampleJotai" />
				<NavigateButton path="SampleDialog" />
				<NavigateButton path="SampleTable" />
				<NavigateButton path="SampleAsync" />
				<NavigateButton path="SampleReactQuery" />
				<NavigateButton path="SampleMQTT" />
				<NavigateButton path="SampleJSPrinter" />
				<Button onClick={handleTest1} variant="outlined">
					Test 1
				</Button>
				<Button onClick={handleTest2} variant="outlined">
					Test 2
				</Button>
			</Stack>
		</Paper>
	);
};
