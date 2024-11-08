import React from "react";

interface ListProps {
  items: any[];
}

function List(props: ListProps) {
  const { items } = props;
  return (
    <>
      <ul className="list-disc list-inside ml-3" style={{ columnCount: "3" }}>
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
    "Audio mixing",
    "Writing",
    "Wine tasting",
    "Mixology",
  ];

  return (
    <>
      <h1 className="text-lg lg:text-xl font-bold text-gray-800 mt-5">
        My interests
      </h1>
      <hr className="border border-b-0 border-x-0 border-gray-800 my-2 lg:my-4" />
      <div className="text-sm lg:text-lg flex flex-row">
        <div className="w-full p-2">
          <List items={interests} />
        </div>
      </div>
    </>
  );
}

export { Interests };
