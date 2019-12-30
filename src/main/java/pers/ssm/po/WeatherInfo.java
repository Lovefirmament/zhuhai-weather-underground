package pers.ssm.po;

import java.util.List;

public class WeatherInfo {
    private List<String> warning;
    private List<String> forecast;
    private List<String> condition;

    public List<String> getWarning() {
        return warning;
    }

    public void setWarning(List<String> warning) {
        this.warning = warning;
    }

    public List<String> getForecast() {
        return forecast;
    }

    public void setForecast(List<String> forecast) {
        this.forecast = forecast;
    }

    public List<String> getCondition() {
        return condition;
    }

    public void setCondition(List<String> condition) {
        this.condition = condition;
    }
}
