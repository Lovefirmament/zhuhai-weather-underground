package pers.ssm.service;

import com.gargoylesoftware.htmlunit.BrowserVersion;
import com.gargoylesoftware.htmlunit.WebClient;
import com.gargoylesoftware.htmlunit.html.HtmlPage;
import org.apache.http.HttpEntity;
import org.apache.http.HttpStatus;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.utils.HttpClientUtils;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service
public class IndexServiceImpl implements IndexService{
    @Override
    public List<String> getWarning() {
        CloseableHttpClient httpClient = HttpClients.createDefault();
        CloseableHttpResponse response = null;
        //2.创建get请求，相当于在浏览器地址栏输入 网址
        HttpGet request = new HttpGet("http://www.zhmb.org.cn/jeecms/web/index");
        request.setHeader("User-Agent","Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36");
        List<String> warningList=new ArrayList<>();
        try {
            //3.执行get请求，相当于在输入地址栏后敲回车键
            response = httpClient.execute(request);

            //4.判断响应状态为200，进行处理
            if(response.getStatusLine().getStatusCode() == HttpStatus.SC_OK) {
                //5.获取响应内容
                HttpEntity httpEntity = response.getEntity();
                String html = EntityUtils.toString(httpEntity, "utf-8");
                Document document = Jsoup.parse(html);
                Element alert = document.getElementById("con_yu_1");
                Elements strongs=alert.getElementsByTag("strong");
                for(Element strong : strongs)
                {
                    String warning=strong.text().replaceAll("\\【|\\】","");
                    warningList.add(warning);
                }

            } else {
                warningList.add("获取失败");
            }
        } catch (ClientProtocolException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            //6.关闭
            HttpClientUtils.closeQuietly(response);
            HttpClientUtils.closeQuietly(httpClient);
            return warningList;
        }
    }

    @Override
    public List<String> getForecast() {
        CloseableHttpClient httpClient = HttpClients.createDefault();
        CloseableHttpResponse response = null;
        //2.创建get请求，相当于在浏览器地址栏输入 网址
        HttpGet request = new HttpGet("http://www.zhmb.org.cn/jeecms/web/index");
        request.setHeader("User-Agent","Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36");
        List<String> forecastList=new ArrayList<String>();
        try {
            //3.执行get请求，相当于在输入地址栏后敲回车键
            response = httpClient.execute(request);
            //4.判断响应状态为200，进行处理
            if(response.getStatusLine().getStatusCode() == HttpStatus.SC_OK) {
                //5.获取响应内容
                HttpEntity httpEntity = response.getEntity();
                String html = EntityUtils.toString(httpEntity, "utf-8");
                Document document = Jsoup.parse(html);
                Elements weathers = document.getElementsByClass("ob_flash");
                for (Element weather : weathers) {
                    Elements info= weather.getElementsByTag("p");
                    for(Element i: info)
                    {
                        String forecast=i.text().trim();
                        forecastList.add(forecast);
                    }
                    forecastList.remove(7);
                }
            } else {
                //如果返回状态不是200，比如404（页面不存在）等，根据情况做处理，这里略
                forecastList.add("获取失败");
            }
        } catch (ClientProtocolException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            //6.关闭
            HttpClientUtils.closeQuietly(response);
            HttpClientUtils.closeQuietly(httpClient);
            return forecastList;
        }
    }

    @Override
    public List<String> getCondition()  {
        List<String> conditionList=new ArrayList<>();
        String url = "http://www.nmc.cn/publish/forecast/AGD/zhuhai.html";
        try {

            // HtmlUnit 模拟浏览器
            WebClient webClient = new WebClient(BrowserVersion.CHROME);
            webClient.getOptions().setJavaScriptEnabled(true);              // 启用JS解释器，默认为true
            webClient.getOptions().setCssEnabled(false);                    // 禁用css支持
            webClient.getOptions().setThrowExceptionOnScriptError(false);   // js运行错误时，是否抛出异常
            webClient.getOptions().setThrowExceptionOnFailingStatusCode(false);
            webClient.getOptions().setTimeout(10 * 1000);                   // 设置连接超时时间
            HtmlPage page = null;
            page = webClient.getPage(url);
            webClient.waitForBackgroundJavaScript( 1000);
            String pageAsXml = page.asXml();
            // Jsoup解析处理
            Document document= Jsoup.parse(pageAsXml);
            Element temperature = document.getElementById("realTemperature");
            conditionList.add(temperature.text());
            Element rain = document.getElementById("realRain");
            conditionList.add(rain.text());
            Element windDirect = document.getElementById("realWindDirect");
            conditionList.add(windDirect.text());
            Element windPower = document.getElementById("realWindPower");
            conditionList.add(windPower.text());
            Element aqi = document.getElementById("aqi");
            if(aqi!=null)
                conditionList.add(aqi.children().text());
            Element humidity = document.getElementById("realHumidity");
            conditionList.add(humidity.text());
            Element feelst= document.getElementById("realFeelst");
            conditionList.add(feelst.text());
            Element publishTime= document.getElementById("realPublishTime");
            conditionList.add(publishTime.text().replaceAll("发布",""));
        } catch (IOException e) {
            e.printStackTrace();
        }
        return conditionList;
    }

}
