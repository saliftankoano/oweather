import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import * as Location from "expo-location";
import { WEATHER_KEY } from "@env";

export default function App() {
  const [data, setData] = useState(null);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  //Get User Location
  useEffect(() => {
    const getLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Denied access to location");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location.coords);
    };

    getLocation();
  }, []);
  //Get weather data based on user location
  useEffect(() => {
    if (location) {
      const getWeather = async () => {
        try {
          let response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&units=imperial&appid=${WEATHER_KEY}`
          );
          const getData = await response.json();

          setData(getData);
        } catch (error) {
          console.error(error);
        }
      };
      getWeather();
    }
  }, [location]);

  return (
    <View style={styles.container}>
      <View style={styles.locationContainer}>
        <Text style={styles.locationTxt}>{data ? data.name : errorMsg}</Text>
      </View>
      <View style={styles.weatherData}>
        <Image style={styles.icon} source={require("./assets/01n.png")} />

        <View style={styles.tempContainer}>
          <Text style={styles.tempTxt}>
            {data ? `${data.main.temp} F` : "Loading..."}
          </Text>
          <Text style={styles.tempDesc}>
            {data ? data.weather[0].description : ""}
          </Text>
        </View>
      </View>

      <View style={styles.moreMetrics}>
        <View style={styles.windContainer}>
          <Text style={styles.titleMetric}>Wind</Text>
          <Text style={styles.metricDesc}>
            {data ? `${data.wind.speed} mph` : ""}
          </Text>
        </View>
        <View style={styles.feelsContainer}>
          <Text style={styles.titleMetric}>Feels like</Text>
          <Text style={styles.metricDesc}>
            {data ? `${data.main.feels_like} F` : ""}
          </Text>
        </View>
        <View style={styles.humidityContainer}>
          <Text style={styles.titleMetric}>Humidity</Text>
          <Text style={styles.metricDesc}>
            {data ? `${data.main.humidity}%` : ""}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: "#000",
  },
  locationContainer: {
    width: "50%",
    marginTop: 70,
    marginLeft: "50%",
  },
  locationTxt: {
    fontSize: 22,
    color: "white",
  },
  weatherData: {
    width: "100%",
    flexDirection: "row",
  },
  iconContainer: {
    width: "50%",
  },
  icon: {
    width: "50%",
    marginTop: 15,
  },
  tempContainer: {
    width: "50%",
    marginTop: 28,
  },

  tempTxt: {
    color: "white",
    fontSize: 60,
  },
  tempDesc: {
    color: "white",
    fontSize: 18,
  },
  moreMetrics: {
    width: "75%",
    marginLeft: "12.5%",
    flexDirection: "row",
    backgroundColor: "#1E2B47",
    paddingTop: 15,
    paddingBottom: 15,

    borderRadius: 50,
    justifyContent: "space-around",
  },
  feelsContainer: {},
  titleMetric: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
  },
  metricDesc: {
    color: "white",
    fontSize: 15,
    marginTop: 5,
    textAlign: "center",
  },
});
