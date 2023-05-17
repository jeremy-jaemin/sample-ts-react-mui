export type MqttStatusType = 'Disconnected' | 'Connecting' | 'Subscribing' | 'Reconnecting';
export type MqttConnectType = { host: string; port: number; topic: string; target: string };
export type MqttPublisherType = 'RadioLand' | 'Minew';
export type MinewHeaderType = {
	gatewayFree: number;
	gatewayLoad: number;
	mac: string;
	timestamp: Date;
	type: string;
};
export type MinewBodyType = { mac: string; rssi: number };

export type ReceiveMessageType = {
	RadioLand: {
		v: number;
		mid: number;
		time: number;
		ip: string;
		mac: string;
		rssi: number;
		devices: [[]];
	};
	Minew: any[];
};
