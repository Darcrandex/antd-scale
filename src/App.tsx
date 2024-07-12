/**
 * @name App
 * @description
 * @author darcrand
 */

import { Button, DatePicker, Divider, Input, InputNumber, Space, Typography } from 'antd'

export default function App() {
  return (
    <>
      <h1 className='font-bold underline text-center text-emerald-400'>Ant Design + Tailwind CSS rem 单位适配方案</h1>

      <p className='m-4 text-center'>
        <span>调整窗口大小，当屏幕宽度大于 768px 时，</span>
        <code className='text-rose-500'>fontSize</code>
        <span>将调整为</span>
        <code className='text-rose-500'>300%</code>
      </p>

      <Divider />
      <Typography.Title>Tailwind CSS</Typography.Title>
      <div className='m-4 p-2 rounded-md text-lg border text-purple-500'>m-4 p-2 rounded-md text-lg</div>

      <Divider />
      <Typography.Title>Ant Design</Typography.Title>

      <Space wrap>
        <Button type='primary'>Click Me</Button>
        <Button type='link'>Some Text</Button>
        <DatePicker.RangePicker />
        <InputNumber prefix='$' />
        <Input />
      </Space>
    </>
  )
}
