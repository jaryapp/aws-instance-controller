# AWS Web Controller

## 프로젝트 개요

Web 페이지를 통해 .Dynamic Virtual Resource Managment 프로그램을 구현

## 👨‍💻 Developer

![조정제](https://img.shields.io/badge/충북대학교_소프트웨어학과-조정제-blue)

## APIs

- 인스턴스 목록 API
- available zones 목록 API
- 인스턴스 시작 API
- available regions 목록 API
- 인스턴스 중지 API
- 인스턴스 생성 API
- 인스턴스 재시작 API
- 이미지 목록 API
- 보안 그룹 목록 API

## ⚡ npm scripts

### 실행

```
git clone https://github.com/jaryapp/aws-instance-controller.git
cd aws-instance-controller
npm install
npm run dev

open webbrowser and access http://localhost:3000
```

### 빌드 & 배포

```
npm run build
npm start
```

### 사용방법

- http://localhost:3000에 최초 접속 또는 토큰 만료시 /config 페이지로 자동으로 이동됨
- "/" (메인페이지) - 인스턴스 목록이 나타남(인스턴스를 마우스로 클릭하여 실행/중지/재시작/상세정보 확인)
- "/images" (이미지페이지) - ec2에 등록된 이미지 목록이 나타남(마우스로 클릭하여 상세정보 확인)
- "/zones" (zones페이지) - available zones 목록확인
- "/regions" (regions페이지) - available regions 목록확인
- "/config" (설정페이지) - aws 액세스키 값을 복사하여 입력

## 🔗 Reference

- https://www.notion.so/jaryintro/AWS-Web-Controller-8287a8d46d6540b79f6d3cb3232aafbd
- https://youtu.be/2V19P_wz2fs
- https://aws.amazon.com/ko/sdk-for-node-js/
