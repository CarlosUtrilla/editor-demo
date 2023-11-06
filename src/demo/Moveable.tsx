import * as React from "react";
import "./App.css";
import Editor from "../Editor";

const elements = [
            {
                jsx: <div className="moveable" contentEditable="true" suppressContentEditableWarning={true}>Moveable</div>,
                name: "(Logo)",
                frame: {
                    position: "absolute",
                    left: "50%",
                    top: "30%",
                    width: "250px",
                    height: "200px",
                    "font-size": "40px",
                    "transform": "translate(-125px, -100px)",
                    display: "flex",
                    "justify-content": "center",
                    "flex-direction": "column",
                    "text-align": "center",
                    "font-weight": 100,
                },
            },
            {
                jsx: <div className="moveable" contentEditable="true" suppressContentEditableWarning={true}>Moveable is Draggable! Resizable! Scalable! Rotatable! Warpable! Pinchable</div>,
                name: "(Description)",
                frame: {
                    position: "absolute",
                    left: "0%",
                    top: "65%",
                    width: "400px",
                    "font-size": "14px",
                    "text-align": "center",
                    "font-weight": "normal",
                },
            },
            {
                jsx: <div className="moveable">Moveable is Draggable! Resizable! Scalable! Rotatable! Warpable! Pinchable</div>,
                name: "(Description)",
                frame: {
                    position: "absolute",
                    left: "0%",
                    top: "65%",
                    width: "400px",
                    "font-size": "14px",
                    "text-align": "center",
                    "font-weight": "normal",
                },
                children: [
                    {
                        jsx: <div className="moveable">HI</div>,
                        name: "(Des2)",
                        frame: {
                            position: "absolute",
                            left: "0%",
                            top: "65%",
                            width: "400px",
                            "font-size": "14px",
                            "text-align": "center",
                            "font-weight": "normal",
                        },
                    }
                ]
            },
        ]
class App extends React.Component {
    public editor = React.createRef<Editor>();
    public render() {
        return <div className="app">
            <Editor
                ref={this.editor}
                debug={true}
                initialJSX={elements}
                backgroundImg="https://api.renoshop.mx/productsImg/5a0c0476-36e9-45db-95de-447fa0a23db9.webp"
                onChange={console.log}
            />
        </div>;
    }
}

export default App;
