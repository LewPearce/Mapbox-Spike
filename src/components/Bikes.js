export function Bikes({ bike, setBike }) {
  const handleSelectChange = (event) => {
    setBike(JSON.parse("[" + event.target.value + "]"));
  };

  return (
    <>
      <label htmlFor="bikes">Choose a bike:</label>

      <select name="bikes" id="bikes" onChange={handleSelectChange}>
        <option value={[53.47310644940652, -2.2483562103991255]}>Bike 1</option>
        <option value={[53.49471622749828, -2.240706314816543]}>Bike 2</option>
        <option value={[53.49716705639007, -2.2769268635244977]}>Bike 3</option>
        <option value={[53.49767762791285, -2.1474941918382497]}>Bike 4</option>
      </select>
    </>
  );
}
