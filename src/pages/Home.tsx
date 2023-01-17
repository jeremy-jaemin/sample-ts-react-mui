import { Button, Stack, Typography } from '@mui/material';
import { useAtom } from 'jotai';
import { NavigateButton } from '../components/NavigateButton';
import { numberAtom } from '../state/state';

export const Home = () => {
	const [numClick, setNumClick] = useAtom(numberAtom);

	const handleTest1 = () => {
		console.log('hello');
	};
	const handleTest2 = () => {
		console.log('hello');
	};

	return (
		<Stack direction="column" spacing={1} width={300}>
			<Typography variant="h5">Home Page</Typography>
			<Typography>Atom : {numClick}번 클릭!</Typography>
			<NavigateButton path="SampleJotai" />
			<NavigateButton path="SampleDialog" />
			<NavigateButton path="SampleTable" />
			<NavigateButton path="SampleAsync" />
			<Button onClick={handleTest1} variant="outlined">
				Sample Test 1
			</Button>
			<Button onClick={handleTest2} variant="outlined">
				Sample Test 2
			</Button>
		</Stack>
	);
};
