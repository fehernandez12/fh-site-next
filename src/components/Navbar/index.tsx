import { inputChangeHandler } from "@/utils/FormUtils";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function Navbar() {
  const router = useRouter();
  const [q, setSearch] = React.useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push({
      pathname: `/blog/search`,
      query: { q },
    });
  };

  return (
    <nav className="navbar z-50 flex flex-row justify-start items-center shadow-md bg-[#282C34] top-0 left-0 sticky">
      <div className="flex-1">
        <Link className="ml-3 normal-case text-xl" href="/">
          👋
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div className="flex flex-col">
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              type="text"
              name="search"
              id="search"
              className="input text-gray-200"
              placeholder="Search"
              onChange={(e) => inputChangeHandler(setSearch, e)}
            />
          </form>
        </div>
      </div>
    </nav>
  );
}

export { Navbar };
