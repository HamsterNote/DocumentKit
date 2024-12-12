import { CSSProperties } from 'react';

export interface Text {
	id: string;
	content: string;
	hasReturn: boolean;
	position: {
		x: number;
		y: number;
	};
	style?: CSSProperties;
}
