import Input from "./Input";

export default function TemperatureInput({
  units,
  unitName,
  temperature,
  onChange,
}) {
  return (
    <div>
      <label for={unitName}>º{units}</label>
      <Input name={unitName} value={temperature} onChange={onChange} />
    </div>
  );
}
