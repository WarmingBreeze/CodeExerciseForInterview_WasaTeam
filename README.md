# 以ReactNative-CLI建立的基礎App (for Android)

## 程式架構

主要以React-Navigation所提供的bottom-tab navigator建構App下方切換頁面的介面功能，再製作一個功能選單的`MenuIcon` component置於每個分頁(`screenOptions`)右上(`headerRight`)。API部分則用`fetch`API`再將呈現的資料以modal component的方式呈現。
API的endpoint: https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8


## 進行時間

此為我第一次接觸App開發，因此為了掌握開發此App所需要的ReactNative基礎知識及開發環境配置約花了兩個整天的時間。
之後在下方切換頁面及功能選單的部分則各花了約兩至三小時。
API的部分fetch功能與Web開發通用，因此沒花上什麼時間，但在如何呈現資料上則又花了約三至四小時研究才得到以modal component呈現的結論。

