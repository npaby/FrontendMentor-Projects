import * as React from "react";
import {data} from "../data.js";
import type {CardItemProps} from '../types.ts'

export type DataContextProps = {
	data: CardItemProps[];
	setData: React.Dispatch<React.SetStateAction<CardItemProps[]>>;
};

export const DataContext: React.Context<DataContextProps>= React.createContext<DataContextProps>({
	data: data,
	setData: () => {
		throw new Error("setData called outside of DataContext.Provider");
	},
});
