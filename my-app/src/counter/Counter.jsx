import React, { useState } from "react";
import { Button, Card, Input, Tag } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  resetCount,
  decrementByAmount,
} from "../featurs/counter";

const Counter = () => {
  // state => represents the init value for the slice {count : 0}
  const count = useSelector((state) => state.count);
  // const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const [amount, setAmount] = useState(0);

  return (
    <Card>
      <h1>Counter</h1>
      <div>
        <Button onClick={() => dispatch(increment())}>+</Button>
        <Button onClick={() => dispatch(decrement())}>-</Button>
        <h2>
          <Tag color="red">{count} </Tag>
        </h2>

        <div>
          <Input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <Button onClick={() => dispatch(incrementByAmount(Number(amount)))}>
            increment By {amount} +
          </Button>
          <Button onClick={() => dispatch(decrementByAmount(Number(amount)))}>
            decrement By {amount} -
          </Button>
          <Button
            onClick={() => {
              dispatch(resetCount());
              setAmount(0);
            }}
          >
            reset count
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default Counter;
