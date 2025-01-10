import { Modal, Collapse } from "antd";
import React from "react";
import CCard from "./CCard";

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const items = [
  {
    key: "1",
    label: "History 1",
    children: (
        <div>
          <CCard title="Property One" value={200} />
          <CCard title="Property Two" value={200} />
          <CCard title="Property Three" value={200} />
          <CCard title="Property Four" value={200} />
          <CCard title="Property Five" value={200} />
        </div>
      ),
  },
  {
    key: "2",
    label: "History 2",
    children: (
      <div>
        <CCard title="Property One" value={200} />
        <CCard title="Property Two" value={200} />
        <CCard title="Property Three" value={200} />
        <CCard title="Property Four" value={200} />
        <CCard title="Property Five" value={200} />
      </div>
    ),
  },
  {
    key: "3",
    label: "History 3",
    children: (
        <div>
          <CCard title="Property One" value={200} />
          <CCard title="Property Two" value={200} />
          <CCard title="Property Three" value={200} />
          <CCard title="Property Four" value={200} />
          <CCard title="Property Five" value={200} />
        </div>
      ),
  },
];

export default function CModal({ open, hideModal }) {
  return (
    <Modal
      title="History"
      open={open}
      onOk={hideModal}
      onCancel={hideModal}
      okText="Close"
      footer={null}
    >
      <Collapse items={items} defaultActiveKey={["1"]} />
    </Modal>
  );
}
