/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
// import "./Users.scss";
import { useAppDispatch, useAppSelector } from "../store/hooks";

// import IMAGE1 from "../assets/images/favicon.png";
// import IMAGE2 from "../assets/images/test.svg";
import { decrement, increment } from "../reducer/testReducer/counterSlice";
import { requestUser } from "../reducer/userReducer/usersSlice";
interface UsersProps {}
export const Users: React.FC<UsersProps> = ({}) => {
  // const [number, setNumber] = useState(0)
  const { counter, userState } = useAppSelector(
    (state: { counter: any; userState: any }) => state
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(requestUser());
  }, []);
  return (
    <div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium
        culpa animi autem provident illum fuga consectetur ipsum architecto
        ipsam, nisi veniam, deserunt rerum asperiores placeat mollitia deleniti?
      </p>

      {/* <div>
        <img src={IMAGE1} alt="demo webpack" width={300} height={300} />
        <img src={IMAGE2} alt="demo file" width={300} height={300} />
      </div> */}
      <div>{JSON.stringify(counter)}</div>
      <div>{JSON.stringify(userState.users)}</div>
      <div className="wrapper">
        <button onClick={() => dispatch(increment())}>+</button> <br />
        <button onClick={() => dispatch(decrement())}>-</button>
        <br />
        <p>{counter.value}</p>
      </div>
    </div>
  );
};
