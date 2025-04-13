const parseDateUrl = (dateObject) => {
  const parsedDate = new Date(
    `${dateObject.year}-${dateObject.month}-${dateObject.day}`
  );

  return parsedDate;
};

export default parseDateUrl;
