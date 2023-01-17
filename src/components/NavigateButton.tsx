import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const NavigateButton: React.FC<{ path: string }> = ({ path }) => {
	const navigate = useNavigate();
	return (
		<Button
			variant="contained"
			onClick={() => {
				navigate(path);
			}}
		>
			<Typography>{path === '/' ? '홈으로 가기' : `${path} 가기`}</Typography>
		</Button>
	);
};
