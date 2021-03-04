import React, {useState,useEffect} from "react";
import { useLocation } from "react-router";

function OtherTest(){

    //const location = useLocation();
    const data = localStorage.getItem("name");
    const seq = localStorage.getItem("seq");

    
    useEffect(() => {
        if (window.Kakao.isInitialized() === false)
        {
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
                    mobileWebUrl: `http://elice-kdt-ai-track-vm-racer-33.koreacentral.cloudapp.azure.com/Result?seq=${seq}`,
                    webUrl: `http://elice-kdt-ai-track-vm-racer-33.koreacentral.cloudapp.azure.com/Result?seq=${seq}`
                    // mobileWebUrl: 'http://localhost:3000/Result',
                    // webUrl: `http://localhost:3000/Result?seq=${seq}`
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
                        mobileWebUrl: `http://elice-kdt-ai-track-vm-racer-33.koreacentral.cloudapp.azure.com/Result?seq=${seq}`,
                        webUrl: `http://elice-kdt-ai-track-vm-racer-33.koreacentral.cloudapp.azure.com/Result?seq=${seq}`
                        // mobileWebUrl: 'http://localhost:3000/Result',
                        // webUrl: `http://localhost:3000/Result?seq=${seq}`

                    }
                },
                {
                    title: '검사 해보기',
                    link: {
                        mobileWebUrl: 'http://elice-kdt-ai-track-vm-racer-33.koreacentral.cloudapp.azure.com',
                        webUrl: 'http://elice-kdt-ai-track-vm-racer-33.koreacentral.cloudapp.azure.com'
                        // mobileWebUrl: 'http://localhost:3000',
                        // webUrl: 'http://localhost:3000'

                    }
                }
            ]
        });
        
        
    },[])

    function onClickKakao() {
        window.open('http://elice-kdt-ai-track-vm-racer-33.koreacentral.cloudapp.azure.com/OtherTest');
        //window.open('http://localhost:3000/OtherTest');
    }
    return(
        <>
            <h1>{data}님을 좀더 알아보세요 !!</h1>
            <button style={{backgroundColor:"white", border:"0px"}}id="kakao-link-btn" onClick={onClickKakao}><img src={"https://item.kakaocdn.net/do/d84248170c2c52303db27306a00fb86141d1a2caccd0c566eab28b91e2e5d306"} style={{ backgroundColor:'white'}} alt="결과 공유하기" /></button>
        </>
    );
}

export default OtherTest;