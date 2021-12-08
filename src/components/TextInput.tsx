import React from 'react';

interface TextInputProps {
  labelText: string;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<TextInputProps> = ({
  labelText,
  placeholder,
  onChange,
}: TextInputProps) => {
  const inputId = `input-${labelText}`;
  return (
    <div className="flex flex-col w-full">
      <label className="font-semibold pl-2" htmlFor={inputId}>
        {labelText}
      </label>
      <input
        className="border-2 border-gray-100 px-4 py-2 rounded-md w-full"
        id={inputId}
        name={labelText}
        onChange={onChange}
        placeholder={placeholder ? placeholder : ''}
        type="text"
      />
    </div>
  );
};

export default TextInput;
