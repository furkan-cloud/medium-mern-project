// import React, { Component } from "react";

// import EditorJs from "react-editor-js";

// import { EDITOR_JS_TOOLS } from "./constants";

// class ReactEditor extends Component {
//   constructor() {
//     super();
//     this.state = {
//       data: "",
//     };
//   }
//   async onSave() {
//     const savedData = await this.editorInstance.save();
//     console.log("outputData", savedData);
//     this.setState(savedData);
//   }
//   componentDidMount() {
//     this.editorInstance = this.editorInstance; // access editor-js
//   }

//   render() {
//     return (
//       <>
//         <button onClick={this.onSave.bind(this)} type="button">
//           Save Content (check console output)
//         </button>
//         <EditorJs
//           instanceRef={(instance) => (this.editorInstance = instance)}
//           tools={EDITOR_JS_TOOLS}
//           data={this.state.data}
//         />
//       </>
//     );
//   }
// }

// export default ReactEditor;

// import React, { Component } from "react";
// import ReactDOM from "react-dom";

// import EditorJs from "@natterstefan/react-editor-js";

// import { EDITOR_JS_TOOLS } from "./constants";
// import { data } from "./data";
