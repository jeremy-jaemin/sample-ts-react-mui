import { Button, Stack, Typography } from '@mui/material';
import { NavigateButton } from '../components/NavigateButton';

export const SampleAsync = () => {
	const asyncIteratorExample = async () => {
		const testArrays = [1, 2, 3, 4];
		const testAsyncFunc = async (value: number) => {
			return new Promise<number>((resolve) => {
				setTimeout(() => {
					console.log('timed out');
					resolve(value * value);
				}, 2000);
			});
		};

		// 0. asyncfunc test
		console.log(await testAsyncFunc(4));

		// 1. 순서가 보장이 안되며 "끝났다" 가 찍힌 후에 testAsyncFunc 결과가 나올수도 있음
		// testArrays.forEach(async (value) => {
		// 	const ret = await testAsyncFunc(value);
		// 	console.log(ret);
		// });
		// console.log('긑났다.');

		// 2. 순서가 보장이 되며 "끝났다" 가 찍히기 전에 testAsyncFunc 결과가 다 나옴
		// 병렬 수행이 아니라 하나씩 보낸다.
		// for (let i = 0; i < testArrays.length; i++) {
		// 	await testAsyncFunc(testArrays[i]);
		// }
		// console.log('긑났다.');

		// // 3. 요청 순서는 보장이 되지만 응답 순서가 보장이 안 되지만 병렬 수행이라 빠르다.
		// // "끝났다" 가 찍히기 전에 testAsyncFunc 결과가 다 나옴
		// const promises: Promise<number>[] = testArrays.map(
		// 	async (value) => await testAsyncFunc(value)
		// );
		// await Promise.all(promises);
		// console.log('긑났다.');

		return 1;
	};

	return (
		<Stack direction="column" spacing={2} width={300}>
			<Typography variant="h5">SampleAsync</Typography>
			<Button onClick={asyncIteratorExample} variant="outlined">
				<Typography>async test! </Typography>
			</Button>
			<Typography>console을 확인하세요!</Typography>
			<NavigateButton path="/" />
		</Stack>
	);
};
