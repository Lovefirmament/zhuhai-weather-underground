package pers.ssm.po;

import java.util.List;

public class WeatherVo {
    List<Weather>  weatherdayList;
    Weather  weatherday;
    List<Weather>  weathermonthList;
    Weather  weathermonth;
    List<Weather>  year;
    Weather  weatheryear;

    public List<Weather> getWeatherdayList() {
        return weatherdayList;
    }

    public void setWeatherdayList(List<Weather> weatherdayList) {
        this.weatherdayList = weatherdayList;
    }

    public Weather getWeatherday() {
        return weatherday;
    }

    public void setWeatherday(Weather weatherday) {
        this.weatherday = weatherday;
    }

    public List<Weather> getWeathermonthList() {
        return weathermonthList;
    }

    public void setWeathermonthList(List<Weather> weathermonthList) {
        this.weathermonthList = weathermonthList;
    }

    public Weather getWeathermonth() {
        return weathermonth;
    }

    public void setWeathermonth(Weather weathermonth) {
        this.weathermonth = weathermonth;
    }

    public List<Weather> getYear() {
        return year;
    }

    public void setYear(List<Weather> year) {
        this.year = year;
    }

    public Weather getWeatheryear() {
        return weatheryear;
    }

    public void setWeatheryear(Weather weatheryear) {
        this.weatheryear = weatheryear;
    }
}
