export const InputBox = ({
  type,
  state,
  setState,
  placeholder,
  required,
  className,
}) => {
  return (
    <input
      type={type}
      value={state}
      onChange={(e) => setState(e.target.value)}
      placeholder={placeholder}
      required={required}
      className={`${className} w-full p-3 border text-gray-600 outline-none rounded`}
    />
  );
};
