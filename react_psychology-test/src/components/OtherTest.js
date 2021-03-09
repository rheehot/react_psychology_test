import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';
import FadeIn from 'react-fade-in';

import Toggle from "./Toggle";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "../styles/useDarkMode";
import { GlobalStyles, lightTheme, darkTheme } from "../styles/globalStyles";


const useStyles = makeStyles({
    root: {
        maxWidth: "100%",
    },
    body : {
        height: '50px',
    },
    media: {
        height: 0,
        paddingTop: '100%'
    },
    item : {
        textAlign : "center",
    },
    cardStyle : {
        display: 'block',
        width: '100%',
        transitionDuration: '0.3s',
        height: '100%',
    },
    cardContext : {
        overflowY : 'scroll',
        height : "100px",
        textAlign: "left",
    },
});

function OtherTest(){

    const data = localStorage.getItem("name");
    
    const classes = useStyles();
    const [theme, toggleTheme, mountedComponent] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    return(
        <ThemeProvider theme={themeMode}>
            <GlobalStyles />
        <FadeIn>
            <Container>
                <Grid container spacing={4}>
                    <Grid item xs={12} className={classes.item}>
                        <Typography id="other-title" variant="h4" gutterBottom>
                            🔎 {data} 님을 더 알아보세요 🔍
                    </Typography>
                    </Grid>
                    <Grid item xs={4} className={classes.item}>
                        <Card className={classes.cardStyle}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                        image="https://static.neris-assets.com/images/personality-types/headers/fb/logo.png"
                                    title="https://www.16personalities.com/ko"
                                />
                                <CardContent  >
                                    <Typography gutterBottom variant="h5" component="h2">
                                        16Personalities
                                </Typography>
                                    <Typography className={classes.cardContext} variant="body2" color="textSecondary" component="p">
                                        16Personalities 검사는 Big5를 토대로 만들어진 심리 테스트입니다.
                                        신뢰도와 타당도가 충분히 검증된 검사이며, 각종 연구개발 현장에 쓰이는 검사입니다.
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button style={{ textAlign: 'center' }} href="https://www.16personalities.com/ko" target="_blank" size="small" color="primary">
                                    테스트 하러가기
                            </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={4} className={classes.item}>
                        <Card className={classes.cardStyle}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="https://media.vlpt.us/images/jslauren/post/07d7ef73-fd4c-4aa6-ae52-3ec0825bc2a7/cover.png"
                                    title="https://programmers.co.kr/pages/2020-mbti-survey"
                                />
                                <CardContent >
                                    <Typography gutterBottom variant="h5" component="h2">
                                        프로그래머스
                                </Typography>
                                    <Typography className={classes.cardContext} variant="body2" color="textSecondary" component="p">
                                        "16Personalities"를 통해, MBTI 검사를 해보고, 내 성향은 개발자로써는 어떤 모습의 가치를 추구하는지 확인하세요.😎
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button href="https://programmers.co.kr/pages/2020-mbti-survey" target="_blank" size="small" color="primary">
                                    테스트 하러가기
                            </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={4} className={classes.item}>
                        <Card className={classes.cardStyle}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FOyKwm%2FbtqPqlVHUaO%2Fi58NH0J8qUa8p1Xf1kkCM1%2Fimg.jpg"
                                    title="https://comu.codeuniv.kr/"
                                />
                                <CardContent >
                                    <Typography gutterBottom variant="h5" component="h2">
                                        내 안의 개발자
                                </Typography>
                                    <Typography className={classes.cardContext} variant="body2" color="textSecondary" component="p">
                                        모두를 위한 코딩 커뮤니티 "코뮤니티"에서 만든 MBTI 유형별 개발자 유형 테스트입니다.
                                        특히 대학생분들 중에, 어떤 분야로 방향을 잡고 싶은지 궁금하시다면 추천합니다. 재미는 덤 입니다. 😜
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button href="https://comu.codeuniv.kr/" target="_blank" size="small" color="primary">
                                    테스트 하러가기
                            </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={4} className={classes.item}>
                        <Card className={classes.cardStyle}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="http://bftest.wecode.co.kr/Logo5.png"
                                    title="http://bftest.wecode.co.kr/"
                                />
                                <CardContent >
                                    <Typography gutterBottom variant="h5" component="h2">
                                        BF-TEST
                                </Typography>
                                    <Typography className={classes.cardContext} variant="body2" color="textSecondary" component="p">
                                        Front-end vs Back-end, 나의 성향에 맞는 포지션을 알아보는 심리테스트입니다.
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button href="http://bftest.wecode.co.kr/" target="_blank" size="small" color="primary">
                                    테스트 하러가기
                            </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={4} className={classes.item}>
                        <Card className={classes.cardStyle}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="https://d3iwxdng5nai8r.cloudfront.net/assets/mgram_tiles-ea42bad53c904a053fba6ecc96734524a10815f0987ff3614979ef72cdbdf6bc.png"
                                    title="https://mgram.me/ko/"
                                />
                                <CardContent >
                                    <Typography gutterBottom variant="h5" component="h2">
                                        mgram
                                </Typography>
                                    <Typography className={classes.cardContext} variant="body2" color="textSecondary" component="p">
                                        초정밀 성격 진단「mgram」은 당신의 성격을 구성하는 44개 요소 중, 가장 강하게 나타나는 8가지 요소를 정밀하게 추출해 드립니다.
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button href="https://mgram.me/ko/" target="_blank" size="small" color="primary">
                                    테스트 하러가기
                            </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={4} className={classes.item}>
                        <Card className={classes.cardStyle}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="https://w.namu.la/s/3485ce72df6b9e2ace13f2cb00483f1fbd196075a8d6a09e1a9cc5f05e0e7a0ebaa2d8292fb3371b16efaf539c22e79f1273938aef1304bb6d005e22f8da68702d54c9bd340d981cc22321a5863b7d9f04bb03d5b1ca687425ec791b95edeacad676b078ee39b7e90c346dacb80704dc"
                                    title="https://together.kakao.com/big-five"
                                />
                                <CardContent >
                                    <Typography gutterBottom variant="h5" component="h2">
                                        카카오같이가치
                                </Typography>
                                    <Typography className={classes.cardContext} variant="body2" color="textSecondary" component="p">
                                        Kakao impact 플랫폼 중 하나인 「카카오같이가치」의 서비스 중 하나인, Big 5 성향 검사 서비스입니다.
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button href="https://together.kakao.com/big-five" target="_blank" size="small" color="primary">
                                    테스트 하러가기
                            </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12} className={classes.item}>
                        <Link to="/" style={{ textDecoration: 'none' }}>
                                <button id="other-btn" className="btn btn-outline-primary btn-lg"  >시작 페이지로 이동</button>
                        </Link>
                    </Grid>
                </Grid>
            </Container>
            <br />
            <Container style={{ textAlign: "center" }}><Toggle theme={theme} toggleTheme={toggleTheme} /></Container>
        </FadeIn>
       </ThemeProvider>
    );
}

export default OtherTest;

