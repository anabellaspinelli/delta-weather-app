import React from 'react';

interface TextInputProps {
  labelText: string;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const TextInput: React.FC<TextInputProps> = ({
  labelText,
  placeholder,
  onChange,
  value,
}: TextInputProps) => {
  const inputId = `input-${labelText}`;
  return (
    <div className="flex flex-col w-full">
      <label className="font-semibold pl-2" htmlFor={inputId}>
        {labelText}
      </label>
      <input
        autoComplete="off"
        className="border-2 border-gray-200 px-4 py-2 rounded-md w-full"
        id={inputId}
        name={labelText}
        onChange={onChange}
        placeholder={placeholder ? placeholder : ''}
        type="text"
        value={value}
      />
    </div>
  );
};

export default TextInput;
