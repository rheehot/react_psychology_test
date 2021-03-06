import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import { Button } from "@material-ui/core";
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import FadeIn from 'react-fade-in';

const playSound = (audioFile) => {
    audioFile.play();
}
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
        bottom: '25%',
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
                                        variant="h3"
                                        component="span"
                                        className={classes.introTitleKor}
                                    >
                                        너의 『직업은』
                                    </Typography>
                                    <Typography
                                        variant="h4"
                                        component="span"
                                        className={classes.introTtileJap}
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

                                            >
                                                {image.title1}
                                                <span className={classes.imageMarked} />
                                            </Typography>
                                        </Link>
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