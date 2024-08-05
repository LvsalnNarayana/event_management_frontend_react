const timeStringGenerator = (date) => {
  const value = {
    hour: new Date(date).getHours(),
    minutes: new Date(date).getMinutes(),
    value: `${
      new Date(date).getHours() < 10 ? "0" : ""
    }${new Date(date).getHours()}:${
      new Date(date).getMinutes() < 10 ? "0" : ""
    }${new Date(date).getMinutes()}${
      new Date(date).getHours() >= 12 ? "pm" : "am"
    }`,
  };

  return value;
};

export default timeStringGenerator;
