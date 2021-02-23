# 💻 프로젝트 개요

- REACT-Psychology-Test

[Requirements Report](https://www.notion.so/7e0fdcd157e544cdbfc1d56ba45f414e)

## 1 day report
- 환경설정
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


📢 README 정리 해야함..



 