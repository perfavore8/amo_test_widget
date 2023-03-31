import store from "@/store";

export function usePreparationProducts() {
  const preparationProducts = (value) => {
    value.map((item) => {
      store.state.fields?.all_fields.forEach((field) => {
        if (item.fields === null || item.fields === undefined) item.fields = {};
        if (field.type === 1 || field.type === 2) {
          if (
            item.fields?.[field.code] === undefined ||
            item.fields?.[field.code] === null
          ) {
            item.fields[field.code] = 0;
          } else {
            item.fields[field.code] = Number(item.fields[field.code]);
          }
        }
        if (field.type === 3 || field.type === 4) {
          if (
            item.fields?.[field.code] === undefined ||
            item.fields?.[field.code] === null
          ) {
            item.fields[field.code] = "";
            // // Object.assign(item.fields, {`${field.code}`:""});
          } else {
            item.fields[field.code] = String(item.fields[field.code]);
          }
        }
        if (field.type === 5 || field.type === 6) {
          if (
            item.fields?.[field.code] === undefined ||
            item.fields?.[field.code] === null
          ) {
            item.fields[field.code] = "";
          }
        }
        if (field.type === 7 || field.type === 8) {
          if (
            item.fields?.[field.code] === undefined ||
            item.fields?.[field.code] === null
          ) {
            item.fields[field.code] = "";
          }
        }
        if (field.type === 9) {
          if (
            item.fields?.[field.code] === undefined ||
            item.fields?.[field.code] === null
          ) {
            item.fields[field.code] = false;
          } else {
            if (item.fields?.[field.code] === "0")
              item.fields[field.code] = false;
            if (item.fields?.[field.code] === "1") {
              item.fields[field.code] = true;
            } else {
              item.fields[field.code] = Boolean(item.fields[field.code]);
            }
          }
        }
        if (field.type === 11) {
          if (
            item.fields?.[field.code] === undefined ||
            item.fields?.[field.code] === null
          ) {
            item.fields[field.code] = {
              cost: 0,
              currency: "RUB",
              is_manager_can_change_nds: false,
              is_nds: false,
              is_price_include_nds: false,
              nds: 0,
            };
          }
          if (
            item.fields[field.code]?.cost === undefined ||
            item.fields[field.code]?.cost === null
          ) {
            item.fields[field.code].cost = 0;
          } else {
            item.fields[field.code].cost = Number(item.fields[field.code].cost);
          }
          if (
            item.fields[field.code]?.currency === undefined ||
            item.fields[field.code]?.currency === null
          ) {
            item.fields[field.code].currency = "";
          } else {
            item.fields[field.code].currency = String(
              item.fields[field.code].currency
            );
          }
          if (
            item.fields[field.code]?.is_manager_can_change_nds === undefined ||
            item.fields[field.code]?.is_manager_can_change_nds === null
          ) {
            item.fields[field.code].is_manager_can_change_nds = false;
          } else {
            if (item.fields[field.code].is_manager_can_change_nds === "0")
              item.fields[field.code].is_manager_can_change_nds = false;
            if (item.fields[field.code].is_manager_can_change_nds === "1") {
              item.fields[field.code].is_manager_can_change_nds = true;
            } else {
              item.fields[field.code].is_manager_can_change_nds = Boolean(
                item.fields[field.code].is_manager_can_change_nds
              );
            }
          }
          if (
            item.fields[field.code]?.is_nds === undefined ||
            item.fields[field.code]?.is_nds === null
          ) {
            item.fields[field.code].is_nds = false;
          } else {
            if (item.fields[field.code].is_nds === "0")
              item.fields[field.code].is_nds = false;
            if (item.fields[field.code].is_nds === "1") {
              item.fields[field.code].is_nds = true;
            } else {
              item.fields[field.code].is_nds = Boolean(
                item.fields[field.code].is_nds
              );
            }
          }
          if (
            item.fields[field.code]?.is_price_include_nds === undefined ||
            item.fields[field.code]?.is_price_include_nds === null
          ) {
            item.fields[field.code].is_price_include_nds = false;
          } else {
            if (item.fields[field.code].is_price_include_nds === "0")
              item.fields[field.code].is_price_include_nds = false;
            if (item.fields[field.code].is_price_include_nds === "1") {
              item.fields[field.code].is_price_include_nds = true;
            } else {
              item.fields[field.code].is_price_include_nds = Boolean(
                item.fields[field.code].is_price_include_nds
              );
            }
          }
          if (
            item.fields[field.code]?.nds === undefined ||
            item.fields[field.code]?.nds === null
          ) {
            item.fields[field.code].nds = 0;
          } else {
            item.fields[field.code].nds = Number(item.fields[field.code].nds);
          }
        }
        if (field.type === 13) {
          if (
            item.fields?.[field.code] === undefined ||
            item.fields?.[field.code] === null
          ) {
            item.fields[field.code] = { count: 0, reserve: 0 };
          }
          if (
            item.fields[field.code]?.count === undefined ||
            item.fields[field.code]?.count === null
          ) {
            item.fields[field.code].count = 0;
          } else {
            item.fields[field.code].count = Number(
              item.fields[field.code].count
            );
          }
          if (
            item.fields[field.code]?.reserve === undefined ||
            item.fields[field.code]?.reserve === null
          ) {
            item.fields[field.code].reserve = 0;
          } else {
            item.fields[field.code].reserve = Number(
              item.fields[field.code].reserve
            );
          }
        }
      });
    });
    return value;
  };
  return { preparationProducts };
}
