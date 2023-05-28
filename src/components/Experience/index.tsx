import React from "react";

interface ListProps {
  title: string;
  items: any[];
}

function List(props: ListProps) {
  const { title, items } = props;
  return (
    <>
      <h1 className="text-sm lg:text-xl font-bold text-gray-800 flex flex-col">
        {title}
      </h1>
      <ul className="list-disc list-inside ml-3 mt-2">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

function Experience() {
  const languages = ["Java", "Go", "Python", "Typescript"];
  const libs = ["Spring", "Django", "React", "Angular", "Next.js"];

  return (
    <>
      <h1 className="text-lg lg:text-xl font-bold text-gray-800 mt-5">
        My experience
      </h1>
      <hr className="border border-b-0 border-x-0 border-gray-800 my-2 lg:my-4" />
      <div className="text-sm lg:text-lg flex flex-row">
        <div className="w-full lg:w-1/2 p-3">
          <List title="Languages" items={languages} />
        </div>
        <div className="w-full lg:w-1/2 p-3">
          <List title="Frameworks & libraries" items={libs} />
        </div>
      </div>
    </>
  );
}

export { Experience };
