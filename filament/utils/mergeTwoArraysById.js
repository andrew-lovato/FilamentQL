const mergeTwoArraysById = (dataFromCache, dataFromServer) => {
  const mergedData = dataFromCache.map((dataCache) => {
    const matchedObj = dataFromServer.find(
      (dataServer) => dataServer.id === dataCache.id
    );
    const newData = { ...dataCache, ...matchedObj };
    return newData;
  });

  return mergedData;
};

export default mergeTwoArraysById;
