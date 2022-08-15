# Team_04_Temp_FE

## 🤲🏻 프로젝트 소개

<div align="center"><img src="https://user-images.githubusercontent.com/93169519/184494576-9c85b5b1-c24a-4c89-956d-3babffa724b5.png" width="400"></div>
<br>

### Sports Family : SFAM

동네에서 같이 운동할 사람을 모아 팀을 만들고, 근처의 다른 팀들과 스포츠 경기를 진행할 수 있는 커뮤니티 서비스입니다.


## 🏠 서비스 주소

> https://www.dongkyurami.link/


## 🛠 기술 스택

<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white"> <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white">
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
<img src="https://img.shields.io/badge/recoil-000000?style=for-the-badge&logo=recoil&logoColor=white">
<img src="https://img.shields.io/badge/emotion-DB7093?style=for-the-badge&logo=emotion&logoColor=white">
<img src="https://img.shields.io/badge/axios-56347C?style=for-the-badge&logo=emotion&logoColor=white">


## 📝 프로젝트 구조

![architecture](https://user-images.githubusercontent.com/93169519/184494566-1fa02ac2-995e-413c-b901-20f0f6d8303e.png)


## 📝 폴더 구조

```
┣ src
┃ ┣ api
┃ ┃ ┣ axiosInstances.ts
┃ ┃ ┗ kakaoMapApi.ts
┃ ┣ assets
┃ ┃ ┣ icons
┃ ┃ ┃ ┗ ...
┃ ┃ ┗ logo
┃ ┃ ┃ ┗ ...
┃ ┣ components
┃ ┃ ┣ Avatar
┃ ┃ ┣ Badge
┃ ┃ ┣ Button
┃ ┃ ┣ ChatListItem
┃ ┃ ┣ ChatReceiver
┃ ┃ ┣ ChatSender
┃ ┃ ┣ Divider
┃ ┃ ┣ Dropdown
┃ ┃ ┣ ErrorForm
┃ ┃ ┣ FilterButton
┃ ┃ ┣ Heading
┃ ┃ ┣ Input
┃ ┃ ┣ InviteAcceptance
┃ ┃ ┣ Layout
┃ ┃ ┣ MatchDetail
┃ ┃ ┣ MatchForm
┃ ┃ ┣ MatchList
┃ ┃ ┣ MatchListItem
┃ ┃ ┣ MatchRecordChart
┃ ┃ ┣ MatchResult
┃ ┃ ┣ Message
┃ ┃ ┣ Navigator
┃ ┃ ┣ NotificationListItem
┃ ┃ ┣ Paragraph
┃ ┃ ┣ PieChart
┃ ┃ ┣ ProposalForm
┃ ┃ ┣ ReviewButtonGroup
┃ ┃ ┣ ReviewGroup
┃ ┃ ┣ SignInForm
┃ ┃ ┣ SignUpForm
┃ ┃ ┣ Slider
┃ ┃ ┣ SportsIcon
┃ ┃ ┣ TeamBadge
┃ ┃ ┣ TeamForm
┃ ┃ ┣ TeamMember
┃ ┃ ┣ UserListItem
┃ ┃ ┗ Welcome
┃ ┣ constants
┃ ┃ ┗ ...
┃ ┣ hooks
┃ ┃ ┗ ...
┃ ┣ interface
┃ ┃ ┗ ...
┃ ┣ pages
┃ ┃ ┣ chatlist
┃ ┃ ┣ matches
┃ ┃ ┣ notification
┃ ┃ ┣ signin
┃ ┃ ┣ signup
┃ ┃ ┣ team
┃ ┃ ┣ user
┃ ┃ ┣ \_app.tsx
┃ ┃ ┣ \_document.tsx
┃ ┃ ┗ index.tsx
┃ ┣ public
┃ ┃ ┗ favicon.ico
┃ ┣ recoil
┃ ┃ ┗ atoms.ts
┃ ┣ styles
┃ ┃ ┣ common.ts
┃ ┃ ┣ global.ts
┃ ┃ ┣ reset.ts
┃ ┃ ┗ theme.ts
┃ ┗ types
┃ ┃ ┣ custom.d.ts
┃ ┃ ┗ emotion.d.ts
```


## UI 및 기능

### 시작 페이지

<img width="250" alt="image" src="https://user-images.githubusercontent.com/61747121/184539280-782d40c5-6959-4c71-8f54-8bb9b7b90c2e.png">

### 로그인/회원가입
|회원가입|로그인|
|---|---|
|<img width="250" alt="image" src="https://user-images.githubusercontent.com/61747121/184539341-b2561e7d-5c6d-4f6f-b02d-7e4148843e28.png">|<img width="250" alt="image" src="https://user-images.githubusercontent.com/61747121/184539419-c7428d05-983d-438d-b4c2-11eece5ffc60.png">|

### 매칭
|공고 조회|공고 상세|공고 작성|
|---|---|---|
|<img width="250" alt="image" src="https://user-images.githubusercontent.com/61747121/184540064-299fddae-c5be-4d07-bef8-5c184cc2e4de.png">|<img width="250" alt="image" src="https://user-images.githubusercontent.com/61747121/184540120-0d77aa14-a95c-4a1d-8ef5-165c391e942a.png">|<img width="250" alt="image" src="https://user-images.githubusercontent.com/61747121/184540407-03801eda-3aa3-4ff1-8121-173455213ab8.png">| 


### 팀 생성/팀원 초대
|팀 생성|팀원 초대|
|---|---|
|<img width="250" alt="image" src="https://user-images.githubusercontent.com/61747121/184540441-7a6cca37-ea83-4cd6-9bee-43e6e06fae64.png">|<img width="250" alt=“image” src="https://user-images.githubusercontent.com/61747121/184542360-d638139b-63c2-4e38-8276-31a178219fba.png">|


### 채팅
|채팅 조회|채팅 수락/거절|1:1 채팅|
|---|---|---|
|<img width="250" alt="image" src="https://user-images.githubusercontent.com/61747121/184539537-e2eec85c-01f8-4b82-953d-798103d318bd.png">|<img width="250" alt="image" src="https://user-images.githubusercontent.com/61747121/184539682-0430e7e1-c6c7-46c8-a6cf-26721561b4e8.png">|<img width="250" alt="image" src="https://user-images.githubusercontent.com/61747121/184539769-f8fe17c5-4e65-4243-8dc5-88c59766ed87.png">|

### 결과 기입
|경기 결과 기입|
|---|
|<img width="250" alt="image" src="https://user-images.githubusercontent.com/61747121/184539846-0ab92a58-18b4-4d9a-a11c-680d3a245564.png">|

### 후기 작성
|경기 후기 작성|
|---|
|<img width="250" alt="image" src="https://user-images.githubusercontent.com/61747121/184539931-9bccb0e5-5897-425a-ab05-44d76f88c9ab.png">|

### 프로필
|개인 프로필|팀 프로필|
|---|---|
|<img width="250" alt="image" src="https://user-images.githubusercontent.com/61747121/184540164-691e23d1-8694-4209-8f9f-aa0a27ec2f54.png">|<img width="250" alt="image" src="https://user-images.githubusercontent.com/61747121/184540185-3784037f-b2a0-4098-ab3f-c7a3958e3654.png">|


## 🔎 프로젝트 실행 방법
```
git clone https://github.com/prgrms-web-devcourse/Team_04_SFam_FE.git
yarn install
yarn dev
```

## 📄 프로젝트 노션
[동규라미 팀 노션](https://www.notion.so/backend-devcourse/04-72b1309225664df7911a8ee348dd4e9a)


## 👬 팀 소개

### [Frontend]

<table>
  <tr>
    <td>
        <a href="https://github.com/chmini">
            <img src="https://avatars.githubusercontent.com/u/39076382?v=4" width="100px" />
        </a>
    </td>
    <td>
        <a href="https://github.com/kyubumjang">
            <img src="https://avatars.githubusercontent.com/u/33307948?v=4" width="100px" />
        </a>
    </td>
    <td>
        <a href="https://github.com/dustmddus">
            <img src="https://avatars.githubusercontent.com/u/82739503?v=4" width="100px" />
        </a>
    </td>
    <td>
        <a href="https://github.com/qq8721443">
            <img src="https://avatars.githubusercontent.com/u/61747121?v=4" width="100px" />
        </a>
    </td>

  </tr>
  <tr>
    <td><b>Papa (김창민)</b></td>
    <td><b>Lawrence (장규범)</b></td>
    <td><b>Claire (신승연)</b></td>
    <td><b>Thompson (홍정기)</b></td>
  </tr>
  <tr>
    <td><b>Product Owner</b></td>
    <td><b>Scrum Master</b></td>
    <td><b>Developer</b></td>
    <td><b>Developer</b></td>
  </tr>
</table>
<br/>

### [Backend]

<table>
  <tr>
    <td>
        <a href="https://github.com/HyoungUkJJang">
            <img src="https://avatars.githubusercontent.com/u/50834204?v=4" width="100px" />
        </a>
    </td>
    <td>
        <a href="https://github.com/HYEBPARK">
            <img src="https://avatars.githubusercontent.com/u/35947674?v=4" width="100px" />
        </a>
    </td>
    <td>
        <a href="https://github.com/midasWorld">
            <img src="https://avatars.githubusercontent.com/u/93169519?v=4" width="100px" />
        </a>
    </td>
    <td>
        <a href="https://github.com/whyWhale">
            <img src="https://avatars.githubusercontent.com/u/67587446?v=4" width="100px" />
        </a>
    </td>
    <td>
        <a href="https://github.com/pjh612">
            <img src="https://avatars.githubusercontent.com/u/62292492?v=4" width="100px" />
        </a>
    </td>

  </tr>
  <tr>
    <td><b>Crong (김형욱)</b></td>
    <td><b>Hyeb (박혜빈)</b></td>
    <td><b>Mark (곽동운)</b></td>
    <td><b>Elizabeth (김병연)</b></td>
    <td><b>NULL (박진형)</b></td>
  </tr>
  <tr>
    <td><b>Product Owner</b></td>
    <td><b>Scrum Master</b></td>
    <td><b>Developer</b></td>
    <td><b>Developer</b></td>
    <td><b>Developer</b></td>
  </tr>
</table>
<br/>
