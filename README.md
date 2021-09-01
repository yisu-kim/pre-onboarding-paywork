## 프로젝트 소개

![ci](https://user-images.githubusercontent.com/37607373/131734943-ddd44538-b43c-4ad1-aea9-535a78239a3d.jpg)

# 프리온보딩 코스 Pay Work 기업 과제

<details>
    <summary><STRONG>
       📚 과제 요구사항 보기
        <STRONG></summary>
    <div markdown="1">
<h3>서버 주소를 이용하여 TODO list 구현</h3>

- 서버 URL이 있다는 가정으로 진행해주세요
- Base URL (해당 서버 주소는 작동하지 않는 서버입니다)

  ```jsx
  http://dummy-server.io/
  ```

<h3>유의 사항</h3>

- ts+react 웹 사이트 혹은 react-native 앱 개발 (react-native도 ts 가능)
- function 단위로 주석 설명
- 디자인 등 따로 설명이 없는 부분은 본인의 재량에 맡깁니다
- redux + redux-saga 사용
    - react-native, redux 모두 처음 시도하여 어려움이 있는 경우,  Async storage를 사용 가능하나 감점 있음

<h3>요구사항</h3>

**1. POST 생성**
- URL

  ```jsx
  ../todo
  ```
- request

  ```json
  {
	  "content": "string"
  }
  ```

- response (200)

  ```json
  {
	  "msg": "string"
  }
  ```

**2. GET 리스트 불러오기**
- URL

  ```jsx
  ../todo
  ```
- request

  ```json
  { }
  ```

- response (200)

  ```json
  {
    "count": 2, //integer
    "todoList": [
      {
        "id": "string",
        "content": "string",
        "isCheck": true, //boolean
        "createdAt": "2021-05-26T11:51:05.097Z"
      },
      {
        "id": "string",
        "content": "string",
        "isCheck": false, //boolean
        "createdAt": "2021-05-26T16:15:25.729Z"
      }
    ]
  }
  ```

**3. POST 수정**
- URL

  ```jsx
  ../todo/:id
  ```
- request

  ```json
  {
	  "content": "string"
  }
  ```

- response (200)

  ```json
  {
	  "msg":"string",
	  "content": "string"
  }
  ```
     
**4. POST 체크**
- URL

  ```jsx
  ../todo/:id
  ```
- request

  ```json
  {
	  "isCheck": true //boolean
  }
  ```

- response (200)

  ```json
  {
	  "msg": "string"
  }
  ```

**5. POST 삭제**
- URL

  ```jsx
  ../todo/:id
  ```
- request

  ```json
  { }
  ```

- response (200)

  ```json
  {
	  "msg": "string"
  }
  ```
      
</div>
</details>
<br/><br/>

## 🗂 구현 목록

1. Todo 목록 조회 & Todo 생성/수정/체크/삭제
2. react redux로 전역 상태 관리
3. redux saga 미들웨어로 mock 서버와 비동기 작업 처리
4. TypeScript + React Native

## 💁🏻‍♂ 실행 방법

### 사전 준비

- expo 설치

  ```bash
  npm install -g expo-cli
  ```

- [안드로이드 스튜디오](https://developer.android.com/studio) 설치

- [안드로이드 에뮬레이터](https://developer.android.com/studio/run/managing-avds?hl=ko) 생성

### 설치

```bash
yarn install
```

### 실행

- expo android 실행

  ```bash
  yarn run android
  ```

- 안드로이드 에뮬레이터와 mock server(포트 3000)가 실행되는 로컬 호스트 연결을 위해 아래 명령 실행. [Android Debug Bridge(adb)](https://developer.android.com/studio/command-line/adb) 설치 필요

  ```bash
  adb reverse tcp:3000 tcp:3000
  ```

## 🎥 데모 화면

### Todo List App
![todo list app](https://user-images.githubusercontent.com/37607373/131768548-6f011603-e2a9-4f3f-8aad-ae2280b8dcea.png)

### Todo 목록 조회
![fetch todo list](https://user-images.githubusercontent.com/37607373/131774162-39baaaaf-8097-48f7-89d5-ed7501c50fea.gif)

### Todo 생성
![add todo](https://user-images.githubusercontent.com/37607373/131774191-8bb99d27-9ee0-48b4-bf6c-d12d49a39246.gif)

### Todo 수정 완료/취소
![edit todo](https://user-images.githubusercontent.com/37607373/131744635-a5fa86fb-f9e3-4024-b676-b3318b2aa47f.gif)

### Todo 체크
![toggle todo](https://user-images.githubusercontent.com/37607373/131744646-ee055107-0413-4077-a528-de531eaa1976.gif)

### Todo 삭제
![delete todo](https://user-images.githubusercontent.com/37607373/131744663-14a60be6-c0d3-4baa-ab6f-238b955e7b10.gif)
