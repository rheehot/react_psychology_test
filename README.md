# 💻 프로젝트 개요

- REACT-Psychology-Test

[Requirements Report](https://www.notion.so/7e0fdcd157e544cdbfc1d56ba45f414e)

[Demo](http://elice-kdt-ai-track-vm-project-03.koreacentral.cloudapp.azure.com/test)

## 1️⃣ day report

- 환경설정
Azure VM 접속 방법 [링크](https://www.notion.so/Azure-VM-ff3344a92dda4549b235bfa25658f8dc)
1. npm 설치확인
2. node 설치&버젼확인
3. react 설치
- 관리방식 : 로컬에서 프로젝트진행 -> gitlab에 업로드 -> VM에서는 gitlab 내용 pull (맞나 ??) -> 로컬에서 진행했는데, 실제 서버에 배포하면, 환경설정이 안맞아서 에러 발생할것 같은데 ? 나중에 해결 ?
- Azure VM 에서는 관리자 권한으로 모든 명령어 실행 (sudo)

+ $ sudo apt install npm : Azure VM에 npm 환경설정
+ $ sudo npm install -g create-react-app : Azure VM에서 관리자 권한으로 React 설치
+ $ sudo npm install -g n : node 모듈 설치
+ $ sudo n lts : node LTS 버젼 설치 (Long-Term Support official release; 오랜 기간동안 안정적으로 사용할 수 있도록 지원하는 버전))
+ $ sudo npm install -g create-react-app : react 앱 설치도구
 create-react-app react_psychology_test

+ $ npm i react-router-dom : react router 설치 (참고 : react router는 Web용, Native 용 존재함)

### 구현
- 유저 설정
    + 이름 입력 폼 구현
    + 성별 선택 폼 구현
- 검사 예시 페이지
    + 검사 시작 전, 진행 방식에 대한 설명 구현
        * 진행 표시줄(Progress bar) 적용
    + 진행 방식에 대한 검사 예제 문항 표시
    + 검사 시작 버튼 구현
        * 검사 예제 문항 진행 확인 후, 활성화 버튼 적용

- 비고
    + CSS 부분은 보류 중


## 2️⃣ day report

- installation
    + axios
        * npm install axios
    
### Day Note
+ axios 통신할때, url string에 시작은 반드시, "https://"(필요시,http)를 붙이는 것을 잊지말자.
+ 그렇지 않으니, 통신하면, 다음과 같은 에러 발생
(Error: Request failed with status code 404
at createError (createError.js:16)
at settle (settle.js:17)
at XMLHttpRequest.handleLoad (xhr.js:62))
+ 배열 형태, state를 새로고침해도, 유지 관리 되는 것을, 아직 잘 모르는 듯함
+ jquery 사용법
    - npm install jquery --save
    - 프로젝트파일 안에서, import $ from 'jquery';


### 구현
> 필수 해결 사항
- 5개씩 질문사항, 뿌려주기

> 필수 미해결 사항
+ progress bar
+ 검사완료 문구 페이지 전환
+ 5개 체크를 해야만 다음 페이지 버튼 활성화

> 선택 해결 사항
+ 예시 페이지에서, 페이지 전후로 이동하면, 검사시작 버튼 활성화 초기화

> 선택 미해결 사항
+ 문항 선택마다 progress바 갱신

> 문제가 될 것 같은 부분
+ 선택지를 사용자가 변경할 수 있으면 어떻할까 ? => answer 상태를 업데이트할때, 기존에 저장된 값을 어떻게 관리할까 ?


## 3️⃣ day

### 설치
- $ npm install --save react-router-dom : React Router를 위한 라이브러리
- $ npm install --save-dev@types/react-router-dom : Typescript(타입스크립트)를 사용하기 위한 react-router-dom의 타입(Type) 정의 라이브러리

### Day Note
- JSON.stringify(data) : 모든 형태의(객체나,배열 숫자 등등)데이터를 JSON형태 데이터로 변환해준다.
- String.trim() : 문자열 양쪽 공백 삭제
- new Date() : 현재시각 가져옴 / new Data()..getTime() : 밀리세크단위로 변환
- string.split( 구분자 ) : 문자열 '구분자' 기준으로 나누기
- string.slice( 시작, 끝 ) : 문자열의 시작 ~ 끝 인덱스까지 자른 문자열 반환 

- App.js를 라우터로 변경
    + 기존에, App.js에서 조건부렌더링 하던 부분을 -> Home.js 를 만들어서 처리

- import { Link } from "react-router-dom"
    + <Link to="/경로" />

- 페이지 전환시, 보여질 페이지에, 데이터를 함께 전달하는 방법 [참고문헌1] (https://velog.io/@dhlee91/this.props.history.push%EB%A1%9C-props-%EB%84%98%EA%B2%A8%EC%A3%BC%EA%B8%B0) [참고문헌2](https://velog.io/@devmoonsh/React-Router)
    + 넘기는 컴포넌트
        * props.history.push({
        pathname : 경로,
        state : { 데이터 }
    });
    + 받는 컴포넌트
        * import {useLocation} from "react-router";
        * const location = useLocation();
        * const data = location.state.데이터;

- 로그인 -> 예시 -> 테스트 페이지가 Token에따른 조건부렌더링에서 => Token에 따른, display로 컨트롤
    + 조건부렌더링을하면, 페이지가 reload 되고, state나, html정보 자체가 새로고침 된다.

>   display 제어 방법들
    1.
    document.getElementByClass("myDIV").style.display = "none";
    document.getElementByClass("myDIV").style.display = "block";

    2.
    $(".tagID").show(); // display 속성을 block 으로 바꾼다.
    $(".tagID").hide(); // display 속성을 none 으로 바꾼다. 

    3.
    <div className="displayNo">
    <div className="displayYes">
    css
    .displayNo {
    display: none;
    }

    .displayYes {
    display: block;
    }

- 첫번째 로그인 페이지에서, 이름,성별을 입력하고, 버튼을 누를 때, 클릭핸들러에서, 이벤트를 default 시켜야, 새로고침되서, 잠깐 다음페이지로 넘어갔다가, 다시 처음페이지로 reload되는 것을 막는다.

- state 중에, 배열이나 객체 일때, 제대로 setState 적용하는 법을 확실히 알아야 겠다. [참고문헌](https://ichi.pro/ko/hukeuleul-sayonghayeo-react-state-ui-baeyeol-e-chugahaneun-bangbeob-67108288520668)

### 추후, 보완할 점
> ★ 일단은, 형제 컴포넌트의 state를 끌어올리기하기엔, 손봐야될 것이 많아보이고, 또 지금 상황에서는, 필요한 것은, 로그인 시, 1.사용자이름 2.성별 데이터만 있으면, API post를 할 수 있을 것 같아서, DOM을 이용해서, 값 들을 얻어 냈다. 


## 4️⃣ day

### 설치
- $ npm install --save react-chartjs-2 chart.js

### CSS 라이브러리
- [리액트스트랩](https://reactstrap.github.io/components/collapse/)
- [리액트차트](https://recharts.org/en-US/examples/PieChartWithCustomizedLabel)
- [sweetalert2](https://sweetalert2.github.io/#examples)

### Day Note
- React + Chart.js = 데이터 시각화하기(막대그래프, 외 가능) [참고문헌1](https://ichi.pro/ko/react-mich-chart-jsleul-sayonghan-deiteo-sigaghwa-209311532565250) [참고문헌2](https://penguingoon.tistory.com/238)

- 배열 내의, 첫번째, 두번째로 큰 값의 인덱스 찾아내기
    + var num = Math.max.apply(null,arr) : 배열 내, 최대값 찾기
    + var index1 = arr.indexOf(num) : 배열 내, num값의 인덱스 반환
    + arr[index1] = 0;
    + 위에 과정을 한번 더 진행, 두번 째로 큰 값 찾기 

- state 배열, 별개의 배열 할당하기
    + var 배열1 = 배열2 : 같은 주소 참조(불변성 X)
    + var 배열1 = 배열2.slice() : 배열2 와 같은 새로운 배열 생성(불변성 O)
[참고문헌](https://bbaktaeho-95.tistory.com/37)


## 해결할 점
- 결과페이지에서, 통신 쪽으로 문제가 있는 것 해결해야 한다.








📢 README 정리 해야함..



 