var record={
    isOk: true,
    data: {
      temperatures: [
        {id:"00",date: "1", temperature: "2"},
        {id:"01",date: "1", temperature: "2"},
        {id:"02",date: "1", temperature: "2"},
        {id:"03",date: "1", temperature: "2"},
        {id:"04",date: "1", temperature: "2"}
      ]
    }
  }
  record.data.temperatures[5]={id:"04",date: "1", temperature: "10"}
  console.log(record.data.temperatures[0]);
  console.log(record.data.temperatures[3]);
  console.log(record.data.temperatures);