import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import UserContext from "../../context/UserContext";
import "./PostEditor.css";
import { useContext, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { topics } from "../../data/topicData";

const PostEditor = () => {
  const { userData } = useContext(UserContext);
  const [content, setContent] = useState();
  const [title, setTitle] = useState();
  const [image, setImage] = useState(null);
  const [topic, setTopic] = useState("Self");
  const [post, setPost] = useState(null);
  const [errMsg, setErrMsg] = useState(null);
  const history = useHistory();
  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  const handleOnClick = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      formData.append("post_image", image);
      formData.append("subtitle", title);
      formData.append("topic", topic);
      formData.append("author", userData.user._id);
      let token = localStorage.getItem("token");
      const postResponse = await axios.post(
        "http://localhost:5000/api/posts/add",
        formData,
        {
          headers: {
            "x-auth-token": token,
          },
        }
      );
      setPost(postResponse.data.post);
      setContent("");
      setTitle("");
      setImage("");

      history.push(`/profileDetail/${userData.user._id}`);
    } catch (error) {
      if (
        error.response.data.errors[0].message ===
        "Cannot read property 'path' of undefined"
      ) {
        setErrMsg("Please select an image for the article");
      } else {
        setErrMsg(error.response.data.errors[0].message);
      }

      // console.log(error.response.data.errors);
      setTimeout(() => setErrMsg(null), 4000);
    }
  };
  return (
    <div className="postEditorContainer">
      <form action="" enctype="multipart/form-data">
        <div className="input-grup">
          <label className="profileUpdateLabel" htmlFor="">
            {" "}
            Title{" "}
          </label>
          <input
            className="postEditorInput"
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="input-grup">
          <label
            className="profileUpdateLabel"
            htmlFor="file-input"
            style={{ cursor: "pointer" }}
          >
            Image
          </label>

          <input
            id="file-input"
            accept="image/*"
            type="file"
            // ref={hiddenFileInput}
            onChange={handleChange}
            // style={{ display: "none" }}
          />
          <label className="profileUpdateLabel">
            Select Topics:
            <select value={topic} onChange={(e) => setTopic(e.target.value)}>
              {topics.map((topic, i) => (
                <option key={i} value={topic}>
                  {topic}
                </option>
              ))}
            </select>
          </label>
        </div>
        <CKEditor
          editor={ClassicEditor}
          data={content}
          name="content"
          // onReady={(editor) => {
          //   // You can store the "editor" and use when it is needed.
          //   console.log("Editor is ready to use!", editor);
          // }}
          onChange={(event, editor) => {
            const data = editor.getData();
            setContent(data);
            //console.log({ event, editor, data });
          }}
        />
        {/* <ReactEditor /> */}
        <button className="addBtn" onClick={handleOnClick}>
          {" "}
          Add{" "}
        </button>
      </form>
      {errMsg && <div className="error">{errMsg}</div>}

      {/* {post ? ReactHtmlParser(post.content) : null} */}
    </div>
  );
};

export default PostEditor;
