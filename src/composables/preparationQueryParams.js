export function usePreparationQueryParams() {
  const preparation_params = (params) => {
    let str = "";
    Object.entries(params).forEach((val, idx) => {
      idx === 0 ? (str += "?") : (str += "&");
      str += val[0] + "=" + val[1];
    });
    return str;
  };
  return { preparation_params };
}
