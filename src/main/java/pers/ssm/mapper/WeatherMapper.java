package pers.ssm.mapper;


import org.apache.ibatis.annotations.Mapper;
import pers.ssm.po.Weather;

import java.util.List;


@Mapper
public interface WeatherMapper {
    public List<Weather> queryWeatherDayByYearMonth(String year, String month);
    public List<Weather> queryWeatherMonthByYear(String year);
    public Weather queryWeatherMonthByYearMonth(String year, String Month);
    public List<Weather> queryWeatherYear();
    public Weather queryWeatherYearByYear(String Year);
}
