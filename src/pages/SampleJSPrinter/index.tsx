import { Button, Paper, Stack, Tab, Tabs, TextField, Typography, styled } from '@mui/material';
import { NavigateButton } from '../../components/NavigateButton';
import { SyntheticEvent, useState } from 'react';
import { useFormik } from 'formik';

type MethodType = 'USB' | 'SERIAL' | 'NETWORK';
type ActionType = 'CONNECT' | 'DISCONNECT' | 'PRINT';
type StatusType = 'NOTCONNECTED' | 'CONNECTING' | 'CONNECTED' | 'ERROR';
type SubmitType = { name?: string; vid?: number; pid?: number; ip?: string; port?: string };

export const SampleJSPrinter = () => {
	const { handleSubmit, isSubmitting, isValid, values, setValues, errors } = useFormik<{
		method: MethodType;
		action: ActionType;
		submit: SubmitType;
		status: StatusType;
	}>({
		initialValues: {
			method: 'USB',
			action: 'CONNECT',
			submit: { name: 'ReceiptPrinter1', vid: 0x1504, pid: 0x006e },
			status: 'NOTCONNECTED',
		},
		// validateOnMount: true,
		// validationSchema: Yup.object().shape({
		// 	// memo: Yup.string().required().min(1),
		// 	memo: Yup.string().when('method', {
		// 		is: (method: AvailablePaymentMethod) => need필수메모[method],
		// 		then: Yup.string().required().min(1),
		// 	}),
		// }),
		onSubmit: async (values, { setErrors, resetForm }) => {
			try {
				switch (values.action) {
					case 'CONNECT':
						break;
					case 'DISCONNECT':
						break;
					case 'PRINT':
						break;
				}
				resetForm();
			} catch (e) {
				//@ts-ignore
				setErrors({ submit: e.message });
			}
		},
	});

	return (
		<Paper elevation={5} sx={{ p: 2, width: 300 }}>
			<Stack direction="column" spacing={2} width={300}>
				<Typography variant="h5">SampleJSPrinter</Typography>
				<Stack direction="column" spacing={3}>
					<Tabs
						value={values.method}
						onChange={(event, value) => {
							setValues((prev) => ({ ...prev, method: value }));
						}}
						centered
					>
						<Tab label="USB" value="USB"></Tab>
						<Tab label="SERIAL" value="SERIAL"></Tab>
						<Tab label="NETWORK" value="NETWORK"></Tab>
					</Tabs>
					{values.method === 'USB' && (
						<Stack direction="column" spacing={1}>
							<Stack direction="row" justifyContent="space-between" alignItems="center">
								<Typography variant="subtitle1">NAME : </Typography>
								<StyledTextField
									onChange={(e: any) => {
										setValues({ ...values, submit: { ...values.submit, name: e.target.value } });
									}}
								/>
							</Stack>
							<Stack direction="row" justifyContent="space-between" alignItems="center">
								<Typography variant="subtitle1">VID : </Typography>
								<StyledTextField
									onChange={(e: any) => {
										setValues({ ...values, submit: { ...values.submit, vid: +e.target.value } });
									}}
								/>
							</Stack>
							<Stack direction="row" justifyContent="space-between" alignItems="center">
								<Typography variant="subtitle1">PID : </Typography>
								<StyledTextField
									onChange={(e: any) => {
										setValues({ ...values, submit: { ...values.submit, pid: +e.target.value } });
									}}
								/>
							</Stack>
						</Stack>
					)}
					{values.method === 'SERIAL' && (
						<Stack direction="column" spacing={1}>
							<Stack direction="row" justifyContent="space-between" alignItems="center">
								<Typography variant="subtitle1">NAME : </Typography>
								<StyledTextField
									onChange={(e: any) => {
										setValues({ ...values, submit: { ...values.submit, name: e.target.value } });
									}}
								/>
							</Stack>
							<Stack direction="row" justifyContent="space-between" alignItems="center">
								<Typography variant="subtitle1">PORT : </Typography>
								<StyledTextField
									onChange={(e: any) => {
										setValues({ ...values, submit: { ...values.submit, port: e.target.value } });
									}}
								/>
							</Stack>
						</Stack>
					)}
					{values.method === 'NETWORK' && (
						<Stack direction="column" spacing={1}>
							<Stack direction="row" justifyContent="space-between" alignItems="center">
								<Typography variant="subtitle1">NAME : </Typography>
								<StyledTextField
									onChange={(e: any) => {
										setValues({ ...values, submit: { ...values.submit, name: e.target.value } });
									}}
								/>
							</Stack>
							<Stack direction="row" justifyContent="space-between" alignItems="center">
								<Typography variant="subtitle1">IP : </Typography>
								<StyledTextField
									onChange={(e: any) => {
										setValues({ ...values, submit: { ...values.submit, ip: e.target.value } });
									}}
								/>
							</Stack>
							<Stack direction="row" justifyContent="space-between" alignItems="center">
								<Typography variant="subtitle1">PORT :</Typography>
								<StyledTextField
									onChange={(e: any) => {
										setValues({ ...values, submit: { ...values.submit, port: e.target.value } });
									}}
								/>
							</Stack>
						</Stack>
					)}
					<Stack direction="row" justifyContent="space-between" alignItems="center">
						<Typography variant="subtitle1">STATUS : </Typography>
						<StyledTextField
							value={values.status}
							InputProps={{
								sx: {
									color: values.status === 'CONNECTING' ? 'green' : values.status === 'NOTCONNECTED' ? 'red' : 'orange',
								},
							}}
						/>
					</Stack>
					<Stack direction="row" justifyContent={'space-around'} spacing={3}>
						<Button
							variant="contained"
							fullWidth
							onClick={() => {
								setValues({ ...values, action: 'CONNECT' });
								handleSubmit();
							}}
						>
							연결
						</Button>
						<Button
							variant="contained"
							fullWidth
							onClick={() => {
								setValues({ ...values, action: 'DISCONNECT' });
								handleSubmit();
							}}
						>
							해제
						</Button>
						<Button
							variant="contained"
							fullWidth
							onClick={() => {
								setValues({ ...values, action: 'PRINT' });
								handleSubmit();
							}}
						>
							출력
						</Button>
					</Stack>
				</Stack>
				<NavigateButton path="/" />
			</Stack>
		</Paper>
	);
};

const StyledTextField = styled(TextField)(({ theme }) => ({
	width: 180,
	'& .MuiInputBase-root': { height: 40 },
}));
