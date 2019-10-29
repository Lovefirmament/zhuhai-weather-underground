package pers.ssm.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import pers.ssm.po.Weather;
import pers.ssm.service.WeatherService;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Controller
@RequestMapping("/history")
public class WeatherController {
    @Autowired
    private WeatherService weatherService;

    @RequestMapping("/queryweatherday")
    public String queryWeatherDay(Model model, HttpServletRequest httpRequest)
    {
        String year=httpRequest.getParameter("year");
        String month=httpRequest.getParameter("month");
        String stationName=null;
        if(year==null) {
            year = "2018";
        }
        if(month==null) {
            month = "12";
        }
        List<Weather> weatherday=weatherService.queryWeatherByMonth(year,month);
        Weather weathermonth=weatherService.queryWeatherMonthByYearMonth(year,month);
        if(weatherday!=null&&weatherday.size()!=0)
        {
            stationName = weatherday.get(0).getStationInfo().getStationName();
        }

        model.addAttribute("year",year);
        model.addAttribute("stationName",stationName);
        model.addAttribute("month",month);
        model.addAttribute("weatherday",weatherday);
        model.addAttribute("weathermonth",weathermonth);
        return "/jsp/historyday.jsp";
    }
    @RequestMapping("/queryweathermonth")
       public String queryWeatherMonth(Model model, HttpServletRequest httpRequest)
    {
        String year=httpRequest.getParameter("year");
        String month=httpRequest.getParameter("month");
        String stationName=null;
        if(year==null) {
            year = "2018";
        }
       List<Weather> weathermonth=weatherService.queryWeatherMonthByYear(year);
        Weather weatheryear=weatherService.queryWeatherYearByYear(year);
        if(weathermonth!=null&&weathermonth.size()!=0)
        {
            stationName = weathermonth.get(0).getStationInfo().getStationName();
        }

        model.addAttribute("year",year);
        model.addAttribute("stationName",stationName);
        model.addAttribute("weathermonth",weathermonth);
        model.addAttribute("weatheryear",weatheryear);
        return "/jsp/historymonth.jsp";
    }

    @RequestMapping("/queryweatheryear")
    public String queryWeatherYear(Model model, HttpServletRequest httpRequest)
    {
        String stationName=null;
        List<Weather> weatheryear=weatherService.queryWeatherYear();
        if(weatheryear!=null&&weatheryear.size()!=0)
        {
            stationName = weatheryear.get(0).getStationInfo().getStationName();
        }

        model.addAttribute("stationName",stationName);
        model.addAttribute("weatheryear",weatheryear);
        return "/jsp/historyyear.jsp";
    }
}
