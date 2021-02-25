import React, {useState,useEffect} from "react";
import axios from "axios";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Bar } from "react-chartjs-2";

function Result() {
    
    const [userName, setUserName] = useState("");
    const [userGender,setUserGender] = useState("");
    const [testDay, setTestDay] = useState("");
    const [score,setScore] = useState([]);
    let score_str = null;

    const location = useLocation();
    const seq = location.state.seq;
    const url = `https://inspct.career.go.kr/inspct/api/psycho/report?seq=${seq}`;

    
    useEffect(() => {
        async function fetch() {
            try {
                const response = await axios.get(url);
                setUserName(response.data.user.name);
                if (response.data.inspct.sexdstn === 100323)
                    setUserGender("남자");
                else
                    setUserGender("여자");
                
                setTestDay(response.data.inspct.beginDtm.slice(0,10));
                
                score_str = response.data.result.wonScore;
                var data_list = [];
                for(var i=0; i<8; i++)
                    data_list.push(Number(score_str[2+(4*i)]));
                setScore(score => [...score, data_list]);
                 
                
                console.log(response);
                console.log("사용자 :",userName);
                console.log("성별 :", userGender);
                console.log("검사날짜 :", testDay);
                console.log("결과 :", score[0]);
            } catch (error) {
                console.log(error);
            }
        }
        fetch();
    },[]);
    
    const data = {
        labels: ["능력발휘", "자율성", "보수", "안정성", "사회적 인정", "사회봉사", "자기계발", "창의성"],
        datasets: [{
            label: "직업가치관결과",
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth : 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: score[0]
        }]
    };
    const option = {
        scales: {
            yAxes : [{
                ticks : {
                    min : 0,
                    max : 7,
                    stepSize: 1
                }
            }]
        },
        maintainAspectRatio : true
    }

    return(
        <>
            <div className="result-title-box">
                <h2 className="result-title">직업가치관검사 결과표</h2>
            </div>
            <div className="result-description-box">
                직업가치관이란 직업을 선택할 때 영향을 끼치는 자신만의 믿음과 신념입니다. 따라서 여러분의 직업생활과 관련하여 포기하지 않는 무게중심의 역할을 한다고 볼 수 있습니다. 직업가치관검사는 여러분이 직업을 선택할 때 상대적으로 어떠한 가치를 중요하게 생각하는지를 알려줍니다. 또한 본인이 가장 중요하게 생각하는 가치를 충족시켜줄 수 있는 직업에 대해 생각해 볼 기회를 제공합니다.
            </div>

            <table className="result-table">
                <thead>
                    <tr>
                        <th scope="col">이름</th>
                        <th scope="col">성별</th>
                        <th scope="col">검사일</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{userName}</td>
                        <td>{userGender}</td>
                        <td>{testDay}</td>
                    </tr>
                </tbody>
            </table>
            <br />
            <br />

            <Bar
                data={data}
                width={100}
                height={50}
                options={option}
            />
            <br />
            <br />
            
            <Link to="/"><button>다시 검사하기</button></Link>
        </>
    );
}

export default Result;