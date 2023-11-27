import * as React from "react";
import "./App.css";
import Editor from "../Editor";
import { ElementInfo } from "../Editor/Viewport/Viewport";

const elements = []as ElementInfo[]
class App extends React.Component {
    public editor = React.createRef<Editor>();

    uploadFile(file: File): Promise<{ url:string, options?: any }>{
        return new Promise((resolve) => {
            var reader = new FileReader();
            reader.onload = function (e) {
                resolve({ url: e.target?.result as string || "", options: {colors: 2} })
            };
            reader.readAsDataURL(file);
        })
    }
    public render() {
        return <div className="app">
            <div className="container">
                <Editor
                    ref={this.editor}
                    debug={true}
                    initialJSX={elements}
                    backgroundImg="https://api.renoshop.mx/productsImg/5a0c0476-36e9-45db-95de-447fa0a23db9.webp"
                    onUploadImage={this.uploadFile}
                    isAdmin
                />
            </div>
        </div>;
    }
}

export default App;
