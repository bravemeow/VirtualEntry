import React, { useState, useEffect } from 'react';
import {Table} from 'react-bootstrap';


function HomePage() {
    let coins = [];
    useEffect(() => {
        const dataToUpbit = '[{"ticket":"UNIQUE_TICKET"},{"type":"ticker","codes":["KRW-BTC","KRW-ETH"]}]'
        const url = 'wss://api.upbit.com/websocket/v1';
        const ws = new WebSocket(url);
        const reader = new FileReader();
        function onOpenWs() {
            ws.onopen = () => {
                console.log("Connected!");
                ws.send(dataToUpbit);
                ws.onmessage = (evt) => {
                    reader.onload = () => {
                        var resData = JSON.parse(reader.result)
                        var tmpData = {}
                        tmpData['code'] = resData['code']
                        tmpData['price'] = resData['trade_price']
                        let result = coins.filter(coin => {
                            return coin.code == tmpData.code
                        })
                        if (result==''){
                            coins.push(tmpData)
                            
                        }
                        coins.map((coin)=> {
                            if (coin['code'] == tmpData['code']){
                                coin['price'] = tmpData['price']
                            }
                        })
                        // console.log(coins)
                        
                    }
                    try {
                        reader.readAsText(evt.data);
                    }
                    catch {
                        
                    }
                }
            }
        }
        onOpenWs();
    }, []);
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
                </tbody>
            </Table>
        </div>
    )
};

export default HomePage;