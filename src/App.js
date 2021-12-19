import React,{ useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  let [noTitle,noTitleChange] = useState(['크리스마스 트리','명동','신세계','쭈꾸미']);
  let [likeScore,likeScoreChange] = useState(0);
  
  let post = '크리스마스';

  const changeTitle = () => {
    var newArray = [...noTitle];//일반 등호시 주소 참소하기에 값이 변경안됨 [...var] 사용
    var sub;
    sub = newArray[0];
    newArray[0] = newArray[1];
    newArray[1] = sub;
    noTitleChange(newArray);

  }
  return (
    <div className="App">
        <div className = "black-nav">
          <div>개발 BLOG</div>
        </div>
        <button onClick ={changeTitle}>button</button>
        <div className="list">
          <h3> { noTitle[0] } <span onClick={ ()=>{likeScoreChange(likeScore + 1)}}>👍</span> { likeScore } </h3>
          <p>12월 19일 발행</p>
          <hr/>
        </div>
        <div className="list">
          <h3> { noTitle[1] }</h3>
          <p>12월 19일 발행</p>
          <hr/>
        </div>
        <div className="list">
          <h3> { noTitle[2] }</h3>
          <p>12월 19일 발행</p>
          <hr/>
        </div>
        <div className="list">
          <h3> { noTitle[3] }</h3>
          <p>12월 19일 발행</p>
          <hr/>
        </div>

        
        <Modal></Modal>
        
    </div>
  );
}

function Modal(){
  return(
    <div>
      <div className = "modal">
        <h2>Title</h2>
        <p>Date</p>
        <p>Content</p>
      </div>
    </div>
  )
}

export default App;
