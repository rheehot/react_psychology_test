import React from "react";
import {useLocation} from "react-router";
import { Link } from "react-router-dom";
import { Button } from 'reactstrap';

import FadeIn from 'react-fade-in';
import 'bootstrap/dist/css/bootstrap.min.css';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    item: {
        textAlign: "center"
    },
    container : {
        paddingTop : "140px",
    }
}));


function Completed() {

    //const location = useLocation();
    //const data = location.state.data;
    const data = localStorage.getItem("seq");

    const classes = useStyles();

    return(
        <FadeIn className={classes.container}>
            <Grid container spacing={3}>
                <Grid item xs={12} className={classes.item}>
                    <Typography variant="h4" gutterBottom>
                        🙏 검사가 완료되었습니다 🙏
                     </Typography>
                </Grid>

                <Grid item xs={12} className={classes.item}>
                    <Typography variant="p" gutterBottom>
                        검사결과는 여러분이 직업을 선택할 때 상대적으로 어떠한 가치를 중요하게 생각하는지를 알려주고, <br />
                        중요 가치를 충족시켜줄 수 있는 직업에 대해 생각해 볼 기회를 제공합니다.
                     </Typography>
                </Grid>
                

                <Grid item xs={12} className={classes.item}>
                    <div className="link-container">
                        <br />
                        <Link to={{
                            pathname: "/Result",
                            state: { seq: data }
                        }} >
                            <button type="button" className="btn btn-outline-success" onClick={localStorage.setItem("seq", data)}>결과 보기</button>
                        </Link>
                    </div>
                </Grid>
            </Grid>
        </FadeIn>
    );
}

export default Completed;