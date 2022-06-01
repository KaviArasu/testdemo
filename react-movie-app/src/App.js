import logo from './logo.svg';
import './App.css';

function App() {
   // JS Starts
   const names = [{name:"Arun", pic:"https://1.bp.blogspot.com/-W_7SWMP5Rag/YTuyV5XvtUI/AAAAAAAAuUQ/hm6bYcvlFgQqgv1uosog6K8y0dC9eglTQCLcBGAsYHQ/s880/Best-Profile-Pic-For-Boys%2B%25281%2529.jpg"},
   {name:"Ashok", pic:"https://1.bp.blogspot.com/-W_7SWMP5Rag/YTuyV5XvtUI/AAAAAAAAuUQ/hm6bYcvlFgQqgv1uosog6K8y0dC9eglTQCLcBGAsYHQ/s880/Best-Profile-Pic-For-Boys%2B%25281%2529.jpg"},
   {name:"Anand", pic:"https://1.bp.blogspot.com/-W_7SWMP5Rag/YTuyV5XvtUI/AAAAAAAAuUQ/hm6bYcvlFgQqgv1uosog6K8y0dC9eglTQCLcBGAsYHQ/s880/Best-Profile-Pic-For-Boys%2B%25281%2529.jpg"},
  {name:"Anand", pic:"https://1.bp.blogspot.com/-W_7SWMP5Rag/YTuyV5XvtUI/AAAAAAAAuUQ/hm6bYcvlFgQqgv1uosog6K8y0dC9eglTQCLcBGAsYHQ/s880/Best-Profile-Pic-For-Boys%2B%25281%2529.jpg"}];
  //  const name="KaviArasu N S";
  //  const time = 30;
   // JS ends
   // JSX Starts
   // DRY - Dont Repeat Yourself
   return(
    // <div className="App">
    //   <div>
    //   <Message name="Arun" pic="https://1.bp.blogspot.com/-W_7SWMP5Rag/YTuyV5XvtUI/AAAAAAAAuUQ/hm6bYcvlFgQqgv1uosog6K8y0dC9eglTQCLcBGAsYHQ/s880/Best-Profile-Pic-For-Boys%2B%25281%2529.jpg"/>
    //   <Message name="Ashok" pic="https://1.bp.blogspot.com/-W_7SWMP5Rag/YTuyV5XvtUI/AAAAAAAAuUQ/hm6bYcvlFgQqgv1uosog6K8y0dC9eglTQCLcBGAsYHQ/s880/Best-Profile-Pic-For-Boys%2B%25281%2529.jpg"/>
    //   <Message name="Anand" pic="https://1.bp.blogspot.com/-W_7SWMP5Rag/YTuyV5XvtUI/AAAAAAAAuUQ/hm6bYcvlFgQqgv1uosog6K8y0dC9eglTQCLcBGAsYHQ/s880/Best-Profile-Pic-For-Boys%2B%25281%2529.jpg"/>
    //   </div>
    // </div>
    <div className="App">
      <div>
      {names.map(nm => <Message name={nm.name} pic={nm.pic} />)}
      {/* <Welcome name="Arun"/>
      <Welcome name="Ashok"/>
      <Welcome name="Anand"/> */}
      </div>
    </div>
  );
  // JSX ends
}

// Object Destructring
// props - properties -  pass arguments to components
export default App;

// Create Component
// function -> Component
// 1.First letter capital
// 2. It should return one JSX element


//Defined the component


function Welcome(props){
  console.log(props);
  return( 
  <div>
  <h1>Hello, {props.name} 😊😊</h1>
  </div>
  )
}
function Message(props){
  return( 
  <div>
  <img className="profile-pic" src={props.pic}></img>
  <h1>Hello, {props.name} 😊</h1>
  </div>
  )
}


// {} - template syntax

// JSX - Javascript XML
// className

// Webpack + babel

// JSX -> JS
// className
// class - keyword