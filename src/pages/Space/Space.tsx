import React, { Component } from 'react'
import axios from 'axios'

interface stateType {
    up: {
        mid: string,
        name: string
    }[],
    ulist: {
        card: {
            mid: string,
            name: string,
            face: string,
            Official: {
                title: string
            }
        }
    }[]
}

class Space extends Component {
    state: stateType = {
        up: [],
        ulist: []
    }

    render() {
        this.getUpList().then(() =>
            console.log(this.state.up)
        )
        return (
            <div>
                <h1>Space</h1>
            </div>
        )
    }

    initData = (): void => {
        this.getUpList().then(() => {
            const { up } = this.state
            up.map(item => {
                this.getUpInfo(item.mid)
                return item
            })
        })
    }

    getUpList = async (): Promise<void> => {
        try {
            const response = await axios.get(`/api/getUp`)
            this.setState({ up: response.data })
        } catch (error) {
            console.error(error)
        }
    }

    getUpInfo = async (mid: string): Promise<void> => {
        try {
            const response = await axios.get(`/card?mid=${mid}`)
            const res = response.data.data
            const { ulist } = this.state
            ulist.push(res)
        } catch (error) {
            console.error(error)
        }
    }
}

export default Space
