export default abstract class HamsterPage {
	abstract init(): Promise<void>;
	// 获取页面编号
	abstract getNumber(): Promise<number>;
	// 获取页面背景（主要是渲染层）
	abstract getBackground(params: { scale: number }): Promise<string>;
	// 渲染上层文字
	abstract getTextLayer(params: { scale: number }): Promise<HTMLDivElement>;
	// 获取视图信息
	abstract getViewport(params: { scale: number }): { width: number, height: number } | undefined;
}
