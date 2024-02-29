const RepeatText = ({ count, text }) => {
  const pText = Array.from({ length: count }, (index) => (
    <p key={index}>{text}</p>
  ));

  return (
    <>
      <div>{pText}</div>
    </>
  );
};

export default RepeatText;
