# coupang 로그인 UI 개선 프로젝트

Vite + React + JavaScript + Tailwindcss\*\* 기술 스택을 활용한 coupang 로그인 UI 개선 프로젝트

---

## 배포 URL (Netlify)

[2주차 과제](https://jandi-react-homework-week2.netlify.app/)

---

## 폴더 구조

```
|── public/
|   └── icon/                                  # 정적 아이콘 리소스
|── src/
|   |── components/                            # 페이지 조립에 필요한 컴포넌트 폴더
|   |── demo/                                  # 컴포넌트 확인을 위한 데모 페이지 폴더 (개발 환경에서 확인 가능)
|   |── pages/                                 # 컴포넌트들을 모아서 만든 페이지 폴더
|   |── styles/
|   |      └── common/
|   |             |── ally.css
|   |             |── base.css
|   |     └── main.css                         # 공통 css
|   |── app.jsx
|   └── main.jsx
|── .gitignore
|── .prettierrc.toml
|── bun.lock
|── eslint.config.js
|── index.html                                 # 메인 페이지
|── jsconfig.json
|── package.json
|── README.md
|── vite.config.js
```

---

## 컴포넌트 및 페이지

### Stateless Components

- logo.jsx
- icon.jsx
- tooltip.jsx
- form-button.jsx
- form-input.jsx
- form-checkbox.jsx
- icon-input.jsx

### Stateful Components

- auto-signin-checkbox.jsx
  - 자동 로그인 checked 상태
  - checked 상태를 활용한 tooltip 제어
- login-form.jsx
  - input 컴포넌트 value 상태
  - input 컴포넌트 error 상태
  - input 컴포넌트 유효성 검사
  - input 컴포넌트 유효성 검사를 활용한 로그인 button 제어

### Page

- signin.jsx

---

## 과제 회고

익숙하지 않은 방식으로 UI를 구현하려다 보니 생각보다 훨씬 많은 시간이 걸렸다.  
여러 시행착오를 겪었고, 특히 스타일 재활용과 유지보수를 고려한 Tailwind 코딩 방식이 가장 어려웠다.  
하지만 강사님의 친절하신 답변 덕분에 어느정도 방향을 잡을 수 있었고, 부족하지만 열심히 활용해 보았다.

개인적으로 Bootstrap이나 Tailwind CSS 같은 CSS 프레임워크를 부정적으로 보는 시각이 있었지만,  
이번 과제를 진행하면서 직접 사용해보니 왜 React와 Tailwind CSS가 궁합이 좋은지 확실히 체감할 수 있었다.  
네이티브 CSS로 구현했다면 클래스명을 고민하고 스타일 파일을 생성하느라 시간이 배로 걸렸을 것 같다.

그리고 수없이 들어왔던 ‘컴포넌트’라는 개념을 실제로 제대로 활용해보면서 어느 정도 답답함이 해소된 느낌이다.

아직 많이 부족한 것 같고, 더 열심히 공부 해야겠다는 생각을 하게 된 2주차 과제였다.
