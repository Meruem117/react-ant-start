import React from 'react'
import { Steps, Popover, Button, message } from 'antd'

const { Step } = Steps
interface propsType {
    text: string
}

const Content: React.FC<propsType> = (props) => {
    return (
        <div className="text-xl">{props.text}</div>
    )
}

const steps = [
    {
        title: 'Step1',
        description: '生成日志',
        content: <Content text={'生成日志'} />
    },
    {
        title: 'Step2',
        description: 'Flume导出到HDFS',
        content: <Content text={'Flume导出到HDFS'} />
    },
    {
        title: 'Step3',
        description: 'MapReduce分析',
        content: <Content text={'MapReduce分析'} />
    },
    {
        title: 'Step4',
        description: 'Sqoop导出到MySQL',
        content: <Content text={'Sqoop导出到MySQL'} />
    }
]

const customDot = (dot: any, { status, index }: any) => (
    <Popover
        content={
            <span>
                step {index + 1} status: {status}
            </span>
        }
        className="text-lg"
    >
        {dot}
    </Popover>
)

const MapReduce: React.FC = () => {

    const [current, setCurrent] = React.useState(0)

    const next = (): void => {
        setCurrent(current + 1)
    }

    const prev = (): void => {
        setCurrent(current - 1)
    }

    return (
        <div className="flex flex-col space-y-5 w-full h-full">
            <div className="text-2xl font-semibold tracking-wider">MapReduce</div>
            <Steps current={current} progressDot={customDot}>
                {steps.map(item => (
                    <Step key={item.title} title={item.title} description={item.description} />
                ))}
            </Steps>
            <div className="w-full mt-4 px-4">
                {steps[current].content}
                <div className="text-right">
                    {current > 0 && (
                        <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                            上一步
                        </Button>
                    )}
                    {current < steps.length - 1 && (
                        <Button type="primary" onClick={() => next()}>
                            下一步
                        </Button>
                    )}
                    {current === steps.length - 1 && (
                        <Button type="primary" onClick={() => message.success('Processing complete!')}>
                            完成
                        </Button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default MapReduce