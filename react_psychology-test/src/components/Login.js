import React, {useState, useEffect} from "react";

function Login(props) {
    const [userName, setUserName] = useState("");
    const [userGender, setUserGender] = useState({
        male: false,
        female: false
    });
    const [activeBtn, setActiveBtn] = useState(true);

    function inputUserName(event) {
        const name = event.target.value;
        setUserName(name);
    }

    function checkGender(event) {
        const gender = event.target.value;
        if (gender === "male")
            setUserGender({ ...userGender, male: true, female: false }); // 객체 상태,바벨 spread operator
        else if (gender === "female")
            setUserGender({ ...userGender, male: false, female: true });
    }

    function handleBtn() {
        if (userName.length !== 0 && (userGender['male'] === true || userGender['female'] === true))
            setActiveBtn(false);
        else
            setActiveBtn(true);
    }

    function handleClick() {
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

    if (props.isLoggined) {
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

export default Login;