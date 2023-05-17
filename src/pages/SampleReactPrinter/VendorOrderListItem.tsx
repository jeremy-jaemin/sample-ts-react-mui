import { render } from 'react-thermal-printer';
import { Receipt } from './Receipt';
import { Button, Container } from '@mui/material';

export const VendorOrderListItem = (props: any) => {
	const orderInfo = props.orderInfo;
	const onClickPrintHandler = async () => {
		const data = await render(Receipt({ orderInfo }));
		// const port = await window.navigator.serial.requestPort();
		const port = await (window.navigator as any).serial.requestPort();
		await port.open({ baudRate: 9600 });
		const writer = port.writable?.getWriter();
		if (writer !== null) {
			await writer.write(data);
			await writer.releaseLock();
		}
		await port.close({ baudRate: 9600 });
	};
	return (
		<Container>
			<Button onClick={async () => await onClickPrintHandler()}>TEST</Button>
		</Container>
	);
};
