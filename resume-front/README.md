# Resume Front-end

### 기술스택
- Vue 3.x
- Vuetify 3 Alpha([Link](https://next.vuetifyjs.com/en/getting-started/installation))  
  Vue3 에 맞춰 Vuetify도 Vue3를 지원하는 버전이 나옴. 알파버전이긴 하지만 써보자
- Typescript 4.1.6
- 나머지야 뭐... 일반적인 것들

### Environment
- node 16.x  
  nvm은 알아서 설치하자
  ```bash
  nvm install 16
  nvm use 16
  ```
- node-sass가 deprecated 되었다 함. sass로 대체  
  여전히 node-sass를 써도 되지만 node 버전에 따라 빌드 오류가 짜증나 안 쓸란다.
  ```bash
  npm uninstall node-sass
  npm install sass
  ```

### Build
- local  
  ```bash
  git clone {this repo}
  cd {this repo}/resume-front
  npm install
  npm run serve
  ```
- build  
  ```bash
  npm run build
  ```
