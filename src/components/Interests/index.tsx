import React from "react";

interface ListProps {
  items: any[];
}

function List(props: ListProps) {
  const { items } = props;
  return (
    <>
      <ul
        className="list-disc list-inside ml-3 mt-2"
        style={{ columnCount: "3" }}
      >
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

function Interests() {
  const interests = [
    "Card games",
    "A good beer",
    "Lego",
    "Music composition",
    "Recording",
    "Writing",
  ];

  return (
    <>
      <h1 className="lg:text-xl font-bold text-gray-800 mt-5">My interests</h1>
      <hr className="border border-b-0 border-x-0 border-gray-800 my-2 lg:my-4" />
      <div className="text-md flex flex-row">
        <div className="w-full p-3">
          <List items={interests} />
        </div>
      </div>
    </>
  );
}

export { Interests };
