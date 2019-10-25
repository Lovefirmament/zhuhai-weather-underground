<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt"  prefix="fmt"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <title>珠海大台风</title>
    <link rel="stylesheet" href="${pageContext.request.contextPath }/css/bootstrap.min.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath }/css/historyday.css">
</head>
<body>
<div class="navbar navbar-default">
    <div class="container">
        <div class="narbar-brand">
            <img class="logo" src="${pageContext.request.contextPath }/img/head1.jpg" >
        </div>
        <ul class="nav nav-pills">
            <li class="active">
                <a href="${pageContext.request.contextPath }/index.html">首页</a></li>
            <li><a href="${pageContext.request.contextPath }/zhuifeng.html">追风</a></li>
            <li><a href="${pageContext.request.contextPath }/history/queryweatherday.action">气候资料</a></li>

        </ul>
    </div>
</div>
<div class="container">
    <div class="row">
        <div class="col-sm-2">
            <div class="list-group">
                <a href="${pageContext.request.contextPath }/history/queryweatherday.action" class="list-group-item active">
                    每日数据摘录
                </a>
                <a href="${pageContext.request.contextPath }/history/queryweathermonth.action" class="list-group-item">每月数据摘录</a>
                <a href="${pageContext.request.contextPath }/history/queryweatheryear.action" class="list-group-item">每年数据摘录</a>
            </div>
        </div>
        <div class="col-sm-10">
            <div class="datatitle" align="center">${requestScope.stationName}站<span id="currentYear">${requestScope.year}</span>年每月数据摘录</div>
            <form action="${pageContext.request.contextPath }/history/queryweathermonth.action" method="post">
                <div align="right">
                    <select name="year">
                        <script>
                            var year=parseInt(document.getElementById("currentYear").innerHTML);
                            for(var i=1961;i<year;i++){
                                document.write("<option  value='"+i+"'>"+i+"</option>");
                            }
                            document.write("<option  value='"+year+"' selected='true'>"+year+"</option>");
                            for(var i=year;i<=2018;i++){
                                document.write("<option  value='"+i+"'>"+i+"</option>");
                            }
                        </script>
                    </select>
                    <label >年</label>
                    <input class="btn btn-primary " type="submit" value="查询"  />
                </div>
            </form>
            <table class="table table-bordered table-condensed" align="center" >
                <tr>
                    <th rowspan="2">年</th>
                    <th rowspan="2">月</th>
                    <th colspan="3">气温</th>
                    <th colspan="3">气压</th>
                    <th colspan="2">湿度</th>
                    <th colspan="3">风速</th>
                    <th rowspan="2">平均日照时数(h)</th>
                    <th rowspan="2">月雨量(mm)</th>
                </tr>
                <tr>
                    <th>最高气温(℃）</th>
                    <th>平均气温(℃）</th>
                    <th>最低气温(℃）</th>
                    <th>最高气压(hpa)</th>
                    <th>平均气压(hpa)</th>
                    <th>最低气压(hpa)</th>
                    <th>平均湿度(%)</th>
                    <th>最低湿度(%)</th>
                    <th>平均风速(m/s)</th>
                    <th>最大风速(m/s)</th>
                    <th>极大风速(m/s)</th>
                </tr>
                <c:forEach items="${weathermonth}" var="weather">
                    <tr>
                        <td>${weather.year }</td>
                        <td>${weather.month }</td>
                        <td>${weather.temH}</td>
                        <td>${weather.temAVG}</td>
                        <td>${weather.temL}</td>
                        <td>${weather.prsH}</td>
                        <td>${weather.prsAVG}</td>
                        <td>${weather.prsL}</td>
                        <td>${weather.rhuAVG}</td>
                        <td>${weather.rhuL}</td>
                        <td>${weather.winAVG}</td>
                        <td>${weather.winH}</td>
                        <td>${weather.winGustH}</td>
                        <td>${weather.ssd}</td>
                        <td>${weather.pre}</td>
                    </tr>
                </c:forEach>
                <tr>
                    <th  colspan="2" >平均值/极值/总和</th>
                    <td>${weatheryear.temH}</td>
                    <td>${weatheryear.temAVG}</td>
                    <td>${weatheryear.temL}</td>
                    <td>${weatheryear.prsH}</td>
                    <td>${weatheryear.prsAVG}</td>
                    <td>${weatheryear.prsL}</td>
                    <td>${weatheryear.rhuAVG}</td>
                    <td>${weatheryear.rhuL}</td>
                    <td>${weatheryear.winAVG}</td>
                    <td>${weatheryear.winH}</td>
                    <td>${weatheryear.winGustH}</td>
                    <td>${weatheryear.ssd}</td>
                    <td>${weatheryear.pre}</td>
                </tr>
            </table>
        </div>
    </div>
</div>
<script src="../js/jquery.js"></script>
<script src="../js/bootstrap.js"></script>
<script src="../js/moment.min.js"></script>
</body>
</html>
