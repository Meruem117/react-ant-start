import React, { useState, useEffect, ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { List, Avatar, Button, Spin, BackTop } from 'antd'
import { LinkOutlined } from '@ant-design/icons'
import type { upInfoItem } from '@/models/up'
import { getUps, getUpInfo } from '@/services/up'
import { UP_LIST_SIZE } from '@/constant'

const UpList: React.FC = () => {
  const [upList] = useState<upInfoItem[]>([])
  const [current, setCurrent] = useState<number>(0)
  const [hasMore, setHasMore] = useState<boolean>(true)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    setLoading(true)
    getUpList(current)
    setLoading(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current])

  const getUpList = async (page: number): Promise<void> => {
    if (hasMore) {
      const ups = await getUps(page)
      if (ups.length < UP_LIST_SIZE) {
        setHasMore(false)
      }
      ups.forEach(up => {
        getUpInfo(up.mid)
          .then(res => upList.push(res))
      })
    }
  }

  const onLoadMore = (): void => {
    setCurrent(current + 1)
  }

  const loadMore: ReactElement = hasMore ?
    (<div className='text-center mt-3 h-8'>
      <Button onClick={onLoadMore}>Load More</Button>
    </div>) :
    (<div className='text-left mt-2 pl-2 h-8 text-gray-400 text-lg'>No More Data</div>)

  if (loading) {
    return (
      <div className="flex flex-col h-full w-full justify-center">
        <Spin />
      </div>
    )
  }

  return (
    <div className="h-full w-full pl-16">
      <List
        itemLayout="horizontal"
        dataSource={upList}
        loadMore={loadMore}
        renderItem={up => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Link to={`/space/${up.mid}`}>
                  <Avatar size={64} src={up.face} className="cursor-pointer" />
                </Link>
              }
              title={
                <div className="flex h-8">
                  <Link to={`/space/${up.mid}`}>
                    <p className="text-2xl tracking-wider cursor-pointer text-gray-800 hover:text-blue-400">{up.name}</p>
                  </Link>
                  <a href={`https://space.bilibili.com/${up.mid}`} target="_blank" rel="noreferrer" className="inline p-2 cursor-pointer">
                    <LinkOutlined />
                  </a>
                </div>
              }
              description={up.Official.title}
            />
          </List.Item>
        )}
      />
      <BackTop />
    </div>
  )
}

export default UpList
