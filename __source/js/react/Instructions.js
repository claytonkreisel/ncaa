import React from 'react';

function Instructions() {
  const gitURL = 'https://github.com/claytonkreisel/ncaa';
  return (
    <section className="instructions">
      <h1>NCAA School Information Lookup</h1>
      <p className="links-holder"><a href="/ncaa/" className="active">React Version</a> | <a href="/ncaa/vue.php">Vue Version</a> | <a href="/ncaa/jquery.php">jQuery Version</a></p>
      <p>Below is an app built in React.js. It pulls information from an API using the popular <code>fetch()</code> command that populates (using the <code>componentDidMount()</code> hook) the state of a component when the app first loads. After that it uses an array filter to filter school components based on the schools name when text is typed into the search bar. Give it a try!!!</p>
      <p>To look at the code for this <a target="_blank" href={gitURL}>project</a> visit its <a target="_blank" href={gitURL}>GitHub</a></p>
    </section>
  )
}

export default Instructions;
