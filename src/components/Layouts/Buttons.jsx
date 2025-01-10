import { Flex } from "antd";
import React, { useState } from "react";
import CButton from "../CButton";
import CModal from "../CModal";
import { useDispatch } from "react-redux";
import {
  calPropsFour,
  calPropsOne,
  calPropsThree,
  calPropsTwo,
  clearProps,
} from "../../Slice/calculatorSlice";

export default function Buttons() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const hideModal = () => {
    setShowModal(false);
  };

  const handleCalculate = () => {
    dispatch(calPropsFour());
    dispatch(calPropsOne());
    dispatch(calPropsTwo());
    dispatch(calPropsThree());
  };

  const handleClear = () => {
    dispatch(clearProps());
  };

  return (
    <Flex gap="small" justify="center" align="center" wrap>
      <CButton
        color="bg-blue-500 active:outline-blue-500"
        text="History"
        onClick={() => setShowModal(true)}
      />
      <CButton
        color="bg-green-500 active:outline-green-500"
        text="Calculate"
        onClick={handleCalculate}
      />

      <CButton
        color="bg-gray-500 active:outline-gray-500"
        text="Clear"
        onClick={handleClear}
      />

      <CButton
        color="bg-gray-500 active:outline-gray-500"
        text="Clear History"
      />
      <CModal open={showModal} hideModal={hideModal} />
    </Flex>
  );
}
