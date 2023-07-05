import { Paper, Stack, Typography } from '@mui/material';
import { NavigateButton } from '../../components/NavigateButton';

export const SampleJSPrinter = () => {
	return (
		<Paper elevation={5} sx={{ p: 2, width: 300 }}>
			<Stack direction="column" spacing={2} width={300}>
				<Typography variant="h5">SampleJSPrinter</Typography>
				<NavigateButton path="/" />
			</Stack>
		</Paper>
	);
};
