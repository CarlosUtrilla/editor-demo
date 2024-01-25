import * as React from "react";
import "./App.css";
import Editor from "../Editor";
import { ElementInfo } from "../Editor/Viewport/Viewport";

const elements = [
    {
              "jsx": "div",
              "name": "(PrintArea)",
              "frame": {
                "transform": {
                  "translate": "-5px,-2px",
                  "rotate": "0deg",
                  "scale": "1,1"
                },
                "top": "153.125px",
                "left": "209.359375px",
                "position": "absolute",
                "width": "80px",
                "height": "265px",
                "background-color": "transparent",
                "border-width": "2px",
                "border-style": "dashed",
                "border-color": "rgba(155,155,155,1)"
              },
              "children": [],
              "scopeId": "viewport",
              "componentId": "",
              "jsxId": "",
              "id": "scena88123614",
              "index": 0,
              "innerHTML": ""
            }
] as ElementInfo[]
class App extends React.Component {
    public editor = React.createRef<Editor>();
    public state = {
        img: ""
    }
    uploadFile(file: File): Promise<{ url:string, options?: any }>{
        return new Promise((resolve) => {
            var reader = new FileReader();
            reader.onload = function (e) {
                resolve({ url: e.target?.result as string || "", options: {colors: 2} })
            };
            reader.readAsDataURL(file);
        })
    }
    handleScreen = async () => {
        const file = await this.editor.current?.getScreenshot("image")
        const img = URL.createObjectURL(file!)
        this.setState({ img: img })
        const size = await this.editor.current?.getDesignSize()
        console.log("Design size",size)
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
                    printAreaSize="20cmx20cm"
                    onChange={console.log}
                    isAdmin
                />
            </div>
            {/* <button onClick={this.handleScreen}>screen</button>
            <img src={this.state.img}/> */}
        </div>;
    }
}

export default App;
