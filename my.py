import requests
import json

URL = 'https://api.upbit.com/v1/market/all'
data = []
r = requests.get(URL)
data = r.json()
with open('code.json', 'w',encoding='utf-8') as json_file:
    json.dump(data, json_file, indent=4 ,ensure_ascii=False )