import React from 'react';

function Instructions() {
  const gitURL = '#';
  return (
    <section className="instructions">
      <h1>NCAA School Information Lookup</h1>
      <p>Below is an app built in React.js. It pulls information from an API using the popular <code>fetch()</code> command that populates (using the <code>componentDidMount()</code> hook) the state of a component when the app first loads. After that it uses an array filter to filter school components based on the schools name when text is typed into the search bar. Give it a try!!!</p>
      <p>To look at the code for this <a href={gitURL}>project</a> visit its <a href={gitURL}>GitHub</a></p>
    </section>
  )
}

export default Instructions;