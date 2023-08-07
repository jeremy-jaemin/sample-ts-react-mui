import { Button, Paper, Stack, Typography } from '@mui/material';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { NavigateButton } from '../components/NavigateButton';
import { numberAtom, readAndWriteAtom, readOnlyAtom, writeOnlyAtom } from '../state/state';

export const SampleJotai = () => {
	const [count, setCount] = useAtom(numberAtom);
	const handleClick = () => {
		setCount(count + 1);
	};

	const readOnly = useAtomValue(readOnlyAtom);
	const writeOnly = useSetAtom(writeOnlyAtom);
	const [get, set] = useAtom(readAndWriteAtom);

	return (
		<Paper elevation={5} sx={{ p: 2, width: 300 }}>
			<Stack direction="column" spacing={2} width={300}>
				<Typography variant="h5">SampleJotai</Typography>
				<Typography>{count}번 클릭됨!</Typography>
				<Typography>ReadOnlyAtom : {get}</Typography>
				<Button onClick={handleClick} variant="outlined">
					<Typography>증가시키기!</Typography>
				</Button>
				<Button onClick={() => set(10)} variant="outlined">
					<Typography>더 증가시키기!</Typography>
				</Button>
				<NavigateButton path="/" />
			</Stack>
		</Paper>
	);
};
