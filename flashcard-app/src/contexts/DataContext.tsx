import * as React from "react";
import { type CardItemProps, data} from "../data.js";

export type DataContextProps = {
	data: CardItemProps[];
	setData: React.Dispatch<React.SetStateAction<CardItemProps[]>>;
};

export const DataContext = React.createContext<DataContextProps>({
	data: data,
	setData: () => {
		throw new Error("setData called outside of DataContext.Provider");
	},
});
