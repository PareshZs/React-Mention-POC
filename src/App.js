import { useState, useCallback, useEffect } from "react";
import { Mention, MentionsInput } from "react-mentions";
import mentionStyle from "./mentionStyle";
import merge from "lodash/merge";
import mentionsInputStyle from "./mentionsInputStyle";

import CustomForm from "./CustomForm";

function App() {
  const [value, setValue] = useState("");
  const [emojiValue, setEmojiValue] = useState([]);

  const emailRegex = /(([^\s@]+@[^\s@]+\.[^\s@]+))$/;
  const notMatchingRegex = /($a)/;

  let customStyle = merge({}, mentionsInputStyle, {
    input: {
      overflow: "auto",
      height: 80,
      width: 500,
    },
    highlighter: {
      boxSizing: "border-box",
      overflow: "hidden",
      height: 80,
      width: 500,
    },
  });

  const users = [
    {
      id: "isaac",
      display: "Isaac Newton",
    },
    {
      id: "sam",
      display: "Sam Victor",
    },
    {
      id: "emma",
      display: "emmanuel@nobody.com",
    },
  ];

  function fetchUsers(query, callback) {
    if (!query) return;
    fetch(`https://jsonplaceholder.typicode.com/users?q=${query}`, {
      json: true,
    })
      .then((res) => res.json())

      // Transform the users to what react-mentions expects
      .then((res) =>
        res.map((user) => ({ display: user.username, id: user.name }))
      )

      .then(callback);
  }

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/oliveratgithub/0bf11a9aff0d6da7b46f1490f86a71eb/raw/d8e4b78cfe66862cf3809443c1dba017f37b61db/emojis.json"
    )
      .then((data) => {
        return data.json();
      })
      .then((jsonData) => {
        setEmojiValue(jsonData.emojis);
      });
  }, []);

  const queryEmojis = (query, callback) => {
    if (query.length === 0) return;

    const filterValue = emojiValue
      .filter((emoji) => {
        return emoji.name.indexOf(query.toLowerCase()) > -1;
      })
      .slice(0, 10);
    return filterValue.map(({ emoji }) => ({ id: emoji }));
  };

  return (
    <div className="App">
      <CustomForm/>
    </div>
  );
}

export default App;
