import { px2remTransformer, StyleProvider } from '@ant-design/cssinjs'
import { ConfigProvider } from 'antd'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// 启用px2rem功能
// 只需开启，无需配置
// https://ant-design.antgroup.com/docs/react/compatible-style-cn#rem-%E9%80%82%E9%85%8D
const px2rem = px2remTransformer()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <ConfigProvider>
      <StyleProvider transformers={[px2rem]}>
        <App />
      </StyleProvider>
    </ConfigProvider>
  </>,
)
