import React, { useEffect, useState } from 'react';

import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Divider,
	Paper,
	Stack,
	TextField,
	Typography,
	styled,
} from '@mui/material';
import { useAtom } from 'jotai';
import { NavigateButton } from '../components/NavigateButton';
import { objectAtom } from '../state/state';

const alcoholArray = ['soju', 'beer', 'wiskey', 'vodka', 'makgeolli'] as const;
type alcoholType = (typeof alcoholArray)[number];

type stateType = {
	capacity: number;
	capacity_gram: number;
	intake: number;
	soju: number;
	beer: number;
	wiskey: number;
	vodka: number;
	makgeolli: number;
};

export const SampleAlcohol = () => {
	const [value, setValue] = useState<stateType>({
		capacity: 0,
		capacity_gram: 0,
		intake: 0,
		soju: 0,
		beer: 0,
		wiskey: 0,
		vodka: 0,
		makgeolli: 0,
	});

	useEffect(() => {
		setValue({
			...value,
			intake: value.soju * 6.8 + value.beer * 7.2 + value.wiskey * 9.6 + value.vodka * 9.6 + value.makgeolli * 9.6,
		});
	}, [value]);

	return (
		<Paper elevation={5} sx={{ p: 2, width: 300 }}>
			<Stack direction="column" spacing={2} width={300}>
				<Typography variant="h5" textAlign="center">
					{'Alcohol Meter'}
				</Typography>
				<Divider></Divider>
				<Stack direction="column" spacing={2}>
					<Typography variant="body1" textAlign="center" color={'black'} sx={{ textDecoration: 'underline' }}>
						{!value.capacity ? '주량 입력' : value.capacity >= 2 ? '술을 잘 드시네요!' : '주량은 적당한게 좋죠!'}
					</Typography>
					<Stack direction="row" justifyContent="space-between" alignItems="center">
						<Typography variant="subtitle1">주량(소주 병) : </Typography>
						<StyledTextField
							value={value.capacity}
							onChange={(e) => {
								setValue({ ...value, capacity: +e.target.value, capacity_gram: +e.target.value * 56 });
							}}
						/>
					</Stack>
				</Stack>
				<Divider />
				<Stack direction="column" spacing={2}>
					<Typography variant="body1" textAlign="center" color={'black'} sx={{ textDecoration: 'underline' }}>
						{'섭취량 입력'}
					</Typography>
					<Stack direction="row" justifyContent="space-between" alignItems="center">
						<Typography variant="subtitle1">소주(잔) : </Typography>
						<Stack direction="row" spacing={2}>
							<Button
								variant="outlined"
								onClick={() => {
									setValue({ ...value, soju: value.soju + 1 });
								}}
								sx={{ minWidth: 40 }}
							>
								+
							</Button>
							<Button
								variant="outlined"
								onClick={() => {
									setValue({ ...value, soju: value.soju - 1 });
								}}
								sx={{ minWidth: 40 }}
							>
								-
							</Button>
							<StyledSmallTextField value={value.soju} />
						</Stack>
					</Stack>
					<Stack direction="row" justifyContent="space-between" alignItems="center">
						<Typography variant="subtitle1">맥주(잔) : </Typography>
						<Stack direction="row" spacing={2}>
							<Button
								variant="outlined"
								onClick={() => {
									setValue({ ...value, beer: value.beer + 1 });
								}}
								sx={{ minWidth: 40 }}
							>
								+
							</Button>
							<Button
								variant="outlined"
								onClick={() => {
									setValue({ ...value, beer: value.beer - 1 });
								}}
								sx={{ minWidth: 40 }}
							>
								-
							</Button>
							<StyledSmallTextField value={value.beer} />
						</Stack>
					</Stack>
					<Stack direction="row" justifyContent="space-between" alignItems="center">
						<Typography variant="subtitle1">위스키(잔) : </Typography>
						<Stack direction="row" spacing={2}>
							<Button
								variant="outlined"
								onClick={() => {
									setValue({ ...value, wiskey: value.wiskey + 1 });
								}}
								sx={{ minWidth: 40 }}
							>
								+
							</Button>
							<Button
								variant="outlined"
								onClick={() => {
									setValue({ ...value, wiskey: value.wiskey - 1 });
								}}
								sx={{ minWidth: 40 }}
							>
								-
							</Button>
							<StyledSmallTextField value={value.wiskey} />
						</Stack>
					</Stack>
					<Stack direction="row" justifyContent="space-between" alignItems="center">
						<Typography variant="subtitle1">보드카(잔) : </Typography>
						<Stack direction="row" spacing={2}>
							<Button
								variant="outlined"
								onClick={() => {
									setValue({ ...value, vodka: value.vodka + 1 });
								}}
								sx={{ minWidth: 40 }}
							>
								+
							</Button>
							<Button
								variant="outlined"
								onClick={() => {
									setValue({ ...value, vodka: value.vodka - 1 });
								}}
								sx={{ minWidth: 40 }}
							>
								-
							</Button>
							<StyledSmallTextField value={value.vodka} />
						</Stack>
					</Stack>
				</Stack>
				<Divider></Divider>
				<Stack>
					<Typography variant="body1" textAlign="center" color={'black'} sx={{ textDecoration: 'underline' }}>
						{'현재 상태'}
					</Typography>
					<Typography variant="body1" textAlign="center" color={'blue'}>
						알코올 가능 섭취량 : {value.capacity_gram}g
					</Typography>
					<Typography variant="body1" textAlign="center" color={'blue'}>
						현재 섭취량 : {value.intake}g
					</Typography>
					<Typography
						variant="h6"
						textAlign="center"
						color={
							value.intake < value.capacity_gram * 0.8
								? 'green'
								: value.intake < value.capacity_gram * 1.2
								? 'orange'
								: 'red'
						}
					>
						{value.intake < value.capacity_gram * 0.8
							? '아직 괜찮아요'
							: value.intake < value.capacity_gram * 1.2
							? '주의해야 해요'
							: '위험해요'}
					</Typography>
				</Stack>
				<Divider />
				<NavigateButton path="/" />
			</Stack>
		</Paper>
	);
};

const StyledTextField = styled(TextField)(({ theme }) => ({
	width: 180,
	'& .MuiInputBase-root': { height: 40 },
}));
const StyledSmallTextField = styled(TextField)(({ theme }) => ({
	width: 60,
	'& .MuiInputBase-root': { height: 40 },
	'& .MuiInputBase-input': { textAlign: 'center' },
}));
