import React from "react";
import { Link } from "react-router-dom";

export default function UserAccount() {
  return (
    <div className="h-[88vh] w-[20vw] out">
      <div className="w-full max-w-md mx-auto h-full">
        <div className="bg-background shadow-sm rounded-lg h-full flex flex-col items-center gap-4 p-6">
          <div className="h-20 w-20 rounded-full overflow-hidden">
            <img
              src="images/nitaiLogo.png"
              alt="@shadcn"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid gap-1 text-center">
            <div className="text-xl font-semibold">John Doe</div>
            <div className="text-sm text-muted-foreground">
              john@example.com
            </div>
            <div className="text-sm text-muted-foreground">Total Posts: 42</div>
          </div>
          <Link to="/createBlog">
            <button className="bg-black text-primary-foreground text-white rounded-md px-4 py-2 w-full font-medium hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
              Create Posts
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
