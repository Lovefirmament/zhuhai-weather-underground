package pers.ssm.po;

public class Weather {
    private Integer id;
    private String stationId;
    private String year;
    private String month;
    private String day;
    private String temAVG;
    private String temH;
    private String temL;
    private String pre;
    private String prsAVG;
    private String prsH;
    private String prsL;
    private String rhuAVG;
    private String rhuL;
    private String ssd;
    private String winAVG;
    private String winH;
    private String winD;
    private String winGustH;
    private String winGustD;
    private StationInfo stationInfo;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getStationId() {
        return stationId;
    }

    public void setStationId(String stationId) {
        this.stationId = stationId;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public String getMonth() {
        return month;
    }

    public void setMonth(String month) {
        this.month = month;
    }

    public String getDay() {
        return day;
    }

    public void setDay(String day) {
        this.day = day;
    }

    public String getTemAVG() {
        return temAVG;
    }

    public void setTemAVG(String temAVG) {
        this.temAVG = temAVG;
    }

    public String getTemH() {
        return temH;
    }

    public void setTemH(String temH) {
        this.temH = temH;
    }

    public String getTemL() {
        return temL;
    }

    public void setTemL(String temL) {
        this.temL = temL;
    }

    public String getPre() {
        return pre;
    }

    public void setPre(String pre) {
        this.pre = pre;
    }

    public String getPrsAVG() {
        return prsAVG;
    }

    public void setPrsAVG(String prsAVG) {
        this.prsAVG = prsAVG;
    }

    public String getPrsH() {
        return prsH;
    }

    public void setPrsH(String prsH) {
        this.prsH = prsH;
    }

    public String getPrsL() {
        return prsL;
    }

    public void setPrsL(String prsL) {
        this.prsL = prsL;
    }

    public String getRhuAVG() {
        return rhuAVG;
    }

    public void setRhuAVG(String rhuAVG) {
        this.rhuAVG = rhuAVG;
    }

    public String getRhuL() {
        return rhuL;
    }

    public void setRhuL(String rhuL) {
        this.rhuL = rhuL;
    }

    public String getSsd() {
        return ssd;
    }

    public void setSsd(String ssd) {
        this.ssd = ssd;
    }

    public String getWinAVG() {
        return winAVG;
    }

    public void setWinAVG(String winAVG) {
        this.winAVG = winAVG;
    }

    public String getWinH() {
        return winH;
    }

    public void setWinH(String winH) {
        this.winH = winH;
    }

    public String getWinD() {
        return winD;
    }

    public void setWinD(String winD) {
        this.winD = winD;
    }

    public String getWinGustH() {
        return winGustH;
    }

    public void setWinGustH(String winGustH) {
        this.winGustH = winGustH;
    }

    public String getWinGustD() {
        return winGustD;
    }

    public void setWinGustD(String winGustD) {
        this.winGustD = winGustD;
    }

    public StationInfo getStationInfo() {
        return stationInfo;
    }

    public void setStationInfo(StationInfo stationInfo) {
        this.stationInfo = stationInfo;
    }

    @Override
    public String toString() {
        return "Weather{" +
                "id=" + id +
                ", stationId='" + stationId + '\'' +
                ", year='" + year + '\'' +
                ", month='" + month + '\'' +
                ", day='" + day + '\'' +
                ", temAVG='" + temAVG + '\'' +
                ", temH='" + temH + '\'' +
                ", temL='" + temL + '\'' +
                ", pre='" + pre + '\'' +
                ", prsAVG='" + prsAVG + '\'' +
                ", prsH='" + prsH + '\'' +
                ", prsL='" + prsL + '\'' +
                ", rhuAVG='" + rhuAVG + '\'' +
                ", rhuL='" + rhuL + '\'' +
                ", ssd='" + ssd + '\'' +
                ", winAVG='" + winAVG + '\'' +
                ", winH='" + winH + '\'' +
                ", winD='" + winD + '\'' +
                ", winGustH='" + winGustH + '\'' +
                ", winGustD='" + winGustD + '\'' +
                ", stationInfo=" + stationInfo +
                '}';
    }
}
