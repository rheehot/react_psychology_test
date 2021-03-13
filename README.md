## 🍒 프로젝트 개요

<div align="center">

### Elice Academy X KDT : Project 1 - 웹 서비스 프로젝트

</div>

<div align="center">

![Elice](https://img.shields.io/static/v1?label=Elice&message=Web-Front-Project&color=524fa1)
![Javascript](https://img.shields.io/static/v1?label=Javascript&message=ES6&color=efd81d)
![Node](https://img.shields.io/static/v1?label=Node&message=v15.6.0&color=80bd01)
![React](https://img.shields.io/static/v1?label=React&message=v17.0.1&color=00ccff)
![Axios](https://img.shields.io/static/v1?label=Axios&message=v0.21.1&color=3b6be3)
![React_Router_DOM](https://img.shields.io/static/v1?label=React-Router-DOM&message=v5.2.0&color=d0021b)
![MaterialUI](https://img.shields.io/static/v1?label=Material-UI&message=v5.2.0&color=3978e7)
![ChartJS](https://img.shields.io/static/v1?label=ChartJS&message=v2.9.4&color=fd767a)
![Bootstrap](https://img.shields.io/static/v1?label=Bootstrap&message=v4.6.0&color=8812fc)

</div>




###  [Requirements Report](https://www.notion.so/7e0fdcd157e544cdbfc1d56ba45f414e)


+ [Guide Demo](http://elice-kdt-ai-track-vm-project-03.koreacentral.cloudapp.azure.com/test)
+ [Live Demo](http://elice-kdt-ai-track-vm-racer-33.koreacentral.cloudapp.azure.com/)


## 🍒 Day Note

<details>
<summary><strong>1️⃣ day report</strong></summary>
<div markdown="1">
<br />

### 🍀 환경설정
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

### 🌻 구현
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

</div>
</details>

<details>
<summary><strong>2️⃣ day report</strong></summary>
<div markdown="1">
<br />

### 🍀 환경설정

+ axios
    * npm install axios
    
### 🌼 Day Note
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


### 🌻 구현
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


</div>
</details>

<details>
<summary><strong>3️⃣ day report</strong></summary>
<div markdown="1">
<br />

### 🍀 설치
- $ npm install --save react-router-dom : React Router를 위한 라이브러리
- $ npm install --save-dev@types/react-router-dom : Typescript(타입스크립트)를 사용하기 위한 react-router-dom의 타입(Type) 정의 라이브러리

### 🌼 Day Note
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

### 🛠 추후, 보완할 점
> ★ 일단은, 형제 컴포넌트의 state를 끌어올리기하기엔, 손봐야될 것이 많아보이고, 또 지금 상황에서는, 필요한 것은, 로그인 시, 1.사용자이름 2.성별 데이터만 있으면, API post를 할 수 있을 것 같아서, DOM을 이용해서, 값 들을 얻어 냈다. 

</div>
</details>

<details>
<summary><strong>4️⃣ day report</strong></summary>
<div markdown="1">
<br />

### 🍀 설치
- $ npm install --save react-chartjs-2 chart.js

- CSS 라이브러리
    
    - [리액트스트랩](https://reactstrap.github.io/components/collapse/)
    - [리액트차트](https://recharts.org/en-US/examples/PieChartWithCustomizedLabel)
    - [sweetalert2](https://sweetalert2.github.io/#examples)

### 🌼 Day Note
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


### 🛠 해결할 점
- 결과페이지에서, 통신 쪽으로 문제가 있는 것 해결해야 한다.


</div>
</details>

<details>
<summary><strong>5️⃣ day report</strong></summary>
<div markdown="1">
<br />

### 🍀 설치
- npm install --save reactstrap react react-dom : 리액트스트랩
- npm install react-bootstrap bootstrap
- npm install --save bootstrap : 부트스트랩 (리액트스트립 내부적으로는 부트스트랩을 포함하고 있지 않다고해서 설치해야한다고 설명하는 듯)
    + import 'bootstrap/dist/css/bootstrap.min.css'; (index.js 에다가

### 🌼 Day Note 
- 리액트스트랩에서, Progress를 통해서, 진행사항을 구현했다.
    + 진행사항은, 클릭 수/질문사항 전체갯수

- test페이지 항목, 순서와 상관없이,무작위,값 바꿔도, 항상 순서에 맞게 데이터 만들어내기 구현
    + 기존 : 해당, 질문 radio 값 클릭할때마다. onChange 이벤트로, checked 된 데이터를 str에 누적해서 저장하도록 했다.
        * 문제점 : 값을 바꾸거나, 순서가 무작위로하면, 중복도 제어 못하고, 순서도 엉망이 됬었다. (정직한 순서로 체크하지 않는이상...버그 생긴다.)
    + 해결책 : form serialize 를 알게 되었다.
        * 이를 통해, 내가 원하는 이벤트 시점에서, form 태그 안에, 원하는 값을, String형태로 반환 받는다.
        * 이 데이터는 중간중간에 '&' 가 붙는데, 이는 replace 함수로 변형한다.
        * replace 함수를 그냥 쓰면,문자열 내, 첫 번째 부분만 적용이된다고 한다.
        * 이를 해결하기 위해, replaceAll 처럼 사용하기가 있더라. [참고문헌](http://www.codejs.co.kr/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%97%90%EC%84%9C-replace%EB%A5%BC-replaceall-%EC%B2%98%EB%9F%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0/)
        * 정리하면, replace( 바뀔문자열(문자) , 바꿀문자열(문자) ) 일 때, 바뀔문자열에, 정규식을 넣을 때 다음과 같은 옵션이 있단다.
        * [정규식의 gi 설명]
            * g : 발생할 모든 pattern에 대한 전역 검색
            * i : 대/소문자 구분 안함
            * m: 여러 줄 검색 (참고)

</div>
</details>

<details>
<summary><strong>6️⃣ day report</strong></summary>
<div markdown="1">
<br />

### 🌼 Day Note

💡 Test.js(테스트페이지) UI/UX 적으로 보완, 버그해결을 진행했다.

🔴 이슈 1
- Progress bar 증가는, 기존에 counter state(클릭 수)로 구현했다.
- 문제점 : 동일한 항목의 radio 를, 번갈아 눌러도, counter는 증가하니깐, progress bar 게이지는 올라갔다.
    + 해결법 : counter가 아니라, 클릭 할 때마다, Test페이지의, radio를 요소를 다 가져와서, checked 수를, counter로 지정했다.
    + countChecked() 가 제어함.

🔴 이슈 2
- 테스트페이지의, 다음 버튼 활성화는, 기존에, 5개의 항목을 누르면 활성화되고, 다음을 누르고, 다음페이지가 나오면, 버튼은 비활성화 되도록했었다. 이 역시, counter로 5번 클릭 시, 활성화 되도록했었다.
- 문제점 : 사용자가, 예를들어, 2개의 항목을 체크하고, 잠시 이전페이지로 갔다가, 다시 돌아온다면 ?
    + 체크된 2개 사항은, 그대로 이지만, 나머지, 체크되지 않은 3개의 항목을 체크해도, 그 때, counter는 5가 아니라, 3으로 인지할 테고, 그로 인해, 버튼 활성화 X
    + 해결책 : 질문 5개당 1개의 페이지(?) 라고 생각했을 때, 다음 버튼을 눌러서, 나오는 페이지의, 체크된 radio 수를, counter로 지정한다.
    + pageCountChecked() 가 제어함

🔴 이슈 3
- 마지막 항목, 페이지는 `다음` 버튼이 `제출` 이어야 한다. 그 부분을 구현했었다.
- 문제점 : 사용자가 마지막항목 페이지에서, 잠시, `이전`버튼을 눌러 이전페이지로 이동하면, `제출`버튼에서, `다음`버튼이 적용 되었는가 ?
- 해결법 : `이전`버튼을 눌렀을때, 테스트페이지가 마지막이었으면, buttonText state를 다시, `다음`으로 변경했다.


💡 코딩하다가, 하나 알게 된 것

- 리액트스트랩을 기본적으로, import하면, 그 css파일안에, 기본적으로, 적용되는, css효과들이 있다.
- 기본 태그이름의 정의도 되어있고, 특정 className으로, 정의된 css도 있나보다.
- 그래서, 예를 들어(`<div className="text-center">`) 이면, 그 안에있는 요소들은, 가운데 정렬이 되는 듯 하다.


</div>
</details>

<details>
<summary><strong>7️⃣ day report</strong></summary>
<div markdown="1">
<br />

### 🍀 설치

- $ npm install -g npm-check
    + npm-check는 의존성 관리의 불편함을 덜어주는 cli 
    + npm-check : 실행
- $ npm install --save
    + bootstrap
    + react-chartjs-2
    + reactstrap
    + chart.js

### 🌐 배포

nginx 를 이용한 Azure VM에 내 프로젝트 배포 [참고문헌](https://www.hanumoka.net/2019/12/29/react-20191229-react-nginx-deploy/)

- 필요한 것
    + 내 Azure서버, DNS Name & Password
- 절차
    + gitlab(또는 github)에 있는, 내 git repo를 Azure계정으로 접속해서, git pull로 가져오기
    + npm run build로, 내 프로젝트를 build (프로젝트 내에, build 폴더 생김 확인)
    + `참고문헌`에 나와있는대로 절차를 밟는다.
    + host가 되고 있는 것을 확인하고, 나의, Azure DNS Name을, url에 쳐서 접근해본다.

</div>
</details>

<details>
<summary><strong>8️⃣ day report</strong></summary>
<div markdown="1">
<br />

### 🌼 Day Note

⚾ progress bar 의 % 현황을 추가했다.
+ Math.round(체크항목/전체항목 * 100) 으로 구현했다.

⚽ ★ 결과페이지, 학력,전공별, 정보 뿌리기
+ 코치님 피드백이후, 맨 처음 버전인, 하나의 useEffect에 모든 로직 집어 넣은 버젼에서는, deps 를 제대로 넣지 않아서, 프로그램이 제대로 작동하지 X
    - 피드백 이후, 일단, deps에 대해서, 좀 더 알아본 결과, useEffect에서 사용되는, 변수나 state를 넣어줘서, 업데이트 될 때, 리렌더링 되는 것을 제어해야한다.
    + ★ 그렇게, deps를 변경했더니, 새로운 문제가 발생
        - `무한 렌더링` 이 발생했다.
        - 삽질을 엄청하다가, 일단은 JobTable 컴포넌트에서, axios로 데이터를 잘 받아온 시점부터는, 통신을 그만해야되는데, 그것이 제어가 안되는 것 같아서, useEffect에서 실행되는 함수를 실행하는데 있어서, 조건을 걸었다. (이러면, 안되는건지는 모르겠으나..일단 프로그램은 죽지않고, 돌아가서 보류중이다.)

🏀 JobTable 카테고리 중에, 결과값이 없는 카테고리의 경우는, 보여지지 않도록 했다.
+ 함수를 하나 만들었고, 그 값이 true OR false를 반환하고 이 값으로 `tr` 요소의 `display` 속성을 삼항연산자로 제어했다.
    - isTrEmpty() 가 제어함

</div>
</details>

<details>
<summary><strong>9️⃣ day report</strong></summary>
<div markdown="1">
<br />

### 🌼 Day Note

⚾ 전체적인, 필수,선택 기능은 구현 완료한 것 같다.

+ 내부적으로, 리팩토링은 아직 개발을 더 해보고 진행할 생각

⚽ 1차 CSS 작업을 진행 중이다.
    
+ 레이아웃, 폰트, 요소 배경색까지 진행해볼 예정
+ 참고사이트
    - [PANTONE](http://www.pantone.kr/)
    - [Design-Seed](https://www.design-seeds.com/)

🏀 차별성을 위해, 추가적 기능을 구상 중이다.
+ 결과페이지, 카카오톡 공유기능 
+ 인트로 페이지 제작 생각중
+ 현재 프로젝트 내 검사 외에, `나를 알 수 있는 검사` 여러 사이트 소개 페이지를 제작할까 생각중

### 📬 피드백
렌더링 2번 -> 아바 index.js 에서 <React.StrictMode> 때문에 발생할 수 있다. -> 지워주면 됌

무한렌더링 -> useEffect를 여러번 하지않아도되고, fetch 부분에서 NoArrMaker를 실행하도록 하기


</div>
</details>

<details>
<summary><strong>🔟 day report</strong></summary>
<div markdown="1">
<br />

### 🌼 Day Note

⚾ `카카오톡 공유기능`을 지금 구현 중인데, 생각이 드는게 많다.

+ 일단, `카카오톡 공유기능`과 `다른 검사사이트 제공` 기능을 위해, 결과페이지에서, `OtherTest(다른기능) 페이지`를 하나 더 제작했다.

+ `카카오톡 API`를 통해, `공유 버튼`기능을 사용해서, 띄우는 데 까지 성공했다.

+ 공유된, 내용에는 `검사 결과보기`, `검사 해보기` 두 가지가 있고, 링크를 각각 걸도록, API Guide에 따라, 구현은 됬다. 근데, 문제가 좀 있다.

    - 하나. 내 로컬에서, `로컬 도메인`,`내 Azure 서버 도메인`에서, 공유된, 카톡 링크를, 다시 `웹`에서 타고 들어가면, 두 가지 기능이 잘 처리 되는 것 같다. (값이 유지 O)

    - 둘, 근데, 혹시나해서, 다른, 유저 PC에서, 링크를 받아서 확인 했을 때는, 결과페이지에, 값들이 증발해버린채로 보이나 보다 !!!!

+ 내 로컬과, 내 Azure 서버에서, 테스트를 할려고 할 때도, 문제가 있었던 것은, 결국, `결과 페이지`를 보여주려면, 이전 페이지들에서, `넘어온 정보들`과, 그로인한, `seq번호`가 있어야 되는데, 그게, 유지가 안되니깐, 렌더링자체가 안됬다.

    - 고민하던 중에, `LocalStorage`가 생각나서, 나름 구현을 했는데, 결과적으로, 내 로컬에서 작동을 하고, 혹시 몰라, 내 Azure 서버로, 배포를 해서(도메인도 바꿔서) 실행해봤더니, 잘 작동하는 것 같다.

    - ★ 근데..다른 유저의 PC에서는, 값이 비는데..일단 현 상황에선, 내 생각에는 LocalStorage 사용법을, 잘 모르고 쓴 것 때문인가 싶다.

    - ★ 가장 중요한건, 그럼, 결과페이지에서 한번 적용된, 결과를, 계속 유지하는 법을, 어떻게 구현을 해야할까 ???? (리액트는, state가 증발하는데..) 흠... 


⚽ 카카오톡 공유버튼 만들기

+ [참고문헌](https://webruden.tistory.com/354)
+ [KAKAO Developer](https://developers.kakao.com/)




### 📬 피드백

⚾ 결국 생각해보니, `결과페이지`에서, 데이터가 뿌려지는건, `결과완료 페이지`에서, 넘겨온, `seq` 정보만, 있으면, `url + seq` 을 가지고, `사용자데이터`와 `가치관결과`를 받아서, 뿌릴 수 있다는 것

⚽ 그럼, 생각해봐야 되는 것은, `처음 내가 검사하는 사람인지`, `내가 검사한걸 공유링크를 받고 들어온 사람인지` 를, `Result 컴포넌트`에서, 구분해서, `seq` 값을, `LocalStorage`에 `seq`로 받을지, `location`을 통해 받을 건지, 제어할려 했다.

+ 사용자가, 링크를 타고 들어오면, 바로 `Result 컴포넌트`로, 접근할테니, 이전 단계에서, 받은 `LocalStorage`에 원하는 값들이 없을 것이다.

+ 그러나, 링크 안에, `파라미터`로 `seq`를 직접 넘겨준다. 그 파라미터의 `seq`값을, 추출해서, `결과페이지`를 뿌려주면 된다 생각했다.

    - [참고문헌](https://velog.io/@joonsikyang/React-Project-URL-parameters-Query-parameters)

</div>
</details>

<details>
<summary><strong>1️⃣1️⃣ day report</strong></summary>
<div markdown="1">
<br />

### 🍀 설치

- $ npm i styled-components

### 🌼 Day Note

⚾ `Intro` 페이지를 만들면 좋겠다 생각했다.

+ 배경이미지를 고르고, 브라우저에 꽉 차도록 설정하기 [참고문헌](https://juotte.net/?p=5765)

+ 번역 음성파일, tts 를, 간단하게 얻을 수 있는 법을 알게 됬다.

    - 구글번역, 파파고 등 다 된다.

        * [참고문헌](https://samablog.tistory.com/147)

+ `materidal-ui`의 `ButtonBase` 컴포넌트를 사용했다.

    - `hover` effect가 내 스타일이라 사용해봤다.

⚽ `다른 검사하기` 페이지에 있던, `카카오톡 공유하기` 버튼을 `검사 결과`페이지에서 볼 수 있도록, 배치했다.
또 뭐가 있을까 생각하다, `소스코드 공유`도 하면 좋겠다고 생각했다.

+ `react` 에서, `img` 에 `src`에 이미지 경로를 사용하는 법이 import하는 식을 써야 적용된다는 것을 알게 됬다.

    - [참고문헌](https://webisfree.com/2019-12-12/[react]-img-%ED%83%9C%EA%B7%B8%EC%9D%98-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC-%EC%B6%94%EA%B0%80%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95-%EB%B0%8F-%EC%98%88%EC%A0%9C-%EC%95%8C%EC%95%84%EB%B3%B4%EA%B8%B0)

</div>
</details>

<details>
<summary><strong>1️⃣2️⃣ day report</strong></summary>
<div markdown="1">
<br />

### 🍀 설치

🍏 npm install react-fade-in

+ 리액트에서, 컴포넌트에 fade-in 효과를 줄 수 있다.
+ 최상위 컴포넌트에서, 가장 바깥쪽에 선언하면, 하위 컴포넌트들에게 전부 적용된다.

### 🌼 Day Note

+ 전체적으로, 페이지에 `Fade-In` 효과를 주었다.

+ 폰트를 적용하려고 했는데... 왜 안돼 !!!!

+ 로그인페이지에서, 이름 성별 컴포넌트를 material-ui로 변경했다.

+ progress bar, 역시 material-ui로 변경했다.

### 📬 피드백

📌 npm install --save mybatis-mapper

+ DB를 쉽게, 쓸 수 있는, 패키지라고 소개해주셨다.

+ 추후, 더 큰 react 프로젝트를 하게 될 때, 깊게 참고해볼 만 할 것 

</div>
</details>

<details>
<summary><strong>1️⃣3️⃣ day report</strong></summary>
<div markdown="1">
<br />

### 🌼 Day Note

- [X] 검사 완료페이지, 중앙 정렬 ( O )

- [X] 결과 페이지, 사용자정보, 테이블 영역 3분의 1씩 나누기 ( O )

- [X] 결과 페이지, 중요 가치관에 대한, 아이콘 뿌려주기 ( O )

- [X] 폰트 적용하기

+ [ttf react 적용하기 참고 가이드](https://coding-hwije.tistory.com/50)

    - 알아봐야 될 것 : 연산자가 외부 UI 라이브러리(Material UI) 경우, className이 정해져 있는데, 이를 참조해서, CSS를 적용하려고하면, 페이지가 새로고침 되거나해서, 리렌더링 되면, 폰트 적용이 잘 될 때가 있다.

    - 맞는진 모르겠는데, id 값을 만들어서, id값으로 참조하니깐, 버그는 없다.

    - [CSS 폰트 이슈포스팅](https://d2.naver.com/helloworld/4969726)

    - [폰트 크기 단위](https://dahanweb.tistory.com/30)

    - [좋은 텍스트란 ?](http://koreawebdesign.com/typography-for-webdesign/)

- [X] 인트로페이지 내용채워넣기

+ [Reactjs-popUp 라이브러리 가이드](https://react-popup.elazizi.com/)

- [X] 다크모드 기능 (시간이...되면)

🍒 참고사이트

+ [내가 사용한 가이드](https://ichi.pro/ko/react-peulojegteue-dakeu-modeu-chuga-37080865985200)

+ [다크 모드 컬러 가이드 1](http://icunow.co.kr/guide-darkmode/)

+ [다크 모드 컬러 가이드 2](https://brunch.co.kr/@blckschrl/57)


</div>
</details>

## 🍒 보완해 볼 것

+ `워드클라우드` 활용해보기
+ `D3 라이브러리`로 결과를 다이나믹하게 보여주기
+ 반응형 페이지로 개선하기

## 🍒 느낀 점

프로젝트 진행 전

+ `와이어프레임`의 중요성 --> 프로젝트의 방향성을 잡아줬다.
 
+ `figma`같은, 웹 디자인 협업 툴 같은 걸, 다음 프로젝트 진행 시 사용해봐야겠다. [Figma 링크](https://www.figma.com/)  

+ 전체적인, 나의 서비스의 `폰트`, `컬러` 정도를 잡고, 들어가는 것도, 프로젝트의 제작시간을 크게 단축 시킬 수 있다는 걸 알았다.

프로젝트 진행 중

+ 전체적인 프로젝트 일정이 정해지고, 그날 그날의 할당량이 생겼다면 우선적으로 그 사항을 해결한다.
+ 체력분배를 잘하는 것이 중요 --> 처음에 너무 달리면, 중후반 쯤 `번 아웃`이 올 수 있다
+ 변수나, 메소드를 하나를 정해도, 추후 `10년 뒤에` 봐도, 내가 이 코드를 봐도 이해할 수 있도록 정하는 것이 중요하다고 했다. 

프로젝트 진행 후

+ 내가 구현한 코드들이, 구현할 때는, 정신없어서 보지 못한, 불필요한 코드가 있을 수 있다.
+ `리팩토링` 과정이, 필요함을 알게 됬다.
+ 나의 프로젝트를 대략적으로 소개하는 `README 파일`을 작성을 항상 잘 정리해 놓는 것이 좋다.
 
 
<br />

<div align="center">

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fyoungminss%2Freact_psychology_test&count_bg=%23F5DF4D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)

</div>





 
