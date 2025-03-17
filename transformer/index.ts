import { Document } from '@DocumentKit/types/Document';
import { Page } from '@DocumentKit/types/Page';

export abstract class DocumentTransformer {
	constructor(protected hash: string) {}
	abstract read(file: File): Promise<void>;
	abstract getDocument(): Promise<Document | undefined>;
	abstract getPage(page: number): Promise<Page | undefined>;
	abstract getPageViewport(page: number): Promise<{ width: number, height: number } | undefined>;
	abstract getCover(): Promise<string | undefined>;
	// 后缀名
	static extension: string;
	// 版本号
	static version: number;
}

const transformerMap = new Map<string, { new(hash: string): DocumentTransformer }>();

export function registerTransformer(transformer: { new(hash: string): DocumentTransformer }) {
	transformerMap.set(transformer.prototype.constructor.extension, transformer);
}

export function getTransformer(file: File): { new(hash: string): DocumentTransformer } | undefined {
	const extension = file.name.split('.').pop();
	if (!extension) {
		return undefined;
	}
	return transformerMap.get(extension);
}

export function readDocument(file: File): Promise<ArrayBuffer> {
	const reader = new FileReader();
	reader.readAsArrayBuffer(file);
	return new Promise(resolve => {
		reader.onload = () => {
			resolve(reader.result as ArrayBuffer);
		};
	});
}
