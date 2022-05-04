const style = {
  width: "100%",
  hight: "200px",
  backgroundColor: "khaki"
};

const ChildArea = (props) => {
  const { open } = props;
  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
        </div>
      ) : null}
    </>
  );
};

export default ChildArea;
