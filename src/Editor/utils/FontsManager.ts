import Editor from "../Editor";
import { FontsList, GoogleFontsREST } from "../types";
import WebFont from 'webfontloader';

export default class FontsManager {
	public fonts: FontsList[] = [];
	private editor;
	constructor(editor: Editor) {
		this.requestFonts()
		this.editor = editor;
	}

	private async requestFonts() {
		const rest = await fetch("https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyD_U19-I04gS4WZwYvSmYHEQJxTG2DNoio&sort=popularity")
		const fonts = await rest.json() as GoogleFontsREST;
		this.fonts = fonts.items;
		this.loadFonts(["Roboto"])
		this.editor.menu.current?.forceUpdate()
	}

	public loadFonts(fonts: string[]) {
		WebFont.load({
			google: {
				families: fonts
			},
			active: () => this.editor.forceUpdate()
		});
	}
}