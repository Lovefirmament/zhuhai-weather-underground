package pers.ssm.test;

import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.context.support.XmlWebApplicationContext;
import pers.ssm.mapper.WeatherMapper;
import pers.ssm.po.Weather;

import java.util.List;

import static org.junit.Assert.*;

public class WeatherMapperTest {

    @Test
    public void queryWeatherByMonth() {
        ApplicationContext ac=new ClassPathXmlApplicationContext("classpath:spring/applicationContext-dao.xml");
        WeatherMapper weatherMapper= (WeatherMapper) ac.getBean("weatherMapper");
        List<Weather> weatherList=weatherMapper.queryWeatherDayByYearMonth("2018","12");
        System.out.println(weatherList);
    }

    @Test
    public void queryWeatherMonthByYear() {
        ApplicationContext ac=new ClassPathXmlApplicationContext("classpath:spring/applicationContext-dao.xml");
        WeatherMapper weatherMapper= (WeatherMapper) ac.getBean("weatherMapper");
        Weather weatherList=weatherMapper.queryWeatherMonthByYearMonth("2018","9");
        System.out.println(weatherList);
    }

}