import React from 'react';
// import './App.css';

function UserItem(props) {
  const { name, imageUrl, href } = props;
  return (
    <li className="user-item">
      <span>{name}</span>
      <img className="user-image" src={imageUrl} alt={name}/>
      <a style={{color: "white"}} href={href}>google map</a>
    </li>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul className="users-list">
          <UserItem name={"Paris"} imageUrl={"https://is3-ssl.mzstatic.com/image/thumb/Purple1/v4/c8/2d/ef/c82def60-ad06-fe32-8361-4b33d50f8875/source/256x256bb.jpg"} href={"https://www.google.com/maps/place/%D7%A4%D7%A8%D7%99%D7%96,+%D7%A6%D7%A8%D7%A4%D7%AA%E2%80%AD/@48.8587741,2.4871427,11z/data=!3m1!4b1!4m5!3m4!1s0x47e66e1f06e2b70f:0x40b82c3688c9460!8m2!3d48.856614!4d2.3522219?hl=iw"}/>
          <UserItem name={"London"} imageUrl={"https://is5-ssl.mzstatic.com/image/thumb/Purple62/v4/8e/bb/c8/8ebbc8ee-c775-9e5e-d01b-1fd124aa1258/source/256x256bb.jpg"} href={"https://www.google.com/maps?q=london&source=lmns&bih=655&biw=1505&rlz=1C1CHBF_enIL858IL858&hl=iw&ved=2ahUKEwi9hZ7ih4bpAhUS8RoKHbiPBqsQ_AUoAnoECAEQAg"}/>
          <UserItem name={"Madrid"} imageUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcREDnUkGJsOrsjr2FHOVMrocWCaB5YrKV0nDWWoB6yF5uc9xcku&usqp=CAU"} href={"https://www.google.com/maps?q=madrid&source=lmns&bih=655&biw=1505&rlz=1C1CHBF_enIL858IL858&hl=iw&ved=2ahUKEwiuwe2SiIbpAhUEKhoKHY3IAo8Q_AUoAnoECAEQAg"}/>
          <UserItem name={"Bangkok"} imageUrl={"https://pbs.twimg.com/profile_images/734869350562304000/y0cJwqg7_400x400.jpg"} href={"https://www.google.com/maps/place/%D7%91%D7%A0%D7%92%D7%A7%D7%95%D7%A7,+%D7%AA%D7%90%D7%99%D7%9C%D7%A0%D7%93%E2%80%AD/@13.7244416,100.9133059,10z/data=!3m1!4b1!4m5!3m4!1s0x311d6032280d61f3:0x10100b25de24820!8m2!3d13.7563309!4d100.5017651?hl=iw"}/>
        </ul>
      </header>
    </div>
  );
}

export default App;