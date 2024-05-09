const mqtt = require("mqtt");
// 连接 mqtt 服务
const client = mqtt.connect("mqtt://test.mosquitto.org");

// 监听连接的事件
client.on("connect", () => {
  console.log('连接了');
  // 这块先订阅，
  client.subscribe("presence", (err) => {
    if (!err) {
      client.publish("presence", "Hello mqtt");
      client.publish("presence", "Hello");
      client.publish("presence", "Hello1");
      client.publish("presence", "Hello2");
    }
  });
});



client.on("message", (topic, message) => {
  // message is Buffer
  console.log('监听到的消息主题', topic);
  console.log(message.toString());
  // client.end();
});
