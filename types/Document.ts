// Document的定义是数内内容，而不是书本身，这样有利于控制数据传输，Document对于所有用户是相同的，而Book是用户拥有的数据结构

export interface Document {
	id: string;
	pages: string[];
	// 根据transformer的升级，version是转换时的transformer版本
	version: number;
	// 缩略图
	thumbnail?: string;
}
