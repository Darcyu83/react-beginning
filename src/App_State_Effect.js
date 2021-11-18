
import Button from "./Button";
import styles from "./App.module.css";
import {useState, useEffect} from "react";


function Hello(){
  function byeFn(){
    console.log("I'm not there");
  }
  function hiFn(){
    console.log("I'm here ");
    return byeFn;   
  }
  useEffect(hiFn, [])
  return <h1>Hello</h1>
}


function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  console.log(useState("값"));
  const onClick = () => {setValue((prev) => prev +1)}
  const onChange = (event) => {setKeyword(event.target.value);}
  const [isVisible, setVisible] = useState(false);
  const onClick4Visibility = () =>{setVisible(prev => !prev)}
  console.log("Running all the time")

  useEffect(()=>{ console.log("Call the API once...");}, []);
  useEffect(()=>{ 
    if(keyword !== "" && keyword.length>5){
      console.log("I run when 'keyword' changes", keyword);
    }
  }, [keyword]);
  useEffect(()=>{
    if(counter !== 0 && counter > 0)
    console.log("I run when 'counter' changes")
  }, [counter])

  

  return (
      <div>
        <h1 className={styles.title}>CSS</h1>
        <h1 className={styles.title}>Welcome back!!</h1>
      <Button text={"Continue"}/>

      <hr></hr>
      <h1 className={styles.title}>useEffect 사용법 1 / 2 </h1>
      <input type="text" value={keyword} placeholder="Search here..." onChange={onChange}/>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click</button>  

      <hr></hr>
      <h1 className={styles.title}>useEffect 사용법 3 </h1>
      {isVisible ? <Hello/> : null}
      <button onClick={onClick4Visibility}>{isVisible ? "Hide": "Show"}</button>

    </div>
  );
}

export default App;
