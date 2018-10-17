# TUI Bedfordshire Hackathon PubSub Server
> A simple pubsub server that contains fake selling data for one of the hackathon scenarios

![alt text](https://image.ibb.co/k1WXRL/Screen-Shot-2018-10-17-at-12-30-02.png "hackathon PubSub")

### Hackathon Project
- Hackathon Documentation - [https://github.com/gclssvglx/tui-beds-uni-hackathon](https://github.com/gclssvglx/tui-beds-uni-hackathon)
- Scenario Documentation - [https://github.com/gclssvglx/tui-beds-uni-hackathon/blob/master/scenarios/where-next.md](https://github.com/gclssvglx/tui-beds-uni-hackathon/blob/master/scenarios/where-next.md)
- Hackathon Website - [http://tui-bedfordshire-hackathon.com](http://tui-bedfordshire-hackathon.com)

### API Details
- This is websocket pubsub, connect using any websocket client on the front or backend
- There are no credentials
- Example preview - [https://tui-bedfordshire-hackathon-pubsub-server.now.sh](https://tui-bedfordshire-hackathon-pubsub-server.now.sh)
- Websocket connection - `wss://tui-bedfordshire-hackathon-pubsub-server.now.sh/socket.io/`
- Websocket message name (eg, subscription channel) - `sales`
- Feed frequency - Random between 10ms and 1000ms
- Feed content:
```json
{
    "id": NUMERICAL_SALES_ID,
    "source": STRING_AIRPORT_CODE,
    "destination": STRING_AIRPORT_CODE
}
```