import React,{useState, useEffect} from "react";
import axios from "axios";
import $ from 'jquery';
import { withRouter } from "react-router-dom";
import { Progress } from 'reactstrap';


function Test(props) {

    const [data,setData] = useState({data: []});
    const [num,setNum] = useState(0);
    const [buttonText, setButtonText] = useState("다음");
    const [counter,setCounter] = useState(0);
    const [progressCount,setProgressCount] = useState(0);

    async function fetch(){
        const response = await axios.get("https://www.career.go.kr/inspct/openapi/test/questions?apikey=8ae87adbbfc34f50eb84444700264097&q=6");
        const data = response.data.RESULT;
        
        setData({data : data});
        //console.log(data);
    }

    useEffect(() => {
        fetch();  
    },[])

    function countChecked() {
        var count = 0;
        $('.test-radio').each(function(){
            if($(this).is(':checked')){
                count += 1;
            }
        });
        return count;
    }

    function pageCountChecked(num) {
        var count = 0;
        $(`.group${num}`).each(function(){
            for (var i = 0; i < this.querySelectorAll('.test-radio').length; i++){
                if (this.querySelectorAll('.test-radio')[i].checked)
                    count += 1;           
            }
        });
        if(num === 5 && count === 3)    // 마지막 페이지 제어
            count = 5;
        return count;
    }

    const group = data.data;
    function testListMaker(group) {
        var testList = [];
        
        for(var i=0; i<group.length; i++){
            testList.push(
                <div key={i+1} className={"group"+parseInt(i/5)} >
                    <p>{group[i].qitemNo} {group[i].question}</p>
                    <label><input type="radio" className="test-radio" name={group[i].qitemNo} value={group[i].answerScore01} onChange={(event) => {
                        setCounter(counter + 1);
                        const cur_count = countChecked();
                        setProgressCount(cur_count);
                    }}  />{group[i].answer01}</label>
                    <label><input type="radio" className="test-radio" name={group[i].qitemNo} value={group[i].answerScore02} onChange={(event) => {
                        setCounter(counter + 1);
                        const cur_count = countChecked();
                        setProgressCount(cur_count);
                    }} />{group[i].answer02}</label>
                </div>
            );
        }
        return testList;

    }
    const testList = testListMaker(group)
    
    function nextTestList(num) {
        $(`.group${num+1}`).show();
        $(`.group${num}`).hide();
    }
    function prevTestList(num) {
        $(`.group${num-1}`).show();
        $(`.group${num}`).hide();
    }

    function handleCounter() {
        return false;
    }

    async function handleSubmit(){
        //console.log("handleSubmit 호출");
        //console.log("answer : ",answer);
        const userName = document.querySelector(".form-name").value;
        let gender = null;
        if (document.querySelector(".radio-male").checked)
            gender = document.querySelector(".radio-male").value;
        else if (document.querySelector(".radio-female").checked)
            gender = document.querySelector(".radio-female").value;

        var answer = $(".test-form").serialize().replace(/&/gi,' B');
        answer = "B" + answer;
        console.log("answer ",answer);


        let data = {
            apikey: "8ae87adbbfc34f50eb84444700264097",
            qestrnSeq : "6",
            trgetSe: "100208",
            name : userName,
            gender: gender,
            school : "",
            grade : "",
            email : "",
            startDtm : String(new Date().getTime()),
            answers : answer
        }
        //console.log(JSON.stringify(data));
        const url = "https://www.career.go.kr/inspct/openapi/test/report";
        
        const post_response = await axios.post(url, JSON.stringify(data), {
            headers: { "Content-Type": `application/json` }
        }).catch(error => {
            console.log(error);
        });
        
        const seq = post_response.data.RESULT.url.split('=')[1];
        //console.log(seq);
        //console.log(post_response);
        props.history.push({
            pathname : "/Completed",
            state : { data : seq }
        });

    }

    return (
        <div className="test-container" style={props.isLoggined ? { display: "block" } : { display: "none" }}>
            <h1>검사 진행</h1>
            
            <br />   
            <Progress style={{width:'90%', display:'inline-flex'}} animated value={progressCount} max="28"></Progress> {Math.round(progressCount / data.data.length * 100)}%
            <br />

            <form className="test-form">
                {testList}
            </form>
            
            <button onClick={() => {
                if (num === 0)
                    props.changePage();
                else{
                    setCounter(5);
                    if(num === 5)
                        setButtonText("다음");
                    setNum(num - 1);
                    prevTestList(num);
                    //console.log(num);
                }
            }} className="btn btn-outline-primary" name="prev-btn">이전</button>
            <button disabled={pageCountChecked(num) < 5 ? true : false} className="btn btn-outline-primary" name="next-btn" onClick={(event) => {
                if (event.target.value === "제출")
                    handleSubmit();
                
                
                setNum(num + 1);
                const cur_count = pageCountChecked(num+1);
                setCounter(cur_count);
                if(num === 4) {
                    setButtonText("제출");
                    setCounter(2);
                }
                nextTestList(num);
                //console.log(num);
            }} value={buttonText} >{buttonText}</button>
        </div>
    );
   
}

export default withRouter(Test);