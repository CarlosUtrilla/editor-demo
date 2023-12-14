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
                "translate": "1px,6px",
                "rotate": "0deg",
                "scale": "1,1"
            },
            "top": "216.125px",
            "left": "215.359375px",
            "position": "absolute",
            "width": "71px",
            "height": "168px",
            "background-color": "transparent",
            "border-width": "2px",
            "border-style": "dashed",
            "border-color": "rgba(0,0,0,1)"
        },
        "children": [],
        "scopeId": "viewport",
        "componentId": "",
        "jsxId": "",
        "id": "scena16869100",
        "index": 0,
        "innerHTML": "",
        "attrs": {}
    },
    {
        "jsx": "img",
        "attrs": {
            "class": "selectable",
            "src": "http://localhost:8080/customers-logos/0e573176-d002-4442-938d-459074823343.png"
        },
        "name": "(Image)",
        "frame": {
            "transform": {
                "translate": "51px,62px",
                "rotate": "0deg",
                "scale": "1,1"
            },
            "top": "207.8125px",
            "left": "175px",
            "position": "absolute",
            "width": "54px",
            "height": "30px"
        },
        "url": "http://localhost:8080/customers-logos/0e573176-d002-4442-938d-459074823343.png",
        "colors": [
            "#f48057",
            "#636366"
        ],
        "children": [],
        "scopeId": "viewport",
        "componentId": "",
        "jsxId": "",
        "id": "scena18363495",
        "index": 1,
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
                />
            </div>
            <button onClick={this.handleScreen}>screen</button>
            <img src={this.state.img}/>
        </div>;
    }
}

export default App;
