import React,{useEffect, useState} from "react";

import Box from '@material-ui/core/Box';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    item : {
        textAlign: "center"
    }
}));

function Example(props) {
    const [exampleChecker, setExampleChecker] = useState(false);
    const classes = useStyles();

    function handleMoveLogin() {
        setExampleChecker(true);
        props.moveLoginPage();
    }
    function handleMoveTest() {
        setExampleChecker(true);
        props.moveTestPage();
    }

    return (
        <div className="example-container" style={props.isLoggined ? { display: "block" } : { display: "none" }}>
            <Grid container spacing={3} >
                <Grid item xs={12} className={classes.item}>
                    <Typography id="example-title" variant="h4" gutterBottom>
                        검사 예시
                     </Typography>
                </Grid>

                <Grid item xs={12} className={classes.item}>
                    <Box display="flex" alignItems="center">
                        <Box width="100%" mr={1}>
                            <LinearProgress animated variant="determinate" value={0} valueBuffer={100} />
                        </Box>
                        <Box minWidth={35}>
                            <Typography variant="h6" color="textSecondary">🏃‍♂️..{0}%</Typography>
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={12} className={classes.item}>
                    <Typography id="example-desc" variant="h6" gutterBottom>
                        직업과 관련된 두개의 가치 중에서 자기에게 더 중요한 가치에 표시하세요.
                    </Typography>
                </Grid>

                <Grid item xs={12} className={classes.item}>
                    <div className="form-group">
                        <p>1. 두 개 가치 중에 자신에게 더 중요한 가치를 선택하세요.</p>
                        <div>
                            <div className="form-check form-check-inline">
                                <label className="form-check-label"><input type="radio" className="form-check-input" name="check" value="1" onChange={() => setExampleChecker(true)} />창의성</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <label className="form-check-label"><input type="radio" className="form-check-input" name="check" value="2" onChange={() => setExampleChecker(true)} />안정성</label>
                            </div>
                        </div>
                    </div>
                </Grid>

                <Grid item xs={12} className={classes.item}>
                    <div className="text-center">
                        <button type="button" style={{ float: 'left' }} className="btn btn-outline-primary btn-lg" onClick={handleMoveLogin}>이전</button>
                        <button type="button" style={{ float: 'right' }} disabled={exampleChecker ? false : true} className="btn btn-outline-primary btn-lg" onClick={handleMoveTest}>검사 시작</button>
                    </div>
                </Grid>
            </Grid>
        </div> 
    );
    
}



export default Example;
