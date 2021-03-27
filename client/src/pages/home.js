import React, { useState, useEffect } from 'react';
import {Table} from 'react-bootstrap';


function HomePage() {
    const [coins, setCoins] = useState([{"code":"KRW-BTC"}]);
    const [resData, setResData] = useState();
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
    useEffect(() => {
        ws.onmessage = (evt) => {
            reader.onload = () => {
                var result = JSON.parse(reader.result)
                var result = coins.findIndex(x => x.code == result.code)
                if (result == -1){
                    setCoins(prev => [...prev, {
                        "code": result.code,
                        "price": result.trade_price
                    }])
                    console.log(coins)
                }
                
            }
            try {
                reader.readAsText(evt.data);
            }
            catch {
                
            }
        }
    })
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
                    <tr>
                        <td>{coins.map(coin=> coin.code)}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
};

export default HomePage;