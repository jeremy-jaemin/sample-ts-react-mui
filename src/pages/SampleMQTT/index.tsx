import { Divider, Paper, Stack, TextField, Typography, styled } from '@mui/material';
import { NavigateButton } from '../../components/NavigateButton';
import { MqttSubscriber } from './MqttSubscriber';
import { MqttConnectType, MqttPublisherType } from './MqttType';

export const SampleMQTT = () => {
	const config: MqttConnectType[] = [
		{ host: '192.168.0.15', port: 9001, topic: 'pub1', target: 'C3000001F8D3' },
		{ host: '192.168.0.15', port: 9001, topic: 'pub2', target: 'C3000001F8D3' },
		{ host: '192.168.0.15', port: 9001, topic: 'pub3', target: 'C3000001F8D3' },
	];

	return (
		<Paper elevation={5} sx={{ p: 2, width: 300 }}>
			<Stack direction="column" spacing={2} width={300}>
				<MqttSubscriber config={config[0]} index={0} maker={'RadioLand'} />
				<Divider />
				<MqttSubscriber config={config[1]} index={1} maker={'RadioLand'} />
				<Divider />
				<MqttSubscriber config={config[2]} index={2} maker={'Minew'} />
				<Divider />
				<NavigateButton path="/" />
			</Stack>
		</Paper>
	);
};
