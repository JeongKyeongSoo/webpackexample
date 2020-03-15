# Webpack

https://www.youtube.com/watch?v=cp_MeXO2fLg&list=PLuHgQVnccGMChcT9IKopFDoAIoTA-03DA

## 설치
```
npm install webpack webpack-cli
npm install npx
```

## 빌드
```
webpack.config.js
npx webpack
```

## 모듈

```
<script type="module">
    import hello_word from "./src/hello.js"
    import world_word from "./src/world.js"
    document.querySelector("#root").innerHTML = hello_word + ' ' + world_word;
</script>
```

## CSS Bundle
```
npm install --save-dev style-loader css-loader
```

## HTML Plugin
```
npm install -D html-webpack-plugin
```

## 모듈
- hot module replacement
- code splitting
- lazy loading : 사용할때 로딩
