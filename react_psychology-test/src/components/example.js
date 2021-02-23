import React,{useEffect, useState} from "react";

function Example(props) {
    const [exampleChecker,setExampleChecker] = useState(false);
    const [activeBtn, setActiveBtn] = useState(true);

    function handleChecker(event) {
        if(event.target.value === "1" || event.target.value === "2")
            setActiveBtn(false);
    }
    function handleClick() {
        props.changePage();
    }

    useEffect(() => {

    },[exampleChecker]);

    if (props.isLoggined){
        return (
            <div className="example-container">
                <div className="example-title">
                    <h2>검사 예시</h2>
                    <div className="example-progress">
                        <h3>0%</h3>
                    </div>
                </div>

                <div className="progress-bar">

                </div>
                <h4>직업과 관련된 두개의 가치 중에서 자기에게 더 중요한 가치에 표시하세요.</h4>

                <div className="form-group">
                    <div>두 개 가치 중에 자신에게 더 중요한 가치를 선택하세요.</div>
                    <div>
                        <div className="form-check form-check-inline">
                            <label className="form-check-label"><input type="radio" className="form-check-input" name="check" value="1" onChange={handleChecker} />창의성</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <label className="form-check-label"><input type="radio" className="form-check-input" name="check" value="2" onChange={handleChecker} />안정성</label>
                        </div>
                    </div>
                    <div className="text-center">
                        <button type="button" className="btn btn-outline-primary" onClick={handleClick}>이전</button>
                        <button type="button" disabled={activeBtn} className="btn btn-outline-primary">검사 시작</button>
                    </div>

                </div>
            </div>
        );
    }
    else
        return null;
    
}

export default Example;