# 🚀 프리온보딩 프론트엔드 인턴십 [12th] - 2Week

### 🗓️ 진행 기간

### 2023.08.29 ~ 2023.09.01

</br>

## 배포 링크

[2주차 과제 링크](https://pre-onboarding-12th-2-drab.vercel.app/repos/facebook/react/issues)

</br>

## 개발 환경

- Environment  
  ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)
  ![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
  ![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)
- Development  
  ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)
  ![react-router-dom](https://img.shields.io/badge/react--router--dom-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
  ![Styled-Components](https://img.shields.io/badge/styled--components%20CSS-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white)
  [![Axios](https://img.shields.io/badge/Axios-00bfff?style=for-the-badge&logo=axios&logoColor=white)](https://github.com/axios/axios)
  [![@uiw/react-markdown-preview](https://img.shields.io/badge/@uiw/react--markdown--preview-00bfff?style=for-the-badge&logo=react&logoColor=white)](https://github.com/uiwjs/react-markdown-preview)

</br>

## 프로젝트 구조

```
📦src
 ┣ 📂components
 ┃ ┣ 📂Layout
 ┃ ┃ ┣ 📜Header.jsx
 ┃ ┃ ┗ 📜Loading.jsx
 ┃ ┗ 📜IssueItem.jsx
 ┣ 📂context
 ┃ ┗ 📜IssueContext.jsx
 ┣ 📂pages
 ┃ ┣ 📜IssueDetail.jsx
 ┃ ┣ 📜IssueList.jsx
 ┃ ┗ 📜NotFound.jsx
 ┣ 📂router
 ┃ ┣ 📜Root.jsx
 ┃ ┗ 📜Router.jsx
 ┣ 📂styles
 ┃ ┗ 📜GlobalStyle.jsx
 ┣ 📂utils
 ┃ ┣ 📂apis
 ┃ ┃ ┗ 📜issues.js
 ┃ ┣ 📂urls
 ┃ ┃ ┗ 📜url.js
 ┃ ┗ 📜dateToKorea.js
 ┣ 📜App.css
 ┣ 📜App.js
 ┣ 📜index.css
 ┗ 📜index.js
```

</br>
## 프로젝트 설치 및 실행

프로젝트 패키지 설치

```
npm install
```

프로젝트 실행

```
npm start
```

</br>

## ✨ 주요 기능 목표 및 구현 설명

### 이슈 목록 화면

#### 구현

- **이슈 목록 가져오기 API 활용**  
  → `Axios` 라이브러리 사용  
  → contextAPI 사용하여 issueContext의 state와 dispatch함수를 가져와서 컴포넌트 상태관리  
  → 페이지가 마운트되면 useEffect훅 사용으로 loadMore함수를 호출하여 초기 issue데이터 불러옴
- **open 상태의 이슈 중 코멘트가 많은 순으로 정렬**  
  → getIssueList api 함수 호출시 query params로 sort:”comments”, per_page:20, page, state:”open”, direction: 'desc', 설정
- **각 행에는 '이슈번호, 이슈제목, 작성자, 작성일, 코멘트수'를 표시**  
  → issue 상세페이지에서 재사용할 수 있음으로 issueItem으로 컴포넌트 생성  
  → issueList에서 받은 issue에 객체에서 number, title, comments, user, created_at 을 각각의 변수로 추출해서 할당  
  → 작성일은 Date객체로 년(getFullYear), 월(getMonth()+1), 일(getDate()) 메서드 사용해서 날짜 형식 변환
- **다섯번째 셀마다 광고 이미지 출력**  
  → 5번째 셀이 index값으로는 4니까… issue를 보여주면서 index값을 사용하여 각 4번째 이슈마다 광고를 출력  
  {index >0 && index % 4 === 3 } (index가 3,7,11,15…일때)
- **화면을 아래로 스크롤 할 시 이슈 목록 추가 로딩(인피니티 스크롤)**  
  → `useEffect`로 윈도우 스크롤 이벤트를 감지해서 페이지 맨 아래에 가까워지면 loadMore 함수를 호출하여 추가issue를 불러옴

</br>

### 이슈 상세 화면

#### 구현

- **이슈의 상세 내용 표시**  
  → `useEffect`로 `getIssueDetail` api함수를 호출해서 issue 상세정보 가져옴  
  → issue 상태가 없으면 Loading 표시  
  → 마크다운 렌더링을 @uiw/react-markdown-preview 라이브러리 사용
- **'이슈번호, 이슈제목, 작성자, 작성일, 코멘트 수, 작성자 프로필 이미지, 본문' 표시**  
   → 이슈번호, 이슈제목, 작성자, 작성일, 코멘트 수는 issue리스트에 보여지는 것과 동일하므로 재사용  
   → 프로필 이미지, 본문은 상세페이지 api에서 받아온 데이터사용

  </br>

---

### 공통 헤더

#### 구현

- **두 페이지는 공통 헤더를 공유합니다.**  
  → Header를 상단에 두고 하위 라우터 컴포넌트를 Outlet으로 두어 issue리스트페이지와 issue상세 페이지 모두 공통으로 헤더 공유
- **헤더에는 Organization Name / Repository Name이 표시됩니다.**  
  → 하드코딩으로 표시

</br>

---

### ‼️ 필수 요구사항

### 에러 처리

#### 구현

- **에러 화면 구현**  
  → `createBrowserRouter`의 `errorElement` 사용시 error 발생하면 error페이지로 이동

### 데이터 요청 중 로딩 처리

#### 구현

- **데이터 요청 중 로딩 표시**  
  → `context api`에서 loding을 useState를 사용하여 상태 관리
