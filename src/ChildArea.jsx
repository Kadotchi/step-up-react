import { memo } from "react";

const style = {
  width: "100%",
  hight: "200px",
  backgroundColor: "khaki"
};

const ChildArea = memo((props) => {
  const { open } = props;
  console.log("ChildAreaコンポーネントがレンダリングされました！！");

  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log("...");
  });

  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
        </div>
      ) : null}
    </>
  );
});

export default ChildArea;
