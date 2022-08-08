# hexo-order-abbrlink
A [Hexo plugin]() to generate static post link based on post titles.

Increments according to the set sequence number.

## How to install

Add plugin to Hexo:

```
npm install hexo-order-abbrlink --save
```

Modify permalink in config.yml file:

```
permalink: posts/:abbrlink/
```

optional settings:

```
abbrlink:
  start: 1000 # the first id, default 0
```

## Sample

The generated link will look like the following:

```
https://blog.xxx.com/posts/0
https://blog.xxx.com/posts/1
https://blog.xxx.com/posts/2
```

## Thanks

[hexo-abbrlink2](https://github.com/rozbo/hexo-abbrlink2)
