// Document的定义是数内内容，而不是书本身，这样有利于控制数据传输，Document对于所有用户是相同的，而Book是用户拥有的数据结构

import { CSSProperties } from 'react';
import { Number2 } from '@/types/Math';

// 文档锚（标记了文字id）
export interface DocumentAnchorWithTextId {
	pageId: string;
	textId?: string;
}

// 文档锚（标记了位置）
export interface DocumentAnchorWithPosition {
	pageId: string;
	position: Number2;
}

export type DocumentAnchor = DocumentAnchorWithPosition | DocumentAnchorWithTextId;

export interface Document {
	id: string;
	// pageId列表
	pages: string[];
	// 根据transformer的升级，version是转换时的transformer版本
	version: number;
	// 缩略图
	thumbnail?: string;
	// 大纲
	outline: {
		title: string;
		style?: CSSProperties;
		anchor?: DocumentAnchor;
	}[];
	// 元数据
	metaData?: {
		[key: string]: string | boolean | number | null;
	};
}
