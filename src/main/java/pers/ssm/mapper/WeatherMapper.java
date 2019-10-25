package pers.ssm.mapper;

import pers.ssm.po.Weather;

import java.util.List;

public interface WeatherMapper {
    public List<Weather> queryWeatherByMonth(String year,String month);
    public List<Weather> queryWeatherMonthByYear(String year);
    public Weather queryWeatherMonthByYearMonth(String year,String Month);
    public List<Weather> queryWeatherYear();
    public Weather queryWeatherYearByYear(String Year);
}
