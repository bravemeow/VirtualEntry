import React, {useState, useEffect} from 'react';


function HomePage() {
    const [dataFromUpbit, setDataFromUpbit] = useState('');
    const dataToUpbit = '[{"ticket":"test"},{"type":"ticker","codes":["KRW-BTC"]}]'
    const url = 'wss://api.upbit.com/websocket/v1';
    const ws = new WebSocket(url);
    const reader = new FileReader();
    useEffect(() => {
        ws.addEventListener('open', () => {
            ws.send(dataToUpbit);
            console.log("연결완료")
        });
        ws.addEventListener('message', (msg) => {
            reader.readAsText(msg.data);
            reader.onload = () => {
               setDataFromUpbit(JSON.parse(reader.result)); 
            };
            console.log("메세지도착");
        });
    },[]); 
    
    return (
        <div className="home">
            {dataFromUpbit.trade_price}
        </div>
    )
}

export default HomePage;