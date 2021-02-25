import React, {useState,useEffect} from "react";
import axios from "axios";
import { useLocation } from "react-router";

function Result() {

    const location = useLocation();
    const seq = location.state.seq;
    const url = `https://inspct.career.go.kr/inspct/api/psycho/report?seq=${seq}`;

    
    useEffect(() => {
        async function fetch() {
            try {
                const response = await axios.get(url);
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        }
        fetch();
    },[]);
    
    return(
        <>
            <div className="result-title-box">
                <h2 className="result-title">직업가치관검사 결과표</h2>
            </div>
            <div className="result-description-box">
                직업가치관이란 직업을 선택할 때 영향을 끼치는 자신만의 믿음과 신념입니다. 따라서 여러분의 직업생활과 관련하여 포기하지 않는 무게중심의 역할을 한다고 볼 수 있습니다. 직업가치관검사는 여러분이 직업을 선택할 때 상대적으로 어떠한 가치를 중요하게 생각하는지를 알려줍니다. 또한 본인이 가장 중요하게 생각하는 가치를 충족시켜줄 수 있는 직업에 대해 생각해 볼 기회를 제공합니다.
            </div>

            {url}
        </>
    );
}

export default Result;