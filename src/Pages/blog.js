import React from "react";
import { useNavigate } from "react-router-dom";
function Blog() {
  let navigate = useNavigate();
  return (
    <>
      <div>blog</div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Trang chu
      </button>
    </>
  );
}
export default Blog;
