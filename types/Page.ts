import { CSSProperties } from 'react';
import { Text } from './Text';

export interface Page {
	id: string;
	height: number;
	width: number;
	texts: Text[];
	style?: CSSProperties;
	pageIndex?: number
	pageNumber?: number
}
