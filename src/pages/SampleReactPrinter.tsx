import { Paper, Stack, Typography } from '@mui/material';
import { NavigateButton } from '../components/NavigateButton';

export const SampleReactPrinter = () => {
	return (
		<Paper elevation={5} sx={{ p: 2, width: 300 }}>
			<Stack direction="column" spacing={2} width={300}>
				<Typography variant="h5">SampleReactPrinter</Typography>
				<NavigateButton path="/" />
			</Stack>
		</Paper>
	);
};
