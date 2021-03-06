import React, {useState,useEffect} from "react";
import axios from "axios";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Pie,Doughnut,Radar,Bar } from "react-chartjs-2";
import { Button } from 'reactstrap';
import $ from "jquery";

import FadeIn from 'react-fade-in';
import Tooltip from '@material-ui/core/Tooltip';

import "../Result.css";
import iconGitgub from "./icons/icon_github.png";
import iconKakao from "./icons/icon_kakao.png";

function JobTable(props) {

    const [educationInfo, setEducationInfo] = useState([]);
    const [professionInfo, setProfessionInfo] = useState([]);
    
    function fetch() {
        console.log("넘어온 props.No :", props.No[0], props.No[1]);
     
        axios.get(`https://inspct.career.go.kr/inspct/api/psycho/value/jobs?no1=${props.No[0]}&no2=${props.No[1]}`)
        .then(response1 => {
            console.log("API1 :", response1.data);
            setEducationInfo(response1.data);
        }).then(() => {
            console.log("SET1 :", educationInfo);
        }).catch((error) => {
            console.log("학력별 API 작업 오류");
            console.log(error);
        });
        axios.get(`https://inspct.career.go.kr/inspct/api/psycho/value/majors?no1=${props.No[0]}&no2=${props.No[1]}`)
        .then(response2 => {
            console.log("API2 :", response2.data);
            setProfessionInfo(response2.data);
        }).then(() => {
            console.log("SET2 :", professionInfo);
        }).catch((error) => {
            console.log("전공별별 API 작업 오류");
            console.log(error);
        });
    }
    

    useEffect(() => {
        if(professionInfo.length === 0 && educationInfo.length === 0)
            fetch();
    }, [props.No,professionInfo,educationInfo]);
    
    function isTrEmpty(arr,n){
        for(var i=0; i<arr.length; i++){
            if(arr[i][2] === n)
                return true;
        }
        return false;   
    }
    return(
        <div className="job-table" >
            <h3 className="job-table-title">가치관과 관련이 높은 직업</h3>
            <div className="job-table-container">
                <h4 className="job-table-h">종사자 평균 학력별</h4>
            </div>
            <table className="table" >
                <thead>
                    <tr>
                        <th scope="col" width="100">분야</th>
                        <th scope="col" >직업</th>
                    </tr>
                    <tr style={{ display: isTrEmpty(educationInfo,1) ? "" : 'none' }} >
                        <td>중졸</td>
                        <td>
                            {
                                isTrEmpty(educationInfo,1) ?
                                educationInfo.filter((datas) => datas[2] === 1).map((data,index) => {
                                    const url = `https://www.career.go.kr/cnet/front/base/job/jobView.do?SEQ=${data[0]}`;
                                    return(
                                        <a href={url} key={index} className="result-aTag" value={data[2]} target="_blank" rel="noreferrer">{data[1]}</a>
                                    )
                                })
                                : "결과 없음"
                            }
                        </td>
                    </tr>
                    <tr style={{ display: isTrEmpty(educationInfo, 2) ? "" : 'none' }}>
                        <td>고졸</td>
                        <td>
                            {
                                isTrEmpty(educationInfo, 2) ?
                                educationInfo.filter((datas) => datas[2] === 2).map((data, index) => {
                                    const url = `https://www.career.go.kr/cnet/front/base/job/jobView.do?SEQ=${data[0]}`;
                                    return (
                                        <a href={url} key={index} className="result-aTag" value={data[2]} target="_blank" rel="noreferrer">{data[1]}</a>
                                    )
                                })
                                : "결과 없음"
                            }
                        </td>
                    </tr>
                    <tr style={{ display: isTrEmpty(educationInfo, 3) ? "" : 'none' }}>
                        <td>전문대졸</td>
                        <td>
                            {
                                isTrEmpty(educationInfo, 3) ?
                                educationInfo.filter((datas) => datas[2] === 3).map((data, index) => {
                                    const url = `https://www.career.go.kr/cnet/front/base/job/jobView.do?SEQ=${data[0]}`;
                                    return (
                                        <a href={url} key={index} className="result-aTag" value={data[2]} target="_blank" rel="noreferrer">{data[1]}</a>
                                    )
                                })
                                : "결과 없음"
                            }
                        </td>
                    </tr>
                    <tr style={{ display: isTrEmpty(educationInfo, 4) ? "" : 'none' }}>
                        <td>대졸</td>
                        <td>
                            {
                                isTrEmpty(educationInfo, 4) ?
                                educationInfo.filter((datas) => datas[2] === 4).map((data, index) => {
                                    const url = `https://www.career.go.kr/cnet/front/base/job/jobView.do?SEQ=${data[0]}`;
                                    return (
                                        <a href={url} key={index} className="result-aTag" value={data[2]} target="_blank" rel="noreferrer">{data[1]}</a>
                                    )
                                })
                                : "결과 없음"
                            }
                        </td>
                    </tr>
                    <tr style={{ display: isTrEmpty(educationInfo, 5) ? "" : 'none' }}>
                        <td>대학원졸</td>
                        <td>
                            {
                                isTrEmpty(educationInfo, 5) ?
                                educationInfo.filter((datas) => datas[2] === 5).map((data, index) => {
                                    const url = `https://www.career.go.kr/cnet/front/base/job/jobView.do?SEQ=${data[0]}`;
                                    return (
                                        <a href={url} key={index} className="result-aTag" value={data[2]} target="_blank" rel="noreferrer">{data[1]}</a>
                                    )
                                })
                                : "결과 없음"
                            }
                        </td>
                    </tr>
                </thead>
            </table>

            <div className="job-table-container">
                <h4 className="job-table-h">종사자 평균 전공별</h4>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col" width="100">분야</th>
                        <th scope="col">직업</th>
                    </tr>
                    <tr style={{ display: isTrEmpty(professionInfo, 1) ? "" : 'none' }}>
                        <td>인문</td>
                        <td>
                            {
                                professionInfo.length !== 0 ?
                                professionInfo.filter((datas) => datas[2] === 1).map((data, index) => {
                                    const url = `https://www.career.go.kr/cnet/front/base/job/jobView.do?SEQ=${data[0]}`;
                                    return (
                                        <a href={url} key={index} className="result-aTag" value={data[2]} target="_blank" rel="noreferrer">{data[1]}</a>
                                    )
                                })
                                : "결과 없음"
                            }
                        </td>
                    </tr>
                    <tr style={{ display: isTrEmpty(professionInfo, 2) ? "" : 'none' }}>
                        <td>사회</td>
                        <td>
                            {
                                professionInfo.length !== 0 ?
                                professionInfo.filter((datas) => datas[2] === 2).map((data, index) => {
                                    const url = `https://www.career.go.kr/cnet/front/base/job/jobView.do?SEQ=${data[0]}`;
                                    return (
                                        <a href={url} key={index} className="result-aTag" value={data[2]} target="_blank" rel="noreferrer">{data[1]}</a>
                                    )
                                })
                                : "결과 없음"
                            }
                        </td>
                    </tr>
                    <tr style={{ display: isTrEmpty(professionInfo, 3) ? "" : 'none' }}>
                        <td>교육</td>
                        <td>
                            {
                                professionInfo.length !== 0 ?
                                professionInfo.filter((datas) => datas[2] === 3).map((data, index) => {
                                    const url = `https://www.career.go.kr/cnet/front/base/job/jobView.do?SEQ=${data[0]}`;
                                    return (
                                        <a href={url} key={index} className="result-aTag" value={data[2]} target="_blank" rel="noreferrer">{data[1]}</a>
                                    )
                                })
                                : "결과 없음"
                            }
                        </td>
                    </tr>
                    <tr style={{ display: isTrEmpty(professionInfo, 4) ? "" : 'none' }}>
                        <td>공학</td>
                        <td>
                            {
                                professionInfo.length !== 0 ?
                                professionInfo.filter((datas) => datas[2] === 4).map((data, index) => {
                                    const url = `https://www.career.go.kr/cnet/front/base/job/jobView.do?SEQ=${data[0]}`;
                                    return (
                                        <a href={url} key={index} className="result-aTag" value={data[2]} target="_blank" rel="noreferrer">{data[1]}</a>
                                    )
                                })
                                : "결과 없음"
                            }
                        </td>
                    </tr>
                    <tr style={{ display: isTrEmpty(professionInfo, 5) ? "" : 'none' }}>
                        <td>자연</td>
                        <td>
                            {
                                professionInfo.length !== 0 ?
                                professionInfo.filter((datas) => datas[2] === 5).map((data, index) => {
                                    const url = `https://www.career.go.kr/cnet/front/base/job/jobView.do?SEQ=${data[0]}`;
                                    return (
                                        <a href={url} key={index} className="result-aTag" value={data[2]} target="_blank" rel="noreferrer">{data[1]}</a>
                                    )
                                })
                                : "결과 없음"
                            }
                        </td>
                    </tr>
                    <tr style={{ display: isTrEmpty(professionInfo, 6) ? "" : 'none' }}>
                        <td>의학</td>
                        <td>
                            {
                                professionInfo.length !== 0 ?
                                professionInfo.filter((datas) => datas[2] === 6).map((data, index) => {
                                    const url = `https://www.career.go.kr/cnet/front/base/job/jobView.do?SEQ=${data[0]}`;
                                    return (
                                        <a href={url} key={index} className="result-aTag" value={data[2]} target="_blank" rel="noreferrer">{data[1]}</a>
                                    )
                                })
                                : "결과 없음"
                            }
                        </td>
                    </tr>
                    <tr style={{ display: isTrEmpty(professionInfo, 7) ? "" : 'none' }}>
                        <td>예체능</td>
                        <td>
                            {
                                professionInfo.length !== 0 ?
                                professionInfo.filter((datas) => datas[2] === 7).map((data, index) => {
                                    const url = `https://www.career.go.kr/cnet/front/base/job/jobView.do?SEQ=${data[0]}`;
                                    return (
                                        <a href={url} key={index} className="result-aTag" value={data[2]} target="_blank" rel="noreferrer">{data[1]}</a>
                                    )
                                })
                                : "결과 없음"
                            }
                        </td>
                    </tr>
                </thead>
            </table>
        </div>
    );
}


