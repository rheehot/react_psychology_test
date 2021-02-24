import React, {useState,useEffect} from "react";
import axios from "axios";
import Example from "./example";
import "../Example.css";


function Login(props) {
  const [userName,setUserName] = useState("");
  const [userGender,setUserGender] = useState({
    male : false,
    female : false
  });
  const [activeBtn, setActiveBtn] = useState(true);

  function inputUserName(event) {
    const name = event.target.value;
    setUserName(name);
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

  function handleClick(){
    let checkNum = /[0-9]/;
    let checkEng = /[a-zA-Z]/;
    let checkSpc = /[~!@#$%^&*()_+|<>?:{}]/;
    let checkKor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    const message = "이름이 올바르지 않습니다.\n(한글 이름을 입력해주세요 !)\n(Please input English name !)"

    // 성별은 체크를 하지 않으면, 버튼 활성화가 애초에 안될 것이고, radio형태라, 잘못된 값은 없을것이다. 고로 이름만 체크
    if(checkNum.test(userName) || checkSpc.test(userName) || (checkEng.test(userName) && checkKor.test(userName)))
      alert(message);
    else
      props.changePage();
  }


  useEffect(() => {
    handleBtn();
  }, [userName,userGender]);

  if(props.isLoggined){
    return (
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
                <button disabled={activeBtn} className="btn btn-outline-primary" onClick={handleClick} >검사 시작</button>
              </div>
            </div>
          </div>

        </form>
      </div>
    );
  }
  else
    return null;
}

function Inspection(){
  
  const [questionBox,setQuestionBox] = useState("0");
  const [questionIdx, setQestionIdx] = useState(0);

  const fetchApiData = async () => {
    try {
      const apikey = "8ae87adbbfc34f50eb84444700264097";
      const url = `https://www.career.go.kr/inspct/openapi/test/questions?apikey=${apikey}&q=6`;
      const getApiData = await axios.get(url);
      const data = getApiData.data;

      //console.log(data.RESULT);
      setQuestionBox(data.RESULT);
      //console.log(questionBox);
    } catch (e) {
      console.log(e);
      console.log(e.response.status);
      console.log(e.response.headers);
      //console.log(e.response.data);
    }
  }

  useEffect(() => {
    fetchApiData();
    console.log(questionBox);
  }, [])

 
  return(
    <>
      {/* <form>
        <div className="form-group">
          <div className="form-group-box">
            <div>{questionBox[0].question}</div>
            <div>
              <div className="form-check form-check-inline">
                <label className="form-check-label"><input type="radio" name={questionBox[0].answer01} value={questionBox[0].answerScore01} />{questionBox[0].answer01}</label>
              </div>
              <div className="form-check form-check-inline">
                <label className="form-check-label"><input type="radio" name={questionBox[0].answer02} value={questionBox[0].answerScore02} />{questionBox[0].answer02}</label>
              </div>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="form-group-box">
            <div>{questionBox[1].question}</div>
            <div>
              <div className="form-check form-check-inline">
                <label className="form-check-label"><input type="radio" name={questionBox[1].answer01} value={questionBox[1].answerScore01} />{questionBox[1].answer01}</label>
              </div>
              <div className="form-check form-check-inline">
                <label className="form-check-label"><input type="radio" name={questionBox[1].answer02} value={questionBox[1].answerScore02} />{questionBox[1].answer02}</label>
              </div>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="form-group-box">
            <div>{questionBox[2].question}</div>
            <div>
              <div className="form-check form-check-inline">
                <label className="form-check-label"><input type="radio" name={questionBox[2].answer01} value={questionBox[2].answerScore01} />{questionBox[2].answer01}</label>
              </div>
              <div className="form-check form-check-inline">
                <label className="form-check-label"><input type="radio" name={questionBox[2].answer02} value={questionBox[2].answerScore02} />{questionBox[2].answer02}</label>
              </div>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="form-group-box">
            <div>{questionBox[3].question}</div>
            <div>
              <div className="form-check form-check-inline">
                <label className="form-check-label"><input type="radio" name={questionBox[3].answer01} value={questionBox[3].answerScore01} />{questionBox[3].answer01}</label>
              </div>
              <div className="form-check form-check-inline">
                <label className="form-check-label"><input type="radio" name={questionBox[3].answer02} value={questionBox[3].answerScore02} />{questionBox[3].answer02}</label>
              </div>
            </div>
          </div>
        </div>
      </form> */}
    </>
  );
}

function App() { 
  const [loginToken,setLoginToken] = useState(true);
  const [exampleToken,setExampleToken] = useState(false);
  const [progress,setProgress] = useState("0");

  function nextHandlePage() {
    setLoginToken(false);
    setExampleToken(true);
  }
  function prevHandlePage() {
    setLoginToken(true);
    setExampleToken(false);
  } 

  useEffect(() =>{
    //console.log(loginToken,exampleToken);
  },[loginToken,exampleToken]);

  return (
    <div className="App">
      <Login isLoggined={loginToken} changePage={nextHandlePage} />
      <Example isLoggined={exampleToken} curProgress={progress} changePage={prevHandlePage} />
      <Inspection />
    </div>
  );
}

export default App;
