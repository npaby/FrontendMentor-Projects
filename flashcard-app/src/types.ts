export type LayoutMode = "AllCards" | "StudyMode";

export type CardHeaderProps = {
	setLayoutMode: React.Dispatch<React.SetStateAction<LayoutMode>>;
	currentLayout: LayoutMode;
};
export type CardItemProps = {
	id:string;
	question:string;
	answer:string;
	category:string;
	knownCount: number;
}