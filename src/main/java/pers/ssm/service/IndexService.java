package pers.ssm.service;

import pers.ssm.po.WeatherInfo;

import java.io.IOException;
import java.util.List;

public interface IndexService {
    public List<String> getWarning();
    public List<String> getForecast();
    public List<String> getCondition() ;
}
