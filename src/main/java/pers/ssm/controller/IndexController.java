package pers.ssm.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import pers.ssm.po.WeatherInfo;
import pers.ssm.service.IndexService;

import java.util.List;

@Controller
@CrossOrigin
@RequestMapping("/index")
public class IndexController {
    @Autowired
    private IndexService indexService;
    @RequestMapping(value = "/weatherinfo",method = RequestMethod.GET)
    @ResponseBody
    public WeatherInfo getweatherInfo(){
        List<String> forecast=indexService.getForecast();
        List<String> warning=indexService.getWarning();
        List<String> condition=indexService.getCondition();
        WeatherInfo weatherInfo=new WeatherInfo();
        weatherInfo.setForecast(forecast);
        weatherInfo.setWarning(warning);
        weatherInfo.setCondition(condition);
        return weatherInfo;
    }
}
