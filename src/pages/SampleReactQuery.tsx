import { CircularProgress, Stack, Typography } from '@mui/material';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import axios from 'axios';
import { Suspense } from 'react';
import { NavigateButton } from '../components/NavigateButton';

export const SampleReactQuery = () => {
	const queryClient = new QueryClient();

	return (
		<Stack direction="column" spacing={2} width={300}>
			<Typography variant="h5">SampleReactQuery</Typography>
			<Suspense>
				<QueryClientProvider client={queryClient}>
					<ReactQueryDevtools initialIsOpen={false} />
					<QuerySampleComponent />
				</QueryClientProvider>
			</Suspense>
			<NavigateButton path="/" />
		</Stack>
	);
};

type TodoType = {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
};

const QuerySampleComponent = () => {
	const getList = async () => {
		const { data, status } = await axios.get<TodoType[]>('https://jsonplaceholder.typicode.com/todos/');
		return data;
	};
	const querylist = () => {
		const { status, data, error } = useQuery({
			queryKey: ['todos'],
			queryFn: getList,
			suspense: true,
			retry: 0,
			refetchOnWindowFocus: true,
		});

		switch (status) {
			case 'loading':
				return <CircularProgress />;
			case 'error':
				return (
					<Typography color="red" variant="h6" align="center">
						error!!
					</Typography>
				);
		}
		return (
			<Typography color="green" variant="h5" align="center">
				SUCCESS!
			</Typography>
		);
	};
	return querylist();
};
