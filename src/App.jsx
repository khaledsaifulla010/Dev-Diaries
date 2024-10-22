
import './App.css'
import Headers from './Components/1.Headers/Headers'
import Blogs from './Components/2.Blogs/Blogs'
import Bookmarks from './Components/4.Bookmarks/Bookmarks';



function App() {
  

  return (
    <>
      <Headers></Headers>

      <div className='flex justify-between px-28 mt-12'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </>
  );
}

export default App
