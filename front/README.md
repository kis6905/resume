# Resume Front-end

### Environment
- Vite
  - Evan You가 개발한 번들러
  - 빌드가 엄청 빠르다
- Vue 3.x
- Vuetify 3 Alpha([Link](https://next.vuetifyjs.com/en/getting-started/installation))  
  Vue3 에 맞춰 Vuetify도 Vue3를 지원하는 버전이 나옴. 알파버전이긴 하지만 써보자
- Typescript
  - Vite + Vue3 project 생성 후 Typescript 설정은 포팅해왔다.
    - Typescript 추가
      ```bash
      npm install typescript
      ```
    - Typescript 설치 후 tsconfig.json 추가
    - shims-{x}.d.ts 파일 추가
- node 16.13.1  
  nvm은 알아서 설치하자
  ```bash
  nvm install 16.13.1
  nvm use 16.13.1
  ```

### Build
- local  
  ```bash
  git clone {this repo}
  cd {this repo}/resume-front
  npm install
  npm run dev
  ```
- build  
  ```bash
  npm run build
  ```
