package pers.ssm.service;

import pers.ssm.po.Weather;

import java.util.List;

public interface WeatherService {
    public List<Weather> queryWeatherByMonth(String year,String month);
    public Weather queryWeatherMonthByYearMonth(String year,String month);
    public List<Weather> queryWeatherMonthByYear(String year);
    public List<Weather> queryWeatherYear();
    public Weather queryWeatherYearByYear(String year);
}
