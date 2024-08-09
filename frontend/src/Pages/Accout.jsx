import { Typography, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import UserAccountComp from "../Components/UserAccountComp";
import BlogsComp from "../Components/BlogsComp";
import axios from "axios";

function Accout() {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const [allBogs, setallBogs] = useState([]);

  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/allBlogs`)
      .then((res) => {
        setallBogs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(allBogs);

  return (
    <Box>
      <div className="flex min-h-screen w-full mt-[6rem]">
        <UserAccountComp />
        <div className="max-w-full overflow-auto p-6 md:ml-[22vw]">
          <div
            className="flex-col fixed overflow-auto"
            style={{
              border: "1px solid grey",
              height: "82vh",
              borderRadius: "2rem",
            }}
          >
            {allBogs.map((blog, index) => (
              <BlogsComp
                key={index}
                username={blog.username}
                email={blog.email}
                title={blog.title}
                desc={blog.desc}
                imageUrl={blog.imageUrl}
                createdAt={formatDate(blog.createdAt)} // Formatting the date
              />
            ))}
          </div>
        </div>
      </div>
    </Box>
  );
}
``;
export default Accout;
