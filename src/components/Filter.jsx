/* eslint-disable react/prop-types */
function Filter({ name, text, dispatch, actionToDispatch, unChecked }) {
  return (
    <div className="flex gap-2 my-1">
      <input
        key={text}
        type="checkbox"
        name={name}
        onChange={(e) => {
          e.target.checked
            ? dispatch(actionToDispatch)
            : dispatch({ type: "unChecked", payload: unChecked });
        }}
      />
      <p className="font-medium text-[#6F6F6F]">{text}</p>
    </div>
  );
}

export default Filter;
