import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ReactHtmlParser from "react-html-parser";
import UserContext from "../../context/UserContext";
import "./PostEditor.css";
import { useContext, useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import { topics } from "../../data/topicData";

const PostEditor = () => {
  const { userData } = useContext(UserContext);
  const [content, setContent] = useState();
  const [title, setTitle] = useState();
  const [image, setImage] = useState(null);
  const [topic, setTopic] = useState(null);
  const [post, setPost] = useState(null);
  const history = useHistory();
  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  const handleOnClick = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("post_image", image);
    formData.append("subtitle", title);
    formData.append("topic", topic);
    formData.append("author", userData.user._id);

    console.log(formData);
    let token = localStorage.getItem("token");

    // const registerResponse = await Axios.post(
    //   "http://localhost:5000/api/posts/add",
    //   newPost
    // );
    const postResponse = await Axios.post(
      "http://localhost:5000/api/posts/add",
      formData,
      {
        headers: {
          "x-auth-token": token,
        },
      }
    );
    console.log(postResponse.data.post);
    setPost(postResponse.data.post);
    setContent("");
    setTitle("");
    setImage("");

    history.push(`/profileDetail/${userData.user._id}`);
  };
  return (
    <div>
      <form action="" enctype="multipart/form-data">
        <div className="input-grup">
          <label htmlFor=""> Title </label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="file-input" style={{ cursor: "pointer" }}>
            {" "}
            image{" "}
          </label>

          <input
            id="file-input"
            accept="image/*"
            type="file"
            // ref={hiddenFileInput}
            onChange={handleChange}
            // style={{ display: "none" }}
          />
          <label>
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
        <button onClick={handleOnClick}> add </button>
      </form>

      {/* {post ? ReactHtmlParser(post.content) : null} */}
    </div>
  );
};

export default PostEditor;
