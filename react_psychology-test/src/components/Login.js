import React, {useState, useEffect} from "react";
import { TextField } from "@material-ui/core"
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    item : {
        textAlign : 'center',
    }
    
}));


function Login(props) {

    const classes = useStyles();

    const [userName, setUserName] = useState("");
    const [userGender, setUserGender] = useState("");
    const [activeBtn, setActiveBtn] = useState(true);
    const [value,setValue] = useState("");

    function inputUserName(event) {
        const name = event.target.value;
        setUserName(name);
    }

    function checkGender(event) {
        const gender = event.target.value;
        setUserGender(gender);
        setValue(gender);
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
            <Grid container spacing={3}>
                <Grid item xs={12} className={classes.item}>
                    <h2 id="login-title">직업가치관검사</h2>
                </Grid>

                <Grid item xs={12} className={classes.item}>
                    <TextField
                        id="standard-textarea"
                        label="성함(Name)"
                        placeholder="성함을 입력해주세요."
                        multiline
                        onChange={inputUserName}
                    />
                </Grid>

                

                <Grid item xs={12} className={classes.item}>
                    <br />
                    <FormControl component="fieldset">
                        <FormLabel id="login-gender"component="legend">성별</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={checkGender}>
                            <FormControlLabel id="login-radio" value="100324" control={<Radio id="female"/>} label="여성" />
                            <FormControlLabel id="login-radio" value="100323" control={<Radio id="male" />} label="남성" />
                        </RadioGroup>
                    </FormControl>
                </Grid>

                <Grid item xs={12}>
                    <div className="text-center">
                        <button disabled={activeBtn} className="btn btn-outline-primary btn-lg" onClick={handleClick} >검사 시작</button>
                    </div>
                </Grid>
            </Grid>
               
        
        </div>
    );
}

export default Login;