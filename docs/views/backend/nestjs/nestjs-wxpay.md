---
outline: deep
---

# nestjs 接入微信支付

## 一、前置条件准备

### 1.申请商户号（如已有商户号跳过）

- 步骤 1：访问微信支付网址：https://pay.weixin.qq.com/static/applyment_guide/applyment_index.shtml
- 步骤 2：在【接入指引】界面，选择【我有小程序】，然后点击 【接入微信支付】按钮
- 步骤 3：当没有商户号的时候，点击【注册微信支付商户号】
- 步骤 4：填写申请单信息
- 步骤 5：填写商户资料，填写完毕，提交信息，等待审核即可。
- 步骤 6：审核通过后，再次进入步骤一的网址，选择我【我有小程序】，如果已有商户号选择【登录已有商户号】，然后扫码登录即可
- 步骤 7：进入产品中心=》我的产品=》选择对应的【支付产品】申请开通即可（小程序使用 jsapi 权限）。
- 步骤 8: 小程序注册（省略）

### 2.参数准备

```ts
// 这些都需要在微信后台自行申请,[微信开发者平台](https://mp.weixin.qq.com)
appid: string // 小程序ID
mchid: string // 商户号
apiclient_cert.pem // 商户API证书公钥
apiclient_key.pem // 商户API证书秘钥
v3 // 微信支付结果的解密密钥, 需要在开发者平台自行设置 APIv3密钥
```

### 3.安装依赖库

```bash
pnpm add wechatpay-node-v3 nest-wechatpay-node-v3
```

### 4.小程序请求预下单接口

```ts
// 小程序端请求参数
const options = {
        appid: 'xxx',           // 小程序appid
        payer: uuid,            // 微信账号的uuid
        openid: openid,         // 微信账号的uuid
        amount: '',             // 支付金额
        orderNo:'3123123123'    // 关于这个订单编号, 保证唯一即可,这里选择前端生成, 也可后端生成,商户系统内部订单号，只能是数字、大小写字母_-*且在同一个商户号下唯一。 特殊规则：最小字符长度为6,
        description: '这是一段支付描述',
}

// 请求nestjs后台接口拿到相关参数调起微信支付
const res = wx.request(url, method, options)

wx.requestPayment({
    provider: 'wxpay', //支付类型-固定值
    timeStamp: res.data.timeStamp, // 时间戳（单位：秒）
    nonceStr: res.data.nonceStr, // 随机字符串
    package: res.data.package, // 固定值
    signType: res.data.signType, //固定值
    paySign: res.data.paySign, //签名
    success: function (res) {
        // 支付成功
    },
    fail: function (err) {
        // 支付失败
    },
})
```

### 5.module 中配置

```ts
// payment.module.ts
import { WeChatPayModule } from 'nest-wechatpay-node-v3'
import { ConfigModule, ConfigService } from '@nestjs/config';
@Module({
    imports: [
    WeChatPayModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => {
        return {
          appid: config.get('APP_ID'),
          mchid: config.get('MCH_ID'),
          publicKey: readFileSync(resolve('src/certificate/apiclient_cert.pem')), // 公钥
          privateKey: readFileSync(resolve('src/certificate/apiclient_key.pem')), // 秘钥
        }
      },
    }),
  ],
})
```

### 6.服务端编写预下单接口

```ts
// payment.service.ts
async prePayment(params: { openid: string; description: string; amount: number; orderNo: string }) {
  //这里的params就是小程序传递的相关参数
  const { openid, description, amount, orderNo } = params
  // const Fen = this.convertYuanToFen(Number(amount)) // 这里通过一个函数把钱转化为以分为单位的数字
  const options = {
    appid: this.config.get('APP_ID'),
    mchid: this.config.get('MCH_ID'),
    description,
    out_trade_no: orderNo,
    notify_url: this.config.get('SERVER_DOMAIN') + '/notify',
    amount: {
      total: amount, // 转化后的数据
    },
    payer: {
      openid: openid,
    },
  }
  const res = await this.wxPay.transactions_jsapi(options) // 请求微信官方服务器
  return res // 这个res中就包含了小程序调起微信支付的相关参数
}
```

### 7.准备接口给微信官方回调

```ts
    // 当微信官方收到上面的数据,将多次调用notify_url,将支付信息传递过来
    @Post()
    async notify_url(@Body() body: WxNotifyDto){
        // 这个body中是更私密的支付信息,我们通过解密之后才能拿到
        const v3 = '........' // 解密密钥
        const { resource } = body
        const { ciphertext, associated_data, nonce } = resource
        // out_trade_no 这个数据就是我们自行生成的支付的订单编号,可以根据这个查到此次支付信息
        const { out_trade_no } = await this.wxPay.decipher_gcm<TransactionResource>(ciphertext, associated_data, nonce, v3)

        // TODO: 需要根据返回的不同支付状态调整订单的支付状态

        // 到这里支付就算是完成了
    }
```
