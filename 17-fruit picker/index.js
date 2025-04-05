import { notify } from "./notifier.js";
import { order } from "./grocer.js";

export function onSuccess() {
  notify({ message: "SUCCESS" });
}

export function onError() {
  notify({ message: "ERROR" });
}

export function orderFromGrocer(query, success, error) {
  order(query, success, error);
}

export function postOrder(variety, quantity) {
  const query = { variety, quantity };
  orderFromGrocer(query, onSuccess, onError);
}
