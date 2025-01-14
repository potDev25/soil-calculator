import { Flex } from "antd";
import React, { useEffect, useState } from "react";
import CButton from "../CButton";
import CModal from "../CModal";
import { useDispatch } from "react-redux";
import { initDB, insertUser, getUsers } from '../../utils/database';
import {
  setVoidRation,
  clearProps,
  setDegreeOfSaturation,
  setMoistureContent,
  setBulkUnit,
  setDryUnit,
  setSaturatedUnit,
  setEffective,
  setCritical,
  setPorosity,
} from "../../Slice/calculatorSlice";

import {
  setLoader,
  setOffLoader
} from "../../Slice/loderSlice";

export default function Buttons({ notations, setNotations, setLoading }) {
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();

  const hideModal = () => {
    setShowModal(false);
  };

  const handleCalculate = () => {
    setLoading(true)
    dispatch(setOffLoader())
    dispatch(setVoidRation(notations));
    dispatch(setPorosity(notations));
    dispatch(setMoistureContent(notations));
    dispatch(setBulkUnit(notations));
    dispatch(setDryUnit(notations));
    dispatch(setSaturatedUnit(notations));
    dispatch(setEffective(notations));
    dispatch(setCritical(notations));
    dispatch(setDegreeOfSaturation(notations));

    setTimeout(() => {
      dispatch(setLoader())
      setLoading(false)
    }, 1000)
  };

  const handleClear = () => {
    dispatch(clearProps());
    setNotations({
      e: 0,
      n: 0,
      mc: 0,
      g: 0,
      yw: 0,
      s: 0,
    });
    dispatch(setOffLoader())
  };

  // const setupDB = async () => {
  //   await initDB();
  //   await insertUser('Alice', 25);
  //   await insertUser('Bob', 30);
  //   const data = await getUsers();
  //   console.log(data);
  //   setUsers(data);
  // };

  // useEffect(() => {
  //   setupDB();
  // }, [])

  return (
    <Flex gap="small" justify="center" align="center" wrap>
      {/* <CButton
        color="bg-blue-500 active:outline-blue-500"
        text="History"
        onClick={() => setShowModal(true)}
      /> */}
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

      {/* <CButton
        color="bg-gray-500 active:outline-gray-500"
        text="Clear History"
      />
      <CModal open={showModal} hideModal={hideModal} /> */}

      {/* {JSON.stringify(users)} */}
    </Flex>
  );
}
