package pers.ssm.service;

import pers.ssm.po.WeatherInfo;

import java.io.IOException;
import java.util.List;

public interface IndexService {
   List<String> getWarning();
   List<String> getForecast();
   List<String> getCondition() ;
}
