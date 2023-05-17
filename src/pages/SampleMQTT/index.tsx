import { Divider, Paper, Stack, TextField, Typography, styled } from '@mui/material';
import { NavigateButton } from '../../components/NavigateButton';
import { MqttSubscriber } from './MqttSubscriber';
import { MqttConnectType, MqttPublisherType } from './MqttType';
import { useEffect, useState } from 'react';
import { MqttCanvas } from './MqttCanvas';

export const SampleMQTT = () => {
	const server = '192.168.0.15';
	const port = 9001;
	const newBand = 'C3000001F8D3';
	const flip = '1869D4A6E1CE';

	const config: MqttConnectType[] = [
		{ host: server, port: port, topic: 'pub1', target: newBand },
		{ host: server, port: port, topic: 'pub2', target: newBand },
		{ host: server, port: port, topic: 'pub3', target: newBand },
	];

	const [rssi, setRssi] = useState<number[]>(new Array(config.length));

	console.log(rssi);
	return (
		<Paper elevation={5} sx={{ p: 2, width: 700 }}>
			<Stack direction="row" spacing={2} width={1} height={1} alignItems={'center'}>
				<Stack direction="column" spacing={2} width={300} height={1}>
					<MqttSubscriber config={config[0]} index={0} maker={'RadioLand'} rssi={rssi} setRssi={setRssi} />
					<Divider />
					<MqttSubscriber config={config[1]} index={1} maker={'RadioLand'} rssi={rssi} setRssi={setRssi} />
					<Divider />
					<MqttSubscriber config={config[2]} index={2} maker={'Minew'} rssi={rssi} setRssi={setRssi} />
					<Divider />
					<NavigateButton path="/" />
				</Stack>
				<MqttCanvas rssi={rssi} />
			</Stack>
		</Paper>
	);
};
