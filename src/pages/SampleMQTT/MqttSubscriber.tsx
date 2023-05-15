import { Button, Paper, Slider, Stack, TextField, Typography, styled } from '@mui/material';
import { useFormik } from 'formik';
import { NavigateButton } from '../../components/NavigateButton';
import CellTowerIcon from '@mui/icons-material/CellTower';
import WatchIcon from '@mui/icons-material/Watch';
import mqtt, { MqttClient } from 'mqtt/dist/mqtt';
import { useEffect } from 'react';
import { MqttConnectType, MqttPublisherType, MqttStatusType, ReceiveMessageType } from './MqttType';

export const MqttSubscriber = ({
	config,
	index,
	maker,
}: {
	config: MqttConnectType;
	index: number;
	maker: MqttPublisherType;
}) => {
	const { handleSubmit, isSubmitting, values, setValues, errors } = useFormik<{
		client?: MqttClient;
		status: MqttStatusType;
		payload: object;
		host: string;
		port: number;
		topic: string;
		message: string;
		subtmit?: string;
		target: string;
		rssi: number;
		dist: number;
	}>({
		initialValues: {
			client: undefined,
			status: 'Disconnected',
			payload: {},
			host: config.host,
			port: config.port,
			message: '',
			topic: config.topic,
			target: config.target,
			// target: 'C3000001F8D3',
			rssi: -100,
			dist: 0,
		},
		onSubmit: async (values, { setErrors, resetForm }) => {
			try {
				resetForm();
			} catch (e) {
				//@ts-ignore
				setErrors({ submit: e.message });
			}
		},
	});

	useEffect(() => {
		if (!values.client) return;
		values.client.on('connect', () => {
			values.client?.subscribe([values.topic], () => {});
			setValues({ ...values, status: 'Subscribing' });
		});
		values.client.on('error', (err) => {
			setValues({ ...values, message: err.message });
			values.client?.end(true);
		});
		values.client.on('reconnect', () => {
			setValues({ ...values, status: 'Reconnecting' });
		});
		values.client.on('message', (topic, message) => {
			const parsed: ReceiveMessageType['RadioLand'] = JSON.parse(message.toString());
			// console.log(parsed);
			const beacon = parsed.devices.filter((value, index) => {
				//@ts-ignore
				return values.target === value[1];
			});

			if (beacon.length) {
				// console.log('found ' + beacon.length + ' devices');
				// console.log(beacon[0][2]);
				//@ts-ignore
				values.rssi = beacon[0][2];
				// console.log(values.rssi);
			}

			const payload = { topic, message: message.toString() };
			// console.log(payload)
			setValues({ ...values, status: 'Subscribing', message: payload.message });
		});
	}, [values.client]);

	useEffect(() => {
		const measuredPower = -69;
		const n = 2;
		const dist = Math.pow(10, (measuredPower - values.rssi) / Math.pow(10, n));
		setValues({ ...values, dist: dist });
		console.log(dist);
	}, [values.rssi]);

	// 2nd receiver
	// useEffect(() => {
	// 	if (!values.client) return;
	// 	values.client.on('connect', () => {
	// 		values.client?.subscribe([values.topic], () => {});
	// 		setValues({ ...values, status: 'Subscribing' });
	// 	});
	// 	values.client.on('error', (err) => {
	// 		setValues({ ...values, message: err.message });
	// 		values.client?.end(true);
	// 	});
	// 	values.client.on('reconnect', () => {
	// 		setValues({ ...values, status: 'Reconnecting' });
	// 	});
	// 	values.client.on('message', (topic, message) => {
	// 		// console.log(topic);
	// 		// console.log(message);

	//
	// 		const parsed: ReceiveMessageType['Minew'] = JSON.parse(message.toString());

	// 		console.log(parsed);
	// 		const beacon = parsed.filter((value, index) => {
	// 			//@ts-ignore
	// 			return values.target === value.mac;
	// 		});

	// 		//@ts-ignore
	// 		if (beacon.length) values.rssi = beacon[0].rssi;

	// 		const payload = { topic, message: message.toString() };
	// 		// console.log(payload)
	// 		setValues({ ...values, status: 'Subscribing', message: payload.message });
	// 	});
	// }, [values.client]);

	const mqttConnect = () => {
		setValues({
			...values,
			client: mqtt.connect(`ws://${values.host}:${values.port}/mqtt`),
			status: 'Connecting',
		});
	};

	const mqttDisconnect = () => {
		values.client?.end(true);
		setValues({
			...values,
			client: undefined,
			status: 'Disconnected',
			message: '',
			rssi: 0,
		});
	};

	return (
		<Stack direction="column" spacing={2} width={300}>
			<Typography variant="h5" align="center">{`Subscriber ${index + 1}`}</Typography>
			<Stack direction="row" justifyContent="space-between" alignItems="center">
				<Typography variant="subtitle1">Host : </Typography>
				<StyledTextField
					value={values.host}
					onChange={(e) => {
						setValues({ ...values, host: e.target.value });
					}}
				/>
			</Stack>
			<Stack direction="row" justifyContent="space-between" alignItems="center">
				<Typography variant="subtitle1">Port : </Typography>
				<StyledTextField
					value={values.port}
					onChange={(e) => {
						setValues({ ...values, port: +e.target.value });
					}}
				/>
			</Stack>
			<Stack direction="row" justifyContent="space-between" alignItems="center">
				<Typography variant="subtitle1">Topic : </Typography>
				<StyledTextField
					value={values.topic}
					onChange={(e) => {
						setValues({ ...values, topic: e.target.value });
					}}
				/>
			</Stack>
			<Stack direction="row" justifyContent="space-between" alignItems="center">
				<Typography variant="subtitle1">Status : </Typography>
				<StyledTextField
					value={values.status}
					InputProps={{
						sx: {
							color: values.status === 'Subscribing' ? 'green' : values.status === 'Disconnected' ? 'red' : 'orange',
						},
					}}
				/>
			</Stack>
			<Stack direction="row" justifyContent="space-between" alignItems="center">
				<Typography variant="subtitle1">Message : </Typography>
				<StyledTextField value={values.message} />
			</Stack>
			<Stack direction="row" justifyContent="space-between" alignItems="center">
				<Typography variant="subtitle1">RSSI : </Typography>
				<StyledTextField value={values.rssi} />
			</Stack>
			<Stack direction="row" justifyContent="space-between" alignItems="center">
				<Typography variant="subtitle1">Distance : </Typography>
				<StyledTextField value={values.dist} />
			</Stack>
			{/* <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={1}>
					<CellTowerIcon sx={{ mr: 1 }} />
					<Slider aria-label="Default" value={-values.rssi} />
					<WatchIcon />
				</Stack> */}
			<Stack direction="row" justifyContent="space-around" spacing={2}>
				<Button variant="contained" onClick={mqttConnect} fullWidth disabled={values.status !== 'Disconnected'}>
					<Typography>연결</Typography>
				</Button>
				<Button variant="contained" onClick={mqttDisconnect} fullWidth disabled={values.status !== 'Subscribing'}>
					<Typography>해제</Typography>
				</Button>
			</Stack>
		</Stack>
	);
};

const StyledTextField = styled(TextField)(({ theme }) => ({
	width: 180,
	'& .MuiInputBase-root': { height: 40 },
}));