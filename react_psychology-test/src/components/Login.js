import React, {useState, useEffect} from "react";
import { Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';

function Login(props) {
    const [userName, setUserName] = useState("");
    const [userGender, setUserGender] = useState("");
    const [activeBtn, setActiveBtn] = useState(true);

    function inputUserName(event) {
        const name = event.target.value;
        setUserName(name);
    }

    function checkGender(event) {
        const gender = event.target.value;
        setUserGender(gender);
    }

    function handleBtn() {
        if (userName.length !== 0 && userGender !== "")
            setActiveBtn(false);
        else
            setActiveBtn(true);
    }

    function handleClick(e) {
        e.preventDefault();
        let checkNum = /[0-9]/;
        let checkEng = /[a-zA-Z]/;
        let checkSpc = /[~!@#$%^&*()_+|<>?:{}]/;
        let checkKor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
        const message = "이름이 올바르지 않습니다.\n(한글 이름을 입력해주세요 !)\n(Please input English name !)"

        // 성별은 체크를 하지 않으면, 버튼 활성화가 애초에 안될 것이고, radio형태라, 잘못된 값은 없을것이다. 고로 이름만 체크
        if (checkNum.test(userName) || checkSpc.test(userName) || (checkEng.test(userName) && checkKor.test(userName)))
            alert(message);
        else
            props.changePage();
    }

    useEffect(() => {
        handleBtn();
    }, [userName, userGender]);

    return (
        <div className="login-container" style={props.isLoggined ? {display:"block"} : {display:"none"}}>
            <form>
                <div className="login-form">
                    <h2 className="login-title">직업가치관검사</h2>

                    <div className="form-group">
                        <label className="form-label">
                            이름 <br />
                        </label>
                        <input name="name" type="text" className="form-name" onChange={inputUserName} />
                    </div>

                    <div className="form-group">
                        <label className="form-label">
                            성별 <br />
                        </label>
                        <div className="form-check form-check-inline">
                            <label className="form-check-label"><input name="gender" type="radio" className="radio-male" value="100323" onChange={checkGender} />남성</label>
                            <label className="form-check-label"><input name="gender" type="radio" className="radio-female" value="100324" onChange={checkGender} />여성</label>
                        </div>
                        
                    </div>

                    <div className="text-center">
                        <button disabled={activeBtn} className="btn btn-outline-primary" onClick={handleClick} >검사 시작</button>
                    </div>
                </div>

            </form>
        </div>
    );
}

export default Login;