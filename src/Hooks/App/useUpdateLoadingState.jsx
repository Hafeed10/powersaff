import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { getRandomItem } from "src/Functions/helper";

const useUpdateLoadingState = ({
  loadingState,
  loadingKey,
  cleanFunction,
  delays,
  dependencies = [],
  actionMethod,
}) => {
  const dispatch = useDispatch();
  const debounceId = useRef();
  let randomDelay = getRandomItem(delays);

  function updateLoadingState() {
    if (!loadingState) return;

    debounceId.current = setTimeout(() => {
      dispatch(actionMethod({ key: loadingKey, value: false }));
    }, randomDelay);

    randomDelay = getRandomItem(delays);
  }

  function useEffectFunction() {
    updateLoadingState();

    return () => {
      clearTimeout(debounceId.current);
      if (cleanFunction) cleanFunction();
    };
  }

  useEffect(useEffectFunction, dependencies);
};
export default useUpdateLoadingState;