function Result({location}) {
    
    const [userName, setUserName] = useState("");
    const [userGender,setUserGender] = useState("");
    const [testDay, setTestDay] = useState("");
    const [score,setScore] = useState({score:[]});
    const [scoreStr, setScoreStr] = useState("");
    const [resNo, setResNo] = useState({NoArr:[]});
    //const location = useLocation();
    //const seq = location.state.seq;
    var seq = "";
    if(location.search)
    {
        seq = location.search.split("=")[1];
        localStorage.setItem("seq",seq);
        console.log("location seq",location.search.split("=")[1]);
    }
    else
        seq = localStorage.getItem("seq");          
        
        

    const url = `https://inspct.career.go.kr/inspct/api/psycho/report?seq=${seq}`;
    
    const valueList = ["", "능력발휘", "자율성", "보수", "안정성", "사회적 인정", "사회봉사", "자기계발", "창의성"];


    function fetch(){
        try{
            axios.get(url).then(response => {
                setUserName(response.data.user.name);
                if (response.data.inspct.sexdstn === 100323)
                    setUserGender("남자");
                else
                    setUserGender("여자");
                setTestDay(response.data.inspct.beginDtm.slice(0, 10));
                
                console.log("이름 :", userName);
                console.log("성별 :", userGender);
                console.log("날짜 :", testDay);

                console.log("API score str :", response.data.result.wonScore);
                setScoreStr(response.data.result.wonScore);
                console.log("state score str", scoreStr);

                return response;
            })
        }catch(error){
            console.log(error);
        }
    }
    useEffect(() => {
        fetch();  
    }, [])
    
    function findResNo(score_arr) {
        console.log("인자 arr :", score_arr);
        console.log("resNo :",resNo.NoArr);
        var dup_arr = score_arr.slice();

        var first = Math.max.apply(null, dup_arr);
        var firstIndex = dup_arr.indexOf(first);
        dup_arr[firstIndex] = 0;

        var second = Math.max.apply(null, dup_arr);
        var secondIndex = dup_arr.indexOf(second);

        setResNo({ NoArr: [firstIndex + 1, secondIndex + 1] });
    }

    function NoArrMaker(){
        var data_list = [];
        for (var i = 0; i < 8; i++)
            data_list.push(Number(scoreStr[2 + (4 * i)]));
        
        console.log("data_list score :", data_list);
        setScore({ score: data_list });
        //.log("State score", score.score);
        
        findResNo(data_list);
        //console.log("resNO :", resNo.NoArr);
    }
    useEffect(() => {
        if(resNo.NoArr[0] === 0 || resNo.NoArr.length === 0)
            NoArrMaker();
    }, [score,resNo])
    
    const data = {
        labels: ["능력발휘", "자율성", "보수", "안정성", "사회적 인정", "사회봉사", "자기계발", "창의성"],
        datasets: [{
            label: "직업가치관결과",
            backgroundColor: '#CBE3EE',
            borderColor: '#000101',
            borderWidth : 1,
            hoverBackgroundColor: '#214753',
            hoverBorderColor: '#CBE3EE',
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

    const callKakaoBtn = () => {
        if (window.Kakao.isInitialized() === false) {
            window.Kakao.init('592531f1e88506d1f0e77d9f5cd336a8');
            console.log(window.Kakao.isInitialized());
        }
        window.Kakao.Link.createDefaultButton({
            container: '#kakao-link-btn',
            objectType: 'feed',
            content: {
                title: 'REACT 직업심리검사 서비스',
                description: '#React로 만든 #직업가치관검사 #나에게맞는 직업추천 #너는 누구냐 ?',
                imageUrl: 'https://item.kakaocdn.net/do/d84248170c2c52303db27306a00fb8614022de826f725e10df604bf1b9725cfd',
                link: {
                    // mobileWebUrl: `http://elice-kdt-ai-track-vm-racer-33.koreacentral.cloudapp.azure.com/Result?seq=${seq}`,
                    // webUrl: `http://elice-kdt-ai-track-vm-racer-33.koreacentral.cloudapp.azure.com/Result?seq=${seq}`
                    mobileWebUrl: 'http://localhost:3000/Result',
                    webUrl: `http://localhost:3000/Result?seq=${seq}`
                }
            },
            social: {
                likeCount: 286,
                commentCount: 13,
                sharedCount: 59
            },
            buttons: [
                {
                    title: '검사결과 보기',
                    link: {
                        // mobileWebUrl: `http://elice-kdt-ai-track-vm-racer-33.koreacentral.cloudapp.azure.com/Result?seq=${seq}`,
                        // webUrl: `http://elice-kdt-ai-track-vm-racer-33.koreacentral.cloudapp.azure.com/Result?seq=${seq}`
                        mobileWebUrl: 'http://localhost:3000/Result',
                        webUrl: `http://localhost:3000/Result?seq=${seq}`

                    }
                },
                {
                    title: '검사 해보기',
                    link: {
                        //mobileWebUrl: 'http://elice-kdt-ai-track-vm-racer-33.koreacentral.cloudapp.azure.com',
                        //webUrl: 'http://elice-kdt-ai-track-vm-racer-33.koreacentral.cloudapp.azure.com'
                        mobileWebUrl: 'http://localhost:3000',
                        webUrl: 'http://localhost:3000'

                    }
                }
            ]
        });
    }

    function onClickKakao() {
        //window.open('http://elice-kdt-ai-track-vm-racer-33.koreacentral.cloudapp.azure.com/OtherTest');
        window.open('http://localhost:3000/OtherTest');
    }

    useEffect(() => {
        callKakaoBtn()
    }, [])
    
    
    
    return(
        <FadeIn>
            <div className="result-title-box" >
                <h2 className="result-title">직업가치관검사 결과표</h2>
            </div>
            <div className="result-description-box">
                직업가치관이란 직업을 선택할 때 영향을 끼치는 자신만의 믿음과 신념입니다. 따라서 여러분의 직업생활과 관련하여 포기하지 않는 무게중심의 역할을 한다고 볼 수 있습니다. 직업가치관검사는 여러분이 직업을 선택할 때 상대적으로 어떠한 가치를 중요하게 생각하는지를 알려줍니다. 또한 본인이 가장 중요하게 생각하는 가치를 충족시켜줄 수 있는 직업에 대해 생각해 볼 기회를 제공합니다.
            </div>

            <table className="table" style={{textAlign:'center'}}>
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

            <div className="my-value">
                <h2 className="value-comment-title">직업가치관 결과</h2>
                <p className="value-comment">
                    직업생활과 관련하여 {userName}님은 {valueList[resNo.NoArr[0]]}(와)과 {valueList[resNo.NoArr[1]]}(을)를 가장 중요하게 생각합니다. 
                    {/* <br />
                    반면에 자기계발, 사회봉사은 상대적으로 덜 중요하게 생각합니다. */}
                </p>
            </div>

            <Bar
                data={data}
                width={100}
                height={50}
                options={option}
            />
            <br />
            <br />
            
            <JobTable No={resNo.NoArr} />

            <br />
            <br />
            
            <div className="text-center">
                <Link to="/Home">
                    <button className="btn btn-outline-primary">다시 검사하기</button>
                </Link>
                
                <Link to={{
                    pathname: "/OtherTest",
                    state: { name: userName }
                }} >
                    <button type="button" className="btn btn-outline-primary" onClick={localStorage.setItem("name",userName)}>다른 검사하기</button>
                </Link> 
              
            </div>
            
            <br />
            <br />

            <div className="text-center">
                <Tooltip title="Share" placement="left">
                    <button style={{ backgroundColor: "white", border: "0px" }} id="kakao-link-btn" onClick={onClickKakao}>
                        <img src={iconKakao} width="50px" style={{ backgroundColor: 'white' }} alt="결과 공유하기" />
                    </button>
                </Tooltip>
                
                <Tooltip title="Code" placement="right">
                    <a href="https://github.com/youngminss/react_psychology_test" target="_blank">
                        <img src={iconGitgub} width="50px" style={{ backgroundColor: 'white' }} alt="소스코드" />
                    </a>
                </Tooltip>
            </div>
            
                
            
        </FadeIn>
    );
}

export default Result;