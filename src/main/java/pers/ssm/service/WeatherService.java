package pers.ssm.service;

import org.springframework.stereotype.Service;
import pers.ssm.po.Weather;

import java.util.List;


public interface WeatherService {
    public List<Weather> queryWeatherDayByYearMonth(String year, String month);
    public Weather queryWeatherMonthByYearMonth(String year, String month);
    public List<Weather> queryWeatherMonthByYear(String year);
    public List<Weather> queryWeatherYear();
    public Weather queryWeatherYearByYear(String year);
}
