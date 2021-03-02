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


### ★ 해결할 점
- 결과페이지에서, 통신 쪽으로 문제가 있는 것 해결해야 한다.


## 5️⃣ day

### 설치
- npm install --save reactstrap react react-dom : 리액트스트랩
- npm install react-bootstrap bootstrap
- npm install --save bootstrap : 부트스트랩 (리액트스트립 내부적으로는 부트스트랩을 포함하고 있지 않다고해서 설치해야한다고 설명하는 듯)
    + import 'bootstrap/dist/css/bootstrap.min.css'; (index.js 에다가

### Day Note 
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

## 6️⃣ day

### Day Note

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
    + 그래서, 예를 들어(<div className="text-center">) 이면, 그 안에있는 요소들은, 가운데 정렬이 되는 듯 하다.


## 7️⃣ day

### 설치

- $ npm install -g npm-check
    + npm-check는 의존성 관리의 불편함을 덜어주는 cli 
    + npm-check : 실행
- $ npm install --save
    + bootstrap
    + react-chartjs-2
    + reactstrap
    + chart.js

### 배포

nginx 를 이용한 Azure VM에 내 프로젝트 배포 [참고문헌1](https://www.hanumoka.net/2019/12/29/react-20191229-react-nginx-deploy/react_psychology_test/react_psychology-test/build)
- 필요한 것
    + 내 Azure서버, DNS Name & Password
- 절차
    + gitlab(또는 github)에 있는, 내 git repo를 Azure계정으로 접속해서, git pull로 가져오기
    + npm run build로, 내 프로젝트를 build (프로젝트 내에, build 폴더 생김 확인)
    + `참고문헌`에 나와있는대로 절차를 밟는다.
    + host가 되고 있는 것을 확인하고, 나의, Azure DNS Name을, url에 쳐서 접근해본다.


## 8️⃣ day

### Day Note
🍒 progress bar 의 % 현황을 추가했다.
    + Math.round(체크항목/전체항목 * 100) 으로 구현했다.
📢 README 정리 해야함..



 