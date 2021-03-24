export default function Input({ name, value, onChange }) {
  return (
    <input
      type="number"
      name={name}
      id={name}
      value={value}
      onChange={onChange}
    />
  );
}
