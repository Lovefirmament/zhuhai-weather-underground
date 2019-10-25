package pers.ssm.service;

import org.springframework.beans.factory.annotation.Autowired;
import pers.ssm.mapper.WeatherMapper;
import pers.ssm.po.Weather;

import java.util.List;

public class WeatherServiceImpl implements WeatherService {
    @Autowired
    private WeatherMapper weatherMapper;
    @Override
    public List<Weather> queryWeatherByMonth(String year, String month) {
        return  weatherMapper.queryWeatherByMonth(year,month);
    }
    @Override
    public Weather queryWeatherMonthByYearMonth(String year,String month){
        return weatherMapper.queryWeatherMonthByYearMonth(year,month);
    }
    @Override
   public  List<Weather> queryWeatherMonthByYear(String year){
        return weatherMapper.queryWeatherMonthByYear(year);
    }
    @Override
    public List<Weather> queryWeatherYear(){
        return weatherMapper.queryWeatherYear();
    }
    @Override
    public Weather queryWeatherYearByYear(String year){
        return weatherMapper.queryWeatherYearByYear(year);

    }
}
