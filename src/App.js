import Title from './components/Title';
import Setup from './examples/1-first-request'
import Headers from './examples/2-headers'
import Post from './examples/3-post-request'
import Global from './examples/4-global-instance'
// import './axios/global'
import Custom from './examples/5-custom-instance'
import Interceptors from './examples/6-interceptors';

function App() {
  return (
    <main>
      <Title />
      {/* <Setup /> */}
      {/* <Headers /> */}
      {/* <Post /> */}
      {/* <Global /> */}
      {/* <Custom /> */}
      <Interceptors />
    </main>
  );
}

export default App;
