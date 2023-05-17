import { Box, Divider, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

export const MqttCanvas = ({ rssi }: { rssi: number[] }) => {
	type locationType = 'Outside' | 'Enterance' | 'Workspace' | 'MeetingRoom';
	const [location, setLocation] = useState<locationType>('Outside');

	useEffect(() => {
		if (rssi[0] > -50) {
			setLocation('MeetingRoom');
		} else {
			if (rssi[1] > -75) setLocation('Workspace');
			else if (rssi[2] > -60 && rssi[1] > -90) setLocation('Enterance');
			else setLocation('Outside');
		}
	}, [rssi]);

	return (
		<Stack direction="column" width={1} border={1}>
			<Stack height={500} justifyContent={'center'} sx={{ backgroundColor: location === 'Outside' ? 'grey' : '' }}>
				<Typography variant="h4" textAlign={'center'}>
					Outside
				</Typography>
			</Stack>
			<Divider />
			<Divider />
			<Divider />
			<Divider />
			<Divider />
			<Divider />
			<Divider />
			<Divider />
			<Divider />
			<Stack height={150} justifyContent={'center'} sx={{ backgroundColor: location === 'Enterance' ? 'grey' : '' }}>
				<Typography variant="h4" textAlign={'center'}>
					Enterance
				</Typography>
			</Stack>
			<Divider />
			<Stack height={300} justifyContent={'center'} sx={{ backgroundColor: location === 'Workspace' ? 'grey' : '' }}>
				<Typography variant="h4" textAlign={'center'}>
					Workspace
				</Typography>
			</Stack>
			<Divider />
			<Stack height={200} justifyContent={'center'} sx={{ backgroundColor: location === 'MeetingRoom' ? 'grey' : '' }}>
				<Typography variant="h4" textAlign={'center'}>
					MeetingRoom
				</Typography>
			</Stack>
		</Stack>
	);
};
