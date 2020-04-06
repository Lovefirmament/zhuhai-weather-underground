package pers.ssm.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import pers.ssm.po.Weather;
import pers.ssm.po.WeatherVo;
import pers.ssm.service.WeatherService;

import java.util.List;

@Controller
@RequestMapping("/history")
public class WeatherController {
    @Autowired
    private WeatherService weatherService;

    @RequestMapping(value = "/yearlyweather",method = RequestMethod.GET)
    @ResponseBody
    @CrossOrigin
            public List<Weather> queryweatheryearRestful(){
        List<Weather> waetheryear=weatherService.queryWeatherYear();
        return waetheryear;
    }
    @RequestMapping(value = "/monthlyweather",method = RequestMethod.GET)
    @ResponseBody
    @CrossOrigin
    public WeatherVo queryweatherMonthRestful(String year){
        if(year==null) {
            year = "2019";
        }
        List<Weather> weathermonthList=weatherService.queryWeatherMonthByYear(year);
        Weather weatheryear=weatherService.queryWeatherYearByYear(year);
        WeatherVo weatherVo=new WeatherVo();
        weatherVo.setWeathermonthList(weathermonthList);
        weatherVo.setWeatheryear(weatheryear);
        return weatherVo;
    }
    @RequestMapping(value = "/dailyweather",method = RequestMethod.GET)
    @ResponseBody
    @CrossOrigin
    public WeatherVo queryweatherDayRestful(String year, String month){
        if(year==null) {
            year = "2019";
        }
        if(month==null) {
            month = "12";
        }
        List<Weather> weatherdayList=weatherService.queryWeatherDayByYearMonth(year,month);
        Weather weathermonth=weatherService.queryWeatherMonthByYearMonth(year,month);
        WeatherVo weatherVo=new WeatherVo();
        weatherVo.setWeatherdayList(weatherdayList);
        weatherVo.setWeathermonth(weathermonth);
        return weatherVo;
    }
}
