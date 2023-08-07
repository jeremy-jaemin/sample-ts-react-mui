import { atom } from 'jotai';

export const numberAtom = atom(0);
export const objectAtom = atom({ first: 1, second: false, third: '3rd' });

export const readOnlyAtom = atom((get) => get(numberAtom) * 2);
export const writeOnlyAtom = atom(null, (get, set, multiply: number) => set(numberAtom, get(numberAtom) * multiply));
export const readAndWriteAtom = atom(
	(get) => get(numberAtom) * 2,
	(get, set, multiply: number) => set(numberAtom, get(numberAtom) * multiply)
);
