# User List Search 컴포넌트

Vite + React + JavaScript + Tailwindcss\*\* 기술 스택을 활용한 User List Search 컴포넌트 제작

---

## 배포 URL (Netlify)

[3주차 과제](https://vocal-valkyrie-a7192a.netlify.app/)

---

## 컴포넌트 및 페이지

### Stateless Components

- Card.jsx
- SearchedList.jsx
- SearchForm.jsx

### Stateful Components

- SearchCardListServer.jsx
  - fetch 쿼리를 통한 로컬 서버 유저 검색
- SearchCardListLocal.jsx
  - 로컬 .json 데이터 fetch 후 필터를 통한 유저검색

---

## 과제 회고

바닐라 프로젝트때 데이터 파싱 작업과 리액트 수업을 통해 계속 경험이 쌓여서 그런지 과제는 무난하게 마무리 한 것 같다.

처음 작업할때는 강사님이 공유 주신 로컬 서버를 컴포넌트에서 fetch 하고,  
상태가 있는 함수 바디에서 쿼리를 받아와서 인풋 value 상태에 초기 값으로 넣어서  
과제 요구 사항에 맞게 구현한 것 같다.

그러나 배포 사이트에서 확인 가능하게 하려는 목적으로 더미 데이터를 fetch 해와서 기능 구현할때 놀라운(?) 경험을 하게 됐는데,  
검색을 하다보니 input 검색한 value 값을 실시간으로 쿼리에 업데이트가 가능하다는 것이였다.  
잘 알던건 아니지만 그래도 쿼리가 변경되거나 하려면 새로고침이 필수라고 생각하고 있었는데,  
검색할때마다 브라우저 검색창이 실시간으로 변경되는 것을 보니 참으로 놀라웠다.
