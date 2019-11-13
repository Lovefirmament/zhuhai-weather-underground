# zhuhai-weather-underground
珠海地下气象(zhuhai-weather-underground)是一个关注珠海本地天气的个性化气象网站，含实况监测、历史资料、追风板块等内容，可以实时展示气象部门发布的实时气象信息，以及珠海气象爱好者部署在全市范围内个人气象站的数据。

## 更新日志：</br>

#### 第一次更新  2019/10/18</br>
测试，并上传原始项目</br>

#### 2019/10/26 第二次更新</br>
增加气候资料模块，基于SSM框架对储存在服务器端数据库中的历史气象数据进行查询，并展示在jsp页面上，支持对历史气候每年/月/日数据的查询</br>

#### 2019/10/26 第三次更新</br>
解决mysql超过8小时自动断线的问题</br>

#### 2019/11/2 第四次更新</br>
用SpringMVC编写具有Restful风格的Api，舍弃jsp页面，完全实现前后端分离</br>

#### 2019/11/7 第五次更新</br>
结合vue.js获取和处理Wundergorund的Api中返回的json格式气象数据，使用高德地图api进行数据展示,并用chart.js画出气象数据变化曲线</br>

#### 2019/11/8 第六次更新</br>
修复ajax在IE浏览器无法获取数据的问题,解决方法是在url后加入时间戳

#### 2019/11/10 第七次更新</br>
新增风向和降水图表

#### 2019/11/14 第八次更新</br>
使用springBoot重新搭建项目
