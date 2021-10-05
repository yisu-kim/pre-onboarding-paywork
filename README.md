<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://paywork.io/">
    <img src="https://user-images.githubusercontent.com/37607373/131734943-ddd44538-b43c-4ad1-aea9-535a78239a3d.jpg" alt="paywork logo" width=150 />
  </a>

  <h3 align="center">서버와 통신하는 투두 리스트 앱</h3>
  
  <p align="center">
    프리온보딩 코스 Paywork 기업 과제
    <br />
    <br />
    <a href="https://paywork-todo-app.netlify.app/">View Web Demo</a>
  </p>
</p>

<!-- Assignment Requirements -->
<details>
  <summary>📋 과제 요구사항 보기</summary>
  <div markdown="1">

#### 서버

- 서버 URL이 있다는 가정으로 진행해주세요
- Base URL (해당 서버 주소는 작동하지 않는 서버입니다)

  ```jsx
  http://dummy-server.io/
  ```

#### 유의 사항

- ts+react 웹 사이트 혹은 react-native 앱 개발 (react-native도 ts 가능)
- function 단위로 주석 설명
- 디자인 등 따로 설명이 없는 부분은 본인의 재량에 맡깁니다
- redux + redux-saga 사용
  - react-native, redux 모두 처음 시도하여 어려움이 있는 경우, Async storage를 사용 가능하나 감점 있음

#### 요구사항

1. POST 생성

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

2. GET 리스트 불러오기

   - URL

     ```jsx
     ../todo
     ```

   - request

     ```json
     {}
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

3. POST 수정

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
       "msg": "string",
       "content": "string"
     }
     ```

4. POST 체크

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

5. POST 삭제

   - URL

     ```jsx
     ../todo/:id
     ```

   - request

     ```json
     {}
     ```

   - response (200)

     ```json
     {
       "msg": "string"
     }
     ```

  </div>
</details>

## About The Project

<p align="center">
  <img src="https://user-images.githubusercontent.com/37607373/133926828-1f159954-a5bc-4ff5-8dff-c57f3c6f8506.gif" alt="project screenshot" />
</p>

### Todo 목록 조회

<p align="center">
  <img src="https://user-images.githubusercontent.com/37607373/131774162-39baaaaf-8097-48f7-89d5-ed7501c50fea.gif" alt="fetch todo list" />
</p>

### Todo 생성

<p align="center">
  <img src="https://user-images.githubusercontent.com/37607373/131774191-8bb99d27-9ee0-48b4-bf6c-d12d49a39246.gif" alt="add todo" />
</p>

### Todo 수정 완료/취소

<p align="center">
  <img src="https://user-images.githubusercontent.com/37607373/131744635-a5fa86fb-f9e3-4024-b676-b3318b2aa47f.gif" alt="edit todo" />
</p>

### Todo 체크

<p align="center">
  <img src="https://user-images.githubusercontent.com/37607373/131744646-ee055107-0413-4077-a528-de531eaa1976.gif" alt="toggle todo" />
</p>

### Todo 삭제

<p align="center">
  <img src="https://user-images.githubusercontent.com/37607373/131744663-14a60be6-c0d3-4baa-ab6f-238b955e7b10.gif" alt="delete todo" />
</p>

### Built With

- React Native (expo)
- TypeScript
- Redux
- Redux-Saga
- axios

## Getting Started

### Prerequisites

- expo 설치

  ```sh
  npm install -g expo-cli
  ```

- [Android Studio](https://developer.android.com/studio) 설치
- [Android Debug Bridge(adb)](https://developer.android.com/studio/command-line/adb) 설치 확인
- [Android Emulator](https://developer.android.com/studio/run/managing-avds?hl=ko) 생성

### Installation

To install packages:

```sh
yarn install
```

To serve the app:

```sh
yarn run android
```

안드로이드 에뮬레이터와 mock server(port 3000)가 실행되는 로컬 호스트 연결

```sh
adb reverse tcp:3000 tcp:3000
```

## Features

- json-server로 mock 서버 구성
- Todo REST API 구현
  - Todo 생성
    ```
    POST /todo
    ```
  - Todo 목록 조회
    ```
    GET /todo
    ```
  - Todo 수정(체크)
    ```
    PATCH /todo/:id
    ```
  - Todo 삭제
    ```
    DELETE /todo/:id
    ```
- redux로 전역 상태 관리
- redux saga 미들웨어로 mock 서버와 비동기 작업 처리

## Additional Features

- 데모 확인을 쉽게 하기 위해 웹 배포
