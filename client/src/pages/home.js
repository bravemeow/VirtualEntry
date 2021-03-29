import React, { useState, useEffect, useRef } from 'react';
import {Table} from 'react-bootstrap';


function HomePage() {
    
    const dataToUpbit = '[{"ticket":"UNIQUE_TICKET"},{"type":"ticker","codes":["KRW-BTC","KRW-ETH"]}]'
    const url = 'wss://api.upbit.com/websocket/v1';
    const ws = new WebSocket(url);
    const reader = new FileReader();
    useEffect(() => {
        ws.onopen = () => {
            console.log("Connected!");
            ws.send(dataToUpbit);
        }
    }, []);


    const [coins, setCoins] = useState([]);
    const latestCoins = useRef(coins);
    useEffect(() => {
        latestCoins.current = coins
        ws.onmessage = (evt) => {
            reader.onload = () => {
                var datas = JSON.parse(reader.result)
                var result = latestCoins.current.find(x => x.code == datas.code)
                if (!result){
                    setCoins(prev=>[...prev, datas])
                }
            }
            try {
                reader.readAsText(evt.data);
            }
            catch {
            }
        }
    },[coins])
    return (

        <div className="home">
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>코인명</th>
                        <th>현재가</th>
                        <th>수익률</th>
                    </tr>
                </thead>
                <tbody>
                    {coins.map((coin, key) => {
                        return(
                            <tr key={key}>
                                <td>{coin.code}</td>
                                <td>{coin.trade_price}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
};

export default HomePage;

