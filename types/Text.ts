import { CSSProperties } from 'react';

export enum DirAttribute {
	LTR = 'ltr',
	RTL = 'rtl',
	AUTO = 'auto',
}

export interface Text {
	id: string;
	content: string;
	hasEOL: boolean;
	dir: DirAttribute;
	height: number;
	width: number;
	position: {
		x: number;
		y: number;
	};
	style?: CSSProperties;
	lang: string | null;
}
