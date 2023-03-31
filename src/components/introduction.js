import {useRef, useEffect} from "react"

const Intro = () => {
  const myRef = useRef(null);
  useEffect(() => {
    function onTimeout () {
      myRef.current.className = 'hide';
      document.body.className = 'white-bg';
      console.log('visible');
    }

    const timeoutId = setTimeout(onTimeout, 4000);

    return () => {
      console.log('🟡 unvisible');
      clearTimeout(timeoutId);
    }
  }, [myRef]);
  
    return (
        <div ref ={myRef} className="intro-component">
            <p>
              <span className="intro-span1">
                Resume
              </span>
              <span className="intro-span2">
                Maker
              </span>
            </p>
        </div>
    )
}

export default Intro;