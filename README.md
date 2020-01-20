# react-blog-api



## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org


## RESTful API

参考：[实现 RESTful API](https://eggjs.org/zh-cn/tutorials/restful.html)

### 获取文章列表

+ `GET /default/posts`
+ 响应状态码：200
+ 响应体：

```json

```

### 获取单个文章

+ `GET /default/posts/57ea2`
+ 响应状态码：200
+ 响应体：

```json

```

### 创建文章

+ `POST /default/posts`
+ 响应状态码：200
+ 响应体：

```json

```

### 更新文章

+ `PUT /default/posts/57ea2`
+ 响应状态码：200
+ 响应体：

```json

```

### 删除文章

+ `DELETE /default/posts/57ea2`
+ 响应状态码：200
+ 响应体：

```json

```
