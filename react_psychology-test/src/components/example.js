import React,{useEffect, useState} from "react";

function Example(props) {
    const [exampleChecker, setExampleChecker] = useState(false);
    const [activeBtn, setActiveBtn] = useState(true);

    function handleChecker(event) {
        if (document.querySelector(".form-check-input").checked === false){
            console.log("checkd : false");
            setActiveBtn(false);
        }
        else if (document.querySelector(".form-check-input").checked === true){
            console.log("checkd : true");
            document.querySelector(".form-check-input").checked = false;
            setActiveBtn(true);
        } 
    }
    
    function handleMoveLogin() {
        setExampleChecker(false);
        props.moveLoginPage();
    }
    
    function handleMoveTest() {
        setExampleChecker(false);
        props.moveTestPage();
    }

    useEffect(() => {

    }, [exampleChecker]);

    return (
        <div className="example-container" style={props.isLoggined ? { display: "block" } : { display: "none" }}>
            <div className="example-progress-container">
                <div className="example-title">
                    <h2>검사 예시</h2>
                </div>
                <div className="example-progress">
                    <h3>0%</h3>
                </div>
            </div>
            <div className="progress">
                <div className="progress-bar">
                    <progress value="0" max="100"></progress>
                </div>
            </div>

            <h4>직업과 관련된 두개의 가치 중에서 자기에게 더 중요한 가치에 표시하세요.</h4>

            <div className="form-group">
                <div>두 개 가치 중에 자신에게 더 중요한 가치를 선택하세요.</div>
                <div>
                    <div className="form-check form-check-inline">
                        <label className="form-check-label"><input type="radio" className="form-check-input" name="check" value="1" onChange={() => setExampleChecker(true)} />창의성</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <label className="form-check-label"><input type="radio" className="form-check-input" name="check" value="2" onChange={() => setExampleChecker(true)} />안정성</label>
                    </div>
                </div>
                <div className="text-center">
                    <button type="button" className="btn btn-outline-primary" onClick={handleMoveLogin}>이전</button>
                    <button type="button" disabled={exampleChecker ? false : true} className="btn btn-outline-primary" onClick={handleMoveTest}>검사 시작</button>
                </div>

            </div>
        </div>
    );
    
}



export default Example;