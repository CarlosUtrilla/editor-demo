import * as React from "react";
import "./App.css";
import Editor from "../Editor";
import { ElementInfo } from "../Editor/Viewport/Viewport";

const elements = []as ElementInfo[]
class App extends React.Component {
    public editor = React.createRef<Editor>();

    uploadFile(file: File): Promise<string>{
        return new Promise((resolve) => {
            var reader = new FileReader();
            reader.onload = function (e) {
                resolve(e.target?.result as string || "")
            };
            reader.readAsDataURL(file);
        })
    }
    public render() {
        return <div className="app">
            <input type="file" accept="image/*" value="" onChange={(e) => {
                const file = e.target.files ? e.target.files[0] : undefined
                this.editor.current?.addImage(file)
            }}/>
            <Editor
                ref={this.editor}
                debug={true}
                initialJSX={elements}
                backgroundImg="https://api.renoshop.mx/productsImg/5a0c0476-36e9-45db-95de-447fa0a23db9.webp"
                onUploadImage={this.uploadFile}
                isAdmin
            />
        </div>;
    }
}

export default App;
