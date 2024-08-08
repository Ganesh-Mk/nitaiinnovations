import { Typography, Box } from "@mui/material";
import React from "react";

const BlogsComp = () => {
  return (
    <Box>
      <div className="rounded-lg border bg-background p-6 shadow-sm mb-8">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <h3 className="text-lg font-semibold">
              Building a Scalable React App
            </h3>
            <p className="text-muted-foreground">
              Learn how to build a scalable React application that can handle
              high traffic and complex features.
            </p>
          </div>
          <p>
            In this blog post, we'll dive into the best practices and techniques
            for building a scalable React application. We'll cover topics such
            as code organization, state management, performance optimization,
            and more.
          </p>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>May 15, 2023</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              />
            </svg>
            <span>12 comments</span>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default BlogsComp;
