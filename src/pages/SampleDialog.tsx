import React, { useState } from 'react';

import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Paper,
	Stack,
	TextField,
	Typography,
} from '@mui/material';
import { useAtom } from 'jotai';
import { NavigateButton } from '../components/NavigateButton';
import { objectAtom } from '../state/state';

export const SampleDialog = () => {
	const [open, setOpen] = useState(false);
	return (
		<Paper elevation={5} sx={{ p: 2 }}>
			<Dialog open={open}>
				<DialogTitle>
					<Typography>TEST</Typography>
				</DialogTitle>
				<DialogContent>
					<Typography>hello!!</Typography>
				</DialogContent>
				<DialogActions>
					<Button onClick={() => setOpen(false)}>close</Button>
				</DialogActions>
			</Dialog>
			<Stack direction="column" spacing={2} width={300}>
				<Typography variant="h5">SampleDialog</Typography>
				<Button variant="outlined" onClick={() => setOpen(true)}>
					<Typography>다이얼로그 띄우기!</Typography>
				</Button>
				<NavigateButton path="/" />
			</Stack>
		</Paper>
	);
};
