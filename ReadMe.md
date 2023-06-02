  <h1>Tweet Cards - Follow and Following</h1>
  
  <h2>Features</h2>
  <ul>
    <li>Follow and Following functionality for tweet cards and User account</li>
    <li>Persistent state of buttons and follower count</li>
    <li>Pagination for displaying a subset of tweets at a time</li>
    <li>Filter tweets based on "Show All," "Follow," or "Followings"</li>
    <li>Routing using React Router</li>
    <li>User-friendly UI</li>
  </ul>
  
  <h2>Technologies Used</h2>
  <ul>
    <li>HTML, CSS</li>
    <li>React</li>
    <li>TypeScript</li>
    <li>React Router</li>
  </ul>
  
  <h2>Getting Started</h2>
  <ol>
    <li>Clone the repository:</li>
    <pre><code>git clone &lt;repository-url&gt;</code></pre>
    <li>Install the dependencies:</li>
    <pre><code>cd &lt;project-folder&gt;
npm install</code></pre>
    <li>Start the development server:</li>
    <pre><code>npm run dev</code></pre>
    <li>Open the application in your browser:</li>
    <pre><code>http://localhost:5173</code></pre>
  </ol>
  
  <h2>Usage</h2>
  <ol>
    <li>Upon loading the application, tweet cards will be displayed with 3 first users</li>
    <li>Click the "Follow" button to change it to "Following," update the button color, and increase the follower count by 1.</li>
    <li>The state of the buttons and follower count will persist even after page refresh.</li>
    <li>Click the button again to revert it to the initial state, change the button color, and decrease the follower count by 1.</li>
    <li>Use the filter dropdown to show all tweets, tweets with "Follow" status, or tweets with "Following" status.</li>
    <li>Pagination will be applied to display a subset of tweets at a time. Click "Load More" to load additional tweets.</li>
  </ol>
  
  <h2>Folder Structure</h2>
  <ul>
    <li><code>public/</code>: Contains the HTML template and static assets.</li>
    <li><code>src/</code>: Contains the source code of the application.</li>
    <ul>
      <li><code>components/</code>: Contains reusable components.</li>
      <li><code>pages/</code>: Contains different pages of the application (e.g., Home, Tweets).</li>
      <li><code>App.tsx</code>: Entry point of the application.</li>
      <li><code>main.tsx</code>: Renders the root component.</li>
    </ul>
  </ul>
  
  <h2>Contributing</h2>
  <p>Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request.</p>
  
  <h2>License</h2>
  <p>This project is licensed under the <a href="LICENSE">MIT License</a>.</p>
  
  <h2>Acknowledgments</h2>
  <ul>
    <li><a href="https://www.figma.com/file/zun1oP6NmS2Lmgbcj6e1IG/Test?node-id=0%3A1&t=VoiYTfiXggVItgVd-1">UI Mockup</a>: Provide credit or thanks to any design or inspiration sources.</li>
  </ul>
