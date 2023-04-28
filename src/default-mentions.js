{/* Working with Default mentions */}
   {/*   <h2>Lets get started</h2>
      <MentionsInput
        style={mentionsInputStyle}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <Mention style={mentionStyle} data={users} />
      </MentionsInput>
      <br />
      <br />
      <br />
      <h2>Using a Single line Input</h2>
      <MentionsInput
        singleLine
        style={mentionsInputStyle}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <Mention style={mentionStyle} data={users} />
      </MentionsInput>
      <br />
      <br />
      <br />
      <br />
      // <br />
      // <br />
      <h2>Using Multiple Trigger pattern</h2>
      <MentionsInput
        style={mentionsInputStyle}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <Mention style={mentionStyle} data={users} />

        <Mention
          trigger={emailRegex}
          data={(search) => [{ id: search, display: search }]}
          onAdd={useCallback((...args) => {
            console.log(...args);
          }, [])}
          style={{ backgroundColor: "#d1c4e9" }}
        />
      </MentionsInput>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h2>Scrollable Container</h2>
      <MentionsInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={customStyle}
        placeholder={"Mention people using '@'"}
        a11ySuggestionsListLabel={"Suggested mentions"}
      >
        <Mention trigger="@" data={users} style={mentionStyle} />
      </MentionsInput>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h2>Displaying ID</h2>
      <MentionsInput
        style={mentionsInputStyle}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <Mention
          displayTransform={(id) => `<!--${id}-->`}
          style={mentionStyle}
          data={users}
        />
      </MentionsInput>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* Working with external data */}
     {/* <h2>Fetching response from external sources</h2>
      <MentionsInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={mentionsInputStyle}
        placeholder="Mention any JsonPlaceholder username by typing `@` followed by at least one character"
        a11ySuggestionsListLabel={
          "Suggested JsonPlaceholder username for mention"
        }
      >
        <Mention
          displayTransform={(id) => `@${id}`}
          trigger="@"
          data={fetchUsers}
          style={mentionStyle}
        />
      </MentionsInput>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h3>Emoji support</h3>
      <MentionsInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={mentionsInputStyle}
        placeholder={"Press '&' for emojis, mention people using '@'"}
      >
        <Mention
          trigger="@"
          displayTransform={(username) => `@${username}`}
          markup="@__id__"
          data={users}
          regex={/@(\S+)/}
          style={mentionStyle}
          appendSpaceOnAdd
        />
        <Mention
          trigger="&"
          markup="__id__"
          regex={notMatchingRegex}
          data={queryEmojis}
        />
      </MentionsInput>
      <br />
      <br />
      <br />
      <br />*/}

