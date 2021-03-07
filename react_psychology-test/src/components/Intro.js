import React,{useState}from "react";
import { Link } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import { Button, Container } from "@material-ui/core";
import Tooltip from '@material-ui/core/Tooltip';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import InstagramIcon from '@material-ui/icons/Instagram';
import ChatIcon from '@material-ui/icons/Chat';
import ToggleOffIcon from '@material-ui/icons/ToggleOff';
import ToggleOnIcon from '@material-ui/icons/ToggleOn';

import FadeIn from 'react-fade-in';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import kakao1 from './images/me.png';
import kakao2 from './images/lion.png';
import kakao3 from './images/apeach.png';


const images = [
    {
        url: 'https://t1.daumcdn.net/cfile/tistory/25483E3E58763D2635?original',
        title: 'GO TO TEST 🧐',
        title1 : 'INTRO PAGE 👋',
        width: '100%',
    }
];

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '100vw',
        height : '100vh',
    },
    popUp : {
        textAlign: 'center',
    },
    popUpFooter : {
        textAlign: 'center',
        padding : "5px",
        fontSize : "40px"
    },
    paperline1: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    paperline2 : {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: 200,
    },
    image: {
        position: 'relative',
        height: "100vh",
        [theme.breakpoints.down('xs')]: {
            width: '100vw !important', // Overrides inline-style
            height: "100vh",
        },
        '&:hover, &$focusVisible': {
            zIndex: 1,
            '& $imageBackdrop': {
                opacity: 0.65,
            },
            '& $imageMarked': {
                opacity: 0,
            },
            '& $imageTitle': {
                border: '4px solid currentColor',
            },
        },
    },
    focusVisible: {},
    introTitleKor : {
        position : 'absolute',
        left: '0',
        right: '0',
        top: '30%',
        bottom: '70%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    },
    introTtileJap: {
        position: 'absolute',
        left: '0',
        right: '0',
        top: '40%',
        bottom: '60%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    },
    imageButton: {
        position: 'absolute',
        left: '0',
        right: '0',
        top: '50%',
        bottom: '40%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    },
    imageButton1: {
        position: 'absolute',
        left: '0',
        right: '0',
        top: '60%',
        bottom: '30%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    },
    button3 : {
        position: 'absolute',
        left: '0',
        right: '0',
        top: '0',
        bottom: '0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
        position: 'relative',
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },
    imageMarked: {
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
}));




function Intro() {

    const classes = useStyles(); 
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);
   
    const contentStyle = { background: '#000', color: '#FFF' };
    const overlayStyle = { background: 'rgba(0,0,0,0.5)' };
    const arrowStyle = { color: '#000' }; // style for an svg element
    
    return(
        <FadeIn className={classes.fadeIn}>
            <div className={classes.root}>
                {images.map((image) => (
                    <ButtonBase
                        focusRipple
                        key={image.title}
                        className={classes.image}
                        focusVisibleClassName={classes.focusVisible}
                        style={{
                            width: image.width,
                        }}
                    >
                        <span
                            className={classes.imageSrc}
                            style={{
                                backgroundImage: `url(${image.url})`,
                            }}
                        />
                        <span className={classes.imageBackdrop} />

                        <div className={classes.root1}>


                            <Grid container spacing={1}>
    
                                <Grid item xs={6}>
                                    <Typography
                                        variant="h1"
                                        component="span"
                                        className={classes.introTitleKor}
                                        id="intro-title"
                                    >
                                        『 너의 직업은 』
                                    </Typography>
                                    <Typography
                                        variant="h4"
                                        component="span"
                                        className={classes.introTtileJap}
                                        id="intro-sub-title"
                                    >
                                        あなたの仕事は
                                    </Typography>
                                </Grid>

                                <Grid item xs={6}>
                                    <span className={classes.imageButton}>
                                        <Link to="/Home" style={{ textDecoration: 'none', color: '#FFF' }}>
                                            <Typography
                                                component="span"
                                                variant="subtitle1"
                                                color="inherit"
                                                className={classes.imageTitle}
                                                id="intro-btn1"
                                            >
                                                {image.title}
                                                <span className={classes.imageMarked} />
                                            </Typography>
                                        </Link>
                                    </span>

                                    <span className={classes.imageButton1}>
                                        <Link to="" style={{ textDecoration: 'none', color: '#FFF' }}>
                                            <Typography
                                                component="span"
                                                variant="subtitle1"
                                                color="inherit"
                                                className={classes.imageTitle}
                                                id="intro-btn2"
                                                onClick={() => setOpen(o => !o)}
                                            >
                                                {image.title1}
                                                <span className={classes.imageMarked} />
                                            </Typography>
                                        </Link>
                                        
                    
                                        <Popup open={open} closeOnDocumentClick onClose={closeModal}
                                            {...{ contentStyle, overlayStyle, arrowStyle }}
                                        >
                                            <div className="model">
                                                <a className="close" onClick={closeModal}>&times;</a>
                                                <Grid container spacing={3}>
                                                    <Grid item xs={12} className={classes.popUp}>
                                                        <Typography id="popUp-title" variant="h4" gutterBottom>
                                                            직업심리검사 서비스 『너의 직업은』
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Paper className={classes.paperline1}>
                                                            <Typography id="popUp-desc" variant="p" gutterBottom>
                                                                안녕하세요. 엘리스 AI트랙 레이서 1기 YOUNG MIN 입니다. <br />
                                                                『너의 직업은』은 이번 웹 서비스 프로젝트로 주제로 제작했습니다. <br />
                                                                많은 기간을 가지고 배운 지식으로 만든 것은 아니지만, 2주동안 열심히 제작해봤습니다. <br />
                                                                내가 중요시 여기는 가치관은 무엇이며, 그에 맞는 직업들은 무엇이 있는지 알려주는 서비스입니다. <br />
                                                                자신의 성향을 알아보고 다른 사람에게 결과도 공유해보세요.😎 <br />
                                                                감사합니다. 🙏
                                                            </Typography>
                                                        </Paper>
                                                    </Grid>
                                                    
                                                    <Grid item xs={6}>
                                                        <Paper className={classes.paperline2}>
                                                            <Typography id="popUp-desc" variant="p" gutterBottom>
                                                                Javascript <br />
                                                                Functional Components + Hooks <br />
                                                                React `17.0.1` <br />
                                                                bootstrap `4.6` <br />
                                                                react-router-dom `5.2` <br />
                                                                axios `0.21.1` <br />
                                                                그 외 다양한 React 라이브러리 📘 <br />
                                                            </Typography>
                                                        </Paper>
                                                    </Grid>
                                                    <Grid item xs={6} spacing={3}>
                    
                                                        <Paper className={classes.paperline2}>
                                                            <Grid item xs={12} spacing={1} className={classes.popUp} >
                                                                <Typography id="popUp-contributer" variant="h4" gutterBottom>
                                                                    Contributor
                                                            </Typography>
                                                            </Grid>
                                                            <Grid item xs={12} spacing={2} >
                                                                <Tooltip title="김한슬마로 코치님" placement="bottom">
                                                                    <img src={kakao2} width="90" height="90" />
                                                                </Tooltip>
                                                                <Tooltip title="영민 ( 제작자 )" placement="bottom">
                                                                    <img src={kakao1} width="100" height="100" />
                                                                </Tooltip>
                                                                <Tooltip title="이정열 코치님" placement="bottom">
                                                                    <img src={kakao3} width="100" height="100" />
                                                                </Tooltip>
                                                                
                                                            </Grid>
                
                                                        </Paper>
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Container style={{textAlign:"center"}}>
                                                            <Tooltip title="Github" placement="bottom">
                                                                <a href="https://github.com/youngminss/react_psychology_test" target="_blank" >
                                                                    <GitHubIcon className={classes.popUpFooter}   />
                                                                </a>
                                                            </Tooltip>

                                                            <Tooltip title="Blog" placement="bottom">
                                                                <a href="https://youngminieo1005.tistory.com/notice/56" target="_blank" >
                                                                    <ChatIcon className={classes.popUpFooter} />
                                                                </a>
                                                            </Tooltip>

                                                            <Tooltip title="Mail" placement="bottom">
                                                                <a href="" target="" onClick={(event) => { event.preventDefault() }}>
                                                                    <EmailIcon className={classes.popUpFooter} />
                                                                </a>
                                                            </Tooltip>

                                                            <Tooltip title="Instagram" placement="bottom">
                                                                <a href="https://www.instagram.com/ming.3000/" target="_blank">
                                                                    <InstagramIcon className={classes.popUpFooter} />
                                                                </a>
                                                            </Tooltip>
                                                        </Container>
                                                    </Grid>
                                                    <Grid item xs={12} className={classes.popUp}>
                                                        <Typography variant="caption" display="block" gutterBottom>
                                                            Copyrightⓒ. Young-Min All Rights Reserved
                                                        </Typography>
                                                    </Grid>
                                                    
                                                </Grid>
                                            </div>
                                        </Popup>
                                        {/* <Link to="" style={{ textDecoration: 'none', color: '#FFF' }}>
                                            <Typography
                                                component="span"
                                                variant="subtitle1"
                                                color="inherit"
                                                className={classes.imageTitle}

                                            >
                                                {image.title1}
                                                <span className={classes.imageMarked} />
                                            </Typography>
                                        </Link> */}  
                                    </span>
                                    
                                </Grid>

                            </Grid>

                        </div>

                    </ButtonBase>
                ))}
            </div> 
        </FadeIn>
            
    );
}

export default Intro;