import HamsterPage from '@DocumentKit/Page';
import { CSSProperties } from 'react';
import { DocumentAnchor } from '@DocumentKit/types/Document';

export default abstract class HamsterDocument {
	constructor(protected hash: string) {}
	getId() {
		return this.hash;
	}
	abstract init(): Promise<void>;
	// 获取Page对象，参数pageNumber为页码，从1开始
	abstract getPage(pageNumber: number): Promise<HamsterPage>;
	// 获取缩略图
	abstract getThumbnail(): Promise<string>;
	// 获取大纲
	abstract getOutline(): Promise<{
		title: string;
		style?: CSSProperties;
		anchor?: DocumentAnchor;
	}[]>;
	// 获取封面
	abstract getCover(): Promise<string>;
	// 获取所有page对象
	abstract getPages(): Promise<HamsterPage[]>;
}
