import React, {useState,useEffect} from "react";
import axios from "axios";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Bar } from "react-chartjs-2";

function JobTable(props) {

    // const [educationInfo,setEducationInfo] = useState({
    //     1 : [],
    //     2 : [],
    //     3 : [],
    //     4 : [],
    //     5 : []
    // });
    // const [professionInfo,setProfessionInfo] = useState({
    //     1 : [],
    //     2 : [],
    //     3 : [],
    //     4 : [],
    //     5 : [],
    //     6 : [],
    //     7 : []
    // });
    const [educationInfo, setEducationInfo] = useState([]);
    const [professionInfo, setProfessionInfo] = useState([]);
    //const dataEduInfo = [];
    //const dataMajorInfo = [];
    useEffect(() => {
        async function fetch(){
            try{
                const response1 = await axios.get(`https://inspct.career.go.kr/inspct/api/psycho/value/jobs?no1=${props.No[0]}&no2=${props.No[1]}`);
                console.log("학력별데이터",response1);  // api 배열
                setEducationInfo(response1.data);
                console.log("학력별데이터", educationInfo); // 배열 state 잘 들어갔는지 확인

                const response2 = await axios.get(`https://inspct.career.go.kr/inspct/api/psycho/value/majors?no1=${props.No[0]}&no2=${props.No[1]}`);
                console.log("전공별데이터",response2);
                setProfessionInfo(response2.data);
                console.log("전공별데이터", professionInfo);

            } catch (e){
                console.log(e);
            }
        }
        fetch();
    },[]);
    
    return(
        <div className="job-table">
            <h3>가치관과 관련이 높은 직업</h3>
            <div className="job-table-title">
                <h4>종사자 평균 학력별</h4>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">분야</th>
                        <th scope="col">직업</th>
                    </tr>
                    <tr>
                        <td>중졸</td>
                        <td>
                        {
                            educationInfo.filter((datas) => datas[2] === 1).map((data,index) => {
                                const url = `https://www.career.go.kr/cnet/front/base/job/jobView.do?SEQ=${data[0]}`;
                                return(
                                    <a href={url} key={index}>{data[1]}</a>
                                )
                            })
                        }
                        </td>
                    </tr>
                    <tr>
                        <td>고졸</td>
                        <td>
                            {
                                educationInfo.filter((datas) => datas[2] === 2).map((data, index) => {
                                    const url = `https://www.career.go.kr/cnet/front/base/job/jobView.do?SEQ=${data[0]}`;
                                    return (
                                        <a href={url} key={index}>{data[1]}</a>
                                    )
                                })
                            }
                        </td>
                    </tr>
                    <tr>
                        <td>전문대졸</td>
                        <td>
                            {
                                educationInfo.filter((datas) => datas[2] === 3).map((data, index) => {
                                    const url = `https://www.career.go.kr/cnet/front/base/job/jobView.do?SEQ=${data[0]}`;
                                    return (
                                        <a href={url} key={index}>{data[1]}</a>
                                    )
                                })
                            }
                        </td>
                    </tr>
                    <tr>
                        <td>대졸</td>
                        <td>
                            {
                                educationInfo.filter((datas) => datas[2] === 4).map((data, index) => {
                                    const url = `https://www.career.go.kr/cnet/front/base/job/jobView.do?SEQ=${data[0]}`;
                                    return (
                                        <a href={url} key={index}>{data[1]}</a>
                                    )
                                })
                            }
                        </td>
                    </tr>
                    <tr>
                        <td>대학원졸</td>
                        <td>
                            {
                                educationInfo.filter((datas) => datas[2] === 5).map((data, index) => {
                                    const url = `https://www.career.go.kr/cnet/front/base/job/jobView.do?SEQ=${data[0]}`;
                                    return (
                                        <a href={url} key={index}>{data[1]}</a>
                                    )
                                })
                            }
                        </td>
                    </tr>
                </thead>
            </table>

            <div className="job-table-title">
                <h4>종사자 평균 전공별</h4>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">분야</th>
                        <th scope="col">직업</th>
                    </tr>
                    <tr>
                        <td>인문</td>
                        <td>인문직업1</td>
                    </tr>
                    <tr>
                        <td>사회</td>
                        <td>사회직업1</td>

                    </tr>
                    <tr>
                        <td>교육</td>
                        <td>교육직업1</td>
                    </tr>
                    <tr>
                        <td>공학</td>
                        <td>공학직업1</td>
                    </tr>
                    <tr>
                        <td>자연</td>
                        <td>자연직업1</td>
                    </tr>
                    <tr>
                        <td>의학</td>
                        <td>의학직업1</td>
                    </tr>
                    <tr>
                        <td>예체능</td>
                        <td>예체능직업1</td>
                    </tr>
                </thead>
            </table>
        </div>
    );
}


function Result() {
    
    const [userName, setUserName] = useState("");
    const [userGender,setUserGender] = useState("");
    const [testDay, setTestDay] = useState("");
    const [score,setScore] = useState({score:[]});
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
                
                setScore({score :data_list});
                //console.log("score",score.score);
                
                // console.log(response);
                // console.log("사용자 :",userName);
                // console.log("성별 :", userGender);
                // console.log("검사날짜 :", testDay);
                // console.log("결과 :", score[0]);
                
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
            data: score.score
        }]
    };
    const option = {
        scales: {
            yAxes : [{
                ticks : {
                    min : 0,
                    max : 10,
                    stepSize: 1
                }
            }]
        },
        maintainAspectRatio : true
    }

    function findResNo(score_arr) {
        var dup_arr = score_arr.slice();
    
        var first = Math.max.apply(null, dup_arr);
        var firstIndex = dup_arr.indexOf(first);
        dup_arr[firstIndex] = 0;

        var second = Math.max.apply(null, dup_arr);
        var secondIndex = dup_arr.indexOf(second);

        return [firstIndex+1,secondIndex+1];
    }
    const resNo = findResNo(score.score);
    
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
            
            <JobTable No={resNo} />

            <br />
            <br />
            <Link to="/"><button>다시 검사하기</button></Link>
        </>
    );
}

export default Result;