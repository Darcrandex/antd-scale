# Ant Design + Tailwind CSS rem 单位适配方案

> [仓库地址 antd-scale](https://github.com/Darcrandex/antd-scale)

---

> 在一些业务场景下，需要将页面的缩放大小根据视口进行动态调整。而若项目中同时使用 `tailwind` 和 `antd` 时，需要结合两者的使用情况

以下为官方提供的 rem 方案

- [tailwind base font-size](https://github.com/tailwindlabs/tailwindcss/discussions/6974)
- [antd rem 适配](https://ant-design.antgroup.com/docs/react/compatible-style-cn#rem-%E9%80%82%E9%85%8D)

结合两者，只需启用 antd rem 功能，并在全局 css 中动态配置 html 的字体大小即可。

```tsx
// src/main.tsx

import { px2remTransformer, StyleProvider } from '@ant-design/cssinjs'
const px2rem = px2remTransformer()

<StyleProvider transformers={[px2rem]}>
  <App />
</StyleProvider>
```

```css
/* src/index.css */

@media screen and (min-width: 768px) {
  html {
    @apply text-[300%];
  }
}
```
