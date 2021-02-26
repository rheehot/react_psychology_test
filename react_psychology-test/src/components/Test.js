import React,{useState, useEffect} from "react";
import axios from "axios";
import $ from 'jquery';
import { withRouter } from "react-router-dom";

function Test(props) {

    const [data,setData] = useState({data: []});
    const [num,setNum] = useState(0);
    const [answer, setAnswer] = useState("");
    const [buttonText, setButtonText] = useState("다음");
    const [counter,setCounter] = useState(0);

    async function fetch(){
        const response = await axios.get("https://www.career.go.kr/inspct/openapi/test/questions?apikey=8ae87adbbfc34f50eb84444700264097&q=6");
        const data = response.data.RESULT;
        
        setData({data : data});
        console.log(data);
    }

    useEffect(() => {
        fetch();  
    },[])

    //const group = data.data.slice(4*num-4, 4*num);
    const group = data.data;

    function testListMaker(group) {
        //console.log("group",group);
        // const testList = group.map((d,index) => {
        //     return (
        //         <form key={index} className={d.qitemNo} onChange={(event) =>{
        //             const value = event.target.value;
        //             const name = event.target.name;
        //             const newAnswer = 'B' + name + '=' + value;
        //             setAnswer(answer+' '+ newAnswer);
        
        //             console.log(answer);
        //         }}>
        //             <p>{d.question}</p>
        //             <label><input type="radio" name={d.qitemNo} value={d.answerScore01} />{d.answer01}</label>
        //             <label><input type="radio" name={d.qitemNo} value={d.answerScore02} />{d.answer02}</label>
        //         </form>
        //     );
        // });
        
        // return testList;
        var testList = [];
      
        for(var i=0; i<group.length; i++){
            testList.push(
                <div key={i+1} className={"group"+parseInt(i/5)} onChange={(event) =>{
                    const value = event.target.value;
                    const name = event.target.name;
                    const newAnswer = 'B' + name + '=' + value;
                    setAnswer(answer + newAnswer + ' ');

                    console.log(answer);
                }}>
                    <p>{group[i].qitemNo} {group[i].question}</p>
                    <label><input type="radio" name={group[i].qitemNo} value={group[i].answerScore01} onChange={() => setCounter(counter + 1)}  />{group[i].answer01}</label>
                    <label><input type="radio" name={group[i].qitemNo} value={group[i].answerScore02} onChange={() => setCounter(counter + 1) } />{group[i].answer02}</label>
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
            answers : answer.trim() 
        }
        console.log(JSON.stringify(data));
        const url = "https://www.career.go.kr/inspct/openapi/test/report";
        
        const post_response = await axios.post(url, JSON.stringify(data), {
            headers: { "Content-Type": `application/json` }
        }).catch(error => {
            console.log(error);
        });
        
        const seq = post_response.data.RESULT.url.split('=')[1];
        //console.log(seq);
        console.log(post_response);
        props.history.push({
            pathname : "/Completed",
            state : { data : seq }
        });

    }

    return (
        <div className="test-container" style={props.isLoggined ? { display: "block" } : { display: "none" }}>
            <h1>검사 진행</h1>
            
            <form className="test-form">
                {testList}
            </form>
            
            <button onClick={() => {
                if (num === 0)
                    props.changePage();
                else{
                    setNum(num - 1);
                    prevTestList(num);
                    console.log(num);
                }
            }}>이전</button>
            <button disabled={counter<5 ? true : false} className="testNextBtn" onClick={(event) => {
                if (event.target.value === "제출")
                    handleSubmit();
                setCounter(0);
                setNum(num + 1);
                if(num === 4) {
                    setButtonText("제출");
                    setCounter(2);
                }
                nextTestList(num);
                console.log(num);
            }} value={buttonText} >{buttonText}</button>
        </div>
    );
   
}

export default withRouter(Test);