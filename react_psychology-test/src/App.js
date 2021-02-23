import React, {useState,useEffect} from "react";
import Example from "./example";

function Login() {
  const [userName,setUserName] = useState("");
  const [userGender,setUserGender] = useState({
    male : false,
    female : false
  });
  const [activeBtn, setActiveBtn] = useState(true);

  function inputUserName(event) {
    const name = event.target.value;
    setUserName(name);
    console.log(event.target.value);
  }

  function checkGender(event) {
    const gender = event.target.value;
    if(gender ==="male")
      setUserGender({...userGender, male:true,female:false}); // 객체 상태,바벨 spread operator
    else if(gender === "female")
      setUserGender({ ...userGender, male:false,female: true });
  }

  function handleBtn() {
    if(userName.length !== 0 && (userGender['male'] === true || userGender['female'] === true))
      setActiveBtn(false);
    else
      setActiveBtn(true);
  }

  useEffect(() => {
    handleBtn();
  }, [userName,userGender]);

  return(
    <div className="container">
      <form>
        <div className="login-form">
            <h2>직업가치관검사</h2>

            <div className="form-group">
              <label>
                이름 <br />
                <input name="name" type="text" className="form-name" onChange={inputUserName} />
              </label>
            </div>

            <div className="form-group">
              <label>
                성별 <br />
              </label>
              <div className="form-check form-check-inline">
              <label className="form-check-label"><input name="gender" type="radio" className="form-check-input" value="male" onChange={checkGender} />남성</label>
                </div>
              <div className="form-check form-check-inline">
              <label className="form-check-label"><input name="gender" type="radio" className="form-check-input" value="female" onChange={checkGender} />여성</label>
              </div>

              <div className="text-center">
              <button type="button" disabled={activeBtn} className="btn btn-outline-primary">검사 시작</button>
              </div>
            </div>
        </div>
    
      </form>
    </div>
  );

}


function App() {
  
  const [LoginToken,setLoginToken] = useState(false);

  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
